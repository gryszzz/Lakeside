import { useEffect, useRef, useState } from 'react';
import { business, processSteps, reasons, services, stats, testimonials, trustBadges, values } from '../content/site';
import { withBase } from '../utils';
import { SectionIntro } from './Layout';

let googleMapsLoaderPromise;

function loadGoogleMapsApi(apiKey) {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Google Maps can only load in the browser.'));
  }

  if (window.google?.maps?.Map) {
    return Promise.resolve(window.google.maps);
  }

  if (googleMapsLoaderPromise) {
    return googleMapsLoaderPromise;
  }

  googleMapsLoaderPromise = new Promise((resolve, reject) => {
    const callbackName = '__lakesideGoogleMapsReady';
    const existingScript = document.querySelector('script[data-google-maps-loader="true"]');

    window[callbackName] = () => {
      if (window.google?.maps) {
        resolve(window.google.maps);
      } else {
        reject(new Error('Google Maps failed to initialize.'));
      }
      delete window[callbackName];
    };

    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&loading=async&v=weekly&callback=${callbackName}`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMapsLoader = 'true';
    script.onerror = () => {
      googleMapsLoaderPromise = null;
      delete window[callbackName];
      reject(new Error('Google Maps script failed to load.'));
    };

    document.head.append(script);
  });

  return googleMapsLoaderPromise;
}

function GoogleCoverageMap({ googleProfile }) {
  const mapRef = useRef(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;

  useEffect(() => {
    if (!apiKey || !mapRef.current) {
      return undefined;
    }

    let cancelled = false;

    loadGoogleMapsApi(apiKey)
      .then((maps) => {
        if (cancelled || !mapRef.current) {
          return;
        }

        const { coverageCenter } = googleProfile;
        const map = new maps.Map(mapRef.current, {
          center: coverageCenter,
          zoom: 8,
          mapTypeId: 'roadmap',
          ...(mapId ? { mapId } : {}),
          disableDefaultUI: true,
          zoomControl: true,
          clickableIcons: false,
          gestureHandling: 'cooperative'
        });

        new maps.Marker({
          map,
          position: coverageCenter,
          title: googleProfile.coverageCenter.label,
          icon: {
            path: maps.SymbolPath.CIRCLE,
            scale: 5.5,
            fillColor: '#d9e7ff',
            fillOpacity: 1,
            strokeColor: '#0c182b',
            strokeWeight: 2
          }
        });

        const mapCapabilities = map.getMapCapabilities?.();
        if (mapId && mapCapabilities?.isDataDrivenStylingAvailable) {
          const countyLayer = map.getFeatureLayer?.(window.google.maps.FeatureType.ADMINISTRATIVE_AREA_LEVEL_2);
          if (countyLayer) {
            countyLayer.style = () => ({
              strokeColor: '#8bb2ff',
              strokeOpacity: 0.9,
              strokeWeight: 2,
              fillColor: '#8bb2ff',
              fillOpacity: 0.06
            });
          }
        }

      })
      .catch(() => {
        setLoadFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [apiKey, googleProfile]);

  return (
    <div className="google-map-card__frame google-map-card__frame--coverage">
      {apiKey && !loadFailed ? (
        <div ref={mapRef} className="google-map-card__canvas" />
      ) : (
        <iframe
          title={`${business.name} Google map`}
          src={withBase(googleProfile.mapEmbedUrl)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
}

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

export function GooglePresenceSection({
  eyebrow = 'Reviews',
  title = 'Google reviews, rating, and map',
  body = 'Read the Google feedback, check the rating, and open the map before you reach out.'
} = {}) {
  const googleProfile = business.googleProfile;

  return (
    <section className="section section--soft">
      <div className="container google-presence">
        <div className="google-presence__info">
          <SectionIntro
            eyebrow={eyebrow}
            title={title}
            body={body}
          />
          <div className="google-rating-card" data-reveal>
            <div className="google-rating-card__score" aria-label={`Google rating ${googleProfile.rating} out of 5`}>
              <strong>{googleProfile.rating}</strong>
              <span>Google rating</span>
            </div>
            <div className="google-rating-card__copy">
              <p className="eyebrow">Google reviews</p>
              <h3>{googleProfile.reviewCountLabel}</h3>
              <div className="google-rating-card__stars" aria-hidden="true">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p>{googleProfile.summary}</p>
            </div>
          </div>
          <div className="hero-actions google-presence__actions" data-reveal>
            <a
              className="button button--hero-tech button--hero-tech--compact"
              href={withBase(googleProfile.readReviewsUrl)}
              target="_blank"
              rel="noreferrer"
            >
              Read Google Reviews
            </a>
            <a
              className="button button--ghost button--hero-tech button--hero-tech--ghost button--hero-tech--compact"
              href={withBase(googleProfile.writeReviewUrl)}
              target="_blank"
              rel="noreferrer"
            >
              Leave a Review
            </a>
          </div>
          <div className="google-review-stage" data-reveal>
            <div className="google-review-stage__header">
              <p className="eyebrow">{googleProfile.liveReviewsLabel}</p>
            </div>
            <div className="google-review-grid">
              {googleProfile.featuredReviews.map((review) => (
                <article key={`${review.author}-${review.location}`} className="google-review-card">
                  <div className="google-review-card__stars" aria-hidden="true">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <blockquote>{review.quote}</blockquote>
                  <footer>
                    <strong>{review.author}</strong>
                    <span>{review.location}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="map-card google-map-card" data-reveal>
          <div className="google-map-card__copy">
            <div className="google-map-card__copy-top">
              <p className="eyebrow">Map & Service Area</p>
              <span className="google-map-card__tag">{googleProfile.coverageCenter.label}</span>
            </div>
            <a
              className="google-map-card__link"
              href={withBase(googleProfile.profileUrl)}
              target="_blank"
              rel="noreferrer"
            >
              Open Google Maps
            </a>
          </div>
          <GoogleCoverageMap googleProfile={googleProfile} />
        </div>
      </div>
    </section>
  );
}
