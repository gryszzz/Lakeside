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
    const getRevealNodes = (root) => {
      if (!(root instanceof Element) && root !== document.body) return [];

      const nodes = [];
      if (root instanceof Element && root.matches('[data-reveal]')) {
        nodes.push(root);
      }

      return [...nodes, ...Array.from(root.querySelectorAll?.('[data-reveal]') || [])];
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const showNodes = (root) => {
        getRevealNodes(root).forEach((node) => node.classList.add('is-visible'));
      };

      showNodes(document.body);

      const reducedMotionObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => showNodes(node));
        });
      });

      reducedMotionObserver.observe(document.body, { childList: true, subtree: true });
      return () => reducedMotionObserver.disconnect();
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

    const observedNodes = new WeakSet();

    const observeNode = (node) => {
      if (!(node instanceof Element) || observedNodes.has(node) || node.classList.contains('is-visible')) {
        return;
      }

      observedNodes.add(node);
      observer.observe(node);
    };

    getRevealNodes(document.body).forEach((node) => observeNode(node));

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          getRevealNodes(node).forEach((revealNode) => observeNode(revealNode));
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
}
