import {
  business,
  estimateChecklist,
  estimateNextSteps,
  faqs,
  heroTrustItems,
  homeQualityPoints,
  homeSpotlights,
  trustBadges
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
import { BeforeAfterShowcase, BeforeAfterSlider, ProjectGallery, ProjectPreview } from './components/Projects';
import { beforeAfterProjects } from './content/site';
import { withBase } from './utils';

function HomeHero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content" data-reveal>
          <p className="eyebrow">Luxury-Focused General Contractor</p>
          <h1>Beautiful remodels for homeowners who expect the details to be right.</h1>
          <p className="hero__body">
            High-end kitchens, bathrooms, decks, windows, and renovation work delivered with stronger finish
            standards, cleaner communication, and a process that feels genuinely professional from the first call.
          </p>
          <div className="hero-actions">
            <a className="button" href={withBase('quote/')}>
              Request a Quote
            </a>
            <a className="button button--ghost" href={withBase('projects/')}>
              View Projects
            </a>
          </div>
          <div className="hero-trust-grid">
            {heroTrustItems.map((item) => (
              <article key={item.title} className="hero-trust-card">
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

function HomeOverviewSection() {
  return (
    <section className="section section--home-overview">
      <div className="container">
        <div className="home-overview-grid">
          <div className="home-overview-copy" data-reveal>
            <p className="eyebrow">Built to Win Trust Fast</p>
            <h2>Premium presentation matters because homeowners decide quickly who feels credible.</h2>
            <p className="home-overview-copy__body">
              The strongest contractor sites do two things at once: they show real quality and they make the next
              step feel easy. This homepage is built to do both, especially for mobile homeowners browsing quickly.
            </p>
            <div className="home-quality-list">
              {homeQualityPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>
          <div className="home-overview-panel">
            <div className="home-overview-note" data-reveal>
              <strong>{business.reviewsLabel}</strong>
              <p>
                Organized proposals, cleaner communication, and craftsmanship that feels deliberate from the first
                walkthrough to the final detail.
              </p>
            </div>
            <StatGrid />
            <div className="home-overview-badges" data-reveal>
              {trustBadges.slice(0, 3).map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
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
          <h2>A contractor brand built around calm confidence, strong finish work, and homeowner trust.</h2>
          <p>
            This site uses placeholder copy and contact details, but the positioning is intentional: homeowners are
            not just buying labor, they are buying confidence in how the project will be handled. The brand should
            feel premium because the process and workmanship are premium.
          </p>
          <p>
            Replace this section with the company’s real founding story, experience, team approach, and the reason
            clients keep referring friends and neighbors.
          </p>
        </div>
        <div className="story-card" data-reveal>
          <img src={withBase('images/projects/home-renovation.svg')} alt="Placeholder image for contractor story section" />
          <div>
            <p className="eyebrow">Positioning</p>
            <h3>More design-build confidence. Less small-business chaos.</h3>
            <p>
              The visual system, layout, and copy are designed to move the company above the “cheap handyman” category
              and into a more trusted remodeling lane.
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
        <p className="eyebrow">Map Placeholder</p>
        <h3>Add your real showroom, office, or service-area map later.</h3>
        <p>
          This static card is intentionally lightweight for GitHub Pages. Replace the button URL or embed a map
          screenshot if needed.
        </p>
      </div>
      <a className="button button--ghost" href={business.mapUrl}>
        Open Google Maps
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
  eyebrow = 'Call Or Email',
  title = 'The fastest way to get an estimate is a quick call or direct email.',
  body = 'This page keeps the process simple. Reach out directly and we will help you figure out fit, timing, and the right next step.',
  emailCopy = 'Email your project details, county or township, and current photos for review.',
  inHero = false
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
          <p className="eyebrow">Call For An Estimate</p>
          <h3>
            <a href={business.phoneHref}>{business.phone}</a>
          </h3>
          <p>Call for estimate questions, availability, and next steps.</p>
        </article>
        <article className="estimate-contact-row estimate-contact-row--email">
          <p className="eyebrow">Email For An Estimate</p>
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
      <div className="hero-actions estimate-panel__actions">
        <a className="button" href={business.phoneHref}>
          Call {business.phone}
        </a>
        <a className="button button--ghost" href={business.emailHref}>
          Email Us
        </a>
      </div>
    </div>
  );
}

function EstimateNextStepsSection() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionIntro
          eyebrow="How It Works"
          title="A simple estimate path that still feels professional"
          body="The goal is not to make homeowners do more work. It is to make the first contact more useful and the next step easier to understand."
        />
        <div className="process-grid quote-next-steps">
          {estimateNextSteps.map((step, index) => (
            <article key={step.title} className="process-card quote-step-card" data-reveal>
              <span className="process-card__step">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
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
          title="Call or email the team directly."
          body="This business is handling estimate requests by phone and email, so the easiest next step is to reach out directly."
          emailCopy="Email your project details, photos, or questions and we will respond with next steps."
        />
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <SiteShell>
      <HomeHero />
      <HomeOverviewSection />
      <BeforeAfterShowcase />
      <ServiceCards />
      <ProjectPreview />
      <WhyChooseUs />
      <ProcessSteps />
      <TestimonialCards />
      <FAQSection items={faqs} />
      <ServiceAreaSection />
    </SiteShell>
  );
}

export function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="High-end kitchens, bathrooms, decks, windows, and more"
        body="Each service is presented to answer the questions homeowners actually ask: what gets improved, why it matters, and what kind of result they can expect."
        actions={
          <>
            <a className="button" href={withBase('quote/')}>
              Request a Quote
            </a>
            <a className="button button--ghost" href={withBase('projects/')}>
              View Projects
            </a>
          </>
        }
        aside={<StatGrid />}
      />
      <ServiceCards detailed />
      <ServiceQuoteSection />
      <ProcessSteps />
      <FAQSection items={faqs.slice(0, 4)} intro="Questions that help homeowners evaluate fit before reaching out." />
    </SiteShell>
  );
}

export function ProjectsPage() {
  return (
    <SiteShell
      finalCtaProps={{
        title: 'See something close to what you want?',
        body: 'Tell us which project style you like and we can talk through whether it fits your home, priorities, and budget.',
        primaryLabel: 'Request a Similar Project Quote'
      }}
    >
      <PageHero
        eyebrow="Projects"
        title="A portfolio designed to make the craftsmanship feel real"
        body="The gallery is structured so real photos can be dropped in later with minimal editing. Until then, the layout still sells the transformation story."
        actions={
          <>
            <a className="button" href={withBase('quote/')}>
              Request a Quote
            </a>
            <a className="button button--ghost" href="#featured-transformation">
              Jump to Before & After
            </a>
          </>
        }
        aside={
          <div className="page-hero__spotlight">
            <img src={withBase('images/projects/kitchen-after.svg')} alt="Placeholder featured project image" />
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
        title="A remodeling company should feel steady, skilled, and easy to trust"
        body="This page is written to position the contractor as capable, design-aware, and honest about what quality work requires."
        actions={
          <>
            <a className="button" href={withBase('quote/')}>
              Request a Quote
            </a>
            <a className="button button--ghost" href={withBase('contact/')}>
              Contact Us
            </a>
          </>
        }
        aside={
          <div className="about-metric-card">
            <p className="eyebrow">What Homeowners Want</p>
            <h3>Professionalism without posturing</h3>
            <p>Confident scope guidance, strong craftsmanship, and respectful communication from start to finish.</p>
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
    <SiteShell
      finalCtaProps={{
        title: 'Ready for an estimate?',
        body: 'Call or email today and we can help you understand fit, next steps, and timing.',
        primaryLabel: 'Call Today',
        primaryHref: business.phoneHref,
        secondaryLabel: 'Email Us',
        secondaryHref: business.emailHref
      }}
    >
      <PageHero
        eyebrow="Request a Quote"
        title="Call or email for a remodeling estimate today."
        body="The fastest path is direct contact. Call during business hours, or email a few photos and a short project summary so we can understand the space faster."
        actions={
          <>
            <a className="button" href={business.phoneHref}>
              Call {business.phone}
            </a>
            <a className="button button--ghost" href={business.emailHref}>
              Email Us
            </a>
          </>
        }
        aside={<DirectEstimatePanel inHero />}
      />
      <EstimateNextStepsSection />
      <FAQSection
        items={[faqs[2], faqs[1], faqs[4], faqs[3]]}
        intro="Questions that usually come up when homeowners are deciding whether to call or email for an estimate."
      />
    </SiteShell>
  );
}

export function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Reach out the way that feels easiest"
        body="Call or email, whichever feels easier. The contact path stays simple so homeowners can reach out quickly from mobile or desktop."
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
