// Replace the content in this file first when customizing the site:
// - business name, phone, email, service area, hours
// - Facebook and Instagram links
// - Google Business Profile links, map embed, and review placeholders
// - Formspree endpoints
// - testimonial text, client names, and project details
// - home hero placeholder images and trust cards
// - image paths in featuredProjects and beforeAfterProjects
export const business = {
  name: 'Lakeside Design + Build',
  tagline: 'Kitchen & Bath Specialists',
  legalName: 'Lakeside Design + Build LLC',
  phone: '(555) 214-8902',
  phoneHref: 'tel:+15552148902',
  email: 'hello@lakesidedesignbuild.com',
  emailHref: 'mailto:hello@lakesidedesignbuild.com',
  address: '123 Harbor Ridge Drive, Your City, ST 00000',
  hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
  serviceAreaLabel: 'Serving homeowners across Your City, Lakeside County, and nearby communities.',
  serviceAreas: [
    'Your City',
    'North Ridge',
    'Harbor Point',
    'Maple Glen',
    'Westfield',
    'Cedar Heights'
  ],
  license: 'Licensed & Insured',
  years: '15+ years',
  reviewsLabel: '4.9 Google rating',
  mapUrl: 'https://maps.google.com/?q=Your+City',
  // Replace the Google URLs below with your real Business Profile links.
  googleProfile: {
    rating: '4.9',
    reviewCountLabel: '37+ Google reviews',
    summary: 'Read the rating, review history, and map in one place before you reach out.',
    profileUrl: 'https://maps.google.com/?q=Lakeside+Design+Build',
    readReviewsUrl: 'https://maps.google.com/?q=Lakeside+Design+Build',
    writeReviewUrl: 'https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID',
    mapEmbedUrl: 'https://www.google.com/maps?q=Sparta+NJ&output=embed',
    // Replace these with the exact physical service-center coordinates if needed.
    coverageCenter: {
      lat: 41.03343,
      lng: -74.63849,
      label: 'Sparta, NJ'
    },
    coverageRadiusMiles: 30,
    liveReviewsLabel: 'Review highlights',
    // Replace these sample cards with live synced Google reviews later if desired.
    featuredReviews: [
      {
        quote: 'Professional from planning through the final finish details.',
        author: 'Kitchen client',
        location: 'North Ridge'
      },
      {
        quote: 'The bathroom turned out beautifully, and the communication stayed steady.',
        author: 'Bathroom client',
        location: 'Harbor Point'
      }
    ]
  },
  socialLinks: [
    {
      label: 'Instagram',
      href: 'https://instagram.com/yourcompany'
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com/yourcompany'
    }
  ],
  socialImage: 'images/branding/og-cover.svg',
  footerNote:
    'Premium kitchen and bathroom remodeling with thoughtful planning, clean execution, and finish work that feels considered in every detail.'
};

export const forms = {
  // Replace these with your real static form endpoints.
  quoteEndpoint: import.meta.env.VITE_QUOTE_FORM_ENDPOINT || 'https://formspree.io/f/your-quote-form-id',
  contactEndpoint:
    import.meta.env.VITE_CONTACT_FORM_ENDPOINT || 'https://formspree.io/f/your-contact-form-id'
};

export const stats = [
  { value: '300+', label: 'Kitchen & bath projects' },
  { value: '15+', label: 'Years in remodeling' },
  { value: '4.9', label: 'Average homeowner rating' },
  { value: '1', label: 'Single point of contact' }
];

export const heroTrustItems = [
  {
    title: '4.9 rating',
    detail: 'Verified reviews',
    href: business.googleProfile.readReviewsUrl,
    ariaLabel: 'Open Google reviews'
  },
  {
    title: 'Licensed + insured',
    detail: 'Full coverage'
  },
  {
    title: 'Clear scopes',
    detail: 'Planning first'
  },
  {
    title: 'Kitchen + bath',
    detail: 'Focused remodels'
  }
];

export const homeSpotlights = [
  {
    title: 'Tile & Finish Direction',
    detail: 'Stone, tile, metal, and fixture selections that keep the final space cohesive and elevated.',
    image: 'images/projects/home-materials.svg',
    alt: 'Tile and finish selection board for a premium kitchen or bathroom remodel',
    label: 'Selections'
  },
  {
    title: 'Bathroom Planning Review',
    detail: 'Thoughtful walkthroughs for showers, vanities, storage, and the details that shape the finished result.',
    image: 'images/projects/home-consultation.svg',
    alt: 'Kitchen and bathroom remodeling consultation and planning session',
    label: 'Project Planning'
  }
];

