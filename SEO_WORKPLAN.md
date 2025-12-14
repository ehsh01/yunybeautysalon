# SEO Workplan for YUNY Beauty Salon

This plan outlines the steps to optimize the website for search engines while maintaining the current bilingual (English/Spanish) support and GitHub Pages deployment workflow.

## Do Not Break
- **Build Output**: Must continue to generate output to the `/docs` folder.
- **Deployment Flow**: Must keep the current flow where the built `/docs` folder is committed to the repository for GitHub Pages.
- **Frontend Only**: No server-side rendering (SSR) changes that require a Node.js server in production.

## Checklist

### 1. Robots & Sitemap
- [ ] Ensure `robots.txt` allows indexing and points to the sitemap.
- [ ] Verify `sitemap.xml` lists all static routes (`/`, `/about`, `/services`, `/book`, etc.).
- [ ] Automation: Ensure the build process generates these files in `/docs`.

### 2. Titles & Meta Tags
- [ ] Review `client/src/components/seo.tsx` to ensure it correctly propagates titles and descriptions.
- [ ] Update default meta tags (Open Graph, Twitter Cards) in `client/index.html`.
- [ ] Ensure every page (`home`, `about`, `services`, `color`, `cutting`, `treatments`, `book`) has unique, descriptive titles and descriptions using the `<SEO />` component.
- [ ] Verify keyword targeting for "Beauty Salon Bristol TN", "Hair Color Bristol", etc.

### 3. Schema Markup (Structured Data)
- [ ] Add `LocalBusiness` or `BeautySalon` JSON-LD schema to the Home page.
- [ ] Add `BreadcrumbList` schema to inner pages.
- [ ] Add `Service` schema to Service detail pages.

### 4. Content Optimization
- [ ] Audit H1, H2, H3 hierarchy on all pages.
- [ ] Ensure key business info (NAP: Name, Address, Phone) is consistent in the footer and visible text.
- [ ] Check for thin content on main pages.

### 5. Image Optimization
- [ ] Ensure all `<img>` tags have descriptive `alt` attributes.
- [ ] Verify images are optimized for loading (already using Vite assets, but check file sizes if possible).
- [ ] Ensure Open Graph images are set correctly for social sharing.

### 6. Internationalization (i18n) & Hreflang
- [ ] Since this is a client-side localized app (SPA), full `hreflang` support is tricky without separate URLs per language.
- [ ] **Action**: Ensure the `lang` attribute on the `<html>` tag updates dynamically when the language toggle is switched (using `react-helmet` or direct DOM manipulation in the context).
- [ ] Investigate if we can use query parameters or hash routing for language state to make deep-linking possible (e.g., `/?lang=es`), which helps SEO if indexed, though separate URLs are ideal. *Constraint: Stay within SPA limits.*

### 7. Routing & Canonical URLs
- [ ] Ensure Canonical URLs are self-referencing and correct.
- [ ] Verify 404 page works correctly (GitHub Pages `404.html` trick).

