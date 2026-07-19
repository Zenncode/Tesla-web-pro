import type { CatalogItem } from '../../../data/navCatalog';

export type ActiveDropdown = 'Vehicles' | 'Energy' | 'Charging' | 'Discover' | 'Shop' | null;
export type IconMenu = 'help' | 'region' | 'account' | null;

export const NAV_ITEMS = ['Vehicles', 'Energy', 'Charging', 'Discover', 'Shop'] as const;

export const SIDEBAR_LINKS: Record<string, string[]> = {
  Vehicles: [
    'Inventory',
    'Used Inventory',
    'Demo Drive',
    'Trade-in',
    'Compare',
    'Help Me Choose',
    'Fleet',
    'Semi',
    'Roadster',
    'Robotaxi',
    'Full Self-Driving (Supervised)',
    'Current Offers',
  ],
  Energy: [
    'All Energy',
    'Schedule a Consultation',
    'Why Solar',
    'Incentives',
    'Support',
    'Partner with Tesla',
  ],
  Charging: [
    'All Charging',
    'Find a Supercharger',
    'Trip Planner',
    'Charging Calculator',
    'Supercharging',
    'Help',
  ],
  Discover: ['Discover', 'Support', 'About', 'Careers', 'Find Us'],
  Shop: ['Shop', 'Find a Store'],
};

export const HELP_LINKS = [
  'Support',
  'Get Help',
  'Schedule a Demo Drive',
  'Find Us',
  'Careers',
  'Contact',
];

export const REGIONS = [
  { region: 'North America', items: ['United States', 'Canada', 'México'] },
  { region: 'Europe', items: ['United Kingdom', 'Deutschland', 'France', 'Italia', 'España'] },
  { region: 'Asia Pacific', items: ['中国大陆', '香港', '台灣', '日本', 'Australia'] },
  { region: 'Middle East', items: ['ישראל', 'UAE'] },
];

export const CATEGORY_MAP: Record<Exclude<ActiveDropdown, null>, CatalogItem['category']> = {
  Vehicles: 'vehicles',
  Energy: 'energy',
  Charging: 'charging',
  Discover: 'discover',
  Shop: 'shop',
};

export function primaryLabelFor(item: CatalogItem): string {
  if (item.category === 'shop') return 'Shop';
  if (item.category === 'discover') return 'Explore';
  if (item.category === 'charging') return 'View';
  return 'Order';
}
