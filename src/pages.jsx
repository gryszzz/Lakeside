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
          <p className="eyebrow">Kitchen & Bathroom Remodeling</p>
          <h1>Premium kitchens and bathrooms built with precision.</h1>
          <p className="hero__body">
            Custom remodels, tile and shower work, vanities, flooring, and finish upgrades delivered with clean
            execution, steadier communication, and details that hold up after the project is complete.
          </p>
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
            <p className="eyebrow">Kitchen & Bath Specialists</p>
            <h2>The rooms homeowners use hardest deserve the strongest planning and finish work.</h2>
            <p className="home-overview-copy__body">
              Kitchens and bathrooms have no room for weak layout decisions or sloppy execution. We focus on the
              spaces where cabinetry, tile, lighting, storage, waterproofing, and finish quality matter most.
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
                Clear scopes, thoughtful selections, and remodel management that feels organized from the first
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
  eyebrow = 'Kitchen & Bath Estimates',
  title = 'Call or email to talk through your kitchen or bathroom remodel.',
  body = 'We keep the first step simple so you can get clarity on fit, timing, and what the next step should be.',
  emailCopy = 'Email your project details, county or township, and current room photos for review.',
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
          <p className="eyebrow">Call For An Estimate</p>
          <h3>
            <a href={business.phoneHref}>{business.phone}</a>
          </h3>
          <p>Call to discuss your kitchen or bathroom remodel, timing, and next steps.</p>
          <a className="estimate-contact-row__link" href={business.phoneHref}>
            Tap to call
          </a>
        </article>
        <article className="estimate-contact-row estimate-contact-row--email">
          <p className="eyebrow">Email For An Estimate</p>
          <h3>
            <a href={business.emailHref}>{business.email}</a>
          </h3>
          <p>{emailCopy}</p>
          <a className="estimate-contact-row__link" href={business.emailHref}>
            Start email
          </a>
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

function EstimateNextStepsSection() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionIntro
          eyebrow="How It Works"
          title="A simple estimate path for kitchen and bathroom remodels"
          body="The first conversation should feel useful, not complicated. We keep the path clear so homeowners know whether to schedule a walkthrough and what comes next."
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
          title="Call or email the remodeling team directly."
          body="If you are planning a kitchen or bathroom project, the easiest next step is direct contact by phone or email."
          emailCopy="Email photos, project notes, or questions about your kitchen or bathroom remodel and we will reply with next steps."
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
        eyebrow="Request Estimate"
        title="Call or email for a kitchen or bathroom estimate."
        body="The fastest path is direct contact. Call during business hours, or email room photos and a short project summary so we can understand the remodel faster."
        actions={
          <>
            <a className="button" href={business.phoneHref}>
              Call {business.phone}
            </a>
            <a className="button button--ghost" href={business.emailHref}>
              Email For Estimate
            </a>
          </>
        }
        aside={<DirectEstimatePanel inHero showActions={false} />}
      />
      <EstimateNextStepsSection />
      <FAQSection
        items={[faqs[2], faqs[1], faqs[4], faqs[3]]}
        intro="Questions that usually come up when homeowners are deciding whether to call or email about a kitchen or bathroom estimate."
      />
    </SiteShell>
  );
}

export function ContactPage() {
  return (
    <SiteShell>
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
