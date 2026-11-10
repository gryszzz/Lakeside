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
      <h1>Transforming Kitchens & Bathrooms With Over 40 Years of Experience</h1>
      <p className="hero__body">Beautiful renovations begin with quality craftsmanship, clear communication, and a contractor you can trust. At Lakeside Kitchen & Bath LLC, we specialize in kitchen and bathroom remodeling throughout Sussex, Morris, Passaic, and Warren Counties, delivering professional results designed to last.</p>
      <div className="hero-actions"><a className="button button--hero-tech" href={withBase('contact/')}>Schedule Your Consultation Today</a><a className="button button--ghost hero-call" href={business.phoneHref} aria-label={`Call Ron at ${business.phone}`}><span className="header-call-icon" aria-hidden="true" /><span className="hero-call__copy"><span>Call Ron</span><strong>{business.phone}</strong></span></a></div>
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
 return <section className="section home-services"><div className="container"><SectionIntro title="Services Overview" /><div className="home-service-pair">{services.map(service=><article key={service.slug} className="home-service-feature">{['kitchen-remodeling','bathroom-remodeling'].includes(service.slug) && <div className="photo-placeholder service-photo" role="img" aria-label={`Space reserved for a real Lakeside ${service.title.toLowerCase()} photo`}><span>{service.title.replace(' Remodeling', '')} project photo</span><small>Real project photo coming soon</small></div>}<h3>{service.title}</h3><p>{service.short}</p><a className="text-link" href={withBase(['kitchen-remodeling','bathroom-remodeling'].includes(service.slug) ? `${service.slug}/` : `services/#${service.slug}`)}>Learn more</a></article>)}</div></div></section>;
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
