// Replace the content in this file first when customizing the site:
// - business name, phone, email, service area, hours
// - Facebook and Instagram links
// - Formspree endpoints
// - testimonial text, client names, and project details
// - home hero placeholder images and trust cards
// - image paths in featuredProjects and beforeAfterProjects
export const business = {
  name: 'Lakeside Design + Build',
  tagline: 'Beautiful Remodels. Built Right.',
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
  reviewsLabel: '4.9 average review rating',
  mapUrl: 'https://maps.google.com/?q=Your+City',
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
    'Luxury-focused remodeling, renovation, and exterior improvement work with craftsmanship, communication, and clean execution at every phase.'
};

export const forms = {
  // Replace these with your real static form endpoints.
  quoteEndpoint: import.meta.env.VITE_QUOTE_FORM_ENDPOINT || 'https://formspree.io/f/your-quote-form-id',
  contactEndpoint:
    import.meta.env.VITE_CONTACT_FORM_ENDPOINT || 'https://formspree.io/f/your-contact-form-id'
};

export const stats = [
  { value: '300+', label: 'Projects completed' },
  { value: '15+', label: 'Years in remodeling' },
  { value: '4.9', label: 'Average homeowner rating' },
  { value: '1', label: 'Single point of contact' }
];

export const heroTrustItems = [
  {
    title: '4.9 average',
    detail: 'Verified homeowner reviews'
  },
  {
    title: 'Licensed',
    detail: 'Fully insured local contractor'
  },
  {
    title: 'Detailed scopes',
    detail: 'Clear pricing and planning'
  }
];

export const homeSpotlights = [
  {
    title: 'Exterior Arrival',
    detail: 'A polished first impression starts before the homeowner ever walks inside.',
    image: 'images/projects/home-exterior.svg',
    alt: 'Placeholder exterior project photo for contractor website hero',
    label: 'Featured Home'
  },
  {
    title: 'Design Walkthrough',
    detail: 'Placeholder planning image for consultations, layout conversations, and finish review.',
    image: 'images/projects/home-consultation.svg',
    alt: 'Placeholder design consultation photo for contractor website',
    label: 'Project Planning'
  },
  {
    title: 'Materials & Finishes',
    detail: 'Selections, samples, and specification details that make the final result feel considered.',
    image: 'images/projects/home-materials.svg',
    alt: 'Placeholder materials and finish board image for contractor website',
    label: 'Selections'
  }
];

export const homeQualityPoints = [
  'Premium remodeling for kitchens, bathrooms, decks, windows, and selective whole-home improvements.',
  'A calmer homeowner experience with cleaner communication, sharper finish standards, and tighter project organization.',
  'Built to attract quote requests from people who care about quality, not bargain-basement pricing.'
];

export const trustBadges = [
  'Licensed & insured professionals',
  'Detailed proposals with clear scopes',
  'Respectful crews and clean jobsites',
  'Premium materials and finish quality'
];

export const services = [
  {
    slug: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    short: 'Spa-quality bathrooms with smarter layouts, better finishes, and cleaner everyday function.',
    homeownerBenefits: [
      'Improve comfort, storage, and resale appeal',
      'Upgrade dated finishes and worn fixtures',
      'Create a calmer, more polished daily routine'
    ],
    examples: ['Full primary bath renovations', 'Guest bath updates', 'Tub-to-shower conversions'],
    value:
      'A well-built bathroom remodel adds both everyday comfort and long-term home value when waterproofing, layout, and finish quality are done right.'
  },
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    short: 'High-function kitchens designed for gathering, cooking, storage, and visual impact.',
    homeownerBenefits: [
      'Better flow for busy family routines',
      'More usable storage and countertop space',
      'A premium centerpiece that elevates the entire home'
    ],
    examples: ['Full kitchen renovations', 'Layout reconfiguration', 'Cabinet, countertop, and lighting upgrades'],
    value:
      'Kitchen projects deliver one of the strongest quality-of-life returns in the home when design, construction, and finish selections are handled together.'
  },
  {
    slug: 'decks',
    title: 'Deck Building & Remodeling',
    short: 'Custom outdoor spaces that feel architected, durable, and built for real use.',
    homeownerBenefits: [
      'Expand living space outdoors',
      'Replace unsafe or aging deck structures',
      'Add entertaining value and curb appeal'
    ],
    examples: ['New deck builds', 'Deck resurfacing', 'Stairs, railings, and covered deck updates'],
    value:
      'A properly built deck creates a strong visual upgrade outside while adding functional square footage your household can use for years.'
  },
  {
    slug: 'window-installation',
    title: 'Window Installation',
    short: 'Tighter, cleaner, more efficient window upgrades with a finish that feels intentional.',
    homeownerBenefits: [
      'Reduce drafts and energy waste',
      'Improve light and curb appeal',
      'Upgrade tired trim and aging frames'
    ],
    examples: ['Full-home window replacement', 'Feature window upgrades', 'Trim and flashing improvements'],
    value:
      'Window installation is one of the fastest ways to sharpen the home’s look while improving efficiency, comfort, and envelope performance.'
  },
  {
    slug: 'general-contracting',
    title: 'General Home Improvements',
    short: 'Thoughtful renovation work for the spaces, details, and updates that make a home feel finished.',
    homeownerBenefits: [
      'Tackle multiple priorities with one organized team',
      'Improve everyday function room by room',
      'Protect and modernize the home over time'
    ],
    examples: ['Interior finish updates', 'Structural and framing improvements', 'Whole-home renovation phases'],
    value:
      'General contracting support keeps projects coordinated, decisions cleaner, and workmanship consistent across every part of the job.'
  }
];

