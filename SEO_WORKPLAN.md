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
- [x] Add `LocalBusiness` or `BeautySalon` JSON-LD schema to the Home page.
    - Fields: `@type: HairSalon`, `name`, `url`, `telephone`, `address`, `geo`, `openingHours`, `sameAs`, `priceRange`.
    - Implementation: Injected via `<Helmet>` in `client/src/pages/home.tsx`.
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
- [ ] **Hash Routing Note**: We are using hash routing (`/#/about`) which is generally not indexed as separate pages by search engines. To mitigate this, we treat the application as a single-page experience for SEO purposes:
    - The `sitemap.xml` only lists the root URL (`/`).
    - The Homepage content is enriched to include summaries of all key sections (About, Services, Location) so the main crawler entry point contains all relevant keywords and business information.

### 8. Tracking & Verification

#### Google Search Console (DNS Verification)
Since the domain uses Cloudflare, DNS verification is the most reliable method and avoids adding clutter to the codebase.
1.  Go to [Google Search Console](https://search.google.com/search-console).
2.  Select **"Domain"** property type (not "URL prefix").
3.  Enter the domain: `yunybeautysalon.com`.
4.  Copy the TXT record provided (e.g., `google-site-verification=...`).
5.  Log in to the Cloudflare Dashboard.
6.  Go to **DNS** > **Records**.
7.  Add a new record:
    -   **Type**: TXT
    -   **Name**: `@` (or `yunybeautysalon.com`)
    -   **Content**: Paste the Google verification string.
    -   **TTL**: Auto
8.  Wait a few minutes and click **Verify** in Search Console.

#### Google Analytics 4 (GA4)
To enable tracking:
1.  Create a property in [Google Analytics](https://analytics.google.com/).
2.  Get the **Measurement ID** (starts with `G-`).
3.  Open `client/index.html`.
4.  Uncomment the GA4 script block in the `<head>`.
5.  Replace `G-XXXXXXXXXX` with the actual Measurement ID in both places.
6.  Commit and deploy.

#### Cloudflare Web Analytics (Optional Alternative)
If you prefer privacy-first analytics without cookie banners:
1.  Go to Cloudflare Dashboard > **Web Analytics**.
2.  Add the site.
3.  Copy the JS snippet.
4.  Paste it into `client/index.html` (before `</body>`).
5.  Deploy.

