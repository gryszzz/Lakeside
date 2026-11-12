import { services, business } from '../content/site';
import { withBase } from '../utils';

const serviceStyle = {
  'kitchen-remodeling': { label: 'The heart of your home', note: 'A better flow. A place to gather.', kind: 'kitchen' },
  'bathroom-remodeling': { label: 'Your everyday retreat', note: 'Comfort in every detail.', kind: 'bathroom' },
  'design-material-selection': { label: 'A considered starting point', note: 'Bring the whole room together.', kind: 'materials' },
  'tile-installation': { label: 'Craft in the details', note: 'Beautiful surfaces. Careful installation.', kind: 'tile' },
  countertops: { label: 'Made for the way you live', note: 'Storage, surfaces, and a seamless finish.', kind: 'cabinets' }
};

function ServiceDrawing({ kind = 'kitchen' }) {
  return <svg className="service-drawing" viewBox="0 0 540 340" fill="none" aria-hidden="true" focusable="false">
    <path className="service-drawing__grid" d="M30 290H510M65 35V305M475 35V305M30 65H510" />
    {kind === 'kitchen' && <>
      <path className="service-drawing__surface" d="M85 168H455V190H85ZM150 222H392V244H150Z" />
      <path d="M98 190V278H442V190M180 190V278M270 190V278M360 190V278M162 244V300M380 244V300M140 102H222V153H140ZM318 102H400V153H318ZM245 85H295L312 151H228ZM270 42V85M195 42V62M345 42V62" />
      <path className="service-drawing__accent" d="M175 62H215L224 86H166ZM325 62H365L374 86H316ZM115 210H161M198 210H252M290 210H342M378 210H422" />
    </>}
    {kind === 'bathroom' && <>
      <path className="service-drawing__surface" d="M75 262H262V279H75ZM303 194H459V209H303Z" />
      <path d="M85 64H252V262H85ZM190 64V262M102 110H236M102 155H236M102 200H236M315 209V288H447V209M381 209V288M329 91H432V170H329ZM337 209V225M426 209V225" />
      <path className="service-drawing__accent" d="M108 90H143V105M126 105V116M154 222H172M365 184V175Q365 164 377 164H389M352 198H410" />
    </>}
    {kind === 'materials' && <>
      <path className="service-drawing__surface" d="M85 99 234 70 269 245 120 274ZM254 103H390V276H254Z" />
      <path d="M85 99 234 70 269 245 120 274ZM110 121 218 100 236 188 128 209ZM254 103H390V276H254ZM280 128H364V210H280ZM120 234 218 215M289 240H355M320 66H452V226M415 92H431M415 113H431M415 134H431M415 155H431M415 176H431" />
      <path className="service-drawing__accent" d="M137 143 206 129M141 166 210 152M287 146 355 194M287 176 327 205" />
    </>}
    {kind === 'tile' && <>
      <path className="service-drawing__surface" d="M105 66H435V280H105Z" />
      <path d="M105 66H435V280H105ZM105 110H435M105 153H435M105 196H435M105 239H435M170 66V110M280 66V110M390 66V110M220 110V153M330 110V153M170 153V196M280 153V196M390 153V196M220 196V239M330 196V239M170 239V280M280 239V280M390 239V280" />
      <path className="service-drawing__accent" d="M255 153H330V196H255ZM110 294H430M110 290V298M430 290V298" />
    </>}
    {kind === 'cabinets' && <>
      <path className="service-drawing__surface" d="M83 169H457V188H83Z" />
      <path d="M96 188V285H444V188M180 188V285M270 188V285M360 188V285M98 70H230V151H98ZM310 70H442V151H310ZM164 70V151M376 70V151M194 215H255M194 244H255M285 215H345M285 244H345M114 209H163M379 209H428" />
      <path className="service-drawing__accent" d="M147 103V123M181 103V123M359 103V123M393 103V123M244 169V145Q244 130 258 130H270M115 294H425" />
    </>}
  </svg>;
}

export function ServicesExperience() {
  return <div className="services-experience">
    <section className="services-opening">
      <div className="container services-opening__grid">
        <div className="services-opening__copy">
          <p className="eyebrow">Northern New Jersey · Remodeling Services</p>
          <h1>Thoughtfully planned.<br /><em>Beautifully built.</em></h1>
          <p className="services-opening__lead">Kitchens, bathrooms, and the details that make a house feel like home. Local experience, practical guidance, and craftsmanship from the first conversation to the final finish.</p>
          <div className="services-opening__actions"><a className="button" href={withBase('quote/')}>Let’s plan your project <span aria-hidden="true">↗</span></a><a className="text-link" href="#our-services">Explore our services ↓</a></div>
          <p className="services-opening__local">Based in Sparta · Serving Sussex, Morris, Passaic & Warren</p>
        </div>
        <div className="services-concept"><div className="services-concept__top"><span>The Lakeside approach</span><span>Designed around you</span></div><ServiceDrawing /><div className="services-concept__bottom"><span>From first ideas to finishing touches</span><strong>We do the complete job.</strong></div></div>
      </div>
    </section>
    <div className="services-assurance"><div className="container"><span>Over 40 years of experience</span><span>Licensed, insured & bonded</span><span>2-year workmanship warranty</span></div></div>
    <section className="section services-collection" id="our-services"><div className="container">
      <div className="services-collection__intro"><div><p className="eyebrow">Made for your home</p><h2>One trusted team.<br />Every finishing detail.</h2></div><p>Explore a complete renovation or focus on the upgrades your space needs. We’ll help you find the right starting point.</p></div>
      <nav className="services-jump" aria-label="Explore remodeling services">{services.map(service => <a key={service.slug} href={`#${service.slug}`}>{service.title}<span aria-hidden="true">↗</span></a>)}</nav>
      <div className="services-stories">{services.map(service => {
        const style = serviceStyle[service.slug];
        const detailPage = ['kitchen-remodeling', 'bathroom-remodeling'].includes(service.slug);
        return <article className={`service-story service-story--${style.kind}`} id={service.slug} key={service.slug}>
          <div className="service-story__visual"><span className="service-story__visual-label">{style.label}</span><ServiceDrawing kind={style.kind} /><p>{style.note}</p></div>
          <div className="service-story__copy"><p className="eyebrow">{style.label}</p><h2>{service.title}</h2><p className="service-story__lead">{service.short}</p><h3>What we can help with</h3><ul>{service.examples.map(item => <li key={item}>{item}</li>)}</ul><div className="service-story__actions"><a className="text-link" href={withBase('quote/')}>Discuss your {style.kind === 'bathroom' ? 'bathroom' : style.kind === 'kitchen' ? 'kitchen' : 'project'} <span aria-hidden="true">→</span></a>{detailPage && <a href={withBase(`${service.slug}/`)} className="service-story__learn">Explore {style.kind} remodeling ↗</a>}</div></div>
        </article>;
      })}</div>
    </div></section>
    <section className="services-next"><div className="container services-next__grid"><div><p className="eyebrow">A clear path forward</p><h2>A great remodel starts<br />with a conversation.</h2><p>Tell Ron what works, what doesn’t, and what you’d love to change. We’ll talk through the next steps for your home.</p><a className="button" href={business.phoneHref}>Call Ron · {business.phone}</a></div><ol><li><strong>Talk through your ideas</strong><span>Your space, priorities, and budget.</span></li><li><strong>Make a considered plan</strong><span>Layout, materials, and the details that matter.</span></li><li><strong>Bring it all together</strong><span>Professional installation and a careful finish.</span></li></ol></div></section>
  </div>;
}
