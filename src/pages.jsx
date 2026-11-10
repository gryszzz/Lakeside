import { useState } from 'react';
import {
  business,
  homeConversionCards,
  homeHeroSlides,
  heroTrustItems,
  faqs, services,
  homeSpotlights
} from './content/site';
import { FAQSection, PageHero, SectionIntro, SiteShell } from './components/Layout';
import {
  ProcessSteps,
  ServiceAreaSection,
  ServiceCards,
  StatGrid,
  ValuesGrid,
  WhyChooseUs
} from './components/Marketing';
import { withBase } from './utils';

function SocialIcon({ label }) {
  if (label === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.25" />
        <circle cx="12" cy="12" r="4.05" />
        <circle cx="17.2" cy="6.8" r="1.1" className="hero-social-link__dot" />
      </svg>
    );
  }

  if (label === 'Facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.65 20V12.72H16.1L16.48 9.88H13.65V8.07C13.65 7.25 13.88 6.69 15.06 6.69H16.58V4.15C15.84 4.06 15.1 4.01 14.36 4C12.17 4 10.67 5.34 10.67 7.79V9.88H8.2V12.72H10.67V20H13.65Z" />
      </svg>
    );
  }

  return null;
}

function HomeHero() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const currentHeroSlide = homeHeroSlides[activeHeroSlide];

  const showNextHeroSlide = () => {
    setActiveHeroSlide((current) => (current + 1) % homeHeroSlides.length);
  };

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content" data-reveal>
          <p className="eyebrow">Kitchen & Bathroom Remodeling</p>
          <h1>Transforming Kitchens & Bathrooms With Over 40 Years of Experience</h1>
          <p className="hero__body">Beautiful renovations begin with quality craftsmanship, clear communication, and a contractor you can trust. At Lakeside Kitchen & Bath LLC, we specialize in kitchen and bathroom remodeling throughout Sussex, Morris, Passaic, and Warren Counties, delivering professional results designed to last.</p>
          <div className="hero-actions hero-actions--tech">
            <a className="button button--hero-tech" href={withBase('quote/')}>
              Schedule Your Consultation Today
            </a>
            <a className="button button--ghost button--hero-tech button--hero-tech--ghost" href={withBase('projects/')}>
              View Portfolio
            </a>
          </div>
          <div className="hero-social-links" data-reveal>
            {business.socialLinks.map((link) => (
              <a
                key={link.label}
                className="hero-social-link"
                href={withBase(link.href)}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${business.name} on ${link.label}`}
              >
                <span className="hero-social-link__icon">
                  <SocialIcon label={link.label} />
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
          <div className="hero-trust-grid">
            {heroTrustItems.map((item) => (
              item.href ? (
                <a
                  key={item.title}
                  className="hero-trust-card hero-trust-card--link"
                  href={withBase(item.href)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.ariaLabel || item.title}
                >
                  <div className="hero-trust-card__body">
                    <div className="hero-trust-card__line hero-trust-card__line--detail">
                      <span className="hero-trust-card__bullet" aria-hidden="true" />
                      <span className="hero-trust-card__eyebrow">{item.detail}</span>
                    </div>
                    <div className="hero-trust-card__line hero-trust-card__line--title">
                      <strong>{item.title}</strong>
                    </div>
                    <span className="hero-trust-card__action" aria-hidden="true" />
                  </div>
                </a>
              ) : (
                <article key={item.title} className="hero-trust-card">
                  <div className="hero-trust-card__body">
                    <div className="hero-trust-card__line hero-trust-card__line--detail">
                      <span className="hero-trust-card__bullet" aria-hidden="true" />
                      <span className="hero-trust-card__eyebrow">{item.detail}</span>
                    </div>
                    <div className="hero-trust-card__line hero-trust-card__line--title">
                      <strong>{item.title}</strong>
                    </div>
                  </div>
                </article>
              )
            ))}
          </div>
        </div>
        <div className="hero__visual" data-reveal>
          <button
            type="button"
            className="hero__image-card hero__image-card--main hero__image-card-button"
            onClick={showNextHeroSlide}
            aria-label={`Show next featured image. Currently showing ${currentHeroSlide.title}.`}
          >
            <img src={withBase(currentHeroSlide.image)} alt={currentHeroSlide.alt} />
            <div className="hero__image-progress" aria-hidden="true">
              {homeHeroSlides.map((item, index) => (
                <span key={item.title} className={index === activeHeroSlide ? 'is-active' : ''} />
              ))}
            </div>
          </button>
          <div className="hero__visual-grid">
            {homeSpotlights.map((item) => (
              <article key={item.title} className="hero__image-card hero__image-card--tile">
                <img src={withBase(item.image)} alt={item.alt} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeDecisionSection() {
  return (
    <section className="section section--home-overview">
      <div className="container">
        <div className="home-overview-grid">
          <div className="home-overview-copy" data-reveal>
            <p className="eyebrow">Specialist Focus</p>
            <h2>Kitchen and bathroom specialists.</h2>
            <p className="home-overview-copy__body">Full remodels with cleaner planning, steadier communication, and a more finished result.</p>
            <div className="home-specialty-grid">
              {homeConversionCards.map((card) => (
                <article key={card.title} className="home-specialty-card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="home-overview-panel">
            <div className="home-overview-note" data-reveal>
              <strong>{business.reviewsLabel}</strong>
              <p>Clear scopes, strong finish standards, and a simpler estimate path.</p>
            </div>
            <StatGrid />
            <div className="hero-actions home-overview-actions" data-reveal>
              <a className="button button--hero-tech button--hero-tech--compact" href={withBase('quote/')}>
                Request Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DirectEstimatePanel({
  eyebrow = 'Direct Contact',
  title = 'Direct estimate contact',
  body = 'A quick call or text is fastest. Email works well if you want to send photos.',
  emailCopy = 'Email your county or township, the room you want to remodel, and a few current photos if you have them.',
  inHero = false,
  showActions = true
}) {
  return (
    <div className={inHero ? 'estimate-panel estimate-panel--hero' : 'lead-form estimate-panel'} data-reveal={inHero ? undefined : true}>
      <div className="estimate-panel__intro">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="estimate-method-grid">
        <article className="estimate-contact-row estimate-contact-row--call">
          <p className="eyebrow">Call Or Text</p>
          <h3>
            <a href={business.phoneHref}>{business.phone}</a>
          </h3>
          <p>Best for quick questions, timing, and next steps by phone or text.</p>
          <a className="estimate-contact-row__action" href={business.phoneHref}>
            Call Or Text
          </a>
        </article>
        <article className="estimate-contact-row estimate-contact-row--email">
          <p className="eyebrow">Email</p>
          <h3>
            <a href={business.emailHref}>{business.email}</a>
          </h3>
          <p>{emailCopy}</p>
          <a className="estimate-contact-row__action estimate-contact-row__action--ghost" href={business.emailHref}>
            Send Email
          </a>
        </article>
      </div>
      {showActions ? (
        <div className="hero-actions estimate-panel__actions">
          <a className="button" href={business.phoneHref}>
            Call Or Text {business.phone}
          </a>
          <a className="button button--ghost" href={business.emailHref}>
            Email For Estimate
          </a>
        </div>
      ) : null}
    </div>
  );
}

export function HomePage() {
  return (
    <SiteShell
      finalCtaProps={{
        buttonVariant: 'tech'
      }}
    >
      <HomeHero />
      <HomeDecisionSection />
      <HomeServiceOverview />
      <ServiceCards compact intro="Full kitchen and bathroom renovations with cleaner scopes and a more polished result." />
      <WhyChooseUs />
      <ServiceAreaSection />
    </SiteShell>
  );
}

export function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Full kitchen and bathroom renovations"
        body="Kitchen and bathroom remodeling, design and material selection guidance, tile installation, cabinets, and countertops."
        actions={
          <>
            <a className="button" href={withBase('quote/')}>
              Request Estimate
            </a>
            <a className="button button--ghost" href={withBase('projects/')}>
              View Portfolio
            </a>
          </>
        }
        aside={<StatGrid />}
      />
      <ServiceCards detailed />
    </SiteShell>
  );
}

export function ProjectsPage() {
  return (
    <SiteShell
      finalCtaProps={{
        title: 'See a kitchen or bathroom style you want to explore?',
        body: 'Tell us which remodel direction you like and we can talk through whether it fits your home, priorities, and budget.',
        primaryLabel: 'Ask About a Similar Remodel'
      }}
    >
      <PageHero eyebrow="Portfolio" title="Kitchen & Bathroom Inspiration" body="Project photography is coming soon. The illustrations below show remodeling possibilities and are not photographs of completed Lakeside projects." aside={<StatGrid />} />
      <section className="section"><div className="container reason-grid">{homeHeroSlides.slice(0,2).map(item=><article className="story-card" key={item.title}><img src={withBase(item.image)} alt={`Illustration: ${item.alt}`} /><div><p className="eyebrow">Illustrative concept</p><h2>{item.title}</h2></div></article>)}</div></section>
    </SiteShell>
  );
}

export function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title="A Local Remodeling Company Built on Experience"
        body="At Lakeside Kitchen & Bath LLC, we believe every homeowner deserves a remodeling experience that is professional, organized, and stress-free."
        aside={
          <div className="about-metric-card">
            <p className="eyebrow">Our Approach</p>
            <h3>Steady planning. Clean execution.</h3>
            <p>Kitchen and bathroom remodels handled with clear scope, disciplined craftsmanship, and communication that stays consistent throughout the project.</p>
          </div>
        }
      />
      <section className="section"><div className="container story-grid"><div><h2>Over 40 years of hands-on experience</h2><p>With over 40 years of hands-on construction and remodeling experience, we've built our reputation on quality craftsmanship, honest communication, and respect for our clients' homes.</p><h3>Our approach is simple</h3><ul><li>Listen carefully</li><li>Plan thoroughly</li><li>Execute professionally</li><li>Deliver exceptional results</li></ul><p>Whether you're updating a bathroom, creating your dream kitchen, or completely transforming your living space, our goal is to provide a finished product you'll enjoy for years to come.</p></div><div className="story-card"><div><p className="eyebrow">Our Mission</p><h2>Craftsmanship. Communication. Service.</h2><p>To deliver high-quality kitchen and bathroom renovations through professional craftsmanship, clear communication, and exceptional service.</p></div></div></div></section>
      <ValuesGrid />
      <WhyChooseUs />
      <ServiceAreaSection />
    </SiteShell>
  );
}

export function QuotePage() {
  return (
    <SiteShell showFinalCta={false}>
      <PageHero
        eyebrow="Estimate"
        title="Schedule Your Consultation Today"
        body="Let’s discuss your project and create a renovation plan that works for your home and budget."
        aside={
          <DirectEstimatePanel
            inHero
            showActions={false}
            eyebrow="Call, Text, Or Email"
            title="Kitchen and bathroom estimates"
            body="Choose whichever is easier. A quick call or text is fastest."
            emailCopy="Email the room, your county or township, and photos if you have them."
          />
        }
      />
    </SiteShell>
  );
}


function HomeServiceOverview() {
  return <section className="section"><div className="container"><SectionIntro eyebrow="What We Do" title="Kitchen & Bathroom Remodeling Specialists" /><ul className="package-list">{['Kitchen Remodeling', 'Bathroom Remodeling', 'Design & Material Selection Guidance', 'Tile Installation', 'Cabinet Installation', 'Countertops', 'Flooring & Lighting Upgrades'].map(item => <li key={item}>{item}</li>)}</ul></div></section>;
}
function ConsultationLink() { return <a className="button" href={withBase('contact/')}>Schedule Your Consultation Today</a>; }
function RemodelingPage({ kitchen = false }) {
 const service = services.find(item => item.slug === (kitchen ? 'kitchen-remodeling' : 'bathroom-remodeling'));
 const items = kitchen ? ['Design','Material Selection Guidance','Cabinet Installation','Quartz Countertops','Granite Countertops','Tile Backsplashes','Flooring','Lighting','Plumbing Fixtures','Appliance Installation','Trim Work','Painting'] : ['Design','Material Selection Guidance','Custom Tile Showers','Waterproofing Systems','Vanities','Countertops','Flooring','Lighting','Plumbing Fixtures','Shower Doors','Trim Work','Painting'];
 return <SiteShell><PageHero eyebrow={service.title} title={kitchen ? 'Kitchen Remodeling in Northern New Jersey' : 'Bathroom Remodeling Experts'} body={kitchen ? 'The kitchen is the heart of the home. Whether you’re planning a complete renovation or updating key features, Lakeside Kitchen & Bath LLC delivers kitchens that combine functionality, beauty, and long-term value.' : 'Your bathroom should be comfortable, functional, and built to withstand daily use. We specialize in complete bathroom renovations that improve appearance, functionality, and value.'} actions={<ConsultationLink />} aside={<StatGrid />} /><section className="section"><div className="container"><SectionIntro eyebrow="Services" title={`${service.title} Services`} /><ul className="package-list">{items.map(item=><li key={item}>{item}</li>)}</ul>{!kitchen && <><h2>Built for Long-Term Performance</h2><p>Every bathroom renovation is completed using professional installation practices designed to provide years of dependable performance.</p></>}</div></section><WhyChooseUs /></SiteShell>;
}
function KitchenPage() { return <RemodelingPage kitchen />; }
function BathroomPage() { return <RemodelingPage />; }
function ProcessPage() { return <SiteShell><PageHero eyebrow="Our Process" title="Our Remodeling Process" body="From your first consultation to warranty support, we keep your renovation organized and clearly communicated." actions={<ConsultationLink />} aside={<StatGrid />} /><ProcessSteps /></SiteShell>; }
const counties = {
 'Sussex County': ['Sparta','Newton','Vernon','Hamburg','Franklin','Lafayette','Andover','Byram','Stanhope','Hopatcong'],
 'Morris County': ['Denville','Parsippany','Rockaway','Roxbury','Randolph','Boonton','Mountain Lakes','Morristown'],
 'Passaic County': ['Wayne','West Milford','Ringwood','Pompton Lakes','Totowa','Little Falls'],
 'Warren County': ['Hackettstown','Washington','Blairstown','Hope','Oxford','Belvidere','Allamuchy']
};
function ServiceAreaPage() { return <SiteShell><PageHero eyebrow="Service Area" title="Proudly Serving Northern New Jersey" body={business.serviceAreaLabel} actions={<ConsultationLink />} aside={<StatGrid />} /><section className="section"><div className="container reason-grid">{Object.entries(counties).map(([county,towns])=><article className="reason-card" key={county}><h2>{county}</h2><ul>{towns.map(town=><li key={town}>{town}</li>)}</ul></article>)}</div></section></SiteShell>; }
function FaqPage() { return <SiteShell><PageHero eyebrow="FAQ" title="Your Remodeling Questions, Answered" body="Planning, materials, licensing, and warranty support." actions={<ConsultationLink />} aside={<StatGrid />} /><FAQSection items={faqs} /></SiteShell>; }
function ContactPage() { return <SiteShell showFinalCta={false}><PageHero eyebrow="Contact" title="Let’s Discuss Your Project" body="Whether you’re planning a kitchen renovation, bathroom remodel, or tile installation project, we’d love to hear from you." aside={<DirectEstimatePanel inHero showActions={false} title="Lakeside Kitchen & Bath LLC" />} /><section className="section"><div className="container story-grid"><div><h2>Based in Sparta, NJ</h2><p>{business.serviceAreaLabel}</p><p>Ronald Augustine, Owner</p><p>Mailing address: {business.address}</p><p>{business.license} · {business.licenseNumber}</p></div><div><h2>Ready to Transform Your Home?</h2><p>Let's discuss your project and create a renovation plan that works for your home and budget.</p><a className="button" href={business.phoneHref}>Call {business.phone}</a></div></div></section></SiteShell>; }

export const pages = {
  kitchen: KitchenPage, bathroom: BathroomPage, process: ProcessPage, areas: ServiceAreaPage, faq: FaqPage, contact: ContactPage,
  home: HomePage,
  services: ServicesPage,
  projects: ProjectsPage,
  about: AboutPage,
  quote: QuotePage
};
