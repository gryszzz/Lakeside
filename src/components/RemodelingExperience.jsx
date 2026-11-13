import { useRef, useState } from 'react';
import { galleryProjectPhotos } from './Projects';
import { business } from '../content/site';
import { ProcessTimeline } from './ProcessExperience';
import { withBase } from '../utils';

const roomContent = {
  kitchen: {
    title: 'Kitchen Remodeling in Northern New Jersey',
    intro: "The kitchen is the heart of the home. Whether you're planning a complete renovation or updating key features, Lakeside Kitchen & Bath LLC delivers kitchens that combine functionality, beauty, and long-term value.",
    invitation: 'A kitchen that works as beautifully as it looks.',
    note: 'For everyday meals, busy mornings, and everyone gathering in the same room.',
    priorities: [ ['A layout that flows', 'Make room for cooking, gathering, and the way you move through your day.'], ['Storage with purpose', 'Cabinetry planned around what you use, where you use it.'], ['Finishes that belong together', 'Bring counters, tile, lighting, and hardware into one considered space.'] ],
    overview: 'From the first layout to the final finish.',
    overviewText: 'A complete kitchen brings a lot of decisions together. Explore the work we can help coordinate for your renovation.',
    groups: [
      { title: 'Design & planning', text: 'Start with how the room needs to work.', items: ['Design', 'Material Selection Guidance', 'Cabinet Installation'] },
      { title: 'Surfaces & finishes', text: 'Build a palette that feels right for your home.', items: ['Quartz Countertops', 'Granite Countertops', 'Tile Backsplashes', 'Flooring'] },
      { title: 'Fixtures & finishing touches', text: 'The practical details that complete the room.', items: ['Lighting', 'Plumbing Fixtures', 'Appliance Installation', 'Trim Work', 'Painting'] }
    ],
    detailTitle: 'Good design starts with your daily routine.',
    detailText: 'Before choosing finishes, think about the way your kitchen gets used. We’ll talk through your priorities and the opportunities in your existing space.',
    questions: ['Where do you need more prep space or storage?', 'Does the current layout work for cooking and gathering?', 'Which parts of your kitchen would you most like to change?'],
    detailKind: 'kitchen',
    faqs: [
      { q: 'Can we update key features instead of the whole kitchen?', a: 'Yes. We can discuss cabinet and countertop installation, backsplashes, flooring, and other focused upgrades as well as complete kitchen renovations. The proposed scope will reflect your goals and the existing space.' },
      { q: 'Can you help us choose cabinets and countertops?', a: 'We offer design and material selection guidance, including cabinetry, quartz or granite counters, tile, fixtures, flooring, and finishes.' },
      { q: 'How do we discuss budget and timing?', a: 'Start with a consultation. Tell Ron about your priorities, preferred timing, and budget so you can discuss a suitable scope, material choices, and next steps.' }
    ],
    closing: 'Let’s talk about your kitchen.',
    crossTitle: 'Planning a bathroom, too?', crossLink: 'bathroom-remodeling/', crossLabel: 'Explore bathroom remodeling'
  },
  bathroom: {
    title: 'Bathroom Remodeling Experts',
    intro: 'Your bathroom should be comfortable, functional, and built to withstand daily use. We specialize in complete bathroom renovations that improve appearance, functionality, and value.',
    invitation: 'Everyday comfort. Carefully considered.',
    note: 'A better shower, practical storage, and finishes that make the whole room feel complete.',
    priorities: [ ['A shower that suits you', 'Consider the enclosure, fixtures, niches, and the way you use the space.'], ['Storage without the clutter', 'Bring vanities, counters, and everyday essentials into a more useful layout.'], ['Care beneath the surface', 'Waterproofing and professional installation matter as much as the finished tile.'] ],
    overview: 'A complete room. Care in every layer.',
    overviewText: 'From the shower system to the final paint finish, we help bring the visible details and the work behind them together.',
    groups: [
      { title: 'Design & materials', text: 'Plan around the room and your everyday needs.', items: ['Design', 'Material Selection Guidance', 'Vanities', 'Countertops'] },
      { title: 'Showers & surfaces', text: 'Careful installation for the hardest-working areas.', items: ['Custom Tile Showers', 'Waterproofing Systems', 'Flooring', 'Shower Doors'] },
      { title: 'Fixtures & finishing touches', text: 'Complete the room with coordinated details.', items: ['Lighting', 'Plumbing Fixtures', 'Trim Work', 'Painting'] }
    ],
    detailTitle: 'Built for long-term performance.',
    detailText: 'Every bathroom renovation is completed using professional installation practices designed to provide years of dependable performance. We’ll discuss the details that matter for your room.',
    questions: ['What would make your shower more comfortable to use?', 'Where would better storage make a difference?', 'Which fixtures, surfaces, or layout features need attention?'],
    detailKind: 'bathroom',
    faqs: [
      { q: 'Do you install custom tile showers?', a: 'Yes. Our bathroom services include custom tile showers, waterproofing systems, shower doors, and coordinated fixtures. We’ll discuss a plan suited to your room.' },
      { q: 'Can you help with vanities and material selections?', a: 'Yes. We provide guidance on vanities, counters, tile, flooring, fixtures, and finishes so the room works together.' },
      { q: 'What should we prepare for the first conversation?', a: 'Think about what you’d like to change, what currently works, your budget, and preferred timing. Inspiration and measurements can help, but you don’t need every detail decided before reaching out.' }
    ],
    closing: 'Let’s talk about your bathroom.',
    crossTitle: 'Thinking about your kitchen?', crossLink: 'kitchen-remodeling/', crossLabel: 'Explore kitchen remodeling'
  }
};

