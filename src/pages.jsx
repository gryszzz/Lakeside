import { useState } from 'react';
import {
  business,
  estimateChecklist,
  homeConversionCards,
  homeHeroSlides,
  heroTrustItems,
  homeSpotlights
} from './content/site';
import { PageHero, SectionIntro, SiteShell } from './components/Layout';
import {
  ServiceAreaSection,
  ServiceCards,
  StatGrid,
  TestimonialCards,
  ValuesGrid,
  WhyChooseUs
} from './components/Marketing';
import { BeforeAfterShowcase, BeforeAfterSlider, ProjectGallery } from './components/Projects';
import { beforeAfterProjects } from './content/site';
import { withBase } from './utils';

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
          <h1>Refined kitchens and bathrooms. Built right.</h1>
          <p className="hero__body">Custom remodels with cleaner execution, steadier communication, and finish work that holds up.</p>
          <div className="hero-actions">
            <a className="button" href={withBase('quote/')}>
              Request Estimate
            </a>
            <a className="button button--ghost" href={withBase('projects/')}>
              View Portfolio
            </a>
          </div>
          <div className="hero-trust-grid">
            {heroTrustItems.map((item) => (
              <article key={item.title} className="hero-trust-card">
                <div className="hero-trust-card__body">
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
              </article>
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
            <div className="hero__image-overlay">
              <p>{currentHeroSlide.label}</p>
              <strong>{currentHeroSlide.title}</strong>
              <span className="hero__image-hint">Click to view next</span>
            </div>
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
              <a className="button" href={withBase('quote/')}>
                Request Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutStoryBlock() {
  return (
    <section className="section">
      <div className="container story-grid">
        <div data-reveal>
          <p className="eyebrow">Our Story</p>
          <h2>Kitchen and bathroom remodeling should feel organized, design-aware, and worth the investment.</h2>
          <p>
            Homeowners making bigger remodel decisions want a team that understands tile lines, shower assemblies,
            vanity planning, cabinetry, lighting, flooring transitions, and how those details come together in real
            life.
          </p>
          <p>
            The brand is built to communicate calm professionalism, clean execution, and the kind of craftsmanship
            that justifies a meaningful kitchen or bathroom investment.
          </p>
        </div>
        <div className="story-card" data-reveal>
          <img src={withBase('images/projects/home-renovation.svg')} alt="Kitchen and bathroom remodeling craftsmanship story section" />
          <div>
            <p className="eyebrow">Specialist Focus</p>
            <h3>Fewer claims. Stronger execution.</h3>
            <p>
              The strongest positioning comes from doing fewer things better: kitchens and bathrooms handled with
              thoughtful planning, disciplined installation, and finish work that feels deliberate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DirectEstimatePanel({
  eyebrow = 'Direct Contact',
  title = 'Direct estimate contact',
  body = 'A quick call is fastest. Email works well if you want to send photos.',
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
          <p className="eyebrow">Call</p>
          <h3>
            <a href={business.phoneHref}>{business.phone}</a>
          </h3>
          <p>Best for quick questions, timing, and next steps.</p>
        </article>
        <article className="estimate-contact-row estimate-contact-row--email">
          <p className="eyebrow">Email</p>
          <h3>
            <a href={business.emailHref}>{business.email}</a>
          </h3>
          <p>{emailCopy}</p>
        </article>
      </div>
      <div className="estimate-checklist-card">
        <p className="eyebrow">Helpful To Include</p>
        <ul className="estimate-checklist">
          {estimateChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {showActions ? (
        <div className="hero-actions estimate-panel__actions">
          <a className="button" href={business.phoneHref}>
            Call {business.phone}
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
    <SiteShell>
      <HomeHero />
      <HomeDecisionSection />
      <BeforeAfterShowcase />
      <ServiceCards compact intro="Full kitchen and bathroom renovations with cleaner scopes and a more polished result." />
      <WhyChooseUs compact />
      <TestimonialCards compact limit={2} />
    </SiteShell>
  );
}

export function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Full kitchen and bathroom renovations"
        body="Two core services. Cleaner planning, steadier execution, and finished spaces that feel worth the investment."
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
      <ProjectGallery />
      <section id="featured-transformation" className="section">
        <div className="container">
          <BeforeAfterSlider project={beforeAfterProjects[1]} />
        </div>
      </section>
      <TestimonialCards />
    </SiteShell>
  );
}

export function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title="A specialist remodeling company should feel steady, skilled, and easy to trust"
        body="Homeowners investing in kitchens and bathrooms want clear guidance, strong craftsmanship, and a team that respects both the design and the construction details."
        aside={
          <div className="about-metric-card">
            <p className="eyebrow">Our Approach</p>
            <h3>Steady planning. Clean execution.</h3>
            <p>Kitchen and bathroom remodels handled with clear scope, disciplined craftsmanship, and communication that stays consistent throughout the project.</p>
          </div>
        }
      />
      <AboutStoryBlock />
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
        title="Start with a quick estimate conversation."
        body="For kitchen and bathroom remodels, the first step is simple. Reach out directly and we will let you know the right next step."
        aside={
          <DirectEstimatePanel
            inHero
            showActions={false}
            eyebrow="Call Or Email"
            title="Kitchen and bathroom estimates"
            body="Choose whichever is easier. A quick call is fastest."
            emailCopy="Email the room, your county or township, and photos if you have them."
          />
        }
      />
    </SiteShell>
  );
}

export const pages = {
  home: HomePage,
  services: ServicesPage,
  projects: ProjectsPage,
  about: AboutPage,
  quote: QuotePage
};
