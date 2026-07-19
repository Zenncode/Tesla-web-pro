/** Special hash routes handled outside of product catalog */
export const HUB_ROUTES = new Set([
  'shop',
  'discover',
  'energy',
  'charging-hub',
  'compare',
  'inventory',
  'trade-in',
  'design',
  'offers',
  'trip',
]);

export type HubRoute = typeof HUB_ROUTES extends Set<infer T> ? T : never;
