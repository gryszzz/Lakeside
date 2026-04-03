import {
  business,
  estimateChecklist,
  faqs,
  homeConversionCards,
  heroTrustItems,
  homeSpotlights
} from './content/site';
import { FAQSection, PageHero, SectionIntro, SiteShell } from './components/Layout';
import {
  ContactInfoGrid,
  ProcessSteps,
  ServiceAreaSection,
  ServiceCards,
  ServiceQuoteSection,
  StatGrid,
  TestimonialCards,
  ValuesGrid,
  WhyChooseUs
} from './components/Marketing';
import { BeforeAfterShowcase, BeforeAfterSlider, ProjectGallery } from './components/Projects';
import { beforeAfterProjects } from './content/site';
import { withBase } from './utils';

function TrustGraphic({ type }) {
  switch (type) {
    case 'review':
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="10" />
          <path d="M24 8v5M24 35v5M8 24h5M35 24h5M14 14l3 3M31 31l3 3M34 14l-3 3M17 31l-3 3" />
        </svg>
      );
    case 'license':
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 8l11 4v10c0 8-4.7 13.1-11 17-6.3-3.9-11-9-11-17V12l11-4z" />
          <path d="M18.5 24.5l4 4 8-9" />
        </svg>
      );
    case 'scope':
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect x="10" y="12" width="28" height="24" rx="4" />
          <path d="M18 12v24M30 12v24M10 20h28M10 28h18" />
        </svg>
      );
    case 'focus':
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M18 10H12a2 2 0 0 0-2 2v6M30 10h6a2 2 0 0 1 2 2v6M38 30v6a2 2 0 0 1-2 2h-6M18 38h-6a2 2 0 0 1-2-2v-6" />
          <circle cx="24" cy="24" r="6" />
        </svg>
      );
    default:
      return null;
  }
}

function HomeHero() {
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
                <div className="hero-trust-card__top">
                  <span className={`hero-trust-card__graphic hero-trust-card__graphic--${item.graphic}`}>
                    <TrustGraphic type={item.graphic} />
                  </span>
                  <span className="hero-trust-card__line" aria-hidden="true" />
                </div>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="hero__visual" data-reveal>
          <div className="hero__image-card hero__image-card--main">
            <img src={withBase(homeSpotlights[0].image)} alt={homeSpotlights[0].alt} />
            <div className="hero__image-overlay">
              <p>{homeSpotlights[0].label}</p>
              <strong>{homeSpotlights[0].title}</strong>
            </div>
          </div>
          <div className="hero__visual-grid">
            {homeSpotlights.slice(1).map((item) => (
              <article key={item.title} className="hero__image-card hero__image-card--tile">
                <img src={withBase(item.image)} alt={item.alt} />
                <div className="hero__tile-copy">
                  <p>{item.label}</p>
                  <strong>{item.title}</strong>
                </div>
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
            <h2>Designed to feel clear, calm, and high-end from the first click.</h2>
            <p className="home-overview-copy__body">The right remodel team should feel easy to trust before the walkthrough even happens.</p>
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

function ContactMapPlaceholder() {
  return (
    <div className="map-card" data-reveal>
      <div>
        <p className="eyebrow">Service Area</p>
        <h3>Serving homeowners across Your City and nearby communities.</h3>
        <p>
          Reach out to confirm coverage, timing, and whether your kitchen or bathroom project is the right fit for the
          schedule.
        </p>
      </div>
      <a className="button button--ghost" href={business.mapUrl}>
        Open Service Area Map
      </a>
    </div>
  );
}

function QuickContactPanel() {
  return (
    <div className="about-metric-card">
      <p className="eyebrow">Direct Contact</p>
      <h3>{business.phone}</h3>
      <p>{business.email}</p>
      <p>{business.hours}</p>
      <p>{business.serviceAreaLabel}</p>
    </div>
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

function ContactSection() {
  return (
    <section className="section">
      <div className="container lead-layout">
        <div>
          <ContactInfoGrid />
          <ContactMapPlaceholder />
        </div>
        <DirectEstimatePanel
          eyebrow="Direct Contact"
          title="Call or email the remodeling team directly."
          body="If you are planning a kitchen or bathroom project, the easiest next step is direct contact by phone or email."
          emailCopy="Email photos, project notes, or questions about your kitchen or bathroom remodel and we will reply with next steps."
          showActions={false}
        />
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <SiteShell>
      <HomeHero />
      <HomeDecisionSection />
      <BeforeAfterShowcase />
      <ServiceCards compact intro="Focused services for kitchens and bathrooms with cleaner scopes and stronger finish standards." />
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
        title="Specialist kitchen and bathroom remodeling services"
        body="Focused services for the rooms where layout, storage, tile work, waterproofing, fixtures, and finish quality matter most."
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
      <ServiceQuoteSection />
      <ProcessSteps />
      <FAQSection items={faqs.slice(0, 4)} intro="Questions that help homeowners evaluate fit before reaching out about a kitchen or bathroom remodel." />
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
      <PageHero
        eyebrow="Portfolio"
        title="Kitchen and bathroom work that makes the craftsmanship feel real"
        body="Browse remodel directions, material palettes, and before-and-after transformations that help homeowners picture the result more clearly."
        actions={
          <>
            <a className="button" href={withBase('quote/')}>
              Request Estimate
            </a>
            <a className="button button--ghost" href="#featured-transformation">
              View Before & After
            </a>
          </>
        }
        aside={
          <div className="page-hero__spotlight">
            <img src={withBase('images/projects/kitchen-after.svg')} alt="Featured kitchen remodel" />
          </div>
        }
      />
      <section id="featured-transformation" className="section">
        <div className="container">
          <BeforeAfterSlider project={beforeAfterProjects[1]} />
        </div>
      </section>
      <ProjectGallery />
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
        actions={
          <>
            <a className="button" href={withBase('quote/')}>
              Request Estimate
            </a>
            <a className="button button--ghost" href={withBase('contact/')}>
              Contact Us
            </a>
          </>
        }
        aside={
          <div className="about-metric-card">
            <p className="eyebrow">What Homeowners Want</p>
            <h3>Clear guidance without the sales act</h3>
            <p>Confident scope advice, clean execution, and communication that stays professional from first walkthrough to final detail.</p>
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

export function ContactPage() {
  return (
    <SiteShell showFinalCta={false}>
      <PageHero
        eyebrow="Contact"
        title="Reach out about your kitchen or bathroom project"
        body="Call or email, whichever feels easier. The contact path stays direct so homeowners can get answers quickly from mobile or desktop."
        actions={
          <>
            <a className="button" href={business.phoneHref}>
              Call Now
            </a>
            <a className="button button--ghost" href={business.emailHref}>
              Email Us
            </a>
          </>
        }
        aside={<QuickContactPanel />}
      />
      <ContactSection />
      <ServiceAreaSection />
    </SiteShell>
  );
}

export const pages = {
  home: HomePage,
  services: ServicesPage,
  projects: ProjectsPage,
  about: AboutPage,
  quote: QuotePage,
  contact: ContactPage
};
