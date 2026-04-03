import { useMemo, useState } from 'react';
import { beforeAfterProjects, featuredProjects } from '../content/site';
import { withBase } from '../utils';
import { SectionIntro } from './Layout';

export function BeforeAfterSlider({ project, compact = false }) {
  const [value, setValue] = useState(54);

  return (
    <article className={`before-after ${compact ? 'before-after--compact' : ''}`} data-reveal>
      <div className="before-after__frame">
        <img src={withBase(project.afterImage)} alt={project.altAfter} className="before-after__image" />
        <div className="before-after__overlay" style={{ width: `${value}%` }}>
          <img src={withBase(project.beforeImage)} alt={project.altBefore} className="before-after__image" />
        </div>
        <div className="before-after__labels">
          <span>Before</span>
          <span>After</span>
        </div>
        <div className="before-after__handle" style={{ left: `${value}%` }} aria-hidden="true" />
        <input
          className="before-after__range"
          type="range"
          min="0"
          max="100"
          value={value}
          aria-label={`Adjust before and after comparison for ${project.title}`}
          onChange={(event) => setValue(Number(event.target.value))}
        />
      </div>
      <div className="before-after__content">
        <p className="eyebrow">
          {project.title} • {project.location}
        </p>
        <h3>{project.scope}</h3>
        <p>{project.summary}</p>
        <p className="before-after__value">{project.value}</p>
      </div>
    </article>
  );
}

export function BeforeAfterShowcase() {
  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Before & After"
          title="Transformation stories that make the work feel real"
          body="See what changed, why it mattered, and how the finished room feels afterward."
        />
        <div className="before-after-showcase">
          {beforeAfterProjects.map((project) => (
            <BeforeAfterSlider key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectPreview() {
  const previews = featuredProjects.slice(0, 3);

  return (
    <section className="section section--contrast">
      <div className="container">
        <SectionIntro
          eyebrow="Featured Projects"
          title="Work that helps homeowners picture their own remodel more clearly"
          body="See how layout, materials, tile, cabinetry, fixtures, and finish work come together across kitchens and bathrooms."
        />
        <div className="project-grid">
          {previews.map((project) => (
            <article key={project.title} className="project-card" data-reveal>
              <div className="project-card__media">
                <img src={withBase(project.image)} alt={project.alt} />
                <span>{project.category}</span>
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="section-actions">
          <a className="button" href={withBase('projects/')}>
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export function ProjectGallery() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filters = useMemo(
    () => ['All', ...new Set(featuredProjects.map((project) => project.category))],
    []
  );

  const visibleProjects = useMemo(() => {
    if (filter === 'All') return featuredProjects;
    return featuredProjects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section className="section">
      <div className="container">
        <div className="project-gallery__shell" data-reveal>
          <div className="project-filter">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                className={filter === item ? 'is-active' : ''}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="project-grid project-grid--gallery">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="project-card project-card--interactive"
              data-reveal
              onClick={() => setActiveProject(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setActiveProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open details for ${project.title}`}
            >
              <div className="project-card__media">
                <img src={withBase(project.image)} alt={project.alt} />
                <span>{project.category}</span>
              </div>
              <div className="project-card__body">
                <div className="project-card__topline">
                  <h3>{project.title}</h3>
                  <strong>{project.location}</strong>
                </div>
                <p>{project.summary}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeProject.title}>
          <button type="button" className="lightbox__backdrop" onClick={() => setActiveProject(null)} />
          <div className="lightbox__panel">
            <button type="button" className="lightbox__close" onClick={() => setActiveProject(null)}>
              Close
            </button>
            <img src={withBase(activeProject.image)} alt={activeProject.alt} />
            <div className="lightbox__content">
              <p className="eyebrow">
                {activeProject.category} • {activeProject.location}
              </p>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.summary}</p>
              <div className="project-card__tags">
                {activeProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="button" href={withBase('quote/')}>
                Ask About a Similar Remodel
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
