// Replace the content in this file first when customizing the site:
// - business name, phone, email, service area, hours
// - Facebook and Instagram links
// - Google Business Profile links, map embed, and review placeholders
// - Formspree endpoints
// - testimonial text, client names, and project details
// - home hero placeholder images and trust cards
// - image paths in featuredProjects and beforeAfterProjects
export const business = {
  name: 'Lakeside Kitchen & Bath LLC',
  tagline: 'Kitchen & Bath Specialists',
  legalName: 'Lakeside Kitchen & Bath LLC',
  phone: '862-344-2660',
  phoneHref: 'tel:+18623442660',
  email: 'ron@lakesidekitchenbaths.com',
  emailHref: 'mailto:ron@lakesidekitchenbaths.com',
  address: '270 Sparta Ave, Box 328, Sparta, NJ 07871',
  hours: '',
  serviceAreaLabel: 'Serving Sussex, Morris, Passaic & Warren Counties.',
  serviceAreas: ['Sussex County', 'Morris County', 'Passaic County', 'Warren County'],
  license: 'Licensed, Insured & Bonded',
  years: 'Over 40 years',
  licenseNumber: 'NJ HIC #13VH13915600',
  reviewsLabel: '2-year workmanship warranty',
  mapUrl: 'https://maps.google.com/?q=Sparta+NJ',
  // Replace the Google URLs below with your real Business Profile links.
  googleProfile: {
    rating: null,
    reviewCountLabel: '',
    summary: 'Read the rating, review history, and map in one place before you reach out.',
    profileUrl: 'https://maps.google.com/?q=Lakeside+Kitchen+Bath+Sparta+NJ',
    readReviewsUrl: 'https://maps.google.com/?q=Lakeside+Kitchen+Bath+Sparta+NJ',
    writeReviewUrl: 'https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID',
    mapEmbedUrl: 'https://maps.google.com/maps?hl=en&q=41.02,-74.73&z=10&output=embed',
    // Replace these with the exact physical service-center coordinates if needed.
    coverageCenter: {
      lat: 41.03343,
      lng: -74.63849,
      label: 'Sparta, NJ'
    },
    mapTagLabel: 'North Jersey',
    mapView: {
      lat: 41.02,
      lng: -74.73,
      zoom: 10
    },
    coverageAreas: ['Sussex County', 'Passaic County', 'Morris County', 'Warren County'],
    coverageTowns: [
      {
        label: 'Sparta',
        lat: 41.03343,
        lng: -74.63849,
        primary: true
      },
      {
        label: 'Franklin',
        lat: 41.10704,
        lng: -74.5857
      },
      {
        label: 'West Milford',
        lat: 41.1312,
        lng: -74.3677
      },
      {
        label: 'Hamburg',
        lat: 41.1532,
        lng: -74.5769
      }
    ],
    coverageSummary: 'Serving Sussex, Morris, Passaic & Warren Counties.',
    liveReviewsLabel: 'Review highlights',
    // Replace these sample cards with live synced Google reviews later if desired.
    featuredReviews: []
  },
  socialLinks: [],
  socialImage: 'images/branding/lakeside-logo.png',
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
  {
    "value": "40+",
    "label": "Years of experience"
  },
  {
    "value": "2 years",
    "label": "Workmanship warranty"
  },
  {
    "value": "4",
    "label": "Counties served"
  },
  {
    "value": "1",
    "label": "Single point of contact"
  }
];

