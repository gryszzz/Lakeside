import { ServiceEmoji } from './components/ServiceEmoji';
import { RemodelingExperience } from './components/RemodelingExperience';
import { ProcessExperience, ProcessTimeline } from './components/ProcessExperience';
import { ServicesExperience } from './components/ServicesExperience';
import { BrandConnections, GoogleReviewPreview, ReviewsLocationMap } from './components/BrandConnections';
import { HeroProjectCarousel, HomeProjectGallery, ProjectGallery } from './components/Projects';
import { ServiceAreaMap } from './components/ServiceAreaMap';
import {
  business,
  faqs, services
} from './content/site';
import { FAQSection, PageHero, SectionIntro, SiteShell } from './components/Layout';
import {
  ProcessSteps,
  ValuesGrid,
  WhyChooseUs
} from './components/Marketing';
import { withBase } from './utils';

function HomeHero() {
  return <section className="hero hero--refined hero--compact lakeside-opening"><div className="container hero__grid">
    <div className="hero__content" data-reveal>
      <p className="eyebrow">Lakeside Kitchen & Bath LLC</p>
      <h1><span className="opening-title">Transforming <span>Kitchens &amp; Bathrooms</span></span><span className="opening-experience">With Over <strong>40 Years</strong> of Experience</span></h1>
      <div className="hero__body"><p className="opening-lead">Beautiful renovations begin with quality craftsmanship, clear communication, and a contractor you can trust.</p><p>At Lakeside Kitchen &amp; Bath LLC, we specialize in kitchen and bathroom remodeling throughout Sussex, Morris, Passaic, and Warren Counties, delivering professional results designed to last.</p></div>
      <div className="hero-actions"><a className="button button--hero-tech" href={withBase('contact/')}><svg className="hero-cta__calendar" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="16" rx="2.5" /><path d="M7.5 3v4M16.5 3v4M3.5 9.5h17M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" /></svg><span>Schedule a Consultation</span><span className="hero-cta__arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></span></a><a className="hero-call" href={business.phoneHref} aria-label={`Call Ron at ${business.phone}`}><span className="header-call-icon" aria-hidden="true" /><span className="hero-call__copy"><span>Call Ron</span><strong>{business.phone}</strong></span></a></div>
    </div>
    <HeroProjectCarousel />
    <div className="hero-proof"><p className="hero-signature"><span className="hero-signature__check" aria-hidden="true">✓</span>We do the complete job!</p><p className="hero-license">NJ HIC #13VH13915600</p></div>
  </div><div className="hero-trust-band"><div className="container"><span>Over 40 Years of Experience</span><span>Licensed, Insured & Bonded</span><span>2-Year Workmanship Warranty</span></div></div></section>;
}

function HomeServices() {
 return <section className="section home-services"><div className="container"><SectionIntro eyebrow="What We Do" title="Services Overview" body="From full kitchen and bathroom remodels to the details that bring a space together, every project gets experienced, hands-on care." /><div className="home-service-pair">{services.map((service,index)=>{
   const destinations = ['kitchen-remodeling','bathroom-remodeling'].includes(service.slug) ? `${service.slug}/` : `services/#${service.slug}`;
   const visualLabels = {'kitchen-remodeling':'Kitchen','bathroom-remodeling':'Bathroom','design-material-selection':'Design & materials','tile-installation':'Tile','countertops':'Cabinets & counters'};
   return <article key={service.slug} className={`home-service-feature home-service-feature--${service.slug}`}>
     <div className={`service-visual service-visual--${service.slug}`} aria-hidden="true">
       <span className="service-visual__index">0{index+1}</span><span className="service-visual__tag">{visualLabels[service.slug]}</span>
       <ServiceEmoji kind={{ 'kitchen-remodeling': 'kitchen', 'bathroom-remodeling': 'bathroom', 'design-material-selection': 'materials', 'tile-installation': 'tile', countertops: 'cabinets' }[service.slug]} />
     </div>
     <div className="home-service-feature__content"><h3>{service.title}</h3><p>{service.short}</p><a className="service-card__link" aria-label={`Learn more about ${service.title}`} href={withBase(destinations)}>Learn more <span aria-hidden="true">→</span></a></div>
   </article>;
 })}</div></div></section>;
}

function HomeProcess() {
  return <section className="section home-process process-journey" aria-labelledby="home-process-title"><div className="container process-journey__layout">
    <div className="process-journey__intro"><p className="eyebrow">What to expect</p><h2 id="home-process-title">Our Remodeling Process</h2><p>From the first conversation to the final walkthrough, each stage builds on the last.</p></div>
    <div className="home-process__preview"><ProcessTimeline compact limit={3} /><a className="text-link home-process__more" href={withBase('process/')}>Explore the process →</a></div>
  </div></section>;
}