export const reasons = [
  {
    title: 'Craft-first execution',
    text: 'We focus on details homeowners can see and details they never should have to think about later: waterproofing, alignment, fit, finish, and lasting performance.'
  },
  {
    title: 'Clear planning up front',
    text: 'Every project starts with a practical scope, realistic sequencing, and transparent communication so expectations stay grounded and confidence stays high.'
  },
  {
    title: 'Premium without the theater',
    text: 'The experience feels polished and organized, but never over-branded or salesy. Homeowners trust us because the work looks disciplined and the process feels steady.'
  },
  {
    title: 'Respect for lived-in homes',
    text: 'Clean jobsites, dependable scheduling, and thoughtful homeowner communication matter just as much as the final reveal.'
  }
];

export const processSteps = [
  {
    title: 'Walkthrough & vision',
    text: 'We learn how you use the space, what is not working, and what a successful finished project should feel like.'
  },
  {
    title: 'Scope & pricing',
    text: 'You receive a clear proposal with the right level of detail to make decisions confidently without guesswork.'
  },
  {
    title: 'Selections & scheduling',
    text: 'Materials, finish decisions, and build sequencing are aligned before work begins so the project moves cleaner.'
  },
  {
    title: 'Build & communicate',
    text: 'Our team manages the construction phase with strong communication, dependable site standards, and quality control.'
  },
  {
    title: 'Final walkthrough',
    text: 'We review the finished work with you, tighten final details, and make sure the result feels complete, not merely done.'
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
    scope: 'Layout cleanup, tile, vanity, lighting, and shower upgrade',
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
    title: 'Backyard Deck Transformation',
    location: 'Cedar Heights',
    summary:
      'An aging exterior platform became a durable entertaining deck with integrated steps, modern rail details, and better site presence.',
    beforeImage: 'images/projects/deck-before.svg',
    afterImage: 'images/projects/deck-after.svg',
    altBefore: 'Placeholder before photo for deck remodeling project',
    altAfter: 'Placeholder after photo for deck remodeling project',
    scope: 'Deck framing, resurfacing, railing package, and stair rebuild',
    value: 'A safer, sharper outdoor extension of the home.'
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
    title: 'Cedar View Deck',
    category: 'Decks',
    image: 'images/projects/deck-after.svg',
    alt: 'Placeholder image for deck build project',
    location: 'Cedar Heights',
    summary: 'A custom outdoor build that expands usable living space and improves the backyard experience.',
    tags: ['Deck Build', 'Exterior', 'Railing']
  },
  {
    title: 'Sunlit Window Upgrade',
    category: 'Windows',
    image: 'images/projects/window-install.svg',
    alt: 'Placeholder image for new window installation',
    location: 'Westfield',
    summary: 'Clean replacement windows with improved efficiency, better trim detailing, and more natural light.',
    tags: ['Windows', 'Trim', 'Energy Efficiency']
  },
  {
    title: 'Whole-Home Finish Refresh',
    category: 'General Contracting',
    image: 'images/projects/home-renovation.svg',
    alt: 'Placeholder image for home improvement project',
    location: 'Your City',
    summary: 'A phased renovation approach that upgraded finishes, flow, and cohesion throughout the home.',
    tags: ['Renovation', 'Finish Carpentry', 'Interior Updates']
  },
  {
    title: 'Entertainer’s Deck Addition',
    category: 'Decks',
    image: 'images/projects/deck-after.svg',
    alt: 'Placeholder image for deck addition project',
    location: 'Lakeside County',
    summary: 'A low-maintenance composite build with integrated steps and cleaner transitions to the yard.',
    tags: ['Deck Remodel', 'Composite', 'Outdoor Living']
  }
];

export const testimonials = [
  {
    quote:
      'The project felt organized from the first meeting through the final walkthrough. The bathroom looks exceptional, but what really stood out was how thoughtful the entire process felt.',
    name: 'Emily R.',
    location: 'Harbor Point',
    project: 'Primary bathroom remodel'
  },
  {
    quote:
      'We talked to multiple contractors, and this was the first team that felt both high-end and grounded. The kitchen is beautiful and the communication stayed strong the whole time.',
    name: 'Daniel and Marisa T.',
    location: 'Maple Glen',
    project: 'Kitchen renovation'
  },
  {
    quote:
      'Our old deck was becoming a problem. They rebuilt it with real attention to detail, and now it genuinely feels like part of the home.',
    name: 'Jonathan P.',
    location: 'Cedar Heights',
    project: 'Deck rebuild'
  }
];

export const faqs = [
  {
    question: 'What types of projects are the best fit?',
    answer:
      'Homeowners usually reach out for bathrooms, kitchens, decks, windows, and broader home improvements where quality, planning, and finish standards matter.'
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
      'Timelines vary by scope, selections, and complexity. Smaller updates can move quickly, while full remodels require more planning and coordination. We set expectations clearly up front.'
  },
  {
    question: 'How should we prepare before contacting you?',
    answer:
      'Helpful details include your address, project goals, preferred timing, inspiration photos if you have them, and any budget range you want us to consider.'
  }
];

export const values = [
  {
    title: 'Honest craftsmanship',
    text: 'No shortcuts hidden behind surface polish. The visible work and the behind-the-walls work should both hold up.'
  },
  {
    title: 'Professional communication',
    text: 'Homeowners should not have to chase updates, guess at next steps, or wonder where the project stands.'
  },
  {
    title: 'Design-aware construction',
    text: 'The work needs to function beautifully, but it also needs to look refined, balanced, and well considered.'
  },
  {
    title: 'Respect for the home',
    text: 'Cleanliness, punctuality, and jobsite discipline are part of the service, not add-ons.'
  }
];

export const quoteSidebarPoints = [
  'Free estimate and project-fit conversation',
  'Clear next steps after submission',
  'Premium remodeling and renovation focus',
  'Friendly homeowner communication from day one'
];
