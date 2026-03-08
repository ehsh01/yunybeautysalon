# Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## How to Deploy

1.  **Push to GitHub**:
    - Open the **Version Control** (Git) panel in the Replit sidebar.
    - Connect to your GitHub repository (`yunybeautysalon`).
    - Commit and push your changes to the `main` or `master` branch.

2.  **Enable GitHub Pages**:
    - Go to your repository settings on GitHub.
    - Navigate to **Pages** (in the left sidebar).
    - Under **Build and deployment**, select **GitHub Actions** as the source.
    - Push to `main` or `master` — the workflow will build and deploy automatically.

## Configuration

The deployment workflow is defined in `.github/workflows/deploy.yml`. It performs the following steps:
1.  Installs dependencies.
2.  Builds the static site (`npm run build`).
3.  Deploys the `docs` folder to GitHub Pages.

## Note on Custom Domains

If you are using a custom domain or a project page (e.g., `username.github.io/yunybeautysalon`), you might need to update the `base` path in `vite.config.ts` if assets fail to load.

For example, if your site is at `https://yourname.github.io/yunybeautysalon/`, modify `vite.config.ts`:

```typescript
export default defineConfig({
  base: "/yunybeautysalon/",
  // ... existing config
});
```