export const homeHeroSlides = [
  {
    title: 'Custom Kitchen Remodel',
    detail: 'Cabinetry, lighting, and layout decisions planned around the way the room gets used every day.',
    image: 'images/projects/kitchen-after.svg',
    alt: 'Custom kitchen remodel with refined cabinetry and layered lighting',
    label: 'Featured Kitchen'
  },
  {
    title: 'Primary Bathroom Renovation',
    detail: 'A brighter bathroom direction with cleaner tile lines, stronger materials, and a more finished daily feel.',
    image: 'images/projects/bathroom-after.svg',
    alt: 'Primary bathroom renovation with refined tile and vanity finishes',
    label: 'Featured Bathroom'
  },
  {
    title: 'Remodel Design Direction',
    detail: 'Layouts, finishes, and project planning aligned before the work begins.',
    image: 'images/projects/home-renovation.svg',
    alt: 'Kitchen and bathroom remodel planning and design direction',
    label: 'Design Direction'
  }
];

export const homeConversionCards = [
  {
    title: 'Full kitchen renovations',
    text: 'Clearer layouts, stronger storage, and a kitchen that feels finished.'
  },
  {
    title: 'Full bathroom renovations',
    text: 'Better shower planning, cleaner finishes, and a calmer daily routine.'
  },
  {
    title: 'Clear remodel process',
    text: 'Straightforward scopes, direct communication, and cleaner execution.'
  }
];

export const trustBadges = [
  'Licensed & insured remodeling specialists',
  'Detailed proposals and finish planning',
  'Respectful crews and clean jobsites',
  'Tile, cabinetry, and waterproofing done right'
];

export const services = [
  {
    slug: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    short: 'Full bathroom renovations built around cleaner layouts, better shower systems, and a more finished daily feel.',
    homeownerBenefits: [
      'Improve comfort, storage, and everyday function',
      'Replace dated layouts, worn finishes, and weak shower setups',
      'Create a bathroom that feels cleaner, brighter, and easier to live with'
    ],
    examples: ['Primary bathroom renovations', 'Guest bathroom renovations', 'Full bath updates'],
    value:
      'From full gut renovations to more focused updates, the work centers on layout, shower and tile planning, vanities, fixtures, and the finished feel of the room.'
  },
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    short: 'Full kitchen renovations built for better flow, stronger storage, and a cleaner finished look.',
    homeownerBenefits: [
      'Improve flow for cooking, gathering, and daily routines',
      'Add better storage, prep space, and lighting',
      'Create a kitchen that lifts the whole home'
    ],
    examples: ['Full kitchen renovations', 'Layout reconfiguration', 'Cabinet, countertop, and lighting upgrades'],
    value:
      'The focus stays on full kitchen renovations that improve layout, cabinetry, counters, lighting, and the overall finished feel of the space.'
  }
];

export const reasons = [
  {
    title: 'Remodel precision',
    text: 'Waterproofing, alignment, fit, and finish handled the right way.'
  },
  {
    title: 'Clear planning up front',
    text: 'Scope, selections, and scheduling are discussed early so the project feels organized.'
  },
  {
    title: 'Premium without the theater',
    text: 'Polished, professional, and steady without the sales-heavy feel.'
  },
  {
    title: 'Respect for lived-in homes',
    text: 'Clean jobsites, careful protection, and respectful communication throughout.'
  }
];

export const processSteps = [
  {
    title: 'Walkthrough & priorities',
    text: 'We learn how you use the kitchen or bathroom now, what is not working, and what the finished space needs to do better.'
  },
  {
    title: 'Scope & direction',
    text: 'You get a clear outline of the remodel, the right level of pricing detail, and practical guidance on layout and finish decisions.'
  },
  {
    title: 'Selections & scheduling',
    text: 'Tile, cabinetry, fixtures, flooring, and scheduling are aligned before work begins so the build moves with fewer surprises.'
  },
  {
    title: 'Build with precision',
    text: 'We manage demolition, prep, installation, and finish work with clean execution, dependable site standards, and steady communication.'
  },
  {
    title: 'Final detail review',
    text: 'We walk the space with you, tighten final details, and make sure the remodel feels complete, considered, and ready to live in.'
  }
];

