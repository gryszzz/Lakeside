import { BrandConnections, GoogleReviewPreview } from './components/BrandConnections';
import { HeroProjectCarousel, HomeBeforeAfterShowcase, HomeProjectGallery } from './components/Projects';
import { ServiceAreaMap } from './components/ServiceAreaMap';
import {
  business,
  faqs, services, processSteps
} from './content/site';
import { FAQSection, PageHero, SectionIntro, SiteShell } from './components/Layout';
import {
  ProcessSteps,
  ServiceCards,
  ValuesGrid,
  WhyChooseUs
} from './components/Marketing';
import { withBase } from './utils';

function HomeHero() {
  return <section className="hero hero--refined hero--compact"><div className="container hero__grid">
    <div className="hero__content" data-reveal>
      <p className="eyebrow">Lakeside Kitchen & Bath LLC</p>
      <h1>Transforming Kitchens &amp; Bathrooms With Over 40 Years of Experience</h1>
      <p className="hero__body">Beautiful renovations begin with quality craftsmanship, clear communication, and a contractor you can trust. At Lakeside Kitchen &amp; Bath LLC, we specialize in kitchen and bathroom remodeling throughout Sussex, Morris, Passaic, and Warren Counties, delivering professional results designed to last.</p>
      <div className="hero-actions"><a className="button button--hero-tech" href={withBase('contact/')}><svg className="hero-cta__calendar" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="16" rx="2.5" /><path d="M7.5 3v4M16.5 3v4M3.5 9.5h17M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" /></svg><span>Schedule a Consultation</span><span className="hero-cta__arrow" aria-hidden="true">→</span></a><a className="hero-call" href={business.phoneHref} aria-label={`Call Ron at ${business.phone}`}><span className="header-call-icon" aria-hidden="true" /><span className="hero-call__copy"><span>Call Ron</span><strong>{business.phone}</strong></span></a></div>
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
       <svg viewBox="0 0 420 180" focusable="false">
         {service.slug==='kitchen-remodeling' && <><path d="M48 119h324M62 60h112v58H62zM184 60h102v58H184zM296 60h62v58h-62zM48 119h324v15H48zM65 134v30m70-30v30m73-30v30m72-30v30m70-30v30M172 89h46m28 0h25"/><path className="service-visual__accent" d="M86 78h24v18H86zm52 0h24v18h-24zm72 0h25v18h-25z"/></>}
         {service.slug==='bathroom-remodeling' && <><path d="M64 44h136v96H64zM200 44h144v96H200zM64 140h280v16H64zM80 156v10m72-10v10m72-10v10m72-10v10M228 72h88v45h-88zM241 84h62m-62 14h62m-62 14h62"/><path className="service-visual__accent" d="M92 102h80m-64 0v25m48-25v25m-58-2h68"/></>}
         {service.slug==='design-material-selection' && <><path d="M60 44h88v112H60zM166 44h88v112h-88zM272 44h88v112h-88z"/><path className="service-visual__accent" d="M76 60h56v44H76zM182 60h56v44h-56zM288 60h56v44h-56z"/><path d="M78 122h52m-52 14h36m54-14h52m-52 14h36m54-14h52m-52 14h36"/></>}
         {service.slug==='tile-installation' && <><path d="m74 50 126-19 146 22v96l-146 18-126-19zM200 31v136m73-125v115M74 98l126 17 146-14M74 70l126 17 146-15M74 126l126 17 146-14"/><path className="service-visual__accent" d="m102 54 61-9v42l-61-8zM226 48l42 6v42l-42-5zM293 57l39 6v38l-39 4z"/></>}
         {service.slug==='countertops' && <><path d="M56 83h308v18H56zM72 101v58m76-58v58m72-58v58m76-58v58m-238 0h276M94 48h108v35H94zM218 48h116v35H218z"/><path className="service-visual__accent" d="M62 76h296M88 112h44m32 0h44m32 0h44m32 0h34"/></>}
       </svg>
     </div>
     <div className="home-service-feature__content"><h3>{service.title}</h3><p>{service.short}</p><a className="service-card__link" aria-label={`Learn more about ${service.title}`} href={withBase(destinations)}>Learn more <span aria-hidden="true">→</span></a></div>
   </article>;
 })}</div></div></section>;
}

