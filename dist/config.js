// Dados públicos do site. O telefone deve conter país + DDD + número, apenas dígitos.
window.SITE_CONFIG = Object.freeze({
  name: 'Edna Kuhn Podologia',
  whatsapp: '5542988082900',
  defaultMessage: 'Olá, Edna! Vim pelo site e gostaria de agendar uma consulta de podologia. Quais são os horários disponíveis?',
  instagram: 'https://instagram.com/ednakuhn.podologia',
  googleMaps: 'https://www.google.com/maps/search/?api=1&query=Edna+Kuhn+Podologia+Avenida+Ana+Rita+778+Ponta+Grossa',
  // Endereço confirmado pelo usuário.
  address: 'Avenida Ana Rita, 778 · Ponta Grossa, PR',
  // Preencher apenas com avaliações reais verificadas e o link da avaliação original.
  // Não há sincronização automática com o Google nesta versão estática.
  // Exemplo de estrutura: { name, text, rating: 5, sourceUrl: 'https://www.google.com/maps/...' }
  reviews: [],
});
