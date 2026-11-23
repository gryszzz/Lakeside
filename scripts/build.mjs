import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const pages = [
  ['home', ''],
  ['kitchen', 'kitchen-remodeling/'],
  ['bathroom', 'bathroom-remodeling/']
];
const emptyRoot = '<div id="root"></div>';

await build();
const renderDir = await mkdtemp(resolve('node_modules', '.lakeside-render-'));

try {
  await build({
    publicDir: false,
    build: {
      ssr: 'src/prerender.jsx',
      outDir: renderDir,
      rollupOptions: { input: 'src/prerender.jsx' }
    }
  });

  const { renderPage } = await import(pathToFileURL(join(renderDir, 'prerender.js')).href);
  for (const [pageId, route] of pages) {
    const file = join('dist', route, 'index.html');
    const html = await readFile(file, 'utf8');
    if (!html.includes(emptyRoot)) {
      throw new Error(`Could not find the app root in ${file}`);
    }
    await writeFile(file, html.replace(emptyRoot, () => `<div id="root">${renderPage(pageId, route)}</div>`));
  }
} finally {
  await rm(renderDir, { recursive: true, force: true });
}
