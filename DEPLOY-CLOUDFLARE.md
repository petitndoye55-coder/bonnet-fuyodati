# Déployer FuyoDati sur Cloudflare Workers

Cette archive contient le code source du site, avec les fichiers du projet directement à sa racine.

## Commandes

```bash
pnpm install
pnpm run build
pnpm exec wrangler deploy --config dist/server/wrangler.json
```

Le build produit :

- `dist/server/index.js` : Worker Cloudflare ;
- `dist/client/` : images, styles et scripts publics ;
- `dist/server/wrangler.json` : configuration de déploiement générée.

Utiliser Node.js 22 ou une version plus récente.
