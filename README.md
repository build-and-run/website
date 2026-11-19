# build-and-run.fr

Site vitrine du groupement [Build and Run](https://www.build-and-run.fr), construit avec [Astro](https://astro.build) et publié sur GitHub Pages.

## Développement

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # génère ./dist
npm run preview
```

## Contenu

| Quoi | Où |
| --- | --- |
| Services, portfolio, équipe, liens | `src/consts.ts` |
| Articles du blog (Markdown) | `src/content/blog/*.md` |
| Photos de l'équipe | `src/assets/team/` |

Ajouter un article : créer `src/content/blog/mon-slug.md` (frontmatter : `title`, `description`, `date`, `author`, `tags`). Il sera publié sur `/mon-slug/`, comme les URLs de l'ancien WordPress.

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml`, qui build et publie sur GitHub Pages. L'URL de base (`*.github.io/website` ou domaine personnalisé) est détectée automatiquement par `actions/configure-pages`.
