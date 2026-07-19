import { images } from '../assets/images';
import { HUB_ROUTES } from '../lib/routes';

export type CatalogCategory = 'vehicles' | 'energy' | 'charging' | 'discover' | 'shop' | 'other';

export type CatalogItem = {
  id: string;
  name: string;
  desc: string;
  image: string;
  category: CatalogCategory;
  /** Primary CTA label on product page */
  ctaPrimary: string;
  /** Secondary CTA label */
  ctaSecondary: string;
  /** Longer blurb for product page */
  blurb: string;
  features?: string[];
  /** Homepage section id for optional scroll */
  sectionId?: string;
};

export const catalog: CatalogItem[] = [
  // Vehicles
  {
    id: 'model-s',
    name: 'Model S',
    desc: 'Luxury sedan',
    image: images.cardModelS,
    category: 'vehicles',
    ctaPrimary: 'Order Now',
    ctaSecondary: 'Learn More',
    blurb: 'Model S is built for speed and range, with refined luxury and advanced Autopilot capability.',
    features: ['Long range', 'Quick acceleration', 'Premium interior'],
    sectionId: 'model-s',
  },
  {
    id: 'model-3',
    name: 'Model 3',
    desc: 'Sport Sedan',
    image: images.cardModel3,
    category: 'vehicles',
    ctaPrimary: 'Order Now',
    ctaSecondary: 'Learn More',
    blurb: 'Model 3 is a compact electric sedan with sharp handling, efficient range, and modern tech.',
    features: ['0.99% APR Available', 'Lease From $329/mo', 'Sport Sedan'],
    sectionId: 'model-3',
  },
  {
    id: 'model-y',
    name: 'Model Y',
    desc: 'Midsize SUV',
    image: images.cardModelY,
    category: 'vehicles',
    ctaPrimary: 'Order Now',
    ctaSecondary: 'Learn More',
    blurb: 'Model Y is a versatile midsize SUV with seating flexibility and all-electric performance.',
    features: ['0% APR Available', 'Lease From $459/mo', 'Midsize SUV'],
    sectionId: 'model-y',
  },
  {
    id: 'model-x',
    name: 'Model X',
    desc: 'Premium SUV',
    image: images.cardModelX,
    category: 'vehicles',
    ctaPrimary: 'Order Now',
    ctaSecondary: 'Learn More',
    blurb: 'Model X delivers falcon-wing doors, seating for the family, and confident electric performance.',
    features: ['Falcon Wing doors', 'Spacious cabin', 'All-wheel drive options'],
  },
  {
    id: 'cybertruck',
    name: 'Cybertruck',
    desc: 'Utility Truck',
    image: images.cardCybertruck,
    category: 'vehicles',
    ctaPrimary: 'Order Now',
    ctaSecondary: 'Learn More',
    blurb: 'Cybertruck is an ultra-hardy electric utility truck built for capability and durability.',
    features: ['Utility Truck', 'Lease From $949/mo', 'Exoskeleton design'],
    sectionId: 'cybertruck',
  },
  {
    id: 'model-y-l',
    name: 'Model Y L Premium',
    desc: 'Three Rows, Six Seats',
    image: images.modelYL,
    category: 'vehicles',
    ctaPrimary: 'Order Now',
    ctaSecondary: 'Learn More',
    blurb: 'Introducing Model Y L Premium — long-wheelbase midsize SUV with three rows and six seats. Starting at $61,990.',
    features: ['Three Rows, Six Seats', 'Starting at $61,990', 'Long Wheelbase'],
    sectionId: 'model-y-l',
  },
  {
    id: 'semi',
    name: 'Semi',
    desc: 'Electric semi truck',
    image: images.cybertruck,
    category: 'vehicles',
    ctaPrimary: 'Learn More',
    ctaSecondary: 'Reserve',
    blurb: 'Tesla Semi is designed for efficiency, safety and reliability for freight and fleet operators.',
    features: ['All-electric freight', 'High efficiency', 'Fleet ready'],
  },
  {
    id: 'roadster',
    name: 'Roadster',
    desc: 'Upcoming sports car',
    image: images.modelSMain,
    category: 'vehicles',
    ctaPrimary: 'Reserve',
    ctaSecondary: 'Learn More',
    blurb: 'The next-generation Roadster is designed for extreme performance and long-range electric thrills.',
    features: ['Upcoming', 'High performance', 'Reserve interest'],
  },
  {
    id: 'robotaxi',
    name: 'Robotaxi',
    desc: 'Autonomous ride network',
    image: images.fsd,
    category: 'vehicles',
    ctaPrimary: 'Learn More',
    ctaSecondary: 'Stay Updated',
    blurb: 'Robotaxi represents Tesla’s vision for autonomous ride-hailing under supervised autonomy progress.',
    features: ['Autonomous vision', 'Future mobility', 'AI-driven'],
  },
  {
    id: 'fleet',
    name: 'Fleet',
    desc: 'Business & commercial',
    image: images.modelYAlt,
    category: 'vehicles',
    ctaPrimary: 'Contact Sales',
    ctaSecondary: 'Learn More',
    blurb: 'Tesla for Business — vehicles, charging and energy solutions for fleets and commercial customers.',
    features: ['Fleet vehicles', 'Charging solutions', 'Business support'],
  },

  // Energy
  {
    id: 'solar-panels',
    name: 'Solar Panels',
    desc: 'Power Your Home',
    image: images.cardSolar,
    category: 'energy',
    ctaPrimary: 'Order Now',
    ctaSecondary: 'Learn More',
    blurb: 'Convert sunlight into energy and reduce your electricity bill with Tesla Solar Panels.',
    features: ['Power Your Home', 'Seamless design', 'App monitoring'],
    sectionId: 'solar-panels',
  },
  {
    id: 'solar-roof',
    name: 'Solar Roof',
    desc: 'Generate Clean Energy',
    image: images.solarRoof,
    category: 'energy',
    ctaPrimary: 'Order Now',
    ctaSecondary: 'Learn More',
    blurb: 'Solar Roof tiles look like a premium roof and generate clean energy for your home.',
    features: ['Generate Clean Energy', 'Integrated glass tiles', 'Durable design'],
    sectionId: 'solar-roof',
  },
  {
    id: 'powerwall',
    name: 'Powerwall',
    desc: 'Keep Your Lights On',
    image: images.powerwall,
    category: 'energy',
    ctaPrimary: 'Order Now',
    ctaSecondary: 'Learn More',
    blurb: 'Powerwall stores energy for your home so you stay powered during outages and peak rates.',
    features: ['Keep Your Lights On', 'Backup power', 'Solar pairing'],
    sectionId: 'powerwall',
  },
  {
    id: 'megapack',
    name: 'Megapack',
    desc: 'Massive Energy Support',
    image: images.megapack,
    category: 'energy',
    ctaPrimary: 'Learn More',
    ctaSecondary: 'Contact',
    blurb: 'Megapack is utility-scale energy storage for massive grid and commercial support.',
    features: ['Massive Energy Support', 'Grid scale', 'Modular deployment'],
    sectionId: 'megapack',
  },

  // Charging
  {
    id: 'charging',
    name: 'Charging',
    desc: 'Learn about charging',
    image: images.cardCharging, // public EV charger stations
    category: 'charging',
    ctaPrimary: 'Learn More',
    ctaSecondary: 'Find a Supercharger',
    blurb: 'Charge at home, at Superchargers, or on the go. Learn how Tesla charging fits your life.',
    features: ['Home & on the road', 'Fast Supercharging', 'Trip planning'],
  },
  {
    id: 'home-charging',
    name: 'Home Charging',
    desc: 'Wall Connector & more',
    image: images.cardHomeCharging, // wall connector / home EV charger
    category: 'charging',
    ctaPrimary: 'Shop Now',
    ctaSecondary: 'Learn More',
    blurb: 'Wall Connector and home charging solutions make overnight charging simple and convenient.',
    features: ['Wall Connector', 'Fast home charge', 'Easy install options'],
  },
  {
    id: 'supercharger',
    name: 'Supercharger',
    desc: 'Fast charging network',
    image: images.cardSupercharger, // fast EV charge stalls
    category: 'charging',
    ctaPrimary: 'Find a Supercharger',
    ctaSecondary: 'Learn More',
    blurb: 'Access Tesla’s fast Supercharger network for road trips and quick top-ups.',
    features: ['Fast charging network', 'Global coverage', 'In-car navigation'],
  },

  // Discover
  {
    id: 'demo-drive',
    name: 'Demo Drive',
    desc: 'Schedule a test drive',
    image: images.cardDemoDrive,
    category: 'discover',
    ctaPrimary: 'Schedule',
    ctaSecondary: 'Learn More',
    blurb: 'Experience Tesla in person. Schedule a demo drive at a location near you.',
    features: ['Schedule a test drive', 'Local stores', 'Multiple models'],
  },
  {
    id: 'insurance',
    name: 'Insurance',
    desc: 'Tesla Insurance',
    image: images.cardInsurance,
    category: 'discover',
    ctaPrimary: 'Get a Quote',
    ctaSecondary: 'Learn More',
    blurb: 'Tesla Insurance is designed around real-world driving data and your vehicle’s safety features.',
    features: ['Tesla Insurance', 'Competitive rates', 'App experience'],
  },
  {
    id: 'military',
    name: 'Military',
    desc: 'Military purchase program',
    image: images.cardMilitary,
    category: 'discover',
    ctaPrimary: 'Learn More',
    ctaSecondary: 'Contact',
    blurb: 'Special purchase programs for military members and eligible communities.',
    features: ['Military purchase program', 'Eligibility-based', 'Support team'],
  },
  {
    id: 'video-guides',
    name: 'Video Guides',
    desc: 'How-to videos',
    image: images.cardVideo,
    category: 'discover',
    ctaPrimary: 'Watch',
    ctaSecondary: 'Learn More',
    blurb: 'How-to videos and guides to get the most from your Tesla vehicle and energy products.',
    features: ['How-to videos', 'Owner tips', 'Feature walkthroughs'],
  },
  {
    id: 'customer-stories',
    name: 'Customer Stories',
    desc: 'Owner experiences',
    image: images.cardStories,
    category: 'discover',
    ctaPrimary: 'Read Stories',
    ctaSecondary: 'Learn More',
    blurb: 'Hear from Tesla owners about their experiences with vehicles, energy, and more.',
    features: ['Owner experiences', 'Community', 'Real stories'],
  },
  {
    id: 'events',
    name: 'Events',
    desc: 'Upcoming events',
    image: images.cardEvents,
    category: 'discover',
    ctaPrimary: 'View Events',
    ctaSecondary: 'Learn More',
    blurb: 'Find upcoming Tesla events, test drives, and experiences near you.',
    features: ['Upcoming events', 'Local meetups', 'Product showcases'],
  },

  // Shop
  {
    id: 'shop-charging',
    name: 'Charging',
    desc: 'Charging products',
    image: images.cardShopCharging,
    category: 'shop',
    ctaPrimary: 'Shop Now',
    ctaSecondary: 'Learn More',
    blurb: 'Shop Wall Connector, mobile connectors, and charging accessories for your Tesla.',
    features: ['Charging products', 'Home & travel', 'Official accessories'],
  },
  {
    id: 'vehicle-accessories',
    name: 'Vehicle Accessories',
    desc: 'Gear for your Tesla',
    image: images.cardAccessories,
    category: 'shop',
    ctaPrimary: 'Shop Now',
    ctaSecondary: 'Learn More',
    blurb: 'Floor mats, roof racks, and more gear designed for your Tesla vehicle.',
    features: ['Gear for your Tesla', 'Model-specific fit', 'Quality materials'],
  },
  {
    id: 'apparel',
    name: 'Apparel',
    desc: 'Tesla apparel',
    image: images.cardApparel,
    category: 'shop',
    ctaPrimary: 'Shop Now',
    ctaSecondary: 'Learn More',
    blurb: 'Official Tesla apparel and wearable gear.',
    features: ['Tesla apparel', 'Seasonal drops', 'Everyday wear'],
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    desc: 'Lifestyle products',
    image: images.cardLifestyle,
    category: 'shop',
    ctaPrimary: 'Shop Now',
    ctaSecondary: 'Learn More',
    blurb: 'Lifestyle products inspired by Tesla design and sustainability.',
    features: ['Lifestyle products', 'Home & travel', 'Tesla design'],
  },

  // Other
  {
    id: 'fsd',
    name: 'Full Self-Driving (Supervised)',
    desc: 'Subscribe for $99/mo',
    image: images.fsd,
    category: 'other',
    ctaPrimary: 'Schedule Demo',
    ctaSecondary: 'Learn More',
    blurb: 'Full Self-Driving (Supervised) makes every drive easier. Subscribe for $99/mo.',
    features: ['7x Fewer Collisions', '11,974,619,551 Miles Driven', '$99/mo'],
    sectionId: 'fsd',
  },
  {
    id: 'current-offers',
    name: 'Current Offers',
    desc: 'Explore limited-time offers on Tesla vehicles.',
    image: images.offers,
    category: 'other',
    ctaPrimary: 'View Offers',
    ctaSecondary: 'Learn More',
    blurb: 'Explore limited-time offers on Tesla vehicles, including financing and lease options.',
    features: ['Limited-time offers', 'APR & lease options', 'Terms apply'],
    sectionId: 'offers',
  },
  {
    id: 'inventory',
    name: 'Inventory',
    desc: 'Find nearby vehicles available for immediate delivery.',
    image: images.inventory,
    category: 'other',
    ctaPrimary: 'New',
    ctaSecondary: 'Pre-Owned',
    blurb: 'Find nearby new and pre-owned Tesla vehicles available for immediate delivery.',
    features: ['New inventory', 'Pre-Owned', 'Local delivery'],
    sectionId: 'inventory',
  },
  {
    id: 'support',
    name: 'Support',
    desc: 'Get help with your Tesla',
    image: images.cardModel3,
    category: 'other',
    ctaPrimary: 'Contact',
    ctaSecondary: 'Learn More',
    blurb: 'Get help with vehicles, charging, energy products, and your Tesla account.',
    features: ['24/7 resources', 'Roadside assistance info', 'Owner support'],
  },
];

