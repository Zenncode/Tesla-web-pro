import { images } from '../assets/images';
import type {
  BannerBlock,
  CompareCard,
  ContentBlock,
  ListSection,
  SpecGroup,
  Stat,
  StatsBand,
} from './types';

/** @deprecated Prefer CompareCard from ./types */
export type ProductCardCompare = CompareCard;

/** Full product landing content (mirrors vehicle detail structure) */
export type ProductDetail = {
  id: string;
  name: string;
  tagline: string;
  categoryLabel?: string;
  heroImage: string;
  heroStats: Stat[];
  notice?: string;
  signature?: { title: string; body: string };
  blocks: ContentBlock[];
  highlight?: ContentBlock;
  features?: ContentBlock[];
  cards?: CompareCard[];
  statsBand?: StatsBand;
  banner?: BannerBlock;
  listSection?: ListSection;
  specs?: SpecGroup[];
  footnotes?: string[];
  primaryCta: string;
  secondaryCta: string;
  relatedIds?: string[];
};

export const productDetails: Record<string, ProductDetail> = {
  // ── Energy ──────────────────────────────────────────────
  'solar-panels': {
    id: 'solar-panels',
    name: 'Solar Panels',
    tagline: 'Power Your Home and Reduce Your Electricity Bill',
    categoryLabel: 'Energy',
    heroImage: images.solar,
    heroStats: [
      { value: '25', label: 'yr Warranty' },
      { value: 'App', label: 'Monitoring' },
      { value: 'Powerwall', label: 'Ready' },
    ],
    signature: {
      title: 'Clean Power From Your Roof',
      body:
        'Tesla Solar Panels convert sunlight into energy for your home. Pair with Powerwall for backup power and greater energy independence—monitored and controlled from the Tesla app.',
    },
    blocks: [
      {
        title: 'Designed for Your Roof',
        body:
          'Low-profile panels and a clean aesthetic blend with most roof types. Installation is planned around your home’s layout, shade, and energy use so you get a system sized for real-world production.',
        image: images.solarHouse,
      },
      {
        title: 'Real-Time Energy Insights',
        body:
          'Track solar production, home consumption, and grid imports from the Tesla app. See how much you generate, what you use, and how Powerwall stores excess energy.',
        image: images.solarAerial,
      },
      {
        title: 'Built to Last',
        body:
          'Glass and aluminum construction with a 25-year power and product warranty. Solar is engineered for decades of reliable generation in harsh weather.',
      },
    ],
    highlight: {
      title: 'Charge on Solar',
      body:
        'With solar and a Tesla vehicle, you can charge from the sun. Powerwall stores daytime production so you can power your home and charge your car when rates are high or the grid is down.',
      image: images.solarAlt,
    },
    features: [
      {
        title: 'Seamless Design',
        body: 'Black framing and optimized layouts keep your roof looking intentional—not cluttered.',
      },
      {
        title: 'Simple Ownership',
        body: 'Monitor production and performance from the same app you use for your vehicle and Powerwall.',
      },
      {
        title: 'Energy Independence',
        body: 'Generate your own power and reduce reliance on utility rates over time.',
      },
    ],
    statsBand: {
      title: 'Solar + Storage',
      body: 'Combine panels with Powerwall for backup during outages and more self-consumption of clean energy.',
      stats: [
        { value: 'Solar', label: 'Daytime generation' },
        { value: 'Storage', label: 'Night & backup' },
        { value: 'App', label: 'One control center' },
      ],
      ctaLabel: 'Explore Powerwall',
      ctaTargetId: 'powerwall',
    },
    banner: {
      title: 'Schedule a Consultation',
      body: 'Get a personalized solar assessment for your home—demo only, no real consultation booked.',
      image: images.solarFarm,
      ctaLabel: 'Order Solar',
      ctaTargetId: 'solar-panels',
    },
    listSection: {
      title: 'Why Solar',
      body: 'Home solar can lower electricity bills, support clean energy, and pair with storage for resilience.',
      bullets: [
        'Reduce utility bills with on-site generation',
        'Monitor production in the Tesla app',
        'Pair with Powerwall for outage protection',
        'Eligible incentives may apply (region-dependent)',
      ],
    },
    specs: [
      {
        trim: 'Solar Panels',
        rows: [
          { label: 'Product Warranty', value: '25 years' },
          { label: 'Power Warranty', value: '25 years' },
          { label: 'Monitoring', value: 'Tesla app' },
          { label: 'Powerwall Compatible', value: 'Yes' },
          { label: 'Typical Use', value: 'Residential rooftop' },
        ],
      },
    ],
    footnotes: [
      'Production, savings and incentives vary by location, roof, weather and utility rates.',
      'Demo experience only — not an offer from Tesla, Inc.',
    ],
    primaryCta: 'Order Now',
    secondaryCta: 'Learn More',
    relatedIds: ['solar-roof', 'powerwall', 'megapack'],
  },

  'solar-roof': {
    id: 'solar-roof',
    name: 'Solar Roof',
    tagline: 'Generate Clean Energy With Your Roof',
    categoryLabel: 'Energy',
    heroImage: images.solarRoof,
    heroStats: [
      { value: 'Glass', label: 'Solar Tiles' },
      { value: 'Durable', label: 'Design' },
      { value: 'Seamless', label: 'Look' },
    ],
    signature: {
      title: 'A Roof That Powers Your Home',
      body:
        'Solar Roof replaces traditional roofing with integrated glass tiles that generate clean energy—so your home looks premium and produces power at the same time.',
    },
    blocks: [
      {
        title: 'Integrated Glass Tiles',
        body:
          'Active solar tiles and inactive aesthetic tiles work together for a continuous roof surface. From the curb, it reads as architecture—not an aftermarket array.',
        image: images.solarRoof,
      },
      {
        title: 'Built for Longevity',
        body:
          'Tempered glass tiles are engineered for strength and weather resistance. Solar Roof is designed as a long-term roofing and energy system for your home.',
        image: images.solarHouse,
      },
      {
        title: 'Energy You Can Track',
        body:
          'See production and home energy use in the Tesla app. Add Powerwall to store excess generation for evenings and outages.',
      },
    ],
    features: [
      {
        title: 'Premium Appearance',
        body: 'Uniform glass surface replaces the patchwork look of bolt-on panels.',
      },
      {
        title: 'Dual Purpose',
        body: 'Protects your home like a roof and generates electricity like a solar system.',
      },
      {
        title: 'Powerwall Ready',
        body: 'Store solar energy for backup power and greater self-sufficiency.',
      },
    ],
    statsBand: {
      title: 'Whole-Home Energy',
      body: 'Solar Roof, Powerwall and Tesla vehicles share one energy ecosystem controlled from the app.',
      stats: [
        { value: 'Roof', label: 'Generation layer' },
        { value: 'Wall', label: 'Home storage' },
        { value: 'Car', label: 'Mobile storage' },
      ],
      ctaLabel: 'View Powerwall',
      ctaTargetId: 'powerwall',
    },
    listSection: {
      title: 'Solar Roof Highlights',
      body: 'Designed for homeowners who want generation without compromising curb appeal.',
      bullets: [
        'Integrated glass solar tiles',
        'Durable roofing system',
        'App-based monitoring',
        'Works with Powerwall',
      ],
    },
    specs: [
      {
        trim: 'Solar Roof',
        rows: [
          { label: 'Tile Material', value: 'Tempered glass' },
          { label: 'System Type', value: 'Integrated solar roof' },
          { label: 'Monitoring', value: 'Tesla app' },
          { label: 'Storage Pairing', value: 'Powerwall' },
        ],
      },
    ],
    footnotes: ['Appearance and production vary by home design and location.', 'Demo only.'],
    primaryCta: 'Order Now',
    secondaryCta: 'Learn More',
    relatedIds: ['solar-panels', 'powerwall'],
  },

  powerwall: {
    id: 'powerwall',
    name: 'Powerwall',
    tagline: 'Keep Your Lights On During Outages',
    categoryLabel: 'Energy',
    heroImage: images.powerwall,
    heroStats: [
      { value: 'Backup', label: 'Power' },
      { value: 'Solar', label: 'Pairing' },
      { value: 'App', label: 'Control' },
    ],
    signature: {
      title: 'Home Energy Storage',
      body:
        'Powerwall stores electricity from the grid or your solar system so you can power your home through outages, shift usage away from peak rates, and use more of your own clean energy.',
    },
    blocks: [
      {
        title: 'Backup When It Matters',
        body:
          'Automatically detects outages and powers your home. Prioritize essential circuits or whole-home backup depending on your setup and capacity.',
        image: images.powerwallHome,
      },
      {
        title: 'Smarter With Solar',
        body:
          'Store excess solar during the day and use it at night. Powerwall helps maximize self-consumption and reduces reliance on the grid.',
        image: images.solar,
      },
      {
        title: 'One App for Energy',
        body:
          'View charge level, solar production, home usage and backup history. Control modes and monitor performance from anywhere.',
      },
    ],
    highlight: {
      title: 'Energy Independence Starts at Home',
      body:
        'Combine Powerwall with solar and a Tesla vehicle for a connected home energy system—generate, store and use power on your terms.',
      image: images.powerwall,
    },
    cards: [
      {
        name: 'Backup Power',
        stats: [
          { value: 'Auto', label: 'Outage response' },
          { value: 'App', label: 'Status & history' },
        ],
        blurb: 'Stay powered when the grid goes down with automatic backup for your home.',
      },
      {
        name: 'Time-Based Control',
        stats: [
          { value: 'Peak', label: 'Rate awareness' },
          { value: 'Solar', label: 'Self-consumption' },
        ],
        blurb: 'Charge when energy is cheaper or cleaner; discharge when it saves you more.',
      },
    ],
    features: [
      {
        title: 'Compact Design',
        body: 'Wall-mounted storage that fits residential and light commercial installs.',
      },
      {
        title: 'Expandable',
        body: 'Add units to increase capacity as your home’s energy needs grow.',
      },
      {
        title: 'Integrated Ecosystem',
        body: 'Works with Tesla Solar, Wall Connector and vehicles under one account.',
      },
    ],
    listSection: {
      title: 'What Powerwall Enables',
      body: 'Resilience, savings potential and cleaner energy use at home.',
      bullets: [
        'Backup power during grid outages',
        'Store solar for evening use',
        'Monitor everything in the Tesla app',
        'Scalable multi-Powerwall installs',
      ],
    },
    specs: [
      {
        trim: 'Powerwall',
        rows: [
          { label: 'Use Case', value: 'Home energy storage & backup' },
          { label: 'Solar Compatible', value: 'Yes' },
          { label: 'Monitoring', value: 'Tesla app' },
          { label: 'Install Type', value: 'Indoor / outdoor capable (site dependent)' },
        ],
      },
    ],
    footnotes: ['Capacity, backup duration and features depend on configuration and load.', 'Demo only.'],
    primaryCta: 'Order Now',
    secondaryCta: 'Learn More',
    relatedIds: ['solar-panels', 'solar-roof', 'home-charging'],
  },

  megapack: {
    id: 'megapack',
    name: 'Megapack',
    tagline: 'Utility-Scale Energy Storage',
    categoryLabel: 'Energy',
    heroImage: images.megapack,
    heroStats: [
      { value: 'Grid', label: 'Scale' },
      { value: 'Modular', label: 'Deployment' },
      { value: 'Utility', label: 'Support' },
    ],
    signature: {
      title: 'Massive Energy Support',
      body:
        'Megapack is designed for utilities and large commercial projects that need bulk energy storage—stabilize the grid, integrate renewables and deliver power when demand peaks.',
    },
    blocks: [
      {
        title: 'Built for Scale',
        body:
          'Each Megapack is a factory-built battery system designed for rapid deployment. Projects can scale from a few units to multi-GWh installations.',
        image: images.cardMegapack,
      },
      {
        title: 'Support the Energy Transition',
        body:
          'Store wind and solar when production is high; discharge when the grid needs capacity. Megapack helps replace peaker plants with cleaner flexibility.',
        image: images.solarFarm,
      },
      {
        title: 'Partner with Tesla',
        body:
          'Commercial and utility customers can explore energy storage projects, grid services and large-scale deployments with Tesla Energy.',
      },
    ],
    features: [
      {
        title: 'Modular Architecture',
        body: 'Add capacity in blocks matched to project size and interconnection limits.',
      },
      {
        title: 'Grid Services',
        body: 'Support peak shaving, renewable firming and reliability applications.',
      },
      {
        title: 'Industrial Grade',
        body: 'Engineered for outdoor utility and commercial environments.',
      },
    ],
    statsBand: {
      title: 'From Homes to the Grid',
      body: 'Powerwall serves homes; Megapack serves utilities and large sites—same mission, different scale.',
      stats: [
        { value: 'Home', label: 'Powerwall' },
        { value: 'Utility', label: 'Megapack' },
        { value: 'Solar', label: 'Generation layer' },
      ],
      ctaLabel: 'View Powerwall',
      ctaTargetId: 'powerwall',
    },
    listSection: {
      title: 'Typical Applications',
      body: 'Megapack is used where bulk storage unlocks cleaner, more reliable power.',
      bullets: [
        'Utility-scale renewable integration',
        'Peak capacity and grid support',
        'Large commercial & industrial campuses',
        'Microgrids and resilience projects',
      ],
    },
    specs: [
      {
        trim: 'Megapack',
        rows: [
          { label: 'Segment', value: 'Utility & large commercial' },
          { label: 'Architecture', value: 'Modular battery system' },
          { label: 'Deployment', value: 'Site-based project' },
          { label: 'Primary CTA', value: 'Learn / Contact' },
        ],
      },
    ],
    footnotes: ['Project sizing and capabilities are site-specific.', 'Demo marketing page only.'],
    primaryCta: 'Learn More',
    secondaryCta: 'Contact',
    relatedIds: ['powerwall', 'solar-panels'],
  },

  // ── Charging ────────────────────────────────────────────
  charging: {
    id: 'charging',
    name: 'Charging',
    tagline: 'Home, Superchargers and On the Go',
    categoryLabel: 'Charging',
    heroImage: images.cardCharging,
    heroStats: [
      { value: 'Home', label: 'Overnight' },
      { value: 'Fast', label: 'Supercharging' },
      { value: 'Trip', label: 'Planning' },
    ],
    signature: {
      title: 'Charge Wherever Life Takes You',
      body:
        'Most Tesla owners charge at home overnight. On longer trips, the Supercharger network and in-car Trip Planner keep you moving with convenient, high-power stops.',
    },
    blocks: [
      {
        title: 'Charge at Home',
        body:
          'Wake up charged every day with a Wall Connector. Home charging is the simplest way to own an electric vehicle—no gas station stops for daily driving.',
        image: images.homeCharging,
      },
      {
        title: 'Supercharge on the Road',
        body:
          'Access thousands of Superchargers for fast top-ups. Navigation routes you to available stalls and estimates charging time for your trip.',
        image: images.cardSupercharger,
      },
      {
        title: 'Destination & Public Charging',
        body:
          'Charge at hotels, workplaces and public stations when you are away from home. Your vehicle helps you find compatible options nearby.',
        image: images.chargingAlt,
      },
    ],
    cards: [
      {
        name: 'Home Charging',
        stats: [
          { value: 'Wall', label: 'Connector' },
          { value: 'Night', label: 'Full range' },
        ],
        blurb: 'Best for daily driving—plug in when you park and start every morning ready to go.',
      },
      {
        name: 'Supercharging',
        stats: [
          { value: 'Fast', label: 'DC charging' },
          { value: 'Global', label: 'Network' },
        ],
        blurb: 'High-power charging for road trips and quick top-ups between stops.',
      },
    ],
    statsBand: {
      title: 'Plan Every Mile',
      body: 'Trip Planner adds Supercharging stops automatically and optimizes your route for time and charge level.',
      stats: [
        { value: 'Route', label: 'Optimized path' },
        { value: 'Stops', label: 'Auto Superchargers' },
        { value: 'ETA', label: 'With charge time' },
      ],
      ctaLabel: 'Open Trip Planner',
      ctaTargetId: 'trip',
    },
    banner: {
      title: 'Wall Connector',
      body: 'The fastest way to charge at home. Shop charging products or learn more about installation.',
      image: images.wallConnector,
      ctaLabel: 'Shop Home Charging',
      ctaTargetId: 'home-charging',
    },
    listSection: {
      title: 'Charging Basics',
      body: 'A simple mental model for Tesla charging.',
      bullets: [
        'Home charging covers most daily miles',
        'Superchargers handle long-distance travel',
        'Trip Planner builds charging into your route',
        'App and car show nearby chargers and status',
      ],
    },
    features: [
      {
        title: 'One Ecosystem',
        body: 'Vehicle, app, Wall Connector and Superchargers work together.',
      },
      {
        title: 'Transparent Status',
        body: 'See charge rate, time remaining and stall availability where supported.',
      },
      {
        title: 'Flexible Options',
        body: 'From mobile connectors to high-power home and public charging.',
      },
    ],
    primaryCta: 'Learn More',
    secondaryCta: 'Find a Supercharger',
    relatedIds: ['home-charging', 'supercharger', 'shop-charging'],
  },

  'home-charging': {
    id: 'home-charging',
    name: 'Home Charging',
    tagline: 'Wall Connector & Home Solutions',
    categoryLabel: 'Charging',
    heroImage: images.homeCharging,
    heroStats: [
      { value: 'Wall', label: 'Connector' },
      { value: 'Fast', label: 'Home Charge' },
      { value: 'Easy', label: 'Daily Habit' },
    ],
    signature: {
      title: 'The Best Place to Charge Is Home',
      body:
        'Install a Wall Connector for convenient, higher-power charging in your garage or driveway. Plug in when you park and start each day with the range you need.',
    },
    blocks: [
      {
        title: 'Gen 3 Wall Connector',
        body:
          'Sleek, Wi-Fi connected and designed for Tesla vehicles. Wall Connector delivers the everyday charging experience owners rely on.',
        image: images.wallConnector,
      },
      {
        title: 'Faster Than a Standard Outlet',
        body:
          'Level 2 home charging adds meaningful range per hour compared with a typical household outlet—so overnight charging easily covers a full day of driving for most owners.',
        image: images.homeCharging,
      },
      {
        title: 'Shop Accessories',
        body:
          'Browse Wall Connector, adapters and travel accessories in the Tesla Shop so you are ready at home and on the road.',
      },
    ],
    features: [
      {
        title: 'Daily Convenience',
        body: 'Treat charging like parking—plug in and forget it.',
      },
      {
        title: 'Installation Options',
        body: 'Work with a qualified electrician for a clean, code-compliant install.',
      },
      {
        title: 'Travel Ready',
        body: 'Pair home charging with a mobile connector for flexibility away from your wall unit.',
      },
    ],
    banner: {
      title: 'Shop Charging',
      body: 'Explore official Tesla charging products and accessories.',
      image: images.cardShopCharging,
      ctaLabel: 'Open Shop',
      ctaTargetId: 'shop',
    },
    listSection: {
      title: 'Home Charging Tips',
      body: 'Get the most from charging at home.',
      bullets: [
        'Schedule charging for off-peak utility rates when available',
        'Set a daily charge limit that matches your routine',
        'Use the app to start, stop and monitor sessions',
        'Consider Powerwall + solar to charge from your own energy',
      ],
    },
    specs: [
      {
        trim: 'Wall Connector',
        rows: [
          { label: 'Product', value: 'Gen 3 Wall Connector' },
          { label: 'Best For', value: 'Home / workplace' },
          { label: 'Connectivity', value: 'Wi-Fi' },
          { label: 'Shop', value: 'Charging accessories' },
        ],
      },
    ],
    primaryCta: 'Shop Now',
    secondaryCta: 'Learn More',
    relatedIds: ['charging', 'supercharger', 'shop-charging', 'powerwall'],
  },

  supercharger: {
    id: 'supercharger',
    name: 'Supercharger',
    tagline: 'Fast Charging Network',
    categoryLabel: 'Charging',
    heroImage: images.cardSupercharger,
    heroStats: [
      { value: '80,000+', label: 'Global Stalls*' },
      { value: 'Fast', label: 'DC Power' },
      { value: 'In-Car', label: 'Navigation' },
    ],
    signature: {
      title: 'Built for Road Trips',
      body:
        'Superchargers deliver high-power DC charging so you can add significant range in a short stop. Find stations in the car, the app or with Trip Planner.',
    },
    blocks: [
      {
        title: 'Plug In and Go',
        body:
          'Pull up, plug in and charge. Many locations include pull-through stalls, lighting and amenities nearby for a smoother long-distance experience.',
        image: images.cardSupercharger,
      },
      {
        title: 'Integrated Navigation',
        body:
          'Your Tesla can route you through Superchargers automatically, estimating arrival charge and recommended stop duration.',
        image: images.chargingAlt,
      },
      {
        title: 'Expanding Coverage',
        body:
          'The network continues to grow across highways, cities and destinations—supporting daily owners and road-trippers alike.',
      },
    ],
    statsBand: {
      title: 'Trip Planner',
      body: 'Enter a destination and let your vehicle plan Supercharging stops with live routing context.',
      stats: [
        { value: 'Plan', label: 'Full route' },
        { value: 'Charge', label: 'Auto stops' },
        { value: 'Arrive', label: 'Ready to drive' },
      ],
      ctaLabel: 'Try Trip Planner',
      ctaTargetId: 'trip',
    },
    features: [
      {
        title: 'High Power',
        body: 'Add range quickly compared with Level 2 public charging.',
      },
      {
        title: 'Easy Payment',
        body: 'Charging is tied to your Tesla account for a seamless session (demo).',
      },
      {
        title: 'Network Effects',
        body: 'Live stall data and navigation help reduce uncertainty on long drives.',
      },
    ],
    listSection: {
      title: 'How Supercharging Fits',
      body: 'Use Superchargers as a complement to home charging—not a replacement for daily top-ups.',
      bullets: [
        'Ideal for highway travel and quick top-ups',
        'Home charging remains best for everyday miles',
        'Trip Planner sequences stops for you',
        'Find a Supercharger from the car or app',
      ],
    },
    footnotes: [
      '* Network size is illustrative for this demo and changes over time on tesla.com.',
      'Charge speeds vary by vehicle, battery, site and conditions.',
    ],
    primaryCta: 'Find a Supercharger',
    secondaryCta: 'Learn More',
    relatedIds: ['charging', 'home-charging', 'trip'],
  },

  // ── Discover ────────────────────────────────────────────
  'demo-drive': {
    id: 'demo-drive',
    name: 'Demo Drive',
    tagline: 'Experience Tesla in Person',
    categoryLabel: 'Discover',
    heroImage: images.cardDemoDrive,
    heroStats: [
      { value: 'Local', label: 'Stores' },
      { value: 'Multi', label: 'Models' },
      { value: 'Free', label: 'Schedule*' },
    ],
    signature: {
      title: 'Schedule a Test Drive',
      body:
        'Feel acceleration, regenerative braking, the touchscreen and Autopilot-assisted features under supervision. Pick a model and a time that works for you.',
    },
    blocks: [
      {
        title: 'Choose Your Model',
        body:
          'From Model 3 and Model Y to performance and utility options, demo drives let you compare what fits your life before you order or browse inventory.',
        image: images.model3Alt,
      },
      {
        title: 'Visit a Location',
        body:
          'Meet at a Tesla store or designated location. Specialists can answer questions about range, charging, financing and delivery.',
        image: images.modelYAlt,
      },
      {
        title: 'Drive With Confidence',
        body:
          'Learn the basics in minutes—Autopilot stalk or wheel controls, Supercharging navigation and the owner app workflow.',
      },
    ],
    features: [
      {
        title: 'No Pressure Experience',
        body: 'Focus on the drive and the product—this demo does not place real orders.',
      },
      {
        title: 'Ask Anything',
        body: 'Bring questions about home charging, FSD (Supervised), trade-in and delivery timelines.',
      },
      {
        title: 'Next Steps',
        body: 'After your drive, design your Tesla, check inventory or estimate a trade-in.',
      },
    ],
    listSection: {
      title: 'Before You Go',
      body: 'A few tips for a smooth demo drive.',
      bullets: [
        'Bring a valid driver’s license',
        'Wear comfortable shoes for the drive',
        'Note roads or features you want to try',
        'Ask about current offers and inventory',
      ],
    },
    footnotes: ['* Scheduling is simulated in this demo.'],
    primaryCta: 'Schedule',
    secondaryCta: 'Learn More',
    relatedIds: ['inventory', 'compare', 'fsd'],
  },

  insurance: {
    id: 'insurance',
    name: 'Insurance',
    tagline: 'Tesla Insurance',
    categoryLabel: 'Discover',
    heroImage: images.cardInsurance,
    heroStats: [
      { value: 'Safety', label: 'Focused' },
      { value: 'App', label: 'Experience' },
      { value: 'Quote', label: 'In Minutes*' },
    ],
    signature: {
      title: 'Insurance Designed Around Tesla',
      body:
        'Tesla Insurance is built with real-world driving data and vehicle safety features in mind—so coverage can reflect how the car is designed to protect you.',
    },
    blocks: [
      {
        title: 'Competitive by Design',
        body:
          'Where available, Tesla Insurance aims to offer rates informed by vehicle safety technology and driving behavior rather than only traditional proxies.',
        image: images.modelY,
      },
      {
        title: 'Manage in the App',
        body:
          'View policy details, make updates and get support in a digital-first experience that matches the rest of Tesla ownership.',
      },
      {
        title: 'Get a Quote',
        body:
          'Start with a few details about you and your vehicle. Availability varies by region—this demo only simulates the flow.',
      },
    ],
    listSection: {
      title: 'What to Expect',
      body: 'A modern insurance experience for Tesla owners.',
      bullets: [
        'Quotes tailored to Tesla vehicles (where offered)',
        'Digital policy management',
        'Safety-oriented product design',
        'Regional availability may vary',
      ],
    },
    footnotes: ['* Quote flow is demo only. Tesla Insurance is not available in all regions.'],
    primaryCta: 'Get a Quote',
    secondaryCta: 'Learn More',
    relatedIds: ['demo-drive', 'support'],
  },

  military: {
    id: 'military',
    name: 'Military',
    tagline: 'Military Purchase Program',
    categoryLabel: 'Discover',
    heroImage: images.cardMilitary,
    heroStats: [
      { value: 'Service', label: 'Members' },
      { value: 'Special', label: 'Programs' },
      { value: 'Support', label: 'Team' },
    ],
    signature: {
      title: 'Programs for Those Who Serve',
      body:
        'Eligible military members and communities may access special purchase programs. Verify eligibility and current offers for your region.',
    },
    blocks: [
      {
        title: 'Recognition of Service',
        body:
          'Tesla has offered programs acknowledging military service. Details change over time—always confirm the latest terms on official channels.',
        image: images.modelYAlt,
      },
      {
        title: 'How to Participate',
        body:
          'Check eligibility, prepare documentation if required and work with Tesla sales or the program page when ordering or taking delivery.',
      },
    ],
    listSection: {
      title: 'Getting Started',
      body: 'High-level steps for this demo experience.',
      bullets: [
        'Review current military program details',
        'Confirm eligibility requirements',
        'Choose Order, Inventory or Demo Drive',
        'Contact support with program questions',
      ],
    },
    footnotes: ['Program availability and benefits are illustrative in this demo.'],
    primaryCta: 'Learn More',
    secondaryCta: 'Contact',
    relatedIds: ['demo-drive', 'inventory', 'support'],
  },

  'video-guides': {
    id: 'video-guides',
    name: 'Video Guides',
    tagline: 'How-To Videos for Owners',
    categoryLabel: 'Discover',
    heroImage: images.cardVideo,
    heroStats: [
      { value: 'How-To', label: 'Videos' },
      { value: 'Tips', label: 'Owner' },
      { value: 'Features', label: 'Walkthroughs' },
    ],
    signature: {
      title: 'Learn at Your Pace',
      body:
        'Short guides covering charging, Autopilot basics, climate controls, software updates and energy products—so you get more from every mile and kilowatt-hour.',
    },
    blocks: [
      {
        title: 'Vehicle Essentials',
        body:
          'From first drive to advanced features, video walkthroughs cover touchscreen layouts, charging ports, seats, storage and more.',
        image: images.fsd,
      },
      {
        title: 'Energy & Charging',
        body:
          'Learn Wall Connector basics, Supercharging etiquette, Powerwall modes and solar monitoring tips.',
        image: images.homeCharging,
      },
    ],
    cards: [
      {
        name: 'Getting Started',
        stats: [{ value: 'New', label: 'Owner path' }],
        blurb: 'Unboxing-style topics: key cards, charging, app setup and first trip.',
      },
      {
        name: 'Feature Deep Dives',
        stats: [{ value: 'Pro', label: 'Tips' }],
        blurb: 'Autopilot visualizations, Sentry Mode, cabin overheat and media tips.',
      },
    ],
    listSection: {
      title: 'Popular Topics',
      body: 'Owner favorites in a typical Tesla library.',
      bullets: [
        'How to charge at home and on the road',
        'Using Autopilot features responsibly',
        'Software update best practices',
        'Powerwall and solar app monitoring',
      ],
    },
    primaryCta: 'Watch',
    secondaryCta: 'Learn More',
    relatedIds: ['customer-stories', 'support', 'fsd'],
  },

  'customer-stories': {
    id: 'customer-stories',
    name: 'Customer Stories',
    tagline: 'Owner Experiences',
    categoryLabel: 'Discover',
    heroImage: images.cardStories,
    heroStats: [
      { value: 'Real', label: 'Owners' },
      { value: 'Cars', label: '& Energy' },
      { value: 'Community', label: 'Voices' },
    ],
    signature: {
      title: 'Stories From the Road and Home',
      body:
        'Hear how owners use Tesla vehicles for commuting, road trips and family life—and how solar and Powerwall change the way they power their homes.',
    },
    blocks: [
      {
        title: 'Life With an EV',
        body:
          'Owners share range confidence, Supercharging trips and the shift away from gas stations for daily driving.',
        image: images.model3Exterior,
      },
      {
        title: 'Powering the Home',
        body:
          'Solar and Powerwall stories highlight outage resilience, lower bills and charging a vehicle from rooftop energy.',
        image: images.solarHouse,
      },
    ],
    listSection: {
      title: 'Story Themes',
      body: 'Explore narratives that match your journey.',
      bullets: [
        'First-time EV owners',
        'Family road trips',
        'Home solar + storage',
        'Fleet and commercial use',
      ],
    },
    primaryCta: 'Read Stories',
    secondaryCta: 'Learn More',
    relatedIds: ['video-guides', 'events', 'demo-drive'],
  },

  events: {
    id: 'events',
    name: 'Events',
    tagline: 'Upcoming Experiences Near You',
    categoryLabel: 'Discover',
    heroImage: images.cardEvents,
    heroStats: [
      { value: 'Local', label: 'Meetups' },
      { value: 'Demo', label: 'Drives' },
      { value: 'Product', label: 'Showcases' },
    ],
    signature: {
      title: 'Meet Tesla in the Real World',
      body:
        'Find pop-ups, test drive days and product showcases. Events are a low-pressure way to sit in vehicles, ask questions and explore energy products.',
    },
    blocks: [
      {
        title: 'What to Expect',
        body:
          'Browse vehicles, talk with specialists and sometimes take short supervised drives. Bring your questions about charging, financing and delivery.',
        image: images.modelS,
      },
      {
        title: 'Stay Updated',
        body:
          'Follow local store pages and official channels for dates. This demo lists illustrative event types only.',
      },
    ],
    listSection: {
      title: 'Event Types',
      body: 'Common formats you might see.',
      bullets: [
        'Demo drive weekends',
        'New model launch experiences',
        'Energy and solar info sessions',
        'Owner meetups and ride-alongs',
      ],
    },
    primaryCta: 'View Events',
    secondaryCta: 'Learn More',
    relatedIds: ['demo-drive', 'customer-stories', 'support'],
  },

  // ── Shop ────────────────────────────────────────────────
  'shop-charging': {
    id: 'shop-charging',
    name: 'Charging',
    tagline: 'Official Charging Products',
    categoryLabel: 'Shop',
    heroImage: images.cardShopCharging,
    heroStats: [
      { value: 'Wall', label: 'Connector' },
      { value: 'Travel', label: 'Adapters' },
      { value: 'Home', label: '& On-the-go' },
    ],
    signature: {
      title: 'Charge With Confidence',
      body:
        'Shop Wall Connector, mobile connectors and accessories designed for Tesla vehicles—so home and travel charging stay simple.',
    },
    blocks: [
      {
        title: 'Wall Connector',
        body:
          'The preferred home charging solution for most owners. Clean design, solid performance and app-friendly ownership.',
        image: images.wallConnector,
      },
      {
        title: 'On the Road',
        body:
          'Mobile connectors and adapters help you charge at more destinations when a Supercharger or Wall Connector is not available.',
        image: images.chargingPlug,
      },
    ],
    cards: [
      {
        name: 'Wall Connector',
        stats: [{ value: 'Home', label: 'Primary charger' }],
        blurb: 'Hardwired Level 2 charging for garages and driveways.',
      },
      {
        name: 'Cable & Adapters',
        stats: [{ value: 'Travel', label: 'Flexibility' }],
        blurb: 'Extend where you can plug in safely while traveling.',
      },
    ],
    listSection: {
      title: 'Shop Highlights',
      body: 'Popular charging categories.',
      bullets: [
        'Gen 3 Wall Connector',
        'Mobile connector accessories',
        'Pedestal and mount options',
        'J1772 and destination adapters (region dependent)',
      ],
    },
    primaryCta: 'Shop Now',
    secondaryCta: 'Learn More',
    relatedIds: ['home-charging', 'vehicle-accessories', 'apparel'],
  },

  'vehicle-accessories': {
    id: 'vehicle-accessories',
    name: 'Vehicle Accessories',
    tagline: 'Gear Designed for Your Tesla',
    categoryLabel: 'Shop',
    heroImage: images.cardAccessories,
    heroStats: [
      { value: 'Fit', label: 'Model-specific' },
      { value: 'Quality', label: 'Materials' },
      { value: 'Gear', label: 'Everyday' },
    ],
    signature: {
      title: 'Protect and Personalize',
      body:
        'Floor mats, roof racks, cargo solutions and more—engineered to fit Tesla vehicles without compromise.',
    },
    blocks: [
      {
        title: 'Interior Protection',
        body:
          'All-weather mats and liners help keep the cabin clean through seasons, kids, pets and road trips.',
        image: images.modelY2,
      },
      {
        title: 'Cargo & Adventure',
        body:
          'Roof racks, hitch accessories and organizers expand what your Tesla can carry for weekends and work.',
        image: images.cybertruck,
      },
    ],
    features: [
      {
        title: 'Model-Specific Fit',
        body: 'Designed around Tesla dimensions and mounting points.',
      },
      {
        title: 'Owner Tested Patterns',
        body: 'Accessories target real daily needs—mud, snow, bikes and luggage.',
      },
      {
        title: 'Matched Aesthetic',
        body: 'Minimal design language that fits the cabin and exterior.',
      },
    ],
    listSection: {
      title: 'Categories',
      body: 'Browse by use case.',
      bullets: [
        'Floor mats and liners',
        'Roof racks and crossbars',
        'Interior organizers',
        'Exterior protection',
      ],
    },
    primaryCta: 'Shop Now',
    secondaryCta: 'Learn More',
    relatedIds: ['shop-charging', 'apparel', 'lifestyle'],
  },

  apparel: {
    id: 'apparel',
    name: 'Apparel',
    tagline: 'Official Tesla Apparel',
    categoryLabel: 'Shop',
    heroImage: images.cardApparel,
    heroStats: [
      { value: 'Tees', label: '& Outerwear' },
      { value: 'Seasonal', label: 'Drops' },
      { value: 'Everyday', label: 'Wear' },
    ],
    signature: {
      title: 'Wear the Brand',
      body:
        'Clean graphics, comfortable fabrics and limited seasonal releases inspired by Tesla products and missions.',
    },
    blocks: [
      {
        title: 'Everyday Essentials',
        body:
          'T-shirts, hoodies and hats for owners, fans and the cyber-curious—built for daily wear.',
        image: images.cardApparel,
      },
      {
        title: 'Seasonal Collections',
        body:
          'Limited drops celebrate launches, Cybertruck energy and classic wordmark design.',
      },
    ],
    listSection: {
      title: 'Shop Apparel',
      body: 'Typical categories in the Tesla Shop.',
      bullets: ['Tops & hoodies', 'Outerwear', 'Hats & accessories', 'Kids options (when offered)'],
    },
    primaryCta: 'Shop Now',
    secondaryCta: 'Learn More',
    relatedIds: ['lifestyle', 'vehicle-accessories'],
  },

  lifestyle: {
    id: 'lifestyle',
    name: 'Lifestyle',
    tagline: 'Products Inspired by Tesla Design',
    categoryLabel: 'Shop',
    heroImage: images.cardLifestyle,
    heroStats: [
      { value: 'Home', label: '& Travel' },
      { value: 'Design', label: 'Forward' },
      { value: 'Sustain', label: 'Minded' },
    ],
    signature: {
      title: 'Beyond the Vehicle',
      body:
        'Lifestyle products extend Tesla’s industrial design into everyday objects—for home, travel and the people who like the engineering culture.',
    },
    blocks: [
      {
        title: 'Home & Desk',
        body:
          'Objects that carry the same minimal language as the cars—useful, quiet design without excess decoration.',
        image: images.cardLifestyle,
      },
      {
        title: 'Travel Companions',
        body:
          'Bags, bottles and small goods for Supercharger stops, weekend trips and the daily commute.',
      },
    ],
    features: [
      {
        title: 'Design Language',
        body: 'Simple forms, honest materials, function first.',
      },
      {
        title: 'Gift Friendly',
        body: 'Easy picks for new owners and Tesla enthusiasts.',
      },
      {
        title: 'Rotating Catalog',
        body: 'Inventory and collections change—explore often.',
      },
    ],
    primaryCta: 'Shop Now',
    secondaryCta: 'Learn More',
    relatedIds: ['apparel', 'vehicle-accessories', 'shop-charging'],
  },

  // ── Other frequently linked ─────────────────────────────
  fsd: {
    id: 'fsd',
    name: 'Full Self-Driving (Supervised)',
    tagline: 'Makes Every Drive Easier',
    categoryLabel: 'Autopilot',
    heroImage: images.fsd,
    heroStats: [
      { value: '7x', label: 'Fewer Collisions*' },
      { value: '11B+', label: 'Miles Driven*' },
      { value: '$99', label: '/mo Subscribe*' },
    ],
    signature: {
      title: 'Advanced Driver Assistance',
      body:
        'Full Self-Driving (Supervised) provides advanced features that offer more active guidance under your continuous supervision. You remain responsible for the vehicle at all times.',
    },
    blocks: [
      {
        title: 'Navigate on Autopilot',
        body:
          'Suggests lane changes and route guidance on supported highways while you supervise and stay ready to take over instantly.',
        image: images.fsd,
      },
      {
        title: 'Traffic and Environment Aware',
        body:
          'Vision-based systems detect vehicles, pedestrians, traffic controls and more to assist with everyday driving tasks.',
      },
    ],
    listSection: {
      title: 'Important',
      body: 'FSD (Supervised) is not autonomous. Drivers must pay attention and control the vehicle when needed.',
      bullets: [
        'Active driver supervision required',
        'Feature availability varies by region and software',
        'Subscription pricing shown is illustrative',
        'Schedule a demo drive to experience assisted features',
      ],
    },
    footnotes: [
      '* Stats and pricing are illustrative demo figures inspired by public Tesla marketing and may not be current.',
    ],
    primaryCta: 'Schedule Demo',
    secondaryCta: 'Learn More',
    relatedIds: ['demo-drive', 'model-3', 'model-y'],
  },

  support: {
    id: 'support',
    name: 'Support',
    tagline: 'Help With Vehicles, Energy and Charging',
    categoryLabel: 'Discover',
    heroImage: images.cardModel3,
    heroStats: [
      { value: '24/7', label: 'Resources' },
      { value: 'Roadside', label: 'Info' },
      { value: 'Owners', label: 'Support' },
    ],
    signature: {
      title: 'We Are Here to Help',
      body:
        'Find answers for vehicles, Supercharging, solar, Powerwall and your Tesla account. This demo surfaces common support destinations only.',
    },
    blocks: [
      {
        title: 'Owner Resources',
        body:
          'Guides covering charging, software, service scheduling concepts and product how-tos.',
        image: images.model3,
      },
      {
        title: 'Energy Support',
        body:
          'Help topics for solar production, Powerwall backup behavior and Wall Connector connectivity.',
        image: images.powerwall,
      },
    ],
    listSection: {
      title: 'Support Paths',
      body: 'Where owners typically start.',
      bullets: [
        'In-car Service and Help menus',
        'Tesla app support flows',
        'Roadside assistance information',
        'Store and service center visits',
      ],
    },
    primaryCta: 'Contact',
    secondaryCta: 'Learn More',
    relatedIds: ['video-guides', 'demo-drive', 'charging'],
  },
};

export function getProductDetail(id: string): ProductDetail | undefined {
  return productDetails[id];
}
