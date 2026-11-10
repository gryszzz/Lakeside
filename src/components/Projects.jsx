import { useEffect, useMemo, useRef, useState } from 'react';
import { beforeAfterProjects, featuredProjects } from '../content/site';
import { withBase } from '../utils';
import { SectionIntro } from './Layout';

const MIN_LIGHTBOX_ZOOM = 1;
const LIGHTBOX_FOCUS_ZOOM = 2;
const MAX_LIGHTBOX_ZOOM = 3.4;
const LIGHTBOX_ZOOM_STEP = 0.4;
const LIGHTBOX_WHEEL_STEP = 0.24;

function clampValue(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function ProjectLightbox({ projects, activeIndex, onClose, onNavigate }) {
  const project = projects[activeIndex];
  const viewportRef = useRef(null);
  const dragRef = useRef(null);
  const suppressToggleRef = useRef(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const zoomRef = useRef(zoom);
  const offsetRef = useRef(offset);
  const isZoomed = zoom > 1.01;
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < projects.length - 1;

  useEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);

  useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  const limitOffset = (nextOffset, nextZoom = zoomRef.current) => {
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

  const applyZoom = (nextZoom, anchor) => {
    const viewport = viewportRef.current;
    const clampedZoom = clampValue(nextZoom, MIN_LIGHTBOX_ZOOM, MAX_LIGHTBOX_ZOOM);
    const currentZoom = zoomRef.current;
    const currentOffset = offsetRef.current;

    if (!viewport) {
      setZoom(clampedZoom);
      if (clampedZoom <= MIN_LIGHTBOX_ZOOM) {
        setOffset({ x: 0, y: 0 });
      }
      return;
    }

    const rect = viewport.getBoundingClientRect();
    const focusPoint = anchor ?? { x: rect.width / 2, y: rect.height / 2 };

    if (clampedZoom <= MIN_LIGHTBOX_ZOOM) {
      setZoom(MIN_LIGHTBOX_ZOOM);
      setOffset({ x: 0, y: 0 });
      return;
    }

    const originX = focusPoint.x - rect.width / 2;
    const originY = focusPoint.y - rect.height / 2;
    const scaleRatio = clampedZoom / currentZoom;

    setZoom(clampedZoom);
    setOffset(
      limitOffset(
        {
          x: originX - (originX - currentOffset.x) * scaleRatio,
          y: originY - (originY - currentOffset.y) * scaleRatio
        },
        clampedZoom
      )
    );
  };

  const getAnchorFromEvent = (event) => {
    const viewport = viewportRef.current;

    if (!viewport) return undefined;

    const rect = viewport.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  };

  const zoomInView = () => {
    applyZoom(LIGHTBOX_FOCUS_ZOOM);
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

      if (event.key === 'ArrowLeft' && hasPrev) {
        event.preventDefault();
        onNavigate(activeIndex - 1);
      }

      if (event.key === 'ArrowRight' && hasNext) {
        event.preventDefault();
        onNavigate(activeIndex + 1);
      }

      if (event.key === '+' || event.key === '=') {
        event.preventDefault();
        applyZoom(zoom + LIGHTBOX_ZOOM_STEP);
      }

      if (event.key === '-' || event.key === '_') {
        event.preventDefault();
        applyZoom(zoom - LIGHTBOX_ZOOM_STEP);
      }

      if (event.key === '0') {
        event.preventDefault();
        resetView();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, hasNext, hasPrev, onClose, onNavigate]);

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

  const handleWheel = (event) => {
    event.preventDefault();

    const delta = event.deltaY < 0 ? LIGHTBOX_WHEEL_STEP : -LIGHTBOX_WHEEL_STEP;
    applyZoom(zoomRef.current + delta, getAnchorFromEvent(event));
  };

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={project.title}>
      <button type="button" className="lightbox__backdrop" onClick={onClose} />
      <div className="lightbox__panel lightbox__panel--project">
        <div className="lightbox__status">
          <span className="lightbox__status-label">Portfolio Viewer</span>
          <strong>
            {activeIndex + 1} / {projects.length}
          </strong>
        </div>
        <button type="button" className="lightbox__close" onClick={onClose}>
          Close
        </button>

        <div className="lightbox__media-shell">
          {hasPrev ? (
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={() => onNavigate(activeIndex - 1)}
              aria-label="View previous project"
            >
              Prev
            </button>
          ) : null}

          {hasNext ? (
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={() => onNavigate(activeIndex + 1)}
              aria-label="View next project"
            >
              Next
            </button>
          ) : null}

          <div
            ref={viewportRef}
            className={`lightbox__media ${isZoomed ? 'is-zoomed' : ''} ${isDragging ? 'is-dragging' : ''}`}
            onClick={handleMediaClick}
            onWheel={handleWheel}
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
          <div className="lightbox__headline">
            <p className="eyebrow">Featured Project</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>
          <div className="project-card__tags lightbox__tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a className="button lightbox__cta" href={withBase('quote/')}>
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
        <img src={withBase(project.afterImage)} alt={project.altAfter} className="before-after__image" loading="lazy" decoding="async" />
        <div className="before-after__overlay" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
          <img src={withBase(project.beforeImage)} alt={project.altBefore} className="before-after__image" loading="lazy" decoding="async" />
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
        <p className="eyebrow">{project.title}{project.location ? ` • ${project.location}` : ''}</p>
        <h3>{project.scope}</h3>
        <p>{project.summary}</p>
        {project.value ? <p className="before-after__value">{project.value}</p> : null}
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

const homepageProjectPhotos = [
  {
    id: 'custom-kitchen-island',
    title: 'Custom Kitchen & Island',
    category: 'Kitchen',
    image: 'images/projects/portfolio/lakeside-kitchen-island.jpg',
    alt: 'Traditional white kitchen with a dark wood island and three counter stools',
    summary: 'A traditional kitchen featuring detailed cabinetry, stone counters, and an island with seating.',
    tags: ['Kitchen', 'Island', 'Cabinetry']
  },
  {
    id: 'kitchen-cabinetry-island',
    title: 'Kitchen Cabinetry & Island',
    category: 'Kitchen',
    image: 'images/projects/portfolio/lakeside-kitchen-cabinetry.jpg',
    alt: 'Warm wood kitchen cabinetry surrounding a large central island',
    summary: 'Warm wood cabinets frame a generous central island with stone countertops.',
    tags: ['Kitchen', 'Cabinetry', 'Countertops']
  },
  {
    id: 'custom-cabinetry-storage',
    title: 'Custom Cabinetry & Storage',
    category: 'Cabinetry',
    image: 'images/projects/portfolio/lakeside-custom-builtins.jpg',
    alt: 'Custom light wood cabinetry with glass-front storage and built-in shelves',
    summary: 'A custom cabinetry installation with glass-front storage and built-in shelving.',
    tags: ['Cabinetry', 'Built-ins', 'Storage']
  },
  {
    id: 'tile-shower-bathroom',
    title: 'Tile Shower & Bathroom',
    category: 'Bathroom',
    image: 'images/projects/portfolio/lakeside-bathroom-shower.jpg',
    alt: 'White subway tile shower with glass doors and gray bathroom cabinetry',
    summary: 'A tiled walk-in shower with glass doors, grab bars, and coordinating finishes.',
    tags: ['Bathroom', 'Tile', 'Shower']
  },
  {
    id: 'kitchen-herringbone-tile',
    title: 'Kitchen with Herringbone Tile',
    category: 'Kitchen',
    image: 'images/projects/portfolio/lakeside-kitchen-tile.jpg',
    alt: 'Light gray kitchen with a herringbone tile backsplash and stainless appliances',
    summary: 'A light gray kitchen with a detailed tile backsplash and stainless appliances.',
    tags: ['Kitchen', 'Tile', 'Appliances']
  },
  {
    id: 'bright-white-kitchen',
    title: 'Bright White Kitchen',
    category: 'Kitchen',
    image: 'images/projects/portfolio/lakeside-white-kitchen.jpg',
    alt: 'White kitchen cabinetry with marble-look counters and a professional range',
    summary: 'White cabinetry and marble-look counters create a bright, clean kitchen.',
    tags: ['Kitchen', 'Cabinetry', 'Countertops']
  },
  {
    id: 'kitchen-installation-progress',
    title: 'Kitchen Installation in Progress',
    category: 'In Progress',
    image: 'images/projects/portfolio/lakeside-kitchen-installation.jpg',
    alt: 'White kitchen cabinetry and island during installation, with tools still in the room',
    summary: 'A kitchen installation in progress, showing cabinetry and island work before the finishing details.',
    tags: ['Kitchen', 'Installation', 'In Progress']
  },
  {
    id: 'laundry-room-custom-cabinetry',
    title: 'Laundry Room with Custom Cabinetry',
    category: 'Laundry Room',
    image: 'images/projects/portfolio/lakeside-laundry-after.jpg',
    alt: 'Updated laundry room with gray custom cabinets, marble-look tile floor, and washer and dryer',
    summary: 'A refreshed laundry room with custom cabinetry and marble-look tile flooring.',
    tags: ['Laundry Room', 'Cabinetry', 'Tile']
  },
  {
    id: 'rebuilt-deck-stairs',
    title: 'Rebuilt Deck & Stairs',
    category: 'Outdoor',
    image: 'images/projects/portfolio/lakeside-deck-after.jpg',
    alt: 'New wood deck with rebuilt stairs and railing leading to the backyard',
    summary: 'A rebuilt outdoor stairway and deck with new wood decking and railing.',
    tags: ['Deck', 'Stairs', 'Railing']
  }
];

const heroProjectPhotos = homepageProjectPhotos.slice(0, 3);

export function HeroProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = heroProjectPhotos[currentIndex];
  const showProject = (direction) => {
    setCurrentIndex((index) => (index + direction + heroProjectPhotos.length) % heroProjectPhotos.length);
  };

  return (
    <>
      <div className="hero-blueprint hero-photo-carousel" aria-label="Project photo carousel">
        <div className="hero-blueprint__topline">
          <span>Lakeside · Project Gallery</span>
          <span>{String(currentIndex + 1).padStart(2, '0')} / {String(heroProjectPhotos.length).padStart(2, '0')}</span>
        </div>
        <div className="hero-photo-carousel__viewport">
          <img className="hero-photo-carousel__ambient" src={withBase(project.image)} alt="" aria-hidden="true" />
          <a
            className="hero-photo-carousel__photo"
            href={withBase(`projects/?project=${project.id}`)}
            aria-label={`Open the gallery at ${project.title}`}
          >
            <img src={withBase(project.image)} alt={project.alt} fetchPriority={currentIndex === 0 ? 'high' : 'auto'} />
          </a>
          <button className="hero-photo-carousel__arrow hero-photo-carousel__arrow--prev" type="button" onClick={() => showProject(-1)} aria-label="Previous project photo">←</button>
          <button className="hero-photo-carousel__arrow hero-photo-carousel__arrow--next" type="button" onClick={() => showProject(1)} aria-label="Next project photo">→</button>
        </div>
        <div className="hero-blueprint__caption">
          <span className="hero-blueprint__mark">40+</span>
          <span><strong>Years of hands-on experience</strong><small>One team from planning through finish</small></span>
        </div>
        <span className="hero-blueprint__stamp">{project.category} · {currentIndex + 1} of {heroProjectPhotos.length}</span>
        <div className="hero-photo-carousel__dots" aria-label="Choose a project photo">
          {heroProjectPhotos.map((photo, index) => (
            <button
              key={photo.image}
              type="button"
              className={index === currentIndex ? 'is-active' : ''}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show photo ${index + 1}: ${photo.title}`}
              aria-current={index === currentIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </>
  );
}

const homepageBeforeAfterProjects = [
  {
    title: 'Laundry Room Renovation',
    summary: 'Compare the crowded utility space with the refreshed laundry room.',
    beforeImage: 'images/projects/portfolio/lakeside-laundry-before.jpg',
    afterImage: 'images/projects/portfolio/lakeside-laundry-after.jpg',
    altBefore: 'Laundry room before renovation, crowded with hanging clothes, shelves, and stored items',
    altAfter: 'Laundry room after renovation with gray custom cabinetry and marble-look tile flooring',
    scope: 'Laundry room update'
  },
  {
    title: 'Deck & Stair Renovation',
    summary: 'Compare the weathered deck with its rebuilt wood stairs and railing.',
    beforeImage: 'images/projects/portfolio/lakeside-deck-before.jpg',
    afterImage: 'images/projects/portfolio/lakeside-deck-after.jpg',
    altBefore: 'Weathered wood deck and stairs before renovation',
    altAfter: 'Rebuilt wood deck, stairs, and railing after renovation',
    scope: 'Decking, stairs, and railing'
  }
];

const galleryComparisonPhotos = homepageBeforeAfterProjects.flatMap((project, index) => ([
  {
    id: `comparison-${index + 1}-before`,
    title: `${project.title} · Before`,
    category: 'Before & After',
    image: project.beforeImage,
    alt: project.altBefore,
    summary: project.summary,
    tags: ['Before', project.scope]
  },
  {
    id: `comparison-${index + 1}-after`,
    title: `${project.title} · After`,
    category: 'Before & After',
    image: project.afterImage,
    alt: project.altAfter,
    summary: project.summary,
    tags: ['After', project.scope]
  }
]));

export function HomeProjectGallery() {
  const trackRef = useRef(null);

  const scrollProjects = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.78, behavior: 'smooth' });
  };

  return (
    <section className="section home-gallery">
      <div className="container">
        <div className="home-gallery__heading">
          <SectionIntro
            eyebrow="Project Gallery"
            title="A Look at Our Work"
            body="Browse kitchen and bathroom project photos. Select a photo to open it in the full gallery."
          />
          <div className="home-gallery__controls" aria-label="Project gallery controls">
            <button type="button" onClick={() => scrollProjects(-1)} aria-label="Scroll to previous projects">←</button>
            <button type="button" onClick={() => scrollProjects(1)} aria-label="Scroll to next projects">→</button>
          </div>
        </div>
        <div className="home-gallery__track" id="home-project-gallery" ref={trackRef} aria-label="Kitchen and bathroom project photos" tabIndex="0">
          {homepageProjectPhotos.map((project) => (
            <a
              className="home-gallery__card"
              key={project.image}
              href={withBase(`projects/?project=${project.id}`)}
              aria-label={`Open photo: ${project.title}`}
            >
              <span className="home-gallery__photo">
                <img src={withBase(project.image)} alt={project.alt} loading="lazy" decoding="async" />
                <span className="home-gallery__zoom" aria-hidden="true">↗</span>
              </span>
              <span className="home-gallery__caption">
                <span className="home-gallery__category">{project.category}</span>
                <strong>{project.title}</strong>
              </span>
            </a>
          ))}
        </div>
        <p className="home-gallery__hint">Swipe or scroll to explore all project photos</p>
      </div>
    </section>
  );
}

export function HomeBeforeAfterShowcase() {
  return (
    <section className="section home-before-after">
      <div className="container">
        <SectionIntro
          eyebrow="Before & After"
          title="Two Projects, Before and After"
          body="Drag each divider to compare the original project with the finished work."
        />
        <div className="before-after-showcase home-before-after__comparison">
          {homepageBeforeAfterProjects.map((project) => (
            <BeforeAfterSlider key={project.title} compact project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectGallery() {
  const [filter, setFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(() => {
    const selectedId = new URLSearchParams(window.location.search).get('project');
    const projectIndex = homepageProjectPhotos.findIndex((project) => project.id === selectedId);
    if (projectIndex >= 0) return projectIndex;
    const comparisonIndex = galleryComparisonPhotos.findIndex((project) => project.id === selectedId);
    return comparisonIndex >= 0 ? comparisonIndex : null;
  });
  const [lightboxProjects, setLightboxProjects] = useState(() => {
    const selectedId = new URLSearchParams(window.location.search).get('project');
    return galleryComparisonPhotos.some((project) => project.id === selectedId)
      ? galleryComparisonPhotos
      : homepageProjectPhotos;
  });

  const filters = useMemo(
    () => ['All', ...new Set(homepageProjectPhotos.map((project) => project.category))],
    []
  );

  const visibleProjects = useMemo(() => {
    if (filter === 'All') return homepageProjectPhotos;
    return homepageProjectPhotos.filter((project) => project.category === filter);
  }, [filter]);

  const updateProjectQuery = (projectId) => {
    const url = new URL(window.location.href);
    if (projectId) url.searchParams.set('project', projectId);
    else url.searchParams.delete('project');
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

  const openProject = (index) => {
    setLightboxProjects(visibleProjects);
    setActiveIndex(index);
    updateProjectQuery(visibleProjects[index]?.id);
  };

  const openComparisonPhoto = (index) => {
    setLightboxProjects(galleryComparisonPhotos);
    setActiveIndex(index);
    updateProjectQuery(galleryComparisonPhotos[index]?.id);
  };

  const closeProject = () => {
    setActiveIndex(null);
    updateProjectQuery(null);
  };

  const navigateProject = (index) => {
    setActiveIndex(index);
    updateProjectQuery(lightboxProjects[index]?.id);
  };

  return (
    <section className="section project-gallery-page">
      <div className="container">
        <div className="project-gallery__shell" data-reveal>
          <div className="project-gallery__header">
            <div className="project-gallery__copy">
              <p className="eyebrow">Lakeside · Project Gallery</p>
              <h1>Our Work, Up Close</h1>
              <p className="project-gallery__body">
                Browse our kitchen, bathroom, cabinetry, and outdoor projects. Open any photo to zoom in and see the details.
              </p>
            </div>
            <div className="project-gallery__count" aria-live="polite">
              <strong>{visibleProjects.length}</strong>
              <span>{visibleProjects.length === 1 ? 'project photo' : 'project photos'}</span>
            </div>
          </div>
          <div className="project-filter" role="group" aria-label="Filter project photos">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                className={filter === item ? 'is-active' : ''}
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="project-grid project-grid--gallery">
          {visibleProjects.map((project, index) => (
            <article
              key={project.title}
              className="project-card project-card--interactive"
              data-reveal
              onClick={() => openProject(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openProject(index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open details for ${project.title}`}
            >
              <div className="project-card__media">
                <img src={withBase(project.image)} alt={project.alt} loading="lazy" decoding="async" />
                <span>{project.category}</span>
                <span className="project-card__open" aria-hidden="true">↗</span>
              </div>
              <div className="project-card__body">
                <div className="project-card__topline">
                  <h3>{project.title}</h3>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
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
        <section className="project-gallery__comparisons" aria-labelledby="project-comparisons-heading">
          <div className="project-gallery__comparisons-heading">
            <div>
              <p className="eyebrow">Before &amp; After</p>
              <h2 id="project-comparisons-heading">See Both Sides of the Project</h2>
            </div>
            <p>Each comparison keeps the before and after photos together so you can see the change at a glance.</p>
          </div>
          <div className="project-comparison-grid">
            {homepageBeforeAfterProjects.map((project, index) => (
              <article className="project-comparison" key={project.title}>
                <div className="project-comparison__title">
                  <span>Comparison 0{index + 1}</span>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-comparison__pair">
                  <button type="button" className="project-comparison__photo" onClick={() => openComparisonPhoto(index * 2)} aria-label={`Open before photo for ${project.title}`}>
                    <span className="project-comparison__label">Before</span>
                    <img src={withBase(project.beforeImage)} alt={project.altBefore} loading="lazy" decoding="async" />
                  </button>
                  <button type="button" className="project-comparison__photo" onClick={() => openComparisonPhoto(index * 2 + 1)} aria-label={`Open after photo for ${project.title}`}>
                    <span className="project-comparison__label">After</span>
                    <img src={withBase(project.afterImage)} alt={project.altAfter} loading="lazy" decoding="async" />
                  </button>
                </div>
                <p className="project-comparison__scope">{project.scope}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {activeIndex !== null ? (
        <ProjectLightbox
          projects={lightboxProjects}
          activeIndex={activeIndex}
          onClose={closeProject}
          onNavigate={navigateProject}
        />
      ) : null}
    </section>
  );
}
