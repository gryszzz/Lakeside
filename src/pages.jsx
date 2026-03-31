import { business, faqs } from './content/site';
import { ContactForm, LeadSidebar, QuoteForm } from './components/Forms';
import { FAQSection, PageHero, SiteShell } from './components/Layout';
import {
  ContactInfoGrid,
  ProcessSteps,
  ServiceAreaSection,
  ServiceCards,
  ServiceQuoteSection,
  StatGrid,
  TestimonialCards,
  TrustBar,
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
          <h1>Craftsmanship you can see. Quality you can trust.</h1>
          <p className="hero__body">
            High-end kitchens, bathrooms, decks, windows, and home improvements for homeowners who want
            beautiful work, clear communication, and a contractor that feels organized from day one.
          </p>
          <div className="hero-actions">
            <a className="button" href={withBase('quote/')}>
              Request a Quote
            </a>
            <a className="button button--ghost" href={withBase('projects/')}>
              View Projects
            </a>
          </div>
          <div className="hero__meta">
            <span>{business.license}</span>
            <span>{business.reviewsLabel}</span>
            <span>{business.serviceAreaLabel}</span>
          </div>
        </div>
        <div className="hero__visual" data-reveal>
          <div className="hero__image-card hero__image-card--main">
            <img src={withBase('images/projects/kitchen-after.svg')} alt="Placeholder hero image for kitchen remodel" />
            <div className="hero__image-overlay">
              <p>Featured Project</p>
              <strong>Lakeshore Kitchen Renovation</strong>
            </div>
          </div>
          <div className="hero__visual-grid">
            <div className="hero__badge-card">
              <span>15+ years</span>
              <p>Refined remodel execution for lived-in homes.</p>
            </div>
            <div className="hero__image-card">
              <img src={withBase('images/projects/bathroom-after.svg')} alt="Placeholder bathroom remodel image" />
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

function QuoteHeroCard() {
  return (
    <div className="about-metric-card">
      <p className="eyebrow">Fast Trust Signals</p>
      <h3>Clear estimate process. Premium scope. Real communication.</h3>
      <p>
        This page is built to convert on mobile while still feeling high-end. Replace the placeholder endpoint and
        contact details before launch.
      </p>
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

function QuoteSection() {
  return (
    <section className="section">
      <div className="container lead-layout">
        <LeadSidebar />
        <QuoteForm />
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
        <ContactForm />
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <SiteShell>
      <HomeHero />
      <TrustBar />
      <section className="section">
        <div className="container">
          <div className="section-layout">
            <div>
              <p className="eyebrow">Built for Homeowners Who Care About Quality</p>
              <h2>Premium remodeling without the inflated, corporate feel.</h2>
              <p className="section-lead">
                The goal is to look sharp, communicate clearly, and deliver work that feels tailored rather than
                templated. Every part of the site is aimed at trust and conversion.
              </p>
            </div>
            <StatGrid />
          </div>
        </div>
      </section>
      <ServiceCards />
      <BeforeAfterShowcase />
      <WhyChooseUs />
      <TestimonialCards />
      <ProcessSteps />
      <ProjectPreview />
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
        title: 'Prefer to talk first?',
        body: 'Call or email and we can help you decide whether now is the right time to move forward.',
        primaryLabel: 'Call Today',
        primaryHref: business.phoneHref,
        secondaryLabel: 'Contact Us',
        secondaryHref: 'contact/'
      }}
    >
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us about your project and we will help you map the next step"
        body="The form is static-host friendly and ready for Formspree or a similar endpoint. Replace the placeholder endpoint before launch."
        actions={
          <>
            <a className="button" href={business.phoneHref}>
              Call {business.phone}
            </a>
            <a className="button button--ghost" href={withBase('projects/')}>
              View Projects
            </a>
          </>
        }
        aside={<QuoteHeroCard />}
      />
      <QuoteSection />
      <FAQSection items={faqs} intro="Questions that often come up before homeowners submit a quote request." />
    </SiteShell>
  );
}

export function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Reach out the way that feels easiest"
        body="Call, send a note, or use the contact form. The site keeps the path simple because many leads will come from mobile."
        actions={
          <>
            <a className="button" href={business.phoneHref}>
              Call Now
            </a>
            <a className="button button--ghost" href={withBase('quote/')}>
              Request a Quote
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
