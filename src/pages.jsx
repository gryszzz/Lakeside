import { ServiceAreaMap } from './components/ServiceAreaMap';
import {
  business,
  faqs, services
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
  return <section className="hero hero--refined"><div className="container hero__grid">
    <div className="hero__content" data-reveal>
      <p className="eyebrow">Sparta, NJ · Kitchen & bathroom remodeling</p>
      <h1>Your home.<br />Beautifully <span>rebuilt.</span></h1>
      <p className="hero__body">Thoughtful planning. Quality craftsmanship. Over 40 years of hands-on experience, brought to your kitchen or bathroom.</p>
      <div className="hero-actions"><a className="button button--hero-tech" href={withBase('contact/')}>Plan your remodel</a><a className="button button--ghost" href={business.phoneHref}>Call Ron</a></div>
      <p className="hero__coverage">Sussex · Morris · Passaic · Warren Counties</p>
    </div>
    <div className="hero-brand-panel" data-reveal>
      <div className="hero-brand-panel__identity"><img src={withBase('images/branding/lakeside-logo.png')} alt="Lakeside Kitchen & Bath LLC" width="720" height="400" /><p>We do the complete job!</p></div>
      <div className="hero-brand-panel__contact"><span>Your local point of contact</span><strong>Ron Augustine, Owner</strong><a href={business.phoneHref}>{business.phone}</a><a href={business.emailHref}>{business.email}</a></div>
    </div>
  </div><div className="container"><div className="home-proof-strip"><div><strong>40+</strong><span>Years of experience</span></div><div><strong>Licensed, insured & bonded</strong><span>{business.licenseNumber}</span></div><div><strong>2-year warranty</strong><span>Workmanship backed</span></div></div></div></section>;
}
function HomeServices() {
 return <section className="section home-services"><div className="container"><SectionIntro eyebrow="The complete job" title="Two rooms. One trusted contractor." body="From the first layout to the finishing details, we help bring your renovation together." /><div className="home-service-pair">{services.slice(0,2).map((service,index)=><a key={service.slug} className="home-service-feature" href={withBase(`${service.slug}/`)}><span className="home-service-feature__number">0{index+1}</span><h3>{service.title}</h3><p>{service.short}</p><span className="text-link">Explore services</span></a>)}</div><div className="home-supporting-services"><span>Design & material selection</span><span>Tile & backsplashes</span><span>Cabinets & countertops</span><span>Flooring & lighting</span></div></div></section>;
}
function HomeProcess() {
 return <section className="section home-process"><div className="container"><div className="home-section-heading"><SectionIntro eyebrow="Clear from the start" title="A better remodel starts with a plan." /><a className="text-link" href={withBase('process/')}>Our full process</a></div><ol className="home-process__steps"><li><span>01</span><h3>Talk & plan</h3><p>Share your goals, budget, and vision. We listen and prepare a detailed written proposal.</p></li><li><span>02</span><h3>Select & schedule</h3><p>Choose layouts, materials, and finishes with guidance. Align the schedule before work begins.</p></li><li><span>03</span><h3>Build & enjoy</h3><p>Professional installation, daily cleanup, a final walkthrough, and 2-year workmanship support.</p></li></ol></div></section>;
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
      <WhyChooseUs compact />
      <HomeProcess />
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
        title="Full kitchen and bathroom renovations"
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
      <PageHero eyebrow="Our Work" title="Craftsmanship worth seeing." body="We’re preparing a collection of Lakeside’s real kitchen and bathroom projects. In the meantime, talk with Ron about your ideas, materials, and scope." actions={<ConsultationLink />} aside={<StatGrid />} />
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
            <h3>Steady planning. Clean execution.</h3>
            <p>Kitchen and bathroom remodels handled with clear scope, disciplined craftsmanship, and communication that stays consistent throughout the project.</p>
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
 return <SiteShell><PageHero eyebrow={service.title} title={kitchen ? 'Kitchen Remodeling in Northern New Jersey' : 'Bathroom Remodeling Experts'} body={kitchen ? 'The kitchen is the heart of the home. Whether you’re planning a complete renovation or updating key features, Lakeside Kitchen & Bath LLC delivers kitchens that combine functionality, beauty, and long-term value.' : 'Your bathroom should be comfortable, functional, and built to withstand daily use. We specialize in complete bathroom renovations that improve appearance, functionality, and value.'} actions={<ConsultationLink />} aside={<StatGrid />} /><section className="section"><div className="container"><SectionIntro eyebrow="Services" title={`${service.title} Services`} /><ul className="package-list">{items.map(item=><li key={item}>{item}</li>)}</ul>{!kitchen && <><h2>Built for Long-Term Performance</h2><p>Every bathroom renovation is completed using professional installation practices designed to provide years of dependable performance.</p></>}</div></section><WhyChooseUs /></SiteShell>;
}
function KitchenPage() { return <RemodelingPage kitchen />; }
function BathroomPage() { return <RemodelingPage />; }
function ProcessPage() { return <SiteShell><PageHero eyebrow="Our Process" title="Our Remodeling Process" body="From your first consultation to warranty support, we keep your renovation organized and clearly communicated." actions={<ConsultationLink />} aside={<StatGrid />} /><ProcessSteps /></SiteShell>; }
function ServiceAreaPage() { return <SiteShell><PageHero eyebrow="Service Area" title="Your local remodeling specialist." body="Based in Sparta, proudly serving homeowners throughout Northern New Jersey." actions={<ConsultationLink />} aside={<StatGrid />} /><ServiceAreaMap full /></SiteShell>; }

function FaqPage() { return <SiteShell><PageHero eyebrow="FAQ" title="Your Remodeling Questions, Answered" body="Planning, materials, licensing, and warranty support." actions={<ConsultationLink />} aside={<StatGrid />} /><FAQSection items={faqs} /></SiteShell>; }
function ContactPage() { return <SiteShell showFinalCta={false}><PageHero eyebrow="Contact" title="Let’s Discuss Your Project" body="Whether you’re planning a kitchen renovation, bathroom remodel, or tile installation project, we’d love to hear from you." aside={<DirectEstimatePanel inHero showActions={false} title="Lakeside Kitchen & Bath LLC" />} /><section className="section"><div className="container story-grid"><div><h2>Based in Sparta, NJ</h2><p>{business.serviceAreaLabel}</p><p>Ronald Augustine, Owner</p><p>Mailing address: {business.address}</p><p>{business.license} · {business.licenseNumber}</p></div><div><h2>Ready to Transform Your Home?</h2><p>Let's discuss your project and create a renovation plan that works for your home and budget.</p><a className="button" href={business.phoneHref}>Call {business.phone}</a></div></div></section></SiteShell>; }

export const pages = {
  kitchen: KitchenPage, bathroom: BathroomPage, process: ProcessPage, areas: ServiceAreaPage, faq: FaqPage, contact: ContactPage,
  home: HomePage,
  services: ServicesPage,
  projects: ProjectsPage,
  about: AboutPage,
  quote: QuotePage
};
