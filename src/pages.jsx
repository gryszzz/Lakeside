import { BrandConnections } from './components/BrandConnections';
import { ServiceAreaMap } from './components/ServiceAreaMap';
import {
  business,
  faqs, services, processSteps
} from './content/site';
import { FAQSection, PageHero, SectionIntro, SiteShell } from './components/Layout';
import {
  ProcessSteps,
  ServiceCards,
  StatGrid,
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
      <div className="hero-actions"><a className="button button--hero-tech" href={withBase('contact/')}>Schedule Your Consultation Today</a><a className="button button--ghost" href={business.phoneHref}>Call: {business.phone}</a></div>
      <p className="hero-signature">We do the complete job!</p><p className="hero-license">NJ HIC #13VH13915600</p>
    </div>
    <div className="photo-placeholder hero-photo" role="img" aria-label="Space reserved for a real Lakeside kitchen project photo"><span>Kitchen project photo</span><small>Ron’s project photography coming soon</small></div>
  </div><div className="hero-trust-band"><div className="container"><span><strong>40+</strong> Years of Experience</span><span>Licensed, Insured & Bonded</span><span>2-Year Workmanship Warranty</span></div></div></section>;
}

function HomeServices() {
 return <section className="section home-services"><div className="container"><SectionIntro eyebrow="Services Overview" title="Kitchen & Bathroom Remodeling Specialists" /><div className="home-service-pair">{services.map(service=><article key={service.slug} className="home-service-feature">{['kitchen-remodeling','bathroom-remodeling'].includes(service.slug) && <div className="photo-placeholder service-photo" role="img" aria-label={`Space reserved for a real Lakeside ${service.title.toLowerCase()} photo`}><span>{service.title.replace(' Remodeling', '')} project photo</span><small>Real project photo coming soon</small></div>}<h3>{service.title}</h3><p>{service.short}</p><a className="text-link" href={withBase(['kitchen-remodeling','bathroom-remodeling'].includes(service.slug) ? `${service.slug}/` : `services/#${service.slug}`)}>Learn more</a></article>)}</div></div></section>;
}

