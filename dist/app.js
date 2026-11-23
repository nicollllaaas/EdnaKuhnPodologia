'use strict';
(() => {
  const config = window.SITE_CONFIG;
  const validExternalUrl = (value, domains) => {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && domains.some(domain => url.hostname === domain || url.hostname.endsWith('.' + domain));
    } catch { return false; }
  };

  if (config && /^55\d{10,11}$/.test(config.whatsapp)) {
    document.querySelectorAll('[data-whatsapp]').forEach(link => {
      const message = link.dataset.message || (link.dataset.service
        ? `Olá, Edna! Vim pelo site e gostaria de saber mais sobre ${link.dataset.service}. Podemos agendar uma avaliação?`
        : config.defaultMessage);
      link.href = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;
    });
  }
  if (config && validExternalUrl(config.googleMaps, ['google.com', 'maps.app.goo.gl', 'goo.gl'])) {
    document.querySelectorAll('[data-google]').forEach(link => { link.href = config.googleMaps; });
  }
  if (config && validExternalUrl(config.instagram, ['instagram.com'])) {
    document.querySelectorAll('[data-instagram]').forEach(link => { link.href = config.instagram; });
  }
  if (config?.address) document.getElementById('address').textContent = config.address;
  document.getElementById('year').textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('navigation');
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  const reviewList = document.getElementById('reviews-list');
  const verifiedReviews = (Array.isArray(config?.reviews) ? config.reviews : []).filter(review =>
    typeof review.name === 'string' && typeof review.text === 'string' &&
    Number.isInteger(review.rating) && review.rating >= 1 && review.rating <= 5 &&
    validExternalUrl(review.sourceUrl, ['google.com', 'maps.app.goo.gl', 'goo.gl'])
  );
  verifiedReviews.forEach(review => {
    const card = document.createElement('article');
    card.className = 'review-card';
    const stars = document.createElement('span');
    stars.className = 'review-stars';
    stars.textContent = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    stars.setAttribute('aria-label', `${review.rating} de 5 estrelas`);
    const quote = document.createElement('p');
    quote.textContent = review.text;
    const author = document.createElement('cite');
    author.textContent = review.name;
    const source = document.createElement('a');
    source.textContent = 'Ver avaliação no Google';
    source.href = review.sourceUrl;
    source.target = '_blank';
    source.rel = 'noopener noreferrer';
    card.append(stars, quote, author, source);
    reviewList.append(card);
  });
  reviewList.hidden = verifiedReviews.length === 0;
})();