export const beforeAfterProjects = [
  {
    title: 'Primary Bathroom Renewal',
    location: 'Harbor Point',
    summary:
      'A dated, cramped bath transformed into a warm, hotel-inspired retreat with layered stone tones, frameless glass, and cleaner sight lines.',
    beforeImage: 'images/projects/bathroom-before.svg',
    afterImage: 'images/projects/bathroom-after.svg',
    altBefore: 'Placeholder before photo for bathroom remodeling project',
    altAfter: 'Placeholder after photo for bathroom remodeling project',
    scope: 'Custom shower, tile, vanity, lighting, and layout cleanup',
    value: 'Better daily flow, higher-end materials, and a more calming finished feel.'
  },
  {
    title: 'Kitchen Rebuild with Better Flow',
    location: 'Maple Glen',
    summary:
      'An enclosed kitchen opened into a more connected cooking and gathering space with stronger storage, better lighting, and cleaner finishes.',
    beforeImage: 'images/projects/kitchen-before.svg',
    afterImage: 'images/projects/kitchen-after.svg',
    altBefore: 'Placeholder before photo for kitchen remodeling project',
    altAfter: 'Placeholder after photo for kitchen remodeling project',
    scope: 'Cabinetry, counters, backsplash, island, lighting, and finish carpentry',
    value: 'A stronger visual centerpiece that works harder every day.'
  },
  {
    title: 'Hall Bath Shower Conversion',
    location: 'North Ridge',
    summary:
      'An outdated hall bath was simplified into a brighter, easier-to-maintain space with a walk-in shower, cleaner tile lines, and a better vanity layout.',
    beforeImage: 'images/projects/bathroom-before.svg',
    afterImage: 'images/projects/bathroom-after.svg',
    altBefore: 'Before photo for hall bathroom renovation',
    altAfter: 'After photo for hall bathroom renovation',
    scope: 'Shower conversion, tile, flooring, vanity, and fixture updates',
    value: 'A smaller room that now feels more open, functional, and current.'
  },
  {
    title: 'Kitchen Refresh with Better Light',
    location: 'Cedar Heights',
    summary:
      'A dark, tight kitchen was opened up with brighter finishes, cleaner cabinetry lines, and a more usable prep and gathering layout.',
    beforeImage: 'images/projects/kitchen-before.svg',
    afterImage: 'images/projects/kitchen-after.svg',
    altBefore: 'Before photo for kitchen remodel with dated cabinetry and dim lighting',
    altAfter: 'After photo for kitchen remodel with brighter cabinetry and improved layout',
    scope: 'Cabinetry, counters, backsplash, island, and layered lighting',
    value: 'A kitchen that feels lighter, more functional, and easier to live in every day.'
  }
];

export const featuredProjects = [
  {
    title: 'Lakeshore Kitchen',
    category: 'Kitchens',
    image: 'images/projects/kitchen-after.svg',
    alt: 'Placeholder image for luxury kitchen renovation',
    location: 'North Ridge',
    summary: 'White oak tones, stone surfaces, integrated lighting, and a layout built for daily use.',
    tags: ['Kitchen Remodel', 'Cabinetry', 'Lighting']
  },
  {
    title: 'Slate & Brass Bath',
    category: 'Bathrooms',
    image: 'images/projects/bathroom-after.svg',
    alt: 'Placeholder image for bathroom renovation',
    location: 'Harbor Point',
    summary: 'A clean-lined bathroom renovation with high-contrast finishes and a quieter, more spacious feel.',
    tags: ['Bathroom Remodel', 'Tile', 'Shower Glass']
  },
  {
    title: 'White Oak Entertainer Kitchen',
    category: 'Kitchens',
    image: 'images/projects/kitchen-after.svg',
    alt: 'Kitchen renovation with warm cabinetry and improved layout',
    location: 'Maple Glen',
    summary: 'A tighter footprint reworked into a more open kitchen with better prep flow, stronger storage, and cleaner lines.',
    tags: ['Kitchen Renovation', 'Storage', 'Island']
  },
  {
    title: 'Frameless Shower Retreat',
    category: 'Bathrooms',
    image: 'images/projects/bathroom-after.svg',
    alt: 'Bathroom remodel with frameless shower and tile detailing',
    location: 'Westfield',
    summary: 'A dated enclosure was replaced with a cleaner shower layout, quieter material palette, and more refined fixture package.',
    tags: ['Custom Shower', 'Tile Work', 'Fixtures']
  },
  {
    title: 'Tailored Family Bath',
    category: 'Bathrooms',
    image: 'images/projects/bathroom-after.svg',
    alt: 'Bathroom renovation with vanity, flooring, and refined finishes',
    location: 'Your City',
    summary: 'Better storage, brighter finishes, and more durable materials turned a basic family bath into a room that feels finished.',
    tags: ['Vanity', 'Flooring', 'Bathroom Renovation']
  },
  {
    title: 'Stone & Brass Kitchen Update',
    category: 'Kitchens',
    image: 'images/projects/kitchen-after.svg',
    alt: 'Premium kitchen remodel with stone surfaces and brass accents',
    location: 'Lakeside County',
    summary: 'Updated cabinetry, stone counters, and layered lighting gave this kitchen a stronger visual anchor and more useful daily storage.',
    tags: ['Countertops', 'Lighting', 'Cabinetry']
  },
  {
    title: 'Coastal White Kitchen',
    category: 'Kitchens',
    image: 'images/projects/kitchen-after.svg',
    alt: 'Kitchen renovation with lighter finishes and calm layered materials',
    location: 'Harbor Point',
    summary: 'A brighter kitchen direction with calmer materials, stronger task lighting, and cleaner lines around the main work zones.',
    tags: ['Kitchen Remodel', 'Stone Surfaces', 'Lighting']
  },
  {
    title: 'Gathering Kitchen Renovation',
    category: 'Kitchens',
    image: 'images/projects/kitchen-after.svg',
    alt: 'Kitchen remodel with island seating and refined cabinetry layout',
    location: 'Westfield',
    summary: 'This remodel focused on better circulation, more comfortable island seating, and cabinetry that made the room feel more tailored.',
    tags: ['Island', 'Storage', 'Cabinetry']
  },
  {
    title: 'Modern Brass Primary Bath',
    category: 'Bathrooms',
    image: 'images/projects/bathroom-after.svg',
    alt: 'Primary bathroom renovation with brass fixtures and polished tile',
    location: 'Maple Glen',
    summary: 'A more spacious-feeling primary bath with cleaner shower glass, warmer fixture tones, and a calmer material palette.',
    tags: ['Primary Bath', 'Shower Glass', 'Fixtures']
  },
  {
    title: 'Calm Stone Hall Bath',
    category: 'Bathrooms',
    image: 'images/projects/bathroom-after.svg',
    alt: 'Hall bathroom renovation with stone-look tile and compact vanity planning',
    location: 'North Ridge',
    summary: 'A tighter hall bath reworked into a more open daily-use room with stronger tile balance, brighter light, and more useful storage.',
    tags: ['Bathroom Renovation', 'Tile', 'Vanity']
  },
  {
    title: 'Double Vanity Bathroom',
    category: 'Bathrooms',
    image: 'images/projects/bathroom-after.svg',
    alt: 'Bathroom remodel with double vanity and refined finish work',
    location: 'Cedar Heights',
    summary: 'An older bath was rebuilt with a better vanity layout, more polished finish work, and a cleaner shower zone that feels easier to maintain.',
    tags: ['Double Vanity', 'Bathroom Remodel', 'Finish Work']
  }
];

