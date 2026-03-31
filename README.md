# Lakeside Design + Build Website

Premium multi-page contractor website built with Vite + React and designed to deploy cleanly to GitHub Pages.

## Project Structure

```text
.
|-- .github/workflows/deploy.yml
|-- public/
|   |-- .nojekyll
|   |-- CNAME.example
|   |-- robots.txt
|   |-- sitemap.xml
|   `-- images/
|       |-- branding/
|       `-- projects/
|-- src/
|   |-- components/
|   |   |-- Forms.jsx
|   |   |-- Layout.jsx
|   |   |-- Marketing.jsx
|   |   `-- Projects.jsx
|   |-- content/site.js
|   |-- main.jsx
|   |-- pages.jsx
|   |-- styles/main.css
|   `-- utils.js
|-- about/index.html
|-- contact/index.html
|-- projects/index.html
|-- quote/index.html
|-- services/index.html
|-- index.html
|-- package.json
`-- vite.config.js
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start local development:

```bash
npm run dev
```

3. Build production files:

```bash
npm run build
```

The final static site will be generated in `dist/`.

## Where To Replace Business Details

Edit [`src/content/site.js`](/Users/anthonygryszkin/Desktop/Lakeside/src/content/site.js).

This file contains:

- business name
- phone, email, address, hours
- service area cities
- testimonial copy
- project descriptions
- before/after content
- placeholder Formspree endpoints

## Where To Replace Photos

Replace the SVG placeholders in:

- [`public/images/projects`](/Users/anthonygryszkin/Desktop/Lakeside/public/images/projects)
- [`public/images/branding`](/Users/anthonygryszkin/Desktop/Lakeside/public/images/branding)

When swapping files, keep the same filenames if you want the site to update without changing code. If you prefer new filenames, update the matching image path in [`src/content/site.js`](/Users/anthonygryszkin/Desktop/Lakeside/src/content/site.js).

## Quote Form / Contact Form Wiring

The forms are static-host friendly and currently point to placeholder Formspree-style URLs.

You can wire them in either of these ways:

1. Edit the endpoints directly in [`src/content/site.js`](/Users/anthonygryszkin/Desktop/Lakeside/src/content/site.js)
2. Set environment variables:

```bash
VITE_QUOTE_FORM_ENDPOINT=https://formspree.io/f/your-real-id
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your-real-id
```

If the placeholder endpoint is still present, the form shows a clear error message instead of silently failing.

## GitHub Pages Deployment

This repo includes a GitHub Actions workflow in [`deploy.yml`](/Users/anthonygryszkin/Desktop/Lakeside/.github/workflows/deploy.yml).

### Recommended setup

1. Push the repo to GitHub.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` and the workflow will build and deploy the site.

### Base path behavior

The Vite config automatically handles GitHub Pages project URLs like:

```text
https://username.github.io/repository-name/
```

If you use a custom domain, set a repository variable so the build uses `/` instead of the repo name:

- `CUSTOM_DOMAIN=true`

You can also override manually with:

- `SITE_BASE=/`

## Custom Domain Setup

1. Copy [`public/CNAME.example`](/Users/anthonygryszkin/Desktop/Lakeside/public/CNAME.example) to `public/CNAME`
2. Replace the contents with your real domain, for example:

```text
www.yourcontractorbrand.com
```

3. In GitHub Pages settings, add the same custom domain.
4. Point your DNS records to GitHub Pages.
5. Set the repository variable `CUSTOM_DOMAIN=true` so asset URLs build with the root base path.

The site already includes [`public/.nojekyll`](/Users/anthonygryszkin/Desktop/Lakeside/public/.nojekyll), so GitHub Pages will serve the built static files without Jekyll processing.

## SEO Notes

Each page has its own HTML file with page-specific title and description:

- [`index.html`](/Users/anthonygryszkin/Desktop/Lakeside/index.html)
- [`services/index.html`](/Users/anthonygryszkin/Desktop/Lakeside/services/index.html)
- [`projects/index.html`](/Users/anthonygryszkin/Desktop/Lakeside/projects/index.html)
- [`about/index.html`](/Users/anthonygryszkin/Desktop/Lakeside/about/index.html)
- [`quote/index.html`](/Users/anthonygryszkin/Desktop/Lakeside/quote/index.html)
- [`contact/index.html`](/Users/anthonygryszkin/Desktop/Lakeside/contact/index.html)

Replace the placeholder titles, descriptions, and any domain references in:

- those HTML files
- [`public/robots.txt`](/Users/anthonygryszkin/Desktop/Lakeside/public/robots.txt)
- [`public/sitemap.xml`](/Users/anthonygryszkin/Desktop/Lakeside/public/sitemap.xml)

## Notes For Editing Later

- The page layouts live in [`src/pages.jsx`](/Users/anthonygryszkin/Desktop/Lakeside/src/pages.jsx)
- Shared sections and UI live in [`src/components`](/Users/anthonygryszkin/Desktop/Lakeside/src/components)
- The full visual system lives in [`src/styles/main.css`](/Users/anthonygryszkin/Desktop/Lakeside/src/styles/main.css)
- The mobile sticky CTA is included globally
- The before/after comparison component is reusable and image-driven
- The gallery modal and category filtering are already wired

## Production Checklist

Before launch, replace:

- business contact info
- testimonials
- service area cities
- project descriptions
- all placeholder images
- Formspree endpoints
- meta descriptions and Open Graph copy
- `robots.txt` and `sitemap.xml` domain references
- optional `CNAME` file for a custom domain
