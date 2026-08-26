# site-leonardo

Landing page pessoal (Nuxt 4 + Tailwind CSS) hospedada no GitHub Pages.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build estático (o mesmo que o CI roda)

```bash
npm run generate
npm run preview
```

## Deploy

O deploy é automático via GitHub Actions (`.github/workflows/deploy.yml`):
todo push na branch `main` gera o site estático (`nuxt generate`) e publica
no GitHub Pages.

Antes do primeiro push, habilite o Pages no repositório:

`Settings → Pages → Build and deployment → Source: GitHub Actions`
