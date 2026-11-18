# Keep Clin · Landing page

Landing page da Keep Clin em **Next.js (App Router) + TypeScript + styled-components**, responsiva para celular, tablet e desktop.

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # versão de produção
```

Requer Node.js 20 ou mais novo.

## Onde editar

- **Contatos e redes sociais:** `src/config/site.ts`
  - `whatsappNumber`: só dígitos, com país e DDD (ex.: `5585999998888`)
  - `links.linkedin` e `links.instagram`
  - `whatsappMessage`: mensagem que já vem escrita no WhatsApp
- **Cores e breakpoints:** `src/styles/theme.ts` (paleta #EC9453, #BA726C, #6F3E90)
- **Textos de cada seção:** `src/components/*.tsx` (Hero, Problem, Solution, Services, AppShowcase, Benefits, HowItWorks, Faq, FinalCta, Footer)
- **Imagens:** `public/img/`

## Estrutura

```
src/
  app/            layout (fonte Poppins local, SEO) e página
  components/     seções da página, botões sociais e botão flutuante do WhatsApp
  config/site.ts  contatos e links
  lib/registry.tsx  SSR do styled-components
  styles/         tema, tipos e estilos globais
public/img/       fotos e telas do aplicativo
```

## Publicar

Funciona direto na Vercel: importe o repositório no GitHub e clique em Deploy.
