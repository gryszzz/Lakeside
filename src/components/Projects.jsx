import { useEffect, useMemo, useRef, useState } from 'react';
import { beforeAfterProjects, featuredProjects } from '../content/site';
import { withBase } from '../utils';
import { SectionIntro } from './Layout';

const MIN_LIGHTBOX_ZOOM = 1;
const LIGHTBOX_FOCUS_ZOOM = 2;

function clampValue(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function ProjectLightbox({ project, onClose }) {
  const viewportRef = useRef(null);
  const dragRef = useRef(null);
  const suppressToggleRef = useRef(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const isZoomed = zoom > 1.01;

  const limitOffset = (nextOffset, nextZoom = zoom) => {
    const viewport = viewportRef.current;

    if (!viewport || nextZoom <= 1) {
      return { x: 0, y: 0 };
    }

    const rect = viewport.getBoundingClientRect();
    const maxX = ((nextZoom - 1) * rect.width) / 2;
    const maxY = ((nextZoom - 1) * rect.height) / 2;

    return {
      x: clampValue(nextOffset.x, -maxX, maxX),
      y: clampValue(nextOffset.y, -maxY, maxY)
    };
  };

  const zoomInView = () => {
    setZoom(LIGHTBOX_FOCUS_ZOOM);
    setOffset({ x: 0, y: 0 });
  };

  const resetView = () => {
    setZoom(MIN_LIGHTBOX_ZOOM);
    setOffset({ x: 0, y: 0 });
    setIsDragging(false);
    suppressToggleRef.current = false;
    dragRef.current = null;
  };

  useEffect(() => {
    resetView();
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePointerDown = (event) => {
    if (!isZoomed) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: offset.x,
      originY: offset.y,
      moved: false
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const dragState = dragRef.current;

    if (!dragState || dragState.pointerId !== event.pointerId || !isZoomed) return;

    const deltaX = event.clientX - dragState.startX;
    const deltaY = event.clientY - dragState.startY;
    const moved = Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4;

    if (moved) {
      dragState.moved = true;
      setIsDragging(true);
    }

    setOffset(
      limitOffset({
        x: dragState.originX + deltaX,
        y: dragState.originY + deltaY
      })
    );
  };

  const handlePointerRelease = (event) => {
    const dragState = dragRef.current;

    if (dragState?.pointerId !== event.pointerId) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (dragState.moved) {
      suppressToggleRef.current = true;
    }

    dragRef.current = null;
    setIsDragging(false);
  };

  const handleMediaClick = () => {
    if (suppressToggleRef.current) {
      suppressToggleRef.current = false;
      return;
    }

    if (isZoomed) {
      resetView();
      return;
    }

    zoomInView();
  };

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={project.title}>
      <button type="button" className="lightbox__backdrop" onClick={onClose} />
      <div className="lightbox__panel lightbox__panel--project">
        <button type="button" className="lightbox__close" onClick={onClose}>
          Close
        </button>

        <div className="lightbox__media-shell">
          <div
            ref={viewportRef}
            className={`lightbox__media ${isZoomed ? 'is-zoomed' : ''} ${isDragging ? 'is-dragging' : ''}`}
            onClick={handleMediaClick}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerRelease}
            onPointerCancel={handlePointerRelease}
            onPointerLeave={handlePointerRelease}
          >
            <img
              className="lightbox__image"
              src={withBase(project.image)}
              alt={project.alt}
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`
              }}
            />
          </div>
        </div>

        <div className="lightbox__content">
          <p className="eyebrow">
            {project.category} • {project.location}
          </p>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <p className="lightbox__helper">
            {isZoomed ? 'Drag across the image to inspect details.' : 'Click the image to zoom in.'}
          </p>
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a className="button" href={withBase('quote/')}>
            Ask About a Similar Remodel
          </a>
        </div>
      </div>
    </div>
  );
}

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
          <div className="project-gallery__header">
            <div className="project-gallery__copy">
              <p className="eyebrow">Portfolio</p>
              <h1>Kitchen and bathroom remodel portfolio</h1>
              <p className="project-gallery__body">
                Browse finished room directions, layout ideas, and higher-end material palettes. Open any project to see the look more closely.
              </p>
            </div>
          </div>
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
        <ProjectLightbox project={activeProject} onClose={() => setActiveProject(null)} />
      ) : null}
    </section>
  );
}
