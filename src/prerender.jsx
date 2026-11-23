import { renderToString } from 'react-dom/server';
import { pages } from './pages';
import { PagePathContext, withBase } from './utils';

export function renderPage(pageId, route) {
  const Page = pages[pageId];
  return renderToString(
    <PagePathContext.Provider value={withBase(route)}>
      <Page />
    </PagePathContext.Provider>
  );
}
