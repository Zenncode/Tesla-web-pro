import { images } from '../assets/images';
import type {
  ContentBlock,
  CompareCard,
  ListSection,
  SpecGroup,
  SpecRow,
  Stat,
} from './types';

/** @deprecated Prefer Stat from ./types */
export type VehicleStat = Stat;
export type { ContentBlock, SpecRow, SpecGroup, Stat };
export type TrimCompare = CompareCard;

export type VehicleDetail = {
  id: string;
  name: string;
  tagline: string;
  heroImage: string;
  heroStats: Stat[];
  notice?: string;
  signature?: { title: string; body: string };
  interior: ContentBlock[];
  autonomy?: ContentBlock;
  powertrain?: ContentBlock;
  trims?: CompareCard[];
  designPoints?: ContentBlock[];
  goAnywhere?: {
    title: string;
    body: string;
    stats: Stat[];
  };
  chargeHome?: ContentBlock;
  safety?: ListSection;
  specs?: SpecGroup[];
  footnotes?: string[];
  primaryCta: string;
  secondaryCta: string;
};

/** Full vehicle landing content (Model S mirrors tesla.com structure) */
export const vehicleDetails: Record<string, VehicleDetail> = {
  'model-s': {
    id: 'model-s',
    name: 'Model S',
    tagline: 'Signature From Start to Finish',
    heroImage: images.modelSMain,
    heroStats: [
      { value: '410', label: 'mi Range (EPA est.)' },
      { value: '1.99', label: 's 0-60 mph', note: '1' },
      { value: '1,020', label: 'hp Peak Power' },
    ],
    notice:
      'Model S is no longer in production. Pre-owned non-Signature Edition inventory vehicles may still be available.',
    signature: {
      title: 'Signature From Start to Finish',
      body:
        'Model S and Model X marked the beginning of the world’s transition to electric transportation. Our limited-release Signature Edition honors their legacy—and made way for what’s next.',
    },
    interior: [
      {
        title: 'Next-Level Interior',
        body:
          'Three Ultra-Responsive Displays. A 17.4” first-row and 9.4” second-row touchscreen offer a vivid image and respond quickly to your touch. Driver cluster display shows your speed, range and more.',
        image: images.modelS,
      },
      {
        title: 'Relax in the Back',
        body:
          'A spacious second row offers more legroom and seats three adults comfortably. A wireless phone dock charges your devices while you take in the view of the sky through an all-glass roof.',
      },
      {
        title: 'Get Comfortable',
        body:
          'Supportive, ventilated front-row seats and heated seats throughout the cabin provide added comfort for every passenger. Integrated air vents, tri-zone climate controls and HEPA filtration create your ideal cabin atmosphere.',
      },
      {
        title: 'Entertainment for Everyone',
        body:
          'Play your favorite games, movies or songs from first- and second-row touchscreens. Stream wherever you travel with Premium Connectivity, no Wi-Fi needed.',
      },
      {
        title: 'Full-Spectrum Color',
        body:
          'Choose from infinite colors to customize your wrap-around lighting and enjoy dynamic animated illuminations that appear along the dash and door trims when you enter then fade to an ambient glow.',
      },
      {
        title: 'Store It All',
        body:
          'Load up your bike, luggage and more. A hands-free liftgate provides flexible storage while second-row seats fold flat for more space.',
      },
      {
        title: 'Always Connected',
        body:
          'Bluetooth keeps you connected. Second-row connectivity lets passengers connect Bluetooth headphones to immerse themselves—and spare the rest of the cabin.',
      },
      {
        title: 'Studio-Quality Sound',
        body:
          'Features 22 speakers, a 960-watt audio system and sound insulation that gives you clear, recording studio-grade sound quality.',
      },
    ],
    autonomy: {
      title: 'The Future of Travel Is Autonomous',
      body:
        'Enter your destination and your Model S will manage your drive, from start to finish. Full Self-Driving (Supervised) provides advanced features that offer more active guidance and assisted driving under your active supervision.',
      image: images.fsd,
    },
    powertrain: {
      title: 'Tri-Motor Power',
      body:
        'Three carbon-sleeved rotors and an enhanced battery system ensure maximum power without performance degradation, even during back-to-back runs.',
    },
    trims: [
      {
        name: 'Model S',
        stats: [
          { value: '3.1', label: 's 0-60 mph' },
          { value: '410', label: 'mi Range (EPA est.)' },
          { value: '670', label: 'hp Peak Power' },
        ],
        blurb:
          'Dual motor all-wheel drive unlocks the longest range in our line-up and is built for powerful performance in all conditions and long-distance road trips.',
      },
      {
        name: 'Model S Plaid',
        stats: [
          { value: '1.99', label: 's 0-60 mph', note: '1' },
          { value: '368', label: 'mi Range (EPA est.)' },
          { value: '1,020', label: 'hp Peak Power' },
        ],
        blurb:
          '1,000+ horsepower all the way up to 200 mph with tri-motor all-wheel drive featuring torque vectoring. Sport seats add enhanced lateral support for control through sharp cornering and high-speed driving.',
      },
    ],
    designPoints: [
      {
        title: 'Optimized Performance',
        body:
          'Staggered wheels and tires maximize grip and stability while carbon ceramic brakes on Plaid provide extra stopping power.',
      },
      {
        title: 'Enhanced Aerodynamics',
        body:
          'Exterior details are optimized to reduce drag and boost range efficiency. A rear spoiler decreases lift for refined performance.',
      },
      {
        title: 'Adaptive Driving Headlights',
        body:
          'Headlights automatically react to conditions and other vehicles to enhance visibility while reducing glare for oncoming traffic.',
      },
    ],
    goAnywhere: {
      title: 'Go Anywhere',
      body:
        'Drive up to 410 miles on a single charge. When you need to recharge, add up to 205 miles in just 15 minutes at one of over 80,000 Superchargers globally. Navigate with Trip Planner and your Tesla will automatically take you to Supercharging stops along the way while optimizing your route.',
      stats: [
        { value: '410', label: 'mi Range (EPA est.)' },
        { value: '15', label: 'min Recharge up to 205 miles' },
        { value: '80,000+', label: 'Global Superchargers' },
      ],
    },
    chargeHome: {
      title: 'Charge at Home',
      body:
        'Charge your Model S at home to wake up charged and start your day with plenty of range, no gas station needed—ever.',
      image: images.homeCharging,
    },
    safety: {
      title: 'Safety Comes Standard',
      body:
        'Safety at Tesla is paramount. Every Tesla vehicle is designed with impact-absorbing zones, a stiff passenger compartment to minimize intrusion and multiple airbags to help protect occupants. Active safety features can help reduce impact severity or help prevent accidents altogether.',
      bullets: [
        '360° rear, side and forward-facing cameras',
        'Visual processing detects objects up to 250 meters away',
        'Tesla Vision monitors vehicles, assists with parking and helps avoid collisions',
      ],
    },
    specs: [
      {
        trim: 'Model S Plaid',
        rows: [
          { label: 'Range (EPA est.)', value: '368 mi' },
          { label: 'Acceleration', value: '1.99 s 0-60 mph' },
          { label: 'Top Speed', value: '200 mph' },
          { label: '1/4 Mile', value: '9.23 @ 155 mph trap speed' },
          { label: 'Powertrain', value: 'Tri Motor' },
          { label: 'Peak Power', value: '1,020 hp' },
          { label: 'Drag Coefficient', value: '0.23 Cd' },
          { label: 'Weight (Curb Mass)', value: '4,802 lbs' },
          { label: 'Cargo', value: '28 cu ft' },
          { label: 'Wheels', value: '19" or 21"' },
          { label: 'Supercharging Max', value: '250 kW' },
          { label: 'Basic Vehicle Warranty', value: '4 years or 50,000 miles' },
          { label: 'Battery & Drive Unit', value: '8 years or 150,000 miles' },
        ],
      },
      {
        trim: 'Model S',
        rows: [
          { label: 'Range (EPA est.)', value: '410 mi' },
          { label: 'Acceleration', value: '3.1 s 0-60 mph' },
          { label: 'Peak Power', value: '670 hp' },
          { label: 'Powertrain', value: 'Dual Motor AWD' },
          { label: 'Supercharging Max', value: '250 kW' },
        ],
      },
    ],
    footnotes: [
      '1 With rollout subtracted',
      '2 Separate subscription required for Premium Connectivity',
      '3 The indicated Plaid top speed may require a paid hardware upgrade',
      '4 Carbon ceramic brakes sold separately',
      '5 Range added in 15 minutes is based on constant speed data',
    ],
    primaryCta: 'Browse Inventory',
    secondaryCta: 'Get an Estimate',
  },

  'model-3': {
    id: 'model-3',
    name: 'Model 3',
    tagline: 'Sport Sedan',
    heroImage: images.model3Alt,
    heroStats: [
      { value: '363', label: 'mi Range (EPA est.)' },
      { value: '2.9', label: 's 0-60 mph' },
      { value: '510', label: 'hp Peak Power' },
    ],
    signature: {
      title: 'Designed for Efficiency',
      body:
        'Model 3 is a refined electric sedan with sharp handling, modern tech and everyday practicality—built for performance and range.',
    },
    interior: [
      {
        title: 'Minimalist Cabin',
        body:
          'A clean, centered 15.4” touchscreen controls navigation, media, climate and more. Premium materials and ambient lighting create a calm cabin.',
        image: images.model3Exterior,
      },
      {
        title: 'Everyday Space',
        body:
          'Front trunk and rear cargo room handle weekend trips. Rear seats fold for longer gear when you need extra room.',
      },
    ],
    autonomy: {
      title: 'Assisted Driving',
      body:
        'Autopilot comes standard. Full Self-Driving (Supervised) is available as a subscription for more advanced assisted driving under your supervision.',
      image: images.fsd,
    },
    goAnywhere: {
      title: 'Go Anywhere',
      body:
        'Travel farther with efficient range and access to Superchargers worldwide. Trip Planner routes you with charging stops built in.',
      stats: [
        { value: '363', label: 'mi Range (EPA est.)' },
        { value: '15', label: 'min Quick recharge' },
        { value: '80,000+', label: 'Global Superchargers' },
      ],
    },
    chargeHome: {
      title: 'Charge at Home',
      body: 'Wake up charged with Wall Connector home charging—no gas station required.',
      image: images.homeCharging,
    },
    safety: {
      title: 'Safety Comes Standard',
      body:
        'Impact-absorbing structure, advanced restraints and active safety features help protect you and your passengers every drive.',
    },
    primaryCta: 'Order Now',
    secondaryCta: 'Browse Inventory',
  },

  'model-y': {
    id: 'model-y',
    name: 'Model Y',
    tagline: 'Midsize SUV',
    heroImage: images.modelYAlt,
    heroStats: [
      { value: '320', label: 'mi Range (EPA est.)' },
      { value: '3.5', label: 's 0-60 mph' },
      { value: '5', label: 'Seats' },
    ],
    signature: {
      title: 'Versatile Electric SUV',
      body:
        'Model Y blends SUV versatility with electric performance—spacious cargo, available all-wheel drive and a minimalist tech-forward cabin.',
    },
    interior: [
      {
        title: 'Room to Move',
        body:
          'A flexible cabin with available second-row seating and ample cargo for family life and weekend adventures.',
        image: images.modelY,
      },
    ],
    autonomy: {
      title: 'Assisted Driving',
      body:
        'Standard Autopilot and optional Full Self-Driving (Supervised) help make every drive easier under your supervision.',
      image: images.fsd,
    },
    goAnywhere: {
      title: 'Go Anywhere',
      body: 'Long range and Supercharger access keep road trips simple.',
      stats: [
        { value: '320', label: 'mi Range (EPA est.)' },
        { value: '80,000+', label: 'Global Superchargers' },
      ],
    },
    chargeHome: {
      title: 'Charge at Home',
      body: 'Charge overnight with Wall Connector and start every day ready to go.',
      image: images.homeCharging,
    },
    safety: {
      title: 'Safety Comes Standard',
      body: 'Designed for occupant protection with a stiff passenger cell and active safety features.',
    },
    primaryCta: 'Order Now',
    secondaryCta: 'Browse Inventory',
  },

  'model-y-l': {
    id: 'model-y-l',
    name: 'Model Y L Premium',
    tagline: 'Three Rows, Six Seats',
    heroImage: images.modelYL,
    heroStats: [
      { value: '6', label: 'Seats' },
      { value: '3', label: 'Rows' },
      { value: '$61,990', label: 'Starting at' },
    ],
    signature: {
      title: 'Introducing Model Y L Premium',
      body:
        'Long-wheelbase midsize SUV with three rows and six seats—more space for family and cargo without leaving the Model Y experience.',
    },
    interior: [
      {
        title: 'Three Rows, Six Seats',
        body:
          'A longer wheelbase adds a third row and six-seat flexibility for growing households and longer trips.',
        image: images.modelY2,
      },
      {
        title: 'More Room to Stretch',
        body:
          'Extra length improves second- and third-row comfort so adults and kids can settle in for highway miles.',
        image: images.modelYAlt,
      },
      {
        title: 'Family Cargo Flexibility',
        body:
          'Configure seats and storage for sports gear, strollers and weekend luggage without giving up electric efficiency.',
      },
    ],
    designPoints: [
      {
        title: 'Long Wheelbase',
        body: 'Stretched proportions create third-row access while keeping a Model Y driving character.',
      },
      {
        title: 'Premium Launch',
        body: 'Launch Series positioning at $61,990 with demo marketing benefits subject to change.',
      },
      {
        title: 'Same Ecosystem',
        body: 'Supercharging, app ownership and home charging match the rest of the Tesla lineup.',
      },
    ],
    goAnywhere: {
      title: 'Built for the Family',
      body: 'More seating and cargo flexibility with the efficiency of an all-electric midsize SUV.',
      stats: [
        { value: '6', label: 'Seats' },
        { value: '3', label: 'Rows' },
        { value: '$61,990', label: 'Starting at' },
      ],
    },
    chargeHome: {
      title: 'Charge at Home',
      body: 'Charge overnight and start every day with range ready for school runs and weekend trips.',
      image: images.homeCharging,
    },
    safety: {
      title: 'Safety for Every Row',
      body: 'Designed to protect occupants across three rows with structural integrity and active safety assists.',
    },
    specs: [
      {
        trim: 'Model Y L Premium',
        rows: [
          { label: 'Starting price', value: '$61,990' },
          { label: 'Seating', value: '6 (3 rows)' },
          { label: 'Body', value: 'Long-wheelbase midsize SUV' },
          { label: 'Powertrain', value: 'All-electric' },
        ],
      },
    ],
    primaryCta: 'Order Now',
    secondaryCta: 'Learn More',
  },

  'model-x': {
    id: 'model-x',
    name: 'Model X',
    tagline: 'Premium SUV',
    heroImage: images.modelXMain,
    heroStats: [
      { value: '335', label: 'mi Range (EPA est.)' },
      { value: '2.5', label: 's 0-60 mph' },
      { value: '1,020', label: 'hp Peak Power' },
    ],
    signature: {
      title: 'Falcon Wing Presence',
      body:
        'Model X combines falcon-wing doors, seating for the family and electric performance in a premium SUV package.',
    },
    interior: [
      {
        title: 'Spacious Cabin',
        body:
          'Up to six or seven seats, panoramic visibility and a high-tech dual-screen cabin experience.',
        image: images.modelX,
      },
      {
        title: 'Falcon Wing Doors',
        body:
          'Iconic doors open upward for easier access in tight parking spots and a dramatic presence at every arrival.',
      },
      {
        title: 'Family Ready',
        body:
          'Flexible seating, generous cargo volume and a calm second-row experience make long trips more comfortable.',
      },
    ],
    autonomy: {
      title: 'Assisted Driving',
      body:
        'Full Self-Driving (Supervised) features help manage more of the drive under your active supervision.',
      image: images.fsd,
    },
    powertrain: {
      title: 'Dual & Tri-Motor Options',
      body:
        'All-wheel drive performance with rapid acceleration and confident handling in varied conditions.',
    },
    designPoints: [
      {
        title: 'Commanding Stance',
        body: 'Elevated seating position with a sleek SUV silhouette and panoramic glass.',
      },
      {
        title: 'Everyday Luxury',
        body: 'Premium materials, powerful audio and a dual-display digital cabin.',
      },
      {
        title: 'Towing Capable',
        body: 'Support for family adventures and utility when you need extra capacity.',
      },
    ],
    goAnywhere: {
      title: 'Go Anywhere',
      body: 'Long range and Supercharging keep family trips simple.',
      stats: [
        { value: '335', label: 'mi Range (EPA est.)' },
        { value: '15', label: 'min Fast top-ups' },
        { value: '80,000+', label: 'Global Superchargers' },
      ],
    },
    chargeHome: {
      title: 'Charge at Home',
      body: 'Home charging means you start every day with range—no gas station stops.',
      image: images.homeCharging,
    },
    safety: {
      title: 'Safety Comes Standard',
      body: 'Engineered with a stiff body structure and active safety features as standard.',
      bullets: [
        'Rigid passenger compartment design',
        'Multiple airbags and impact structures',
        'Active safety and camera-based assists',
      ],
    },
    specs: [
      {
        trim: 'Model X',
        rows: [
          { label: 'Range (EPA est.)', value: 'Up to 335 mi' },
          { label: 'Acceleration', value: 'As quick as 2.5 s 0-60' },
          { label: 'Seating', value: '6 or 7' },
          { label: 'Doors', value: 'Falcon Wing' },
          { label: 'Drive', value: 'AWD' },
        ],
      },
    ],
    primaryCta: 'Browse Inventory',
    secondaryCta: 'Get an Estimate',
  },

  cybertruck: {
    id: 'cybertruck',
    name: 'Cybertruck',
    tagline: 'Utility Truck',
    heroImage: images.cybertruck,
    heroStats: [
      { value: '340', label: 'mi Range (est.)' },
      { value: '2.6', label: 's 0-60 mph' },
      { value: '11,000', label: 'lbs Towing' },
    ],
    signature: {
      title: 'Ultra-Hardy Utility',
      body:
        'Cybertruck is built for durability and capability with an exoskeleton design and electric performance.',
    },
    interior: [
      {
        title: 'Vault-Like Cabin',
        body:
          'A minimalist, rugged interior with a large touchscreen and adaptable storage for work and adventure.',
        image: images.cybertruck,
      },
      {
        title: 'Adaptive Air Suspension',
        body:
          'Raise and lower for rough roads, loading and highway efficiency. Built to handle job sites and weekend trails.',
      },
      {
        title: 'Powerful Towing',
        body:
          'Serious towing capacity with trailer profiles and stability features that help keep heavy loads under control.',
      },
    ],
    powertrain: {
      title: 'Electric Muscle',
      body:
        'Instant torque, multiple drive configurations and structural battery packaging deliver utility without a gas engine.',
    },
    designPoints: [
      {
        title: 'Exoskeleton',
        body: 'Ultra-hard stainless exterior is designed for toughness and a distinctive silhouette.',
      },
      {
        title: 'Vault Bed',
        body: 'Covered bed storage protects gear from weather while keeping the profile low and secure.',
      },
      {
        title: 'Steer-by-Wire Feel',
        body: 'Precise steering response tuned for a truck that still feels agile on pavement.',
      },
    ],
    goAnywhere: {
      title: 'Built for Work and Play',
      body: 'Towing, range and Supercharging keep you productive on any job site or trailhead.',
      stats: [
        { value: '11,000', label: 'lbs Towing' },
        { value: '80,000+', label: 'Global Superchargers' },
        { value: 'Vault', label: 'Secure bed storage' },
      ],
    },
    chargeHome: {
      title: 'Charge at Home',
      body: 'Charge overnight so the truck is ready when you are.',
      image: images.homeCharging,
    },
    safety: {
      title: 'Safety Comes Standard',
      body: 'Rigid structure, active safety features and camera-based visibility aids support confident driving.',
      bullets: [
        'Structural exoskeleton design philosophy',
        'Active safety and collision avoidance assists',
        'Camera coverage for parking and awareness',
      ],
    },
    specs: [
      {
        trim: 'Cybertruck',
        rows: [
          { label: 'Type', value: 'Electric utility truck' },
          { label: 'Range (est.)', value: 'Up to ~340 mi' },
          { label: '0–60 mph', value: 'As quick as 2.6 s' },
          { label: 'Towing', value: 'Up to 11,000 lbs' },
          { label: 'Seating', value: '5' },
        ],
      },
    ],
    footnotes: ['Capability figures are illustrative demo values and vary by configuration.'],
    primaryCta: 'Order Now',
    secondaryCta: 'Browse Inventory',
  },

  semi: {
    id: 'semi',
    name: 'Semi',
    tagline: 'Electric Freight',
    heroImage: images.cybertruck,
    heroStats: [
      { value: 'Freight', label: 'Class focus' },
      { value: 'High', label: 'Efficiency' },
      { value: 'Fleet', label: 'Ready' },
    ],
    signature: {
      title: 'Built for the Long Haul',
      body:
        'Tesla Semi is designed for efficiency, safety and reliability for freight and fleet operators moving goods without diesel.',
    },
    interior: [
      {
        title: 'Driver-Centric Cabin',
        body:
          'A modern cockpit with high visibility and digital tools that help professional drivers stay focused on the road.',
        image: images.cybertruck,
      },
      {
        title: 'Fleet Operations',
        body:
          'Designed with depot charging, route planning and uptime in mind for commercial logistics teams.',
      },
    ],
    designPoints: [
      {
        title: 'Efficiency First',
        body: 'Aerodynamics and electric drivetrain aim to cut energy cost per mile versus diesel peers.',
      },
      {
        title: 'Safety Focus',
        body: 'Structural design and assisted systems support safer freight operations.',
      },
      {
        title: 'Network Charging',
        body: 'Megawatt-class charging concepts for depots and corridors (demo narrative).',
      },
    ],
    goAnywhere: {
      title: 'Move More With Less Waste',
      body: 'Electric freight reduces local emissions at hubs and can lower energy spend for high-mileage routes.',
      stats: [
        { value: 'EV', label: 'Powertrain' },
        { value: 'Depot', label: 'Charge focus' },
        { value: 'Fleet', label: 'Tooling' },
      ],
    },
    primaryCta: 'Learn More',
    secondaryCta: 'Reserve',
    footnotes: ['Semi availability and specs are region- and program-dependent. Demo page only.'],
  },

  roadster: {
    id: 'roadster',
    name: 'Roadster',
    tagline: 'Upcoming Performance',
    heroImage: images.modelSMain,
    heroStats: [
      { value: 'Upcoming', label: 'Status' },
      { value: 'Extreme', label: 'Performance' },
      { value: 'Long', label: 'Range aim' },
    ],
    signature: {
      title: 'The Next Roadster',
      body:
        'Tesla’s upcoming sports car is designed for extreme performance and long-range electric thrills—reserve interest while development continues.',
    },
    interior: [
      {
        title: 'Driver Focus',
        body:
          'A low, performance-oriented cabin concept built around immediacy: steering, pedals, screens and sound.',
        image: images.modelS,
      },
      {
        title: 'Everyday Usable',
        body:
          'Sports car presence with the practicality goals of long range and modern software features.',
      },
    ],
    designPoints: [
      {
        title: 'Acceleration',
        body: 'Engineered for blistering 0–60 performance targets shared in public materials.',
      },
      {
        title: 'Range Ambition',
        body: 'Long-range electric touring capability remains a core design goal.',
      },
      {
        title: 'Reserve Interest',
        body: 'Join the waitlist narrative in this demo—no real reservation is placed.',
      },
    ],
    primaryCta: 'Reserve',
    secondaryCta: 'Learn More',
    footnotes: ['Roadster timing and final specs are subject to change. Demo marketing only.'],
  },

  robotaxi: {
    id: 'robotaxi',
    name: 'Robotaxi',
    tagline: 'Autonomous Ride Vision',
    heroImage: images.fsd,
    heroStats: [
      { value: 'AI', label: 'Driven' },
      { value: 'Ride', label: 'Network vision' },
      { value: 'Future', label: 'Mobility' },
    ],
    signature: {
      title: 'Autonomy as a Service',
      body:
        'Robotaxi represents Tesla’s vision for autonomous ride-hailing as supervised autonomy technology progresses. This page is a conceptual demo.',
    },
    interior: [
      {
        title: 'Passenger Space',
        body:
          'Purpose-built for riding, not driving—comfortable seating and a cabin focused on the journey.',
        image: images.fsd,
      },
      {
        title: 'Network Effects',
        body:
          'A fleet vision where vehicles serve more hours of the day, reducing cost per mile over time.',
      },
    ],
    autonomy: {
      title: 'From Assisted to Autonomous',
      body:
        'Progress in Full Self-Driving (Supervised) informs the longer roadmap toward unsupervised robotaxi operation—subject to regulation and validation.',
      image: images.fsd,
    },
    designPoints: [
      {
        title: 'Safety First',
        body: 'Any autonomous product must meet rigorous safety and regulatory bars.',
      },
      {
        title: 'Software Defined',
        body: 'Continuous improvement through data and model training is central to the vision.',
      },
      {
        title: 'Stay Updated',
        body: 'Follow product announcements for real program milestones beyond this demo.',
      },
    ],
    primaryCta: 'Learn More',
    secondaryCta: 'Stay Updated',
    footnotes: ['Robotaxi is aspirational marketing in this demo—not a consumer product order page.'],
  },

  fleet: {
    id: 'fleet',
    name: 'Fleet',
    tagline: 'Tesla for Business',
    heroImage: images.modelYAlt,
    heroStats: [
      { value: 'Vehicles', label: 'Cars & trucks' },
      { value: 'Charge', label: 'Solutions' },
      { value: 'Energy', label: 'For sites' },
    ],
    signature: {
      title: 'Electrify Your Business',
      body:
        'Tesla for Business covers vehicles, charging and energy solutions for fleets and commercial customers—from sales teams to logistics hubs.',
    },
    interior: [
      {
        title: 'Vehicle Lines',
        body:
          'Model 3, Model Y, Cybertruck and more for sales, service, executive and utility roles.',
        image: images.modelY,
      },
      {
        title: 'Workplace Charging',
        body:
          'Wall Connectors and site planning help employees and fleets charge where they park.',
        image: images.homeCharging,
      },
      {
        title: 'Energy at Scale',
        body:
          'Powerwall and Megapack options support facilities, resilience and renewable integration.',
        image: images.powerwall,
      },
    ],
    designPoints: [
      {
        title: 'Lower Operating Cost',
        body: 'Electric drivetrains can reduce fuel and maintenance spend on high-mileage routes.',
      },
      {
        title: 'Brand & Talent',
        body: 'Modern EV fleets support sustainability goals and employee experience.',
      },
      {
        title: 'One Ecosystem',
        body: 'Vehicles, charging hardware and energy storage under coordinated support.',
      },
    ],
    goAnywhere: {
      title: 'Deploy With Confidence',
      body: 'From pilot programs to full fleet conversion—plan vehicles, chargers and energy together.',
      stats: [
        { value: 'Pilot', label: 'Start small' },
        { value: 'Scale', label: 'Multi-site' },
        { value: 'Support', label: 'Business team' },
      ],
    },
    primaryCta: 'Contact Sales',
    secondaryCta: 'Learn More',
    footnotes: ['Fleet programs vary by region. Demo contact flow only.'],
  },
};

export function getVehicleDetail(id: string): VehicleDetail | undefined {
  return vehicleDetails[id];
}
