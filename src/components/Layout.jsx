import { useEffect, useRef, useState } from 'react';
import { business } from '../content/site';
import { isActivePath, useRevealAnimations, withBase } from '../utils';

const navItems = [
  { label: 'Kitchens', href: 'kitchen-remodeling/' },
  { label: 'Bathrooms', href: 'bathroom-remodeling/' },
  { label: 'Our Process', href: 'process/' },

  { label: 'Service Area', href: 'service-area/' },
  { label: 'Reviews', href: 'reviews/' },
  { label: 'About', href: 'about/' },
  { label: 'Contact', href: 'contact/' }
];

function Logo() {
  return (
    <a className="brand" href={withBase('')} aria-label={`${business.name} home page`}>
      <img className="brand__logo" src={withBase('images/branding/lakeside-logo.png')} alt={business.name} width="1536" height="1024" />
    </a>
  );
}

function SiteBackground() {
  return (
    <div className="site-background" aria-hidden="true">
      <div className="site-background__ambient" />
      <div className="site-background__mesh site-background__mesh--minor" />
      <div className="site-background__mesh site-background__mesh--major" />
      <div className="site-background__mesh site-background__mesh--diag" />
      <div className="site-background__trace site-background__trace--one" />
      <div className="site-background__trace site-background__trace--two" />
      <div className="site-background__beam site-background__beam--top" />
      <div className="site-background__beam site-background__beam--bottom" />
      <div className="site-background__facet site-background__facet--left" />
      <div className="site-background__facet site-background__facet--right" />
      <div className="site-background__halo site-background__halo--kitchen" />
      <div className="site-background__shadow site-background__shadow--kitchen" />
      <div className="site-background__slab site-background__slab--kitchen" />

      <div className="site-background__plan site-background__plan--kitchen">
        <span className="site-background__plan-tag" />
        <span className="site-background__line site-background__counter site-background__counter--top" />
        <span className="site-background__line site-background__counter site-background__counter--left" />
        <span className="site-background__line site-background__counter site-background__counter--right" />
        <span className="site-background__line site-background__counter site-background__counter--island" />
        <span className="site-background__line site-background__fixture site-background__fixture--sink" />
        <span className="site-background__line site-background__fixture site-background__fixture--range" />
        <span className="site-background__line site-background__fixture site-background__fixture--fridge" />
        <span className="site-background__zone site-background__zone--prep" />
        <span className="site-background__dimension site-background__dimension--horizontal" />
        <span className="site-background__dimension site-background__dimension--kitchen-vertical" />
        <span className="site-background__callout site-background__callout--island" />
        <span className="site-background__callout site-background__callout--cabinet" />
        <span className="site-background__marker site-background__marker--kitchen-a" />
        <span className="site-background__marker site-background__marker--kitchen-b" />
      </div>

      <div className="site-background__halo site-background__halo--bath" />
      <div className="site-background__shadow site-background__shadow--bath" />
      <div className="site-background__slab site-background__slab--bath" />
      <div className="site-background__plan site-background__plan--bath">
        <span className="site-background__plan-tag" />
        <span className="site-background__line site-background__fixture site-background__fixture--shower" />
        <span className="site-background__line site-background__fixture site-background__fixture--vanity" />
        <span className="site-background__line site-background__fixture site-background__fixture--toilet" />
        <span className="site-background__line site-background__fixture site-background__fixture--tub" />
        <span className="site-background__line site-background__fixture site-background__fixture--niche" />
        <span className="site-background__zone site-background__zone--wet" />
        <span className="site-background__dimension site-background__dimension--vertical" />
        <span className="site-background__dimension site-background__dimension--bath-horizontal" />
        <span className="site-background__callout site-background__callout--shower" />
        <span className="site-background__callout site-background__callout--vanity" />
        <span className="site-background__marker site-background__marker--bath-a" />
        <span className="site-background__marker site-background__marker--bath-b" />
      </div>
    </div>
  );
}

