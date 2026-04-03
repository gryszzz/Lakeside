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

export function ServiceCards({ detailed = false, intro, compact = false }) {
  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Services"
          title={detailed ? 'Full kitchen and bathroom renovations' : 'Full kitchen and bathroom renovations'}
          body={
            intro ||
            'Two core services, handled with cleaner planning, steadier communication, and a more finished result.'
          }
        />
        <div className={`service-grid ${detailed ? 'service-grid--detailed' : ''}`}>
          {services.map((service) => (
            <article key={service.slug} className={`service-card ${compact ? 'service-card--compact' : ''}`} data-reveal>
              <div className="service-card__header">
                <p className="eyebrow">{service.title}</p>
                <h3>{service.short}</h3>
              </div>
              {compact ? (
                <div className="service-chip-list">
                  {service.examples.slice(0, 2).map((example) => (
                    <span key={example}>{example}</span>
                  ))}
                </div>
              ) : (
                <>
                  <p>{service.value}</p>
                  <div className="service-chip-list service-chip-list--detailed">
                    {service.examples.map((example) => (
                      <span key={example}>{example}</span>
                    ))}
                  </div>
                </>
              )}
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
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs({ compact = false }) {
  const visibleReasons = compact ? reasons.slice(0, 3) : reasons;

  return (
    <section className="section section--contrast">
      <div className="container">
        <SectionIntro
          eyebrow="Why Homeowners Choose Us"
          title={compact ? 'Why the brand feels easy to trust' : 'The kind of specialist team homeowners feel comfortable trusting with expensive rooms'}
          body={
            compact
              ? 'Clear planning, cleaner execution, and a more polished homeowner experience.'
              : 'The goal is simple: deliver premium-looking kitchens and bathrooms through a process that feels calm, capable, and well managed.'
          }
        />
        <div className="reason-grid">
          {visibleReasons.map((reason) => (
            <article key={reason.title} className={`reason-card ${compact ? 'reason-card--compact' : ''}`} data-reveal>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialCards({ compact = false, limit = testimonials.length }) {
  const visibleTestimonials = testimonials.slice(0, limit);

  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Client Feedback"
          title={compact ? 'What homeowners say after the work is done' : 'Trust is earned through both the result and the experience'}
          body={
            compact
              ? 'Short, direct feedback from clients who cared about quality.'
              : 'Strong referrals come from homeowners who felt taken care of from the first conversation through the final detail.'
          }
        />
        <div className={`testimonial-grid ${compact ? 'testimonial-grid--compact' : ''}`}>
          {visibleTestimonials.map((testimonial) => (
            <article key={testimonial.name} className={`testimonial-card ${compact ? 'testimonial-card--compact' : ''}`} data-reveal>
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
