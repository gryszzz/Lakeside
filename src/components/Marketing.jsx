import { business, processSteps, reasons, services, stats, testimonials, trustBadges, values } from '../content/site';
import { withBase } from '../utils';
import { SectionIntro } from './Layout';

export function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container trust-bar__grid" data-reveal>
        {trustBadges.map((badge) => (
          <div key={badge} className="trust-bar__item">
            <span className="trust-bar__dot" />
            <p>{badge}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function StatGrid() {
  return (
    <div className="stat-grid" data-reveal>
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card">
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export function ServiceCards({ detailed = false, intro }) {
  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Services"
          title={detailed ? 'Kitchen and bathroom services built around precision and finish quality' : 'Focused on the rooms that shape everyday living most'}
          body={
            intro ||
            'From full remodels to tile, shower, vanity, and finish updates, each service is centered on clean execution and a more polished finished result.'
          }
        />
        <div className={`service-grid ${detailed ? 'service-grid--detailed' : ''}`}>
          {services.map((service) => (
            <article key={service.slug} className="service-card" data-reveal>
              <div className="service-card__header">
                <p className="eyebrow">{service.title}</p>
                <h3>{service.short}</h3>
              </div>
              <p>{service.value}</p>
              <div className="service-card__lists">
                <div>
                  <h4>Benefits</h4>
                  <ul>
                    {service.homeownerBenefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Common projects</h4>
                  <ul>
                    {service.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceQuoteSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="service-quote-card" data-reveal>
          <div>
            <p className="eyebrow">Project Fit</p>
            <h2>Planning a kitchen or bathroom remodel?</h2>
            <p>
              Tell us what space you want to improve and what feels off today. We will help you sort through fit,
              scope, timing, and the right next step.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button" href={withBase('quote/')}>
              Request Estimate
            </a>
            <a className="button button--ghost" href={business.phoneHref}>
              Call {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="section section--contrast">
      <div className="container">
        <SectionIntro
          eyebrow="Why Homeowners Choose Us"
          title="The kind of specialist team homeowners feel comfortable trusting with expensive rooms"
          body="The goal is simple: deliver premium-looking kitchens and bathrooms through a process that feels calm, capable, and well managed."
        />
        <div className="reason-grid">
          {reasons.map((reason) => (
            <article key={reason.title} className="reason-card" data-reveal>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialCards() {
  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Client Feedback"
          title="Trust is earned through both the result and the experience"
          body="Strong referrals come from homeowners who felt taken care of from the first conversation through the final detail."
        />
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card" data-reveal>
              <p className="testimonial-card__quote">“{testimonial.quote}”</p>
              <div className="testimonial-card__meta">
                <strong>{testimonial.name}</strong>
                <span>
                  {testimonial.project} • {testimonial.location}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSteps() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionIntro
          eyebrow="Process"
          title="A remodeling experience that feels organized from the beginning"
          body="Kitchen and bathroom projects go better when the process is clear. We keep each phase understandable, realistic, and steady."
        />
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article key={step.title} className="process-card" data-reveal>
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

export function ValuesGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Values"
          title="The standards behind the work"
          body="The best kitchen and bathroom remodelers feel dependable because their standards show up in both craftsmanship and communication."
        />
        <div className="reason-grid">
          {values.map((value) => (
            <article key={value.title} className="reason-card" data-reveal>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceAreaSection() {
  return (
    <section className="section section--soft">
      <div className="container service-area">
        <div data-reveal>
          <p className="eyebrow">Service Area</p>
          <h2>Local homeowners want a remodeling specialist who is close, responsive, and established.</h2>
          <p>{business.serviceAreaLabel}</p>
        </div>
        <div className="service-area__list" data-reveal>
          {business.serviceAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactInfoGrid() {
  const cards = [
    {
      title: 'Call',
      body: business.phone,
      href: business.phoneHref,
      copy: 'Talk through your kitchen or bathroom project, timing, and next steps.',
      label: 'Call now'
    },
    {
      title: 'Email',
      body: business.email,
      href: business.emailHref,
      copy: 'Send room photos, project notes, or remodeling questions.',
      label: 'Send email'
    },
    {
      title: 'Service Area',
      body: business.serviceAreaLabel,
      href: business.mapUrl,
      copy: 'Confirm coverage for your kitchen or bathroom remodel before scheduling the next step.',
      label: 'View map'
    }
  ];

  return (
    <div className="contact-card-grid">
      {cards.map((card) => (
        <article key={card.title} className="contact-card" data-reveal>
          <p className="eyebrow">{card.title}</p>
          <h3>{card.body}</h3>
          <p>{card.copy}</p>
          <a className="text-link" href={withBase(card.href)}>
            {card.label}
          </a>
        </article>
      ))}
    </div>
  );
}
