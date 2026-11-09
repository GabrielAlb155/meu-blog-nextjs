# Meu Blog - Next.js App Router

Este projeto foi desenvolvido para demonstrar a aplicação prática do **App Router** do Next.js. O foco da aplicação é a estruturação correta de rotas dinâmicas, data fetching no servidor e otimização de SEO.

## 🚀 Funcionalidades Implementadas

- **Rotas Dinâmicas:** Geração de páginas individuais para cada artigo através de `app/artigos/[slug]/page.tsx`.
- **Server Components:** Busca de dados (`data fetching`) realizada diretamente no servidor com funções assíncronas, eliminando a necessidade de `useEffect`.
- **SEO Dinâmico:** Geração de metadados únicos (título e descrição) por página utilizando a função `generateMetadata`.
- **Design Responsivo:** Interface adaptável a dispositivos móveis, tablets e desktops com CSS puro.

## 🛠️ Tecnologias Utilizadas

- Next.js 15 (App Router)
- React
- TypeScript
- Biblioteca `slugify`
- Vercel (Deploy)

## ⚙️ Como executar localmente

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Inicie o servidor de desenvolvimento:
\`\`\`bash
npm run dev
\`\`\`

4. Aceda a [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🔗 Links do Projeto

- **Aplicação em Produção (Vercel):** [COLE O SEU LINK DO VERCEL AQUI]