function HomeProcess() {
 return <section className="section home-process"><div className="container"><SectionIntro title="Our Remodeling Process" /><ol className="home-process__steps">{processSteps.slice(0,3).map((step,index)=><li key={step.title}><span>0{index+1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol><a className="text-link" href={withBase('process/')}>View our complete seven-step process</a></div></section>;
}

function DirectEstimatePanel({ inHero = false }) {
 return <div className={`${inHero ? 'estimate-panel estimate-panel--hero' : 'lead-form estimate-panel'} estimate-panel--contact`}>
   <div className="estimate-panel__heading"><p className="eyebrow">Contact Information</p><h2>Lakeside Kitchen & Bath LLC</h2></div>
   <div className="estimate-method-grid">
     <a className="estimate-contact-row" href={business.phoneHref}>
       <span className="estimate-contact-row__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.6a15 15 0 0 0 4.9 4.9L15 13l5 2v4a1 1 0 0 1-1.1 1A16 16 0 0 1 4 5.1 1 1 0 0 1 5 4Z"/><path d="M14 5a5 5 0 0 1 5 5M14 2a8 8 0 0 1 8 8"/></svg></span>
       <span className="estimate-contact-row__copy"><span className="eyebrow">Call</span><strong>{business.phone}</strong></span>
       <span className="estimate-contact-row__arrow" aria-hidden="true">↗</span>
     </a>
     <a className="estimate-contact-row" href={business.emailHref}>
       <span className="estimate-contact-row__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg></span>
       <span className="estimate-contact-row__copy"><span className="eyebrow">Email</span><strong>{business.email}</strong></span>
       <span className="estimate-contact-row__arrow" aria-hidden="true">↗</span>
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
      <HomeBeforeAfterShowcase />
      <HomeProcess /><WhyChooseUs compact />
      <BrandConnections />
      <ServiceAreaMap />
      <FAQSection items={faqs.slice(0, 4)} />
    </SiteShell>
  );
}

export function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Services"

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

      />
      <ServiceCards detailed />
    </SiteShell>
  );
}

export function ProjectsPage() {
 return <SiteShell><PageHero eyebrow="Our Work" title="Project Photos" body="Real project photos coming soon." actions={<ConsultationLink />} /></SiteShell>;
}

export function AboutPage() {
 return <SiteShell><PageHero eyebrow="About Us" title="A Local Remodeling Company Built on Experience" body="At Lakeside Kitchen & Bath LLC, we believe every homeowner deserves a remodeling experience that is professional, organized, and stress-free." /><section className="section about-story-section"><div className="container about-story-layout"><div className="about-story__copy"><p className="about-story__lead">With over 40 years of hands-on construction and remodeling experience, we've built our reputation on quality craftsmanship, honest communication, and respect for our clients' homes.</p><div className="about-approach"><h3>Our approach is simple:</h3><ul><li>Listen carefully</li><li>Plan thoroughly</li><li>Execute professionally</li><li>Deliver exceptional results</li></ul></div><p>Whether you're updating a bathroom, creating your dream kitchen, or completely transforming your living space, our goal is to provide a finished product you'll enjoy for years to come.</p></div><aside className="story-card about-mission"><svg className="about-mission__mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 29 32 9l24 20M15 25v29h34V25M25 54V38h14v16M23 29h18" /></svg><h2>Our Mission</h2><p>To deliver high-quality kitchen and bathroom renovations through professional craftsmanship, clear communication, and exceptional service.</p></aside></div></section><ValuesGrid /><ServiceAreaMap /></SiteShell>;
}

