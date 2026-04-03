import { useEffect, useState } from 'react';
import { business, trustBadges } from '../content/site';
import { isActivePath, useRevealAnimations, withBase } from '../utils';

const navItems = [
  { label: 'Home', href: '' },
  { label: 'Services', href: 'services/' },
  { label: 'Portfolio', href: 'projects/' },
  { label: 'About', href: 'about/' },
  { label: 'Estimate', href: 'quote/' }
];

function Logo() {
  return (
    <a className="brand" href={withBase('')} aria-label={`${business.name} home page`}>
      <img className="brand__mark" src={withBase('images/branding/logo-mark.svg')} alt="" />
      <span>
        <strong>{business.name}</strong>
        <small>{business.tagline}</small>
      </span>
    </a>
  );
}

export function SectionIntro({ eyebrow, title, body, align = 'left' }) {
  return (
    <div className={`section-intro section-intro--${align}`} data-reveal>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {body ? <p className="section-intro__body">{body}</p> : null}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            <a className="site-header__phone" href={business.phoneHref}>
              {business.phone}
            </a>
            <a className="button" href={withBase('quote/')}>
              Request Estimate
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="menu-toggle__label">{open ? 'Close' : 'Menu'}</span>
              <span className="menu-toggle__icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>
      <div id="mobile-menu" className={`mobile-nav ${open ? 'is-open' : ''}`}>
        <div className="mobile-nav__panel">
          <div className="mobile-nav__header">
            <Logo />
            <button type="button" className="mobile-nav__close" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.href || 'mobile-home'} href={withBase(item.href)} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mobile-nav__cta">
            <a className="button" href={withBase('quote/')} onClick={() => setOpen(false)}>
              Request Estimate
            </a>
          </div>
          <div className="mobile-nav__meta">
            <a className="text-link mobile-nav__call" href={business.phoneHref}>
              Call {business.phone}
            </a>
            <p>{business.serviceAreaLabel}</p>
            <div className="social-links social-links--mobile">
              {business.socialLinks.map((link) => (
                <a key={link.label} href={withBase(link.href)} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
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
          <p>{business.footerNote}</p>
          <ul className="footer-list footer-list--inline">
            {trustBadges.slice(0, 3).map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul className="footer-list">
            {navItems.map((item) => (
              <li key={item.href || 'footer-home'}>
                <a href={withBase(item.href)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul className="footer-list">
            <li>Bathroom Remodeling</li>
            <li>Kitchen Remodeling</li>
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
            <li>{business.hours}</li>
          </ul>
          <div className="footer-social">
            <p className="eyebrow">Social</p>
            <div className="social-links">
              {business.socialLinks.map((link) => (
                <a key={link.label} href={withBase(link.href)}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>Premium kitchen and bathroom remodeling with clean communication and finish-driven execution.</p>
        <p>{business.legalName}</p>
      </div>
    </footer>
  );
}

export function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta">
      <a className="mobile-sticky-cta__link" href={business.phoneHref}>
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
      <div className="container page-hero__grid">
        <div data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__body">{body}</p>
          {actions ? <div className="hero-actions">{actions}</div> : null}
        </div>
        <div className="page-hero__aside" data-reveal>
          {aside}
        </div>
      </div>
    </section>
  );
}

export function FinalCta({
  title = 'Start the conversation with a team that treats kitchen and bathroom work seriously.',
  body = 'Tell us about the room you want to improve and we will help you understand fit, scope, and next steps.',
  primaryLabel = 'Request Estimate',
  primaryHref = 'quote/',
  secondaryLabel,
  secondaryHref
}) {
  return (
    <section className="final-cta">
      <div className="container final-cta__card" data-reveal>
        <div>
          <p className="eyebrow">Ready When You Are</p>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="hero-actions">
          <a className="button" href={withBase(primaryHref)}>
            {primaryLabel}
          </a>
          {secondaryLabel && secondaryHref ? (
            <a className="button button--ghost" href={withBase(secondaryHref)}>
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ items, intro = 'Answers to the questions homeowners ask before moving forward.' }) {
  return (
    <section className="section">
      <div className="container">
        <SectionIntro eyebrow="FAQ" title="Helpful answers before you commit" body={intro} />
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
  useRevealAnimations();

  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      {showFinalCta ? <FinalCta {...finalCtaProps} /> : null}
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
