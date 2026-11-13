// Room-specific drawings for the remodeling service cards.
const drawings = {
  'kitchen-plan': <><path d="M5 5h22v22H5V5Zm0 7h15V5M5 20h7v7M20 12v8h7"/><path d="M8 8h5m-5 7h5m2 9v-7h6v7"/><circle cx="23.5" cy="8.5" r="1.5"/><path d="m19 27 8-8m-7 1 3 3"/></>,
  'kitchen-surfaces': <><path d="M4 7h24v8H4V7Zm0 4h24M10 7v4m12 0v4M4 18h24v3H4v-3Zm2 3v7m20-7v7M16 21v7M6 28h20"/><path d="M12 24h1m6 0h1"/></>,
  'kitchen-fixtures': <><path d="M5 23h22v5H5v-5Zm12 0v-8a4 4 0 0 1 8 0v2h-4M8 3v4m-5 5 2-5h6l2 5H3Zm2 3h6m-3 5v3"/></>,
  'bathroom-vanity': <><rect x="9" y="3" width="14" height="11" rx="2"/><path d="M4 19h24v3H4v-3Zm4 3v7m16-7v7M8 29h16m-8-7v7m-4-4h1m6 0h1M13 19v-2a3 3 0 0 1 6 0m-9-7 4-4"/></>,
  'bathroom-shower': <><path d="M5 28V5h22v23H5Zm15-23v23M8 28v-9m0-10h5a3 3 0 0 1 3 3v1m-4 3 2-3h4l2 3h-8m2 4v1m4-1v1m-2 3v1M23 16v4M5 28h22"/></>,
  'bathroom-fixtures': <><path d="M7 5h18M10 3v4m6-4v4m6-4v4M8 7h4v2H8V7Zm6 0h4v2h-4V7Zm6 0h4v2h-4V7"/><rect x="8" y="10" width="16" height="11" rx="2"/><path d="M5 25h22v4H5v-4Zm8 0v-1a3 3 0 0 1 6 0m-8-7 4-4"/></>
};

const roomIcons = {
  kitchen: ['kitchen-plan', 'kitchen-surfaces', 'kitchen-fixtures'],
  bathroom: ['bathroom-vanity', 'bathroom-shower', 'bathroom-fixtures']
};

export function RoomServiceIcon({ kind, index }) {
  return <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">{drawings[roomIcons[kind][index]]}</svg>;
}
