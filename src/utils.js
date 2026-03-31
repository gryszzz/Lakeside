import { useEffect } from 'react';

export function withBase(path = '') {
  if (!path) return import.meta.env.BASE_URL;
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }

  const cleanPath = path.replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}

function stripBase(pathname) {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

  if (base && base !== '/' && pathname.startsWith(base)) {
    const stripped = pathname.slice(base.length);
    return stripped.startsWith('/') ? stripped : `/${stripped}`;
  }

  return pathname;
}

export function isActivePath(target) {
  const pathname = stripBase(window.location.pathname);
  const normalizedTarget = `/${target}`.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  return normalizedTarget === normalizedPath;
}

export function useRevealAnimations() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!nodes.length) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}
