import { ServiceEmoji } from './ServiceEmoji';
import { services, business } from '../content/site';
import { withBase } from '../utils';

const serviceStyle = {
  'kitchen-remodeling': { label: 'The heart of your home', note: 'A better flow. A place to gather.', kind: 'kitchen' },
  'bathroom-remodeling': { label: 'Your everyday retreat', note: 'Comfort in every detail.', kind: 'bathroom' },
  'design-material-selection': { label: 'A considered starting point', note: 'Bring the whole room together.', kind: 'materials' },
  'tile-installation': { label: 'Craft in the details', note: 'Beautiful surfaces. Careful installation.', kind: 'tile' },
  countertops: { label: 'Made for the way you live', note: 'Storage, surfaces, and a seamless finish.', kind: 'cabinets' }
};

export function ServicesExperience() {
  return <div className="services-experience">
    <section className="services-opening">
      <div className="container services-opening__grid">
        <div className="services-opening__copy">
          <p className="eyebrow">Northern New Jersey · Remodeling Services</p>
          <h1>Thoughtfully planned.<br /><em>Beautifully built.</em></h1>
          <p className="services-opening__lead">Kitchens, bathrooms, and the details that make a house feel like home. Local experience, practical guidance, and craftsmanship from the first conversation to the final finish.</p>
          <div className="services-opening__actions"><a className="button" href={withBase('quote/')}>Let’s plan your project</a><a className="text-link" href="#our-services">Explore our services ↓</a></div>
        </div>

      </div>
    </section>
    <section className="section services-collection" id="our-services"><div className="container">
      <div className="services-collection__intro"><div><p className="eyebrow">Made for your home</p><h2>One trusted team.<br />Every finishing detail.</h2></div><p>Explore a complete renovation or focus on the upgrades your space needs. We’ll help you find the right starting point.</p></div>
      <div className="services-stories">{services.map(service => {
        const style = serviceStyle[service.slug];
        const detailPage = ['kitchen-remodeling', 'bathroom-remodeling'].includes(service.slug);
        return <article className={`service-story service-story--${style.kind}`} id={service.slug} key={service.slug}>
          <div className="service-story__visual"><span className="service-story__visual-label">{style.label}</span><ServiceEmoji kind={style.kind} /><p>{style.note}</p></div>
          <div className="service-story__copy"><h2>{service.title}</h2><p className="service-story__lead">{service.short}</p><h3>What we can help with</h3><ul>{service.examples.map(item => <li key={item}>{item}</li>)}</ul><div className="service-story__actions"><a className="text-link" href={withBase('quote/')}>Discuss your {style.kind === 'bathroom' ? 'bathroom' : style.kind === 'kitchen' ? 'kitchen' : 'project'} <span aria-hidden="true">→</span></a>{detailPage && <a href={withBase(`${service.slug}/`)} className="service-story__learn">Explore {style.kind} remodeling ↗</a>}</div></div>
        </article>;
      })}</div>
    </div></section>
    <section className="services-next"><div className="container services-next__grid"><div><p className="eyebrow">A clear path forward</p><h2>A great remodel starts<br />with a conversation.</h2><p>Tell Ron what works, what doesn’t, and what you’d love to change. We’ll talk through the next steps for your home.</p><a className="button" href={business.phoneHref}>Call Ron · {business.phone}</a></div><ol><li><strong>Talk through your ideas</strong><span>Your space, priorities, and budget.</span></li><li><strong>Make a considered plan</strong><span>Layout, materials, and the details that matter.</span></li><li><strong>Bring it all together</strong><span>Professional installation and a careful finish.</span></li></ol></div></section>
  </div>;
}
