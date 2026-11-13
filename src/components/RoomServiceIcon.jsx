// A shared 24px grid and simple silhouettes keep the service icons clear on phones.
const drawings = {
  'kitchen-plan': <>
    <path d="M4 3h11v7M4 3v18h7M7 7h5M7 11h3" />
    <path d="m12 17 7-7 3 3-7 7-4 1 1-4Zm5-5 3 3" />
  </>,
  'kitchen-surfaces': <>
    <path d="M4 4h16v7M9 4v7m6-7v7M4 8h16" />
    <rect x="2.5" y="11" width="19" height="3" rx=".75" />
    <path d="M5 14v7h14v-7m-7 0v7m-3-4h.01M15 17h.01" />
  </>,
  'kitchen-fixtures': <>
    <path d="M13 15V7a4 4 0 0 1 8 0v2h-4M5 12v3m-2-3h4" />
    <path d="M3 15h18l-2 6H5l-2-6Z" />
  </>,
  'bathroom-vanity': <>
    <rect x="7" y="2.5" width="10" height="8" rx="2" />
    <path d="M12 14v-1h3M3 14h18M5 14v7h14v-7m-7 0v7M9 17h.01M15 17h.01" />
  </>,
  'bathroom-shower': <>
    <path d="M5 21V6a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v1" />
    <path d="M10 10a4 4 0 0 1 8 0h-8Zm1 3v2m3-2v3m3-3v2M21 3v18H3" />
  </>,
  'bathroom-fixtures': <>
    <path d="M4 6h16M12 3v3M7 6v3m10-3v3" />
    <path d="M4 14v-2a3 3 0 0 1 6 0v2H4Zm10 0v-2a3 3 0 0 1 6 0v2h-6M7 17v2m10-2v2" />
  </>
};

const roomIcons = {
  kitchen: ['kitchen-plan', 'kitchen-surfaces', 'kitchen-fixtures'],
  bathroom: ['bathroom-vanity', 'bathroom-shower', 'bathroom-fixtures']
};

export function RoomServiceIcon({ kind, index }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">{drawings[roomIcons[kind][index]]}</svg>;
}