export function SectionIntro({ eyebrow, title, body, align = 'left' }) {
  return (
    <div className={`section-intro section-intro--${align}`} data-reveal>
      {eyebrow ? (
        <div className="section-intro__top">
          <p className="eyebrow">{eyebrow}</p>
          <span className="section-intro__rail" aria-hidden="true" />
        </div>
      ) : null}
      <h2>{title}</h2>
      {body ? <p className="section-intro__body">{body}</p> : null}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuTriggerRef = useRef(null);
  const menuPanelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const panel = menuPanelRef.current;
    panel?.querySelector('button')?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
      if (event.key !== 'Tab' || !panel) return;
      const controls = Array.from(panel.querySelectorAll('a[href], button:not([disabled])'));
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    const desktop = window.matchMedia('(min-width: 901px)');
    const onDesktop = (event) => { if (event.matches) setOpen(false); };
    desktop.addEventListener('change', onDesktop);
    document.addEventListener('keydown', onKeyDown);
    return () => { desktop.removeEventListener('change', onDesktop); document.removeEventListener('keydown', onKeyDown); menuTriggerRef.current?.focus(); };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container site-header__inner">
          <Logo />
          <nav className="site-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.href || 'home'}
                href={withBase(item.href)}
                className={isActivePath(item.href) ? 'is-active' : ''}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="site-header__actions">
            <a className="button button--ghost button--header-tech button--header-tech--ghost site-header__phone" href={business.phoneHref}>
              <span className="header-call-icon" aria-hidden="true" />
              <span>Call now</span>
            </a>
            <a className="site-header__book" href={business.emailHref}>Book Online</a>

            <button
              className="menu-toggle"
              ref={menuTriggerRef}
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="menu-toggle__label">{open ? 'Close' : 'Menu'}</span>
              <span className="menu-toggle__icon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <div id="mobile-menu" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-hidden={!open} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }}>
        <div className="mobile-nav__panel" ref={menuPanelRef} role={open ? 'dialog' : undefined} aria-modal={open ? true : undefined} aria-label="Lakeside site menu">
          <div className="mobile-nav__header"><Logo /><button type="button" className="mobile-nav__close" aria-label="Close menu" onClick={() => setOpen(false)}><span className="mobile-nav__close-icon" aria-hidden="true" /></button></div>
          <nav aria-label="Mobile navigation">
            <ul className="mobile-nav__list">
              {[{label: 'Home', href: ''}, ...navItems, {label: 'Services', href: 'services/'}, {label: 'Project Photos', href: 'projects/'}, {label: 'FAQ', href: 'faq/'}].map((item) => (
                <li key={item.href || 'mobile-home'}>
                  <a href={withBase(item.href)} className={isActivePath(item.href) ? 'is-active' : ''} aria-current={isActivePath(item.href) ? 'page' : undefined} onClick={() => setOpen(false)}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-nav__cta"><a className="button mobile-nav__call" href={business.phoneHref} onClick={() => setOpen(false)}><span className="header-call-icon" aria-hidden="true" />Call now</a><a className="button button--ghost" href={withBase('quote/')} onClick={() => setOpen(false)}>Request Estimate</a></div>
          <div className="mobile-nav__meta"><p className="mobile-nav__owner">Ronald Augustine <span>Owner</span></p><a className="mobile-nav__email" href={business.emailHref} onClick={() => setOpen(false)}>{business.email}</a><p className="mobile-nav__meta-label">Service Area</p><p>{business.serviceAreaLabel}</p><p className="mobile-nav__license">{business.licenseNumber}</p></div>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <Logo />
          <p>Kitchen & Bathroom Remodeling Specialists</p><p>Over 40 Years of Experience</p><p>{business.license}</p><p>{business.licenseNumber}</p><p>{business.serviceAreaLabel}</p>

        </div>
        <div>
          <h3>Quick Links</h3>
          <ul className="footer-list">
            {[...navItems, {label: 'Services', href: 'services/'}, {label: 'Our Work', href: 'projects/'}, {label: 'FAQ', href: 'faq/'}].map((item) => (
              <li key={item.href || 'footer-home'}>
                <a href={withBase(item.href)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul className="footer-list">
            <li><a href={withBase('bathroom-remodeling/')}>Bathroom Remodeling</a></li>
            <li><a href={withBase('kitchen-remodeling/')}>Kitchen Remodeling</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul className="footer-list">
            <li>{business.address}</li>
            <li>
              <a href={business.phoneHref}>{business.phone}</a>
            </li>
            <li>
              <a href={business.emailHref}>{business.email}</a>
            </li>

          </ul>

        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>Kitchen & Bathroom Remodeling Specialists</p>
        <p>{business.legalName}</p>
      </div>
    </footer>
  );
}

export function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta">
      <a className="mobile-sticky-cta__link mobile-sticky-cta__link--ghost" href={business.phoneHref}>
        Call
      </a>
      <a className="mobile-sticky-cta__link mobile-sticky-cta__link--primary" href={withBase('quote/')}>
        Estimate
      </a>
    </div>
  );
}

export function PageHero({ eyebrow, title, body, actions, aside }) {
  return (
    <section className="page-hero">
      <div className={`container page-hero__grid ${aside ? '' : 'page-hero__grid--single'}`}>
        <div className="page-hero__content" data-reveal>
          <p className="eyebrow page-hero__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {body ? <p className="page-hero__body">{body}</p> : null}
          {actions ? <div className="hero-actions hero-actions--tech page-hero__actions">{actions}</div> : null}
        </div>
        {aside ? <div className="page-hero__aside" data-reveal>{aside}</div> : null}
      </div>
    </section>
  );
}

export function FinalCta({
  title = 'Ready to Transform Your Home?',
  body = "Let's discuss your project and create a renovation plan that works for your home and budget.",
  primaryLabel = 'Request Estimate',
  primaryHref = 'quote/',
  secondaryLabel,
  secondaryHref,
  buttonVariant = 'default'
}) {
  const primaryClassName =
    buttonVariant === 'tech' ? 'button button--hero-tech button--hero-tech--compact' : 'button';
  const secondaryClassName =
    buttonVariant === 'tech'
      ? 'button button--ghost button--hero-tech button--hero-tech--ghost button--hero-tech--compact'
      : 'button button--ghost';

  return (
    <section className="final-cta">
      <div className="container final-cta__card" data-reveal>
        <div>
          <p className="eyebrow">Ready When You Are</p>
          <h2>{title}</h2>
          <p>{body}</p>
          <div className="contact-band-links"><a href={business.phoneHref}>{business.phone}</a><a href={business.emailHref}>{business.email}</a></div>
        </div>
        <div className="hero-actions">
          <a className={primaryClassName} href={withBase(primaryHref)}>
            {primaryLabel}
          </a>
          {secondaryLabel && secondaryHref ? (
            <a className={secondaryClassName} href={withBase(secondaryHref)}>
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ items, intro = '' }) {
  return (
    <section className="section section--faq">
      <div className="container">
        <SectionIntro eyebrow="FAQ" title="FAQ" body={intro} />
        <div className="faq-list">
          {items.map((item) => (
            <details key={item.question} className="faq-item" data-reveal>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SiteShell({ children, showFinalCta = true, finalCtaProps }) {
  const shellRef = useRef(null);

  useRevealAnimations();

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    shell.style.setProperty('--pointer-x', '68%');
    shell.style.setProperty('--pointer-y', '16%');
    shell.style.setProperty('--ambient-shift-x', '0px');
    shell.style.setProperty('--ambient-shift-y', '0px');

    if (reduceMotion) return;

    let frame = 0;

    const updateAmbient = (clientX, clientY) => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const ratioX = clientX / window.innerWidth;
        const ratioY = clientY / window.innerHeight;
        shell.style.setProperty('--pointer-x', `${(ratioX * 100).toFixed(2)}%`);
        shell.style.setProperty('--pointer-y', `${(ratioY * 100).toFixed(2)}%`);
        shell.style.setProperty('--ambient-shift-x', `${((ratioX - 0.5) * 32).toFixed(2)}px`);
        shell.style.setProperty('--ambient-shift-y', `${((ratioY - 0.5) * 24).toFixed(2)}px`);
      });
    };

    const handlePointerMove = (event) => updateAmbient(event.clientX, event.clientY);
    const resetAmbient = () => {
      shell.style.setProperty('--pointer-x', '68%');
      shell.style.setProperty('--pointer-y', '16%');
      shell.style.setProperty('--ambient-shift-x', '0px');
      shell.style.setProperty('--ambient-shift-y', '0px');
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('blur', resetAmbient);
    document.addEventListener('mouseleave', resetAmbient);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('blur', resetAmbient);
      document.removeEventListener('mouseleave', resetAmbient);
    };
  }, []);

  return (
    <div className="site-shell" ref={shellRef}>
      <SiteBackground />
      <div className="site-shell__content">
        <Header />
        <main id="main-content">{children}</main>
        {showFinalCta ? <FinalCta {...finalCtaProps} /> : null}
        <Footer />
        <MobileStickyCTA />
      </div>
    </div>
  );
}
