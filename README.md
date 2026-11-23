# Edna Kuhn Podologia

Site institucional responsivo com apresentação, cuidados podológicos, localização, Instagram, acesso às avaliações no Google e agendamento pelo WhatsApp.

HTML, CSS e JavaScript. Não precisa instalar dependências ou executar uma compilação.

## Visualizar e editar

Com o Node.js instalado, execute na pasta do projeto:

```sh
node server.cjs
```

Abra http://127.0.0.1:4173 no navegador.

| Arquivo | O que editar |
| --- | --- |
| `dist/config.js` | Telefone, mensagens, Instagram, endereço, link do Google e depoimentos verificados |
| `dist/index.html` | Apresentação, serviços, perguntas frequentes e estrutura |
| `dist/styles.css` | Cores, fontes e layout |
| `dist/assets/` | Imagens e ícone do site |

## Publicar com GitHub e Cloudflare Pages

O repositório mantém os arquivos e o histórico de alterações. A Cloudflare Pages hospeda o site e pode publicar automaticamente cada alteração enviada à branch principal.

1. No painel da Cloudflare, abra **Workers & Pages > Create application > Pages > Connect to Git**.
2. Conecte sua conta GitHub e autorize acesso a este repositório. Você pode manter o repositório privado.
3. Selecione este repositório e use as configurações:

| Configuração | Valor |
| --- | --- |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | Deixe vazio |
| Build output directory | `dist` |
| Root directory | Deixe no padrão: raiz do repositório |

4. Clique em **Save and Deploy**. O painel mostrará o endereço público terminado em `.pages.dev`.

Se você já criou um projeto por upload de ZIP (Direct Upload), crie um novo projeto com integração Git: o método de integração não pode ser trocado no projeto existente. Não exclua o projeto anterior antes de conferir o novo endereço. Para manter o mesmo nome, verifique primeiro as opções disponíveis no painel; a disponibilidade do nome depende dos projetos existentes.

## Fazer alterações depois

Você pode editar pelo GitHub ou pelo editor local. Pelo GitHub, abra o arquivo, clique no lápis, altere e use **Commit changes**. Depois de salvar na branch de produção, acompanhe a publicação no painel da Cloudflare. A integração precisa estar configurada para a atualização automática funcionar.

Para editar no computador, clone o repositório, altere os arquivos, faça um commit e envie com `git push`. No Codex, abra a pasta clonada do projeto para continuar o desenvolvimento a partir da versão atual.

## Verificar o JavaScript

```sh
node --check dist/app.js
node --check dist/config.js
node --check server.cjs
```

## Conteúdo

- WhatsApp: `5542988082900`. O visitante confirma o envio da mensagem no aplicativo do WhatsApp.
- Endereço: Avenida Ana Rita, 778, Ponta Grossa, PR.
- A fotografia principal é ilustrativa e gerada por IA. Não representa a profissional nem seu consultório. O prompt está em `IMAGEM.txt`.
- A seção Google abre uma busca pelo estabelecimento no Maps. Ainda falta confirmar o link direto do perfil e selecionar depoimentos reais antes de exibi-los.
- A versão estática não sincroniza avaliações automaticamente. A inclusão de uma integração com o Google deve ser planejada separadamente; mantenha chaves privadas fora dos arquivos públicos.

## Referências de publicação

- [Cloudflare Pages: integração com GitHub](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/)
- [Cloudflare Pages: integração Git](https://developers.cloudflare.com/pages/get-started/git-integration/)
- [Cloudflare Pages: Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)