export const testimonials = [
  {
    quote:
      'The bathroom looks exceptional, but what stood out most was how organized the whole process felt.',
    name: 'Emily R.',
    location: 'Harbor Point',
    project: 'Primary bathroom remodel'
  },
  {
    quote:
      'The kitchen is beautiful, and the communication stayed strong the whole time.',
    name: 'Daniel and Marisa T.',
    location: 'Maple Glen',
    project: 'Kitchen renovation'
  },
  {
    quote:
      'It looks high-end, but more importantly it feels like it was done correctly.',
    name: 'Jonathan P.',
    location: 'Cedar Heights',
    project: 'Hall bathroom renovation'
  }
];

export const faqs = [
  {
    question: 'What types of projects are the best fit?',
    answer:
      'The best fit is kitchen remodeling and bathroom renovations where layout, craftsmanship, and clean execution matter.'
  },
  {
    question: 'Can you help shape the scope if we are still figuring things out?',
    answer:
      'Yes. Many projects start with goals rather than fully finished plans. We help define priorities, sequencing, and scope so the project starts on solid footing.'
  },
  {
    question: 'Do you provide free estimates?',
    answer:
      'Yes. We use the first conversation and site walkthrough to understand the work, answer early questions, and determine whether the project is a strong fit.'
  },
  {
    question: 'How long do remodels typically take?',
    answer:
      'Timelines vary by scope, selections, and complexity. A focused bathroom update can move faster, while a full kitchen or primary bath remodel usually needs more planning and coordination. We set expectations clearly up front.'
  },
  {
    question: 'How should we prepare before contacting you?',
    answer:
      'Helpful details include your county or township, which room you want to renovate, your preferred timing, inspiration photos if you have them, and any budget range you want us to consider.'
  }
];

export const values = [
  {
    title: 'Precision in the details',
    text: 'No shortcuts hidden behind surface polish. The visible work and the behind-the-walls work both need to hold up.'
  },
  {
    title: 'Professional communication',
    text: 'Homeowners should not have to chase updates, guess at next steps, or wonder where the project stands.'
  },
  {
    title: 'Design-aware execution',
    text: 'The work needs to function beautifully, but it also needs to look refined, balanced, and well considered.'
  },
  {
    title: 'Respect for the home',
    text: 'Cleanliness, punctuality, and jobsite discipline are part of the service, not add-ons.'
  }
];

export const quoteSidebarPoints = [
  'Call today for a kitchen or bathroom estimate conversation',
  'Email photos and a short project summary anytime',
  'Clear next steps after first contact',
  'Professional homeowner communication from day one'
];
