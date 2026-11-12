import React from 'react';
import ReactDOM from 'react-dom/client';
import { pages } from './pages';
import './styles/main.css';
import './styles/architectural.css';
import './styles/why-choose.css';
import './styles/gallery-hero.css';
import './styles/mobile-menu.css';

const pageId = document.body.dataset.page || 'home';
const Page = pages[pageId] || pages.home;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
