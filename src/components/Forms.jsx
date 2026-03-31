import { useState } from 'react';
import { business, forms, quoteSidebarPoints, services } from '../content/site';
import { withBase } from '../utils';

function isPlaceholderEndpoint(endpoint) {
  return endpoint.includes('your-quote-form-id') || endpoint.includes('your-contact-form-id');
}

function StatusMessage({ status }) {
  if (!status?.message) return null;

  return (
    <div className={`form-status form-status--${status.type}`} role="status" aria-live="polite">
      {status.message}
    </div>
  );
}

async function submitForm(event, endpoint, setStatus, resetAfterSuccess = true) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);

  if (formData.get('company')) {
    setStatus({ type: 'success', message: 'Thanks. Your request was received.' });
    return;
  }

  if (isPlaceholderEndpoint(endpoint)) {
    setStatus({
      type: 'error',
      message:
        'Replace the placeholder Formspree endpoint in src/content/site.js or set a VITE_*_FORM_ENDPOINT value before going live.'
    });
    return;
  }

  setStatus({ type: 'pending', message: 'Sending your request...' });

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    setStatus({
      type: 'success',
      message: 'Thanks. Your request is on the way and we will follow up soon.'
    });

    if (resetAfterSuccess) {
      form.reset();
    }
  } catch (error) {
    setStatus({
      type: 'error',
      message: 'Something went wrong while sending the form. Please try again or call us directly.'
    });
  }
}

export function LeadSidebar() {
  return (
    <aside className="lead-sidebar" data-reveal>
      <p className="eyebrow">What to Expect</p>
      <h2>A quote request should feel simple, clear, and low pressure.</h2>
      <ul>
        {quoteSidebarPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="lead-sidebar__contact">
        <a className="button button--ghost" href={business.phoneHref}>
          Call {business.phone}
        </a>
        <a className="text-link" href={business.emailHref}>
          {business.email}
        </a>
      </div>
    </aside>
  );
}

export function QuoteForm() {
  const [status, setStatus] = useState(null);

  return (
    <form
      className="lead-form"
      action={forms.quoteEndpoint}
      method="POST"
      onSubmit={(event) => submitForm(event, forms.quoteEndpoint, setStatus)}
      data-reveal
    >
      <input type="hidden" name="_subject" value={`${business.name} quote request`} />
      <div className="sr-only">
        <label htmlFor="company">Leave this field empty</label>
        <input id="company" name="company" type="text" autoComplete="off" tabIndex="-1" />
      </div>
      <div className="form-grid">
        <label>
          Name
          <input type="text" name="name" placeholder="Your full name" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" placeholder="Best phone number" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label>
          Address
          <input type="text" name="address" placeholder="Project address" required />
        </label>
        <label>
          Project Type
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>
              Select one
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <label>
          Budget Range
          <select name="budget" defaultValue="">
            <option value="" disabled>
              Select range
            </option>
            <option>Under $15,000</option>
            <option>$15,000 - $35,000</option>
            <option>$35,000 - $75,000</option>
            <option>$75,000+</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>
          Desired Timeline
          <select name="timeline" defaultValue="">
            <option value="" disabled>
              Select timing
            </option>
            <option>As soon as possible</option>
            <option>Within 1-3 months</option>
            <option>Within 3-6 months</option>
            <option>Researching for later</option>
          </select>
        </label>
      </div>
      <fieldset className="checkbox-fieldset">
        <legend>Project Interests</legend>
        <div className="checkbox-grid">
          <label>
            <input type="checkbox" name="interests[]" value="Bathroom Remodel" />
            Bathroom Remodel
          </label>
          <label>
            <input type="checkbox" name="interests[]" value="Kitchen Remodel" />
            Kitchen Remodel
          </label>
          <label>
            <input type="checkbox" name="interests[]" value="Deck" />
            Deck
          </label>
          <label>
            <input type="checkbox" name="interests[]" value="Windows" />
            Windows
          </label>
          <label>
            <input type="checkbox" name="interests[]" value="Other" />
            Other
          </label>
        </div>
      </fieldset>
      <label>
        Message
        <textarea
          name="message"
          rows="6"
          placeholder="Tell us what you want to improve, what feels dated, or what the finished space should do better."
          required
        />
      </label>
      <StatusMessage status={status} />
      <div className="form-actions">
        <button className="button" type="submit">
          Get My Free Estimate
        </button>
        <p>
          Static-host ready. Replace the Formspree placeholder in `src/content/site.js` or use
          `VITE_QUOTE_FORM_ENDPOINT`.
        </p>
      </div>
    </form>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState(null);

  return (
    <form
      className="lead-form lead-form--contact"
      action={forms.contactEndpoint}
      method="POST"
      onSubmit={(event) => submitForm(event, forms.contactEndpoint, setStatus, false)}
      data-reveal
    >
      <input type="hidden" name="_subject" value={`${business.name} contact form`} />
      <div className="sr-only">
        <label htmlFor="contact-company">Leave this field empty</label>
        <input id="contact-company" name="company" type="text" autoComplete="off" tabIndex="-1" />
      </div>
      <div className="form-grid">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" placeholder="Optional but helpful" />
        </label>
        <label>
          Project Type
          <select name="projectType" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Message
        <textarea
          name="message"
          rows="5"
          placeholder="Share a quick overview of your project or question."
          required
        />
      </label>
      <StatusMessage status={status} />
      <div className="form-actions">
        <button className="button" type="submit">
          Send Message
        </button>
        <a className="text-link" href={withBase(business.mapUrl)}>
          Open map placeholder
        </a>
      </div>
    </form>
  );
}