const roomPhotoIds = {
  kitchen: ['white-kitchen-island-seating', 'kitchen-cabinetry-island', 'kitchen-herringbone-tile'],
  bathroom: ['stone-look-shower-soaking-tub', 'marble-look-shower-folding-seat', 'gray-tile-shower-white-vanity']
};

function RoomProjectCarousel({ kind }) {
  const photos = roomPhotoIds[kind].map(id => galleryProjectPhotos.find(photo => photo.id === id));
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const showPhoto = (index) => {
    const track = trackRef.current;
    const nextIndex = (index + photos.length) % photos.length;
    track.scrollTo({ left: nextIndex * track.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };

  return <figure className="room-project-feature" aria-label={`${kind === 'kitchen' ? 'Kitchen' : 'Bathroom'} project photos`}>
    <div className="room-project-feature__image">
      <div className="room-project-feature__track" ref={trackRef} onScroll={event => {
        const track = event.currentTarget;
        setActiveIndex(Math.max(0, Math.min(photos.length - 1, Math.round(track.scrollLeft / track.clientWidth))));
      }}>
        {photos.map((photo, index) => <a key={photo.id} className="room-project-feature__slide" href={withBase(`projects/?project=${photo.id}`)} aria-label={`Open ${photo.title} in Project Photos`} tabIndex={activeIndex === index ? 0 : -1}>
          <img src={withBase(photo.image)} alt={photo.alt} style={{ objectPosition: photo.galleryFocalPoint || photo.focalPoint || '50% 60%' }} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} decoding="async" />
        </a>)}
      </div>
      <button className="room-project-feature__arrow room-project-feature__arrow--prev" type="button" onClick={() => showPhoto(activeIndex - 1)} aria-label="Previous project photo">←</button>
      <button className="room-project-feature__arrow room-project-feature__arrow--next" type="button" onClick={() => showPhoto(activeIndex + 1)} aria-label="Next project photo">→</button>
    </div>
    <figcaption>
      <span className="eyebrow">Lakeside projects · {activeIndex + 1} of {photos.length}</span>
      <strong aria-live="polite">{photos[activeIndex].title}</strong>
      <div className="room-project-feature__footer">
        <div className="room-project-feature__dots" aria-label="Choose a project photo">{photos.map((photo, index) => <button type="button" key={photo.id} onClick={() => showPhoto(index)} aria-label={`Show photo ${index + 1}: ${photo.title}`} aria-current={activeIndex === index ? 'true' : undefined} />)}</div>
        <a className="text-link" href={withBase('projects/')}>Project Photos <span aria-hidden="true">↗</span></a>
      </div>
    </figcaption>
  </figure>;
}

export function RemodelingExperience({ kitchen = false }) {
  const kind = kitchen ? 'kitchen' : 'bathroom';
  const room = roomContent[kind];
  return <div className={`room-experience room-experience--${kind}`}>
    <section className="room-opening"><div className="container room-opening__layout">
      <div><p className="eyebrow">Lakeside Kitchen & Bath · {kitchen ? 'Kitchens' : 'Bathrooms'}</p><h1>{room.title}</h1><p className="room-opening__intro">{room.intro}</p>
      <div className="room-services-preview" aria-labelledby={`${kind}-included-title`}>
        <h2 id={`${kind}-included-title`}>{kitchen ? 'Kitchen' : 'Bathroom'} services</h2>
        <ul>{room.groups.flatMap(group => group.items).map(item => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="room-opening__actions"><a className="button" href={withBase('contact/')}>Schedule a Consultation <span aria-hidden="true">→</span></a><a className="text-link" href={business.phoneHref}>Call Ron · {business.phone}</a></div></div>
      <RoomProjectCarousel kind={kind} />
    </div></section>
    <section className="section room-scope" id={`${kind}-services`}><div className="container"><div className="room-section-heading room-section-heading--split"><div><p className="eyebrow">{kitchen ? 'Kitchen' : 'Bathroom'} remodeling services</p><h2>{room.overview}</h2></div><p>{room.overviewText}</p></div><div className="room-scope__grid">{room.groups.map((group, index) => <article key={group.title}><div className="room-scope__card-top" aria-hidden="true"><span>0{index + 1}</span><svg viewBox="0 0 24 24"><path d={['M4 20V4h16v16H4Zm0-8h16M12 4v16', 'm12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5', 'M4 7h16M7 4v6M4 17h16M17 14v6'][index]} /></svg></div><h3>{group.title}</h3><p>{group.text}</p><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
    <section className="section room-priorities"><div className="container"><div className="room-section-heading"><p className="eyebrow">Start with what matters</p><h2>{kitchen ? 'More than a new look.' : 'More comfort. Better function.'}</h2></div><div className="room-priorities__grid">{room.priorities.map(([title,text], index) => <article key={title}><span className="room-priorities__number" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section room-planning"><div className="container room-planning__layout"><div><p className="eyebrow">A thoughtful starting point</p><h2>{room.detailTitle}</h2><p>{room.detailText}</p><a className="text-link" href={withBase('services/#design-material-selection')}>Design & material guidance →</a></div><aside><h3>A few things to think about</h3><ul>{room.questions.map(q => <li key={q}>{q}</li>)}</ul></aside></div></section>
    <section className="section room-process process-journey"><div className="container room-process__layout"><div className="process-journey__intro"><p className="eyebrow">Our process</p><h2>A clear path to<br />your new {kind}.</h2><p>Start with your goals, consider the details, and review a clear scope before the work moves forward.</p></div><div><ProcessTimeline compact limit={3} /><a className="text-link room-process__link" href={withBase('process/')}>Explore the full process →</a></div></div></section>
    <section className="section room-questions"><div className="container room-questions__layout"><div><p className="eyebrow">Good questions</p><h2>Before you begin.</h2><p>A few answers to help you take the next step.</p></div><div>{room.faqs.map(faq => <details className="room-question" key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></div></section>
    <section className="room-closing"><div className="container"><div><p className="eyebrow">Your home. Your next chapter.</p><h2>{room.closing}</h2><p>Share your ideas, priorities, and the changes you have in mind.</p></div><a className="button" href={withBase('contact/')}>Schedule a Consultation</a></div></section>
    <div className="room-crosslink container"><span>{room.crossTitle}</span><a className="text-link" href={withBase(room.crossLink)}>{room.crossLabel} →</a></div>
  </div>;
}