export const heroTrustItems = [
  {
    "title": "40+ years",
    "detail": "Hands-on experience"
  },
  {
    "title": "Licensed, insured & bonded",
    "detail": "NJ HIC #13VH13915600"
  },
  {
    "title": "Daily cleanup",
    "detail": "Respect for your home"
  },
  {
    "title": "2-year warranty",
    "detail": "Workmanship backed"
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
  "Over 40 years of experience",
  "Licensed, Insured & Bonded",
  "NJ HIC #13VH13915600",
  "2-year workmanship warranty"
];

export const services = [
  {
    "slug": "kitchen-remodeling",
    "title": "Kitchen Remodeling",
    "short": "Custom kitchens designed around your lifestyle, budget, and goals.",
    "value": "Custom kitchens designed around your lifestyle, budget, and goals.",
    "examples": [
      "Design",
      "Material Selection Guidance",
      "Cabinet Installation",
      "Countertops & Backsplash",
      "Tile Installation",
      "Flooring Installation",
      "Lighting Upgrades",
      "Appliance Installation",
      "Plumbing & Electrical Updates",
      "Jobsite Protection & Cleanup",
      "Project Management",
      "2-Year Warranty-Backed Workmanship"
    ],
    "homeownerBenefits": []
  },
  {
    "slug": "bathroom-remodeling",
    "title": "Bathroom Remodeling",
    "short": "Beautiful, functional bathrooms built with quality materials and professional installation.",
    "value": "Beautiful, functional bathrooms built with quality materials and professional installation.",
    "examples": [
      "Design",
      "Material Selection Guidance",
      "Tile Installation",
      "Vanities & Countertops",
      "Shower Systems",
      "Waterproofing",
      "Plumbing Fixtures",
      "Lighting Upgrades",
      "Flooring Installation",
      "Jobsite Protection & Cleanup",
      "Project Management",
      "2-Year Warranty-Backed Workmanship"
    ],
    "homeownerBenefits": []
  },
  {
    "slug": "design-material-selection",
    "title": "Design & Material Selection",
    "short": "Expert guidance on cabinets, tile, countertops, fixtures, flooring, and finishes.",
    "value": "Expert guidance on cabinets, tile, countertops, fixtures, flooring, and finishes.",
    "examples": [
      "Design",
      "Material Selection Guidance",
      "Cabinets",
      "Tile",
      "Countertops",
      "Fixtures",
      "Flooring",
      "Finishes"
    ],
    "homeownerBenefits": []
  },
  {
    "slug": "tile-installation",
    "title": "Tile Installation",
    "short": "Professional floor tile, wall tile, backsplashes, niches, and shower systems.",
    "value": "Professional floor tile, wall tile, backsplashes, niches, and shower systems.",
    "examples": [
      "Design",
      "Material Selection Guidance",
      "Floor Tile",
      "Wall Tile",
      "Shower Tile",
      "Backsplashes",
      "Decorative Tile Work",
      "Niche Installation",
      "Grout Color Matching"
    ],
    "homeownerBenefits": []
  },
  {
    "slug": "countertops",
    "title": "Cabinet & Countertop Installation",
    "short": "High-quality installation for kitchens, bathrooms, laundry rooms, and more.",
    "value": "Professional installation designed to complete your space beautifully.",
    "examples": [
      "Design",
      "Material Selection Guidance",
      "Cabinet Installation",
      "Quartz",
      "Granite",
      "Custom Edge Profiles",
      "Sink Cutouts",
      "Backsplash Integration"
    ],
    "homeownerBenefits": []
  }
];

export const reasons = [
  {
    "title": "Experience You Can Trust",
    "text": "With over 40 years of hands-on remodeling experience, we bring knowledge, craftsmanship, and attention to detail to every project."
  },
  {
    "title": "Clean & Professional",
    "text": "We protect your home, maintain organized job sites, and perform daily cleanup."
  },
  {
    "title": "Clear Communication",
    "text": "You’ll always know what’s happening, what’s coming next, and who to contact."
  },
  {
    "title": "Quality Workmanship",
    "text": "Every project is backed by our 2-year workmanship warranty."
  }
];

export const processSteps = [
  {
    "title": "Consultation",
    "text": "Meet to discuss goals, budget, timeline, and vision."
  },
  {
    "title": "Design & Selections",
    "text": "Review layouts, materials, finishes, and fixtures."
  },
  {
    "title": "Detailed Proposal",
    "text": "Receive a clear scope of work and project pricing."
  },
  {
    "title": "Scheduling",
    "text": "Project scheduling and material procurement."
  },
  {
    "title": "Construction",
    "text": "Professional installation, communication, and daily cleanup."
  },
  {
    "title": "Final Walkthrough",
    "text": "Detailed inspection and project completion review."
  },
  {
    "title": "Warranty Support",
    "text": "All workmanship backed by our 2-year workmanship warranty."
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

export const testimonials = [];

export const faqs = [
  {
    "question": "How long does a renovation take?",
    "answer": "Most projects take between 2 and 8 weeks depending on size and complexity."
  },
  {
    "question": "Do you help with material selections?",
    "answer": "Yes. We provide guidance with tile, cabinetry, countertops, lighting, fixtures, and finishes."
  },
  {
    "question": "Are you licensed and insured?",
    "answer": "Yes. Lakeside Kitchen & Bath LLC is licensed, insured, and bonded. NJ HIC #13VH13915600."
  },
  {
    "question": "Do you offer a warranty?",
    "answer": "Yes. We provide a 2-year workmanship warranty."
  },
  {
    "question": "Do you provide written proposals?",
    "answer": "Yes. Every project receives a detailed written proposal."
  },
  {
    "question": "What counties do you serve?",
    "answer": "Sussex, Morris, Passaic, and Warren Counties."
  }
];

export const values = [
  {
    "title": "Integrity",
    "text": "Honest recommendations and transparent communication."
  },
  {
    "title": "Craftsmanship",
    "text": "Work completed with pride, precision, and attention to detail."
  },
  {
    "title": "Respect",
    "text": "Respect for your home, your family, and your investment."
  },
  {
    "title": "Professionalism",
    "text": "Clean job sites, organized processes, and dependable service."
  }
];

export const quoteSidebarPoints = [
  'Call today for a kitchen or bathroom estimate conversation',
  'Email photos and a short project summary anytime',
  'Clear next steps after first contact',
  'Professional homeowner communication from day one'
];