function HomeProcess() {
 return <section className="section home-process"><div className="container"><SectionIntro eyebrow="Our Remodeling Process" title="The complete job. One clear process." /><ol className="home-process__steps">{processSteps.slice(0,3).map((step,index)=><li key={step.title}><span>0{index+1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol><a className="text-link" href={withBase('process/')}>View our complete seven-step process</a></div></section>;
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
        title="Kitchen & Bathroom Remodeling"
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
      <PageHero eyebrow="Our Work" title="Craftsmanship worth seeing." body="We’re preparing a collection of Lakeside’s real kitchen and bathroom projects. In the meantime, talk with Ron about your ideas, materials, and scope." actions={<ConsultationLink />} />
      <section className="section"><div className="container"><SectionIntro eyebrow="Your project" title="Tell us what you have in mind." body="Send Ron your current room photos and the improvements you’d like to make. We’ll help you plan the next step." /><a className="button" href={business.emailHref}>Email Ron your project</a></div></section>
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
            <h3>Our Mission</h3>
            <p>To deliver high-quality kitchen and bathroom renovations through professional craftsmanship, clear communication, and exceptional service.</p>
          </div>
        }
      />
      <section className="section"><div className="container story-grid"><div><h2>Over 40 years of hands-on experience</h2><p>With over 40 years of hands-on construction and remodeling experience, we've built our reputation on quality craftsmanship, honest communication, and respect for our clients' homes.</p><h3>Our approach is simple</h3><ul><li>Listen carefully</li><li>Plan thoroughly</li><li>Execute professionally</li><li>Deliver exceptional results</li></ul><p>Whether you're updating a bathroom, creating your dream kitchen, or completely transforming your living space, our goal is to provide a finished product you'll enjoy for years to come.</p></div><div className="story-card"><div><p className="eyebrow">Our Mission</p><h2>Craftsmanship. Communication. Service.</h2><p>To deliver high-quality kitchen and bathroom renovations through professional craftsmanship, clear communication, and exceptional service.</p></div></div></div></section>
      <ValuesGrid />
      <WhyChooseUs />
      <ServiceAreaMap />
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


function ConsultationLink() { return <a className="button" href={withBase('contact/')}>Schedule Your Consultation Today</a>; }
function RemodelingPage({ kitchen = false }) {
 const service = services.find(item => item.slug === (kitchen ? 'kitchen-remodeling' : 'bathroom-remodeling'));
 const items = kitchen ? ['Design','Material Selection Guidance','Cabinet Installation','Quartz Countertops','Granite Countertops','Tile Backsplashes','Flooring','Lighting','Plumbing Fixtures','Appliance Installation','Trim Work','Painting'] : ['Design','Material Selection Guidance','Custom Tile Showers','Waterproofing Systems','Vanities','Countertops','Flooring','Lighting','Plumbing Fixtures','Shower Doors','Trim Work','Painting'];
 return <SiteShell><PageHero eyebrow={service.title} title={kitchen ? 'Kitchen Remodeling in Northern New Jersey' : 'Bathroom Remodeling Experts'} body={kitchen ? 'The kitchen is the heart of the home. Whether you’re planning a complete renovation or updating key features, Lakeside Kitchen & Bath LLC delivers kitchens that combine functionality, beauty, and long-term value.' : 'Your bathroom should be comfortable, functional, and built to withstand daily use. We specialize in complete bathroom renovations that improve appearance, functionality, and value.'} actions={<ConsultationLink />} /><section className="section"><div className="container"><SectionIntro eyebrow="Services" title={`${service.title} Services`} /><ul className="package-list">{items.map(item=><li key={item}>{item}</li>)}</ul>{!kitchen && <><h2>Built for Long-Term Performance</h2><p>Every bathroom renovation is completed using professional installation practices designed to provide years of dependable performance.</p></>}</div></section><WhyChooseUs /></SiteShell>;
}
function KitchenPage() { return <RemodelingPage kitchen />; }
function BathroomPage() { return <RemodelingPage />; }
function ProcessPage() { return <SiteShell><PageHero eyebrow="Our Process" title="Our Remodeling Process" body="From your first consultation to warranty support, we keep your renovation organized and clearly communicated." actions={<ConsultationLink />} /><ProcessSteps /></SiteShell>; }
function ServiceAreaPage() { return <SiteShell><PageHero eyebrow="Service Area" title="Proudly Serving Northern New Jersey" body={business.serviceAreaLabel} actions={<ConsultationLink />} /><ServiceAreaMap full /></SiteShell>; }

function FaqPage() { return <SiteShell><PageHero eyebrow="FAQ" title="Your Remodeling Questions, Answered" body="Planning, materials, licensing, and warranty support." actions={<ConsultationLink />} /><FAQSection items={faqs} /></SiteShell>; }
function ContactPage() { return <SiteShell showFinalCta={false}><PageHero eyebrow="Contact" title="Let’s Discuss Your Project" body="Whether you’re planning a kitchen renovation, bathroom remodel, or tile installation project, we’d love to hear from you." aside={<DirectEstimatePanel inHero showActions={false} title="Lakeside Kitchen & Bath LLC" />} /><section className="section"><div className="container story-grid"><div><h2>Based in Sparta, NJ</h2><p>{business.serviceAreaLabel}</p><p>Ronald Augustine, Owner</p><p>Mailing address: {business.address}</p><p>{business.license} · {business.licenseNumber}</p></div><div><h2>Ready to Transform Your Home?</h2><p>Let's discuss your project and create a renovation plan that works for your home and budget.</p><a className="button" href={business.phoneHref}>Call {business.phone}</a></div></div></section></SiteShell>; }

export const pages = {
  kitchen: KitchenPage, bathroom: BathroomPage, process: ProcessPage, areas: ServiceAreaPage, faq: FaqPage, contact: ContactPage,
  home: HomePage,
  services: ServicesPage,
  projects: ProjectsPage,
  about: AboutPage,
  quote: QuotePage
};