export function QuotePage() {
 return <SiteShell showFinalCta={false}><PageHero eyebrow="Consultation" title="Schedule Your Consultation Today" body="Let's discuss your project and create a renovation plan that works for your home and budget." aside={<DirectEstimatePanel inHero />} /></SiteShell>;
}

function ConsultationLink() { return <a className="button" href={withBase('contact/')}>Schedule Your Consultation Today</a>; }
function RemodelingPage({ kitchen = false }) {
 const service = services.find(item => item.slug === (kitchen ? 'kitchen-remodeling' : 'bathroom-remodeling'));
 const items = kitchen ? ['Design','Material Selection Guidance','Cabinet Installation','Quartz Countertops','Granite Countertops','Tile Backsplashes','Flooring','Lighting','Plumbing Fixtures','Appliance Installation','Trim Work','Painting'] : ['Design','Material Selection Guidance','Custom Tile Showers','Waterproofing Systems','Vanities','Countertops','Flooring','Lighting','Plumbing Fixtures','Shower Doors','Trim Work','Painting'];
 return <SiteShell><PageHero eyebrow={service.title} title={kitchen ? 'Kitchen Remodeling in Northern New Jersey' : 'Bathroom Remodeling Experts'} body={kitchen ? "The kitchen is the heart of the home. Whether you're planning a complete renovation or updating key features, Lakeside Kitchen & Bath LLC delivers kitchens that combine functionality, beauty, and long-term value." : 'Your bathroom should be comfortable, functional, and built to withstand daily use. We specialize in complete bathroom renovations that improve appearance, functionality, and value.'} actions={<ConsultationLink />} /><section className="section"><div className="container"><SectionIntro eyebrow="Services" title={`${service.title} Services`} /><ul className="package-list">{items.map(item=><li key={item}>{item}</li>)}</ul>{!kitchen && <><h2>Built for Long-Term Performance</h2><p>Every bathroom renovation is completed using professional installation practices designed to provide years of dependable performance.</p></>}{kitchen && <><h2>Why Homeowners Choose Lakeside</h2><ul className="package-list">{['Over 40 Years Experience','Licensed, Insured & Bonded','Daily Cleanup','Professional Communication','Quality Craftsmanship','2-Year Warranty'].map(item=><li key={item}>{item}</li>)}</ul></>}</div></section></SiteShell>;
}
function KitchenPage() { return <RemodelingPage kitchen />; }
function BathroomPage() { return <RemodelingPage />; }
function ProcessPage() { return <SiteShell><PageHero eyebrow="Our Process" title="Our Remodeling Process"  actions={<ConsultationLink />} /><ProcessSteps /></SiteShell>; }
function ServiceAreaPage() { return <SiteShell><PageHero eyebrow="Service Area" title="Proudly Serving Northern New Jersey" body={business.serviceAreaLabel} actions={<ConsultationLink />} /><ServiceAreaMap full /></SiteShell>; }

function FaqPage() { return <SiteShell><PageHero eyebrow="FAQ" title="FAQ" actions={<ConsultationLink />} /><FAQSection items={faqs} /></SiteShell>; }
function ContactPage() { return <SiteShell showFinalCta={false}><PageHero eyebrow="Contact" title="Let's Discuss Your Project" body="Whether you're planning a kitchen renovation, bathroom remodel, or tile installation project, we'd love to hear from you." aside={<DirectEstimatePanel inHero />} /><section className="section"><div className="container story-grid"><div><h2>Service Area</h2><p>{business.serviceAreaLabel}</p><p>Ronald Augustine, Owner</p><p>{business.license} · {business.licenseNumber}</p></div><div><h2>Ready to Transform Your Home?</h2><p>Let's discuss your project and create a renovation plan that works for your home and budget.</p><a className="button" href={business.phoneHref}>Call {business.phone}</a></div></div></section></SiteShell>; }

function ReviewsPage() {
 return <SiteShell><PageHero title="Reviews" body="Google reviews coming soon." /><section className="section"><div className="container reviews-page-content"><GoogleReviewPreview /></div></section></SiteShell>;
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
