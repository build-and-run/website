# build-and-run.fr

Site vitrine du groupement [Build and Run](https://www.build-and-run.fr), construit avec [Astro](https://astro.build) et publié sur GitHub Pages.

## Développement

Les versions des outils (Node) sont fixées dans `mise.toml`, utilisé aussi par la CI.

```sh
mise install     # installe la version de Node épinglée
npm install
npm run dev      # http://localhost:4321
npm run build    # génère ./dist
npm run preview
```

## Contenu

| Quoi | Où |
| --- | --- |
| Services, portfolio, équipe, liens | `src/consts.ts` |
| Photos de l'équipe | `src/assets/team/` |

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml`, qui build et publie sur GitHub Pages. L'URL de base (`*.github.io/website` ou domaine personnalisé) est détectée automatiquement par `actions/configure-pages`.
