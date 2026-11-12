import { processSteps, business } from '../content/site';
import { withBase } from '../utils';

const stepGuidance = [
  { heading: 'Start with your priorities', detail: 'Bring your ideas, a few measurements if you have them, and what you’d like to change about the space.' },
  { heading: 'See how the details work together', detail: 'Consider the layout, storage, surfaces, and finishes before moving forward.' },
  { heading: 'Know what’s included', detail: 'Review the proposed work and pricing, and ask about anything you’d like clarified.' },
  { heading: 'Plan for work in your home', detail: 'Discuss material availability, the project schedule, and how to prepare your space.' },
  { heading: 'Stay connected as work progresses', detail: 'Keep in touch about progress, project questions, and the finishing details.' },
  { heading: 'Review the finished space together', detail: 'Walk through the work, discuss any final items, and ask about care for your new finishes.' },
  { heading: 'Support after the final walkthrough', detail: 'Keep your project details handy and contact Ron with questions about the workmanship warranty.' }
];

export function ProcessExperience() {
  return <div className="process-experience">
    <section className="process-opening"><div className="container">
      <p className="eyebrow">Our Process</p>
      <h1>A clear plan.<br /><em>From idea to finish.</em></h1>
      <p>A remodel has a lot of moving parts. Here’s how we bring the decisions, details, and work together—one step at a time.</p>
      <a className="button" href={withBase('quote/')}>Let’s talk about your project</a>
    </div></section>
    <section className="section process-journey" aria-labelledby="process-journey-title"><div className="container process-journey__layout">
      <div className="process-journey__intro"><p className="eyebrow">What to expect</p><h2 id="process-journey-title">Your remodel,<br />step by step.</h2><p>From the first conversation to the final walkthrough, each stage builds on the last.</p><a className="text-link" href={withBase('services/')}>Explore our services →</a></div>
      <ol className="process-timeline">{processSteps.map((step, index) => <li className="process-timeline__step" key={step.title}>
        <span className="process-timeline__marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <div className="process-timeline__body"><h3>{step.title}</h3><p>{step.text}</p><div className="process-timeline__guidance"><h4>{stepGuidance[index].heading}</h4><p>{stepGuidance[index].detail}</p></div></div>
      </li>)}</ol>
    </div></section>
    <section className="process-start"><div className="container process-start__layout"><div><p className="eyebrow">Your first step</p><h2>Let’s start with<br />what you have in mind.</h2><p>You don’t need every answer before reaching out. Tell Ron about your space and what you’d like it to become.</p><div className="process-start__actions"><a className="button" href={withBase('quote/')}>Schedule a consultation</a><a className="text-link" href={business.phoneHref}>Call Ron · {business.phone}</a></div></div><aside className="process-prep"><h3>A few helpful starting points</h3><ul><li>The room or areas you want to update</li><li>What works—and what doesn’t—in your current space</li><li>Your priorities, budget, and preferred timing</li><li>Ideas or inspiration you’d like to share</li></ul><p>Have a question first? We’re happy to talk it through.</p></aside></div></section>
  </div>;
}