export function getById(id: string): CatalogItem | undefined {
  return catalog.find((c) => c.id === id);
}

export function getByCategory(category: CatalogCategory): CatalogItem[] {
  return catalog.filter((c) => c.category === category);
}

/**
 * Sidebar labels → routes.
 * Special route keys (not product ids): compare, inventory, trade-in, design, offers, trip, shop
 */
export const sidebarTargets: Record<string, string> = {
  Inventory: 'inventory',
  'Used Inventory': 'inventory',
  'Demo Drive': 'demo-drive',
  'Trade-in': 'trade-in',
  Compare: 'compare',
  'Help Me Choose': 'compare',
  Fleet: 'fleet',
  Semi: 'semi',
  Roadster: 'roadster',
  Robotaxi: 'robotaxi',
  'Full Self-Driving (Supervised)': 'fsd',
  'Current Offers': 'offers',
  'Schedule a Consultation': 'solar-panels',
  'Why Solar': 'solar-panels',
  Incentives: 'offers',
  Support: 'support',
  'Partner with Tesla': 'megapack',
  'Find a Supercharger': 'supercharger',
  'Trip Planner': 'trip',
  'Charging Calculator': 'home-charging',
  Supercharging: 'supercharger',
  Help: 'support',
  About: 'support',
  Careers: 'support',
  'Find Us': 'demo-drive',
  Shop: 'shop',
  Discover: 'discover',
  Energy: 'energy',
  'All Energy': 'energy',
  'All Charging': 'charging-hub',
  'Charging Overview': 'charging-hub',
  'Find a Store': 'demo-drive',
};

/** Hash routes handled outside product catalog */
export const specialRoutes = HUB_ROUTES;

/** Primary vehicles shown in mega-menu grid (sidebar keeps full list) */
export const primaryVehicleIds = [
  'model-s',
  'model-3',
  'model-y',
  'model-x',
  'cybertruck',
  'model-y-l',
] as const;