function DirectEstimatePanel({ inHero = false }) {
 return <div className={`${inHero ? 'estimate-panel estimate-panel--hero' : 'lead-form estimate-panel'} estimate-panel--contact`}>
   <div className="estimate-panel__heading"><p className="eyebrow">Contact Information</p><h2>Lakeside Kitchen & Bath LLC</h2></div>
   <div className="estimate-method-grid">
     <a className="estimate-contact-row" href={business.phoneHref}>
       <span className="estimate-contact-row__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.6a15 15 0 0 0 4.9 4.9L15 13l5 2v4a1 1 0 0 1-1.1 1A16 16 0 0 1 4 5.1 1 1 0 0 1 5 4Z"/><path d="M14 5a5 5 0 0 1 5 5M14 2a8 8 0 0 1 8 8"/></svg></span>
       <span className="estimate-contact-row__copy"><span className="eyebrow">Call</span><strong>{business.phone}</strong></span>
       <span className="estimate-contact-row__arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10" /></svg></span>
     </a>
     <a className="estimate-contact-row" href={business.emailHref}>
       <span className="estimate-contact-row__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg></span>
       <span className="estimate-contact-row__copy"><span className="eyebrow">Email</span><strong>{business.email}</strong></span>
       <span className="estimate-contact-row__arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10" /></svg></span>
     </a>
   </div>
   <div className="estimate-panel__area"><span className="estimate-panel__area-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.3"/></svg></span><div><strong>Sparta, NJ</strong><p>{business.serviceAreaLabel}</p></div></div>
 </div>;
}

export function HomePage() {
  return (
    <SiteShell
      finalCtaProps={{
        buttonVariant: 'tech'
      }}
    >
      <HomeHero />
      <HomeServices />
      <HomeProjectGallery />
      <HomeProcess /><WhyChooseUs compact />
      <BrandConnections />
      <ServiceAreaMap />
      <FAQSection items={faqs.slice(0, 4)} />
    </SiteShell>
  );
}

export function ServicesPage() {
  return <SiteShell showFinalCta={false}><ServicesExperience /></SiteShell>;
}

export function ProjectsPage() {
 return <SiteShell><ProjectGallery /></SiteShell>;
}

export function AboutPage() {
 return <SiteShell><PageHero eyebrow="About Us" title="A Local Remodeling Company Built on Experience" body="At Lakeside Kitchen & Bath LLC, we believe every homeowner deserves a remodeling experience that is professional, organized, and stress-free." /><section className="section about-story-section"><div className="container about-story-layout"><div className="about-story__copy"><p className="about-story__lead">With over 40 years of hands-on construction and remodeling experience, we've built our reputation on quality craftsmanship, honest communication, and respect for our clients' homes.</p><div className="about-approach"><h3>Our approach is simple:</h3><ul><li>Listen carefully</li><li>Plan thoroughly</li><li>Execute professionally</li><li>Deliver exceptional results</li></ul></div><p>Whether you're updating a bathroom, creating your dream kitchen, or completely transforming your living space, our goal is to provide a finished product you'll enjoy for years to come.</p></div><aside className="story-card about-mission"><svg className="about-mission__mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 29 32 9l24 20M15 25v29h34V25M25 54V38h14v16M23 29h18" /></svg><h2>Our Mission</h2><p>To deliver high-quality kitchen and bathroom renovations through professional craftsmanship, clear communication, and exceptional service.</p></aside></div></section><ValuesGrid /><ServiceAreaMap /></SiteShell>;
}

export function QuotePage() {
 return <SiteShell showFinalCta={false}><PageHero eyebrow="Consultation" title="Schedule Your Consultation Today" body="Let's discuss your project and create a renovation plan that works for your home and budget." aside={<DirectEstimatePanel inHero />} /></SiteShell>;
}

function RemodelingPage({ kitchen = false }) {
 return <SiteShell showFinalCta={false}><RemodelingExperience kitchen={kitchen} /></SiteShell>;
}
function KitchenPage() { return <RemodelingPage kitchen />; }
function BathroomPage() { return <RemodelingPage />; }
function ProcessPage() { return <SiteShell showFinalCta={false}><ProcessExperience /></SiteShell>; }
function ServiceAreaPage() { return <SiteShell><ServiceAreaMap full /></SiteShell>; }

function FaqPage() { return <SiteShell><FAQSection items={faqs} /></SiteShell>; }
function ContactPage() { return <SiteShell showFinalCta={false}><PageHero eyebrow="Contact" title="Let's Discuss Your Project" body="Whether you're planning a kitchen renovation, bathroom remodel, or tile installation project, we'd love to hear from you." aside={<DirectEstimatePanel inHero />} /><section className="section contact-next"><div className="container"><div><h2>Ready to Transform Your Home?</h2><p>Let's discuss your project and create a renovation plan that works for your home and budget.</p></div><a className="button" href={business.phoneHref}>Call {business.phone}</a></div></section></SiteShell>; }

function ReviewsPage() {
 return <SiteShell><PageHero title="Reviews" body="Google reviews coming soon." /><section className="section"><div className="container reviews-page-content"><ReviewsLocationMap /><GoogleReviewPreview /></div></section></SiteShell>;
}

export const pages = {
  reviews: ReviewsPage,
  kitchen: KitchenPage, bathroom: BathroomPage, process: ProcessPage, areas: ServiceAreaPage, faq: FaqPage, contact: ContactPage,
  home: HomePage,
  services: ServicesPage,
  projects: ProjectsPage,
  about: AboutPage,
  quote: QuotePage
};
