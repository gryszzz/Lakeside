import { useEffect, useMemo, useRef, useState } from 'react';
import { beforeAfterProjects, featuredProjects } from '../content/site';
import { withBase } from '../utils';
import { SectionIntro } from './Layout';

function ProjectLightbox({ projects, activeIndex, onClose, onNavigate }) {
  const project = projects[activeIndex];
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < projects.length - 1;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft' && hasPrev) {
        event.preventDefault();
        onNavigate(activeIndex - 1);
      }
      if (event.key === 'ArrowRight' && hasNext) {
        event.preventDefault();
        onNavigate(activeIndex + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, hasNext, hasPrev, onClose, onNavigate]);

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

          <div className="lightbox__media">
            <img
              className="lightbox__image"
              src={withBase(project.image)}
              alt={project.alt}
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
                <img style={{ objectPosition: project.focalPoint }} src={withBase(project.image)} alt={project.alt} />
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
    focalPoint: '50% 80%',
    alt: 'Custom light wood cabinetry with glass-front storage and built-in shelves',
    summary: 'A custom cabinetry installation with glass-front storage and built-in shelving.',
    tags: ['Cabinetry', 'Built-ins', 'Storage']
  },
  {
    id: 'tile-shower-bathroom',
    title: 'Tile Shower & Bathroom',
    category: 'Bathroom',
    image: 'images/projects/portfolio/lakeside-bathroom-shower.jpg',
    focalPoint: '50% 60%',
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
            <img style={{ objectPosition: project.focalPoint }} src={withBase(project.image)} alt={project.alt} fetchPriority={currentIndex === 0 ? 'high' : 'auto'} />
          </a>
          <button className="hero-photo-carousel__arrow hero-photo-carousel__arrow--prev" type="button" onClick={() => showProject(-1)} aria-label="Previous project photo">←</button>
          <button className="hero-photo-carousel__arrow hero-photo-carousel__arrow--next" type="button" onClick={() => showProject(1)} aria-label="Next project photo">→</button>
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

// Add a before photo only when this project has a matching source photo.
// Keep its existing after-photo ID so saved gallery links still work.
const galleryProjectPhotos = homepageProjectPhotos.flatMap((project) => {
  const comparison = homepageBeforeAfterProjects.find((pair) => pair.afterImage === project.image);
  if (!comparison) return [project];
  const comparisonIndex = homepageBeforeAfterProjects.indexOf(comparison);
  return [
    {
      ...project,
      id: `comparison-${comparisonIndex + 1}-before`,
      title: `${comparison.title} · Before`,
      image: comparison.beforeImage,
      alt: comparison.altBefore,
      summary: comparison.summary,
      tags: ['Before', comparison.scope]
    },
    { ...project, title: `${comparison.title} · After`, tags: ['After', comparison.scope] }
  ];
});

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
          {galleryProjectPhotos.map((project) => (
            <a
              className="home-gallery__card"
              key={project.image}
              href={withBase(`projects/?project=${project.id}`)}
              aria-label={`Open photo: ${project.title}`}
            >
              <span className="home-gallery__photo">
                <img style={{ objectPosition: project.focalPoint }} src={withBase(project.image)} alt={project.alt} loading="lazy" decoding="async" />
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
    const projectIndex = galleryProjectPhotos.findIndex((project) => project.id === selectedId);
    if (projectIndex >= 0) return projectIndex;
    return null;
  });
  const [lightboxProjects, setLightboxProjects] = useState(galleryProjectPhotos);

  const filters = useMemo(
    () => ['All', ...new Set(galleryProjectPhotos.map((project) => project.category))],
    []
  );

  const visibleProjects = useMemo(() => {
    if (filter === 'All') return galleryProjectPhotos;
    return galleryProjectPhotos.filter((project) => project.category === filter);
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
                Browse our kitchen, bathroom, cabinetry, and outdoor projects. Open any photo to see the full image. Before and after photos appear back to back.
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
                <img style={{ objectPosition: project.focalPoint }} src={withBase(project.image)} alt={project.alt} loading="lazy" decoding="async" />
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
