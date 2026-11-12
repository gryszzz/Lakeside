import React from 'react';
import ReactDOM from 'react-dom/client';
import { pages } from './pages';
import './styles/main.css';
import './styles/architectural.css';
import './styles/background-variants.css';

const BACKGROUND_VARIANTS = ['plain', 'gradient', 'texture', 'wave'];

function applyBackgroundVariant() {
  const requested = new URLSearchParams(window.location.search).get('bg');
  const variant = BACKGROUND_VARIANTS.includes((requested || '').toLowerCase())
    ? requested.toLowerCase()
    : 'plain';
  document.documentElement.dataset.bg = variant;
}

applyBackgroundVariant();

const pageId = document.body.dataset.page || 'home';
const Page = pages[pageId] || pages.home;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
