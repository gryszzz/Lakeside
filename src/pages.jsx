import { BrandConnections, GoogleReviewPreview } from './components/BrandConnections';
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
      <p className="hero__body">Complete kitchen and bathroom renovations, from planning through the finishing details. Serving homeowners across Sussex, Morris, Passaic, and Warren Counties.</p>
      <div className="hero-actions"><a className="button button--hero-tech" href={withBase('contact/')}><svg className="hero-cta__calendar" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="16" rx="2.5" /><path d="M7.5 3v4M16.5 3v4M3.5 9.5h17M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" /></svg><span>Schedule a Consultation</span><span className="hero-cta__arrow" aria-hidden="true">→</span></a><a className="hero-call" href={business.phoneHref} aria-label={`Call Ron at ${business.phone}`}><span className="header-call-icon" aria-hidden="true" /><span className="hero-call__copy"><span>Call Ron</span><strong>{business.phone}</strong></span></a></div>
      <p className="hero-signature"><span className="hero-signature__check" aria-hidden="true">✓</span>We do the complete job!</p><p className="hero-license">NJ HIC #13VH13915600</p>
    </div>
    <div className="hero-blueprint" role="img" aria-label="Illustrated kitchen renovation plan showing cabinetry, counters, and an island">
      <div className="hero-blueprint__topline"><span>Lakeside · Design / Build</span><span>Plan 01</span></div>
      <svg className="hero-blueprint__drawing" viewBox="0 0 640 440" aria-hidden="true">
        <path className="blueprint-wall" d="M92 68h456v276H92z" />
        <path className="blueprint-counter" d="M128 279h382v24H128z" />
        <path className="blueprint-cabinet" d="M132 303h112v105H132zM252 303h112v105H252zM372 303h136v105H372z" />
        <path className="blueprint-detail" d="M188 324v62M308 324v62M440 324v62M170 279v-18h120v18M328 279v-18h120v18" />
        <path className="blueprint-window" d="M294 104h132v108H294zM360 104v108M294 158h132" />
        <path className="blueprint-upper" d="M128 104h138v108H128zM454 104h56v108h-56zM174 104v108M220 104v108M482 104v108" />
        <path className="blueprint-island" d="M176 318h276v22H176zM194 340h240v76H194z" />
        <path className="blueprint-detail" d="M245 357v43M383 357v43M232 318v-7h48v7M356 318v-7h48v7" />
        <path className="blueprint-dimension" d="M128 78h382M128 72v12M510 72v12M112 104v304M106 104h12M106 408h12" />
        <circle className="blueprint-point" cx="320" cy="225" r="5" />
      </svg>
      <div className="hero-blueprint__caption"><span className="hero-blueprint__mark">40+</span><span><strong>Years of hands-on experience</strong><small>One team from planning through finish</small></span></div>
      <span className="hero-blueprint__stamp">Illustrative plan</span>
    </div>
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
 return <div className={inHero ? 'estimate-panel estimate-panel--hero' : 'lead-form estimate-panel'}><p className="eyebrow">Contact Information</p><h2>Lakeside Kitchen & Bath LLC</h2><div className="estimate-method-grid"><article className="estimate-contact-row"><p className="eyebrow">Call</p><h3><a href={business.phoneHref}>{business.phone}</a></h3></article><article className="estimate-contact-row"><p className="eyebrow">Email</p><h3><a href={business.emailHref}>{business.email}</a></h3></article></div><p>Sparta, NJ</p><p>{business.serviceAreaLabel}</p></div>;
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
 return <SiteShell><PageHero eyebrow="About Us" title="A Local Remodeling Company Built on Experience" body="At Lakeside Kitchen & Bath LLC, we believe every homeowner deserves a remodeling experience that is professional, organized, and stress-free." /><section className="section"><div className="container story-grid"><div><p>With over 40 years of hands-on construction and remodeling experience, we've built our reputation on quality craftsmanship, honest communication, and respect for our clients' homes.</p><h3>Our approach is simple:</h3><ul><li>Listen carefully</li><li>Plan thoroughly</li><li>Execute professionally</li><li>Deliver exceptional results</li></ul><p>Whether you're updating a bathroom, creating your dream kitchen, or completely transforming your living space, our goal is to provide a finished product you'll enjoy for years to come.</p></div><div className="story-card"><h2>Our Mission</h2><p>To deliver high-quality kitchen and bathroom renovations through professional craftsmanship, clear communication, and exceptional service.</p></div></div></section><ValuesGrid /><ServiceAreaMap /></SiteShell>;
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
function ContactPage() { return <SiteShell showFinalCta={false}><PageHero eyebrow="Contact" title="Let's Discuss Your Project" body="Whether you're planning a kitchen renovation, bathroom remodel, or tile installation project, we'd love to hear from you." aside={<DirectEstimatePanel inHero showActions={false}  />} /><section className="section"><div className="container story-grid"><div><h2>Service Area</h2><p>{business.serviceAreaLabel}</p><p>Ronald Augustine, Owner</p><p>Mailing address: {business.address}</p><p>{business.license} · {business.licenseNumber}</p></div><div><h2>Ready to Transform Your Home?</h2><p>Let's discuss your project and create a renovation plan that works for your home and budget.</p><a className="button" href={business.phoneHref}>Call {business.phone}</a></div></div></section></SiteShell>; }

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
