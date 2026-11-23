import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { pages } from './pages';
import { PagePathContext } from './utils';
import './styles/main.css';
import './styles/architectural.css';
import './styles/why-choose.css';
import './styles/gallery-hero.css';
import './styles/mobile-menu.css';
import './styles/service-area-options.css';
import './styles/process-desktop.css';

const pageId = document.body.dataset.page || 'home';
const Page = pages[pageId] || pages.home;

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <PagePathContext.Provider value={window.location.pathname}>
      <Page />
    </PagePathContext.Provider>
  </React.StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
