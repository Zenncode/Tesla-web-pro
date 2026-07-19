import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  getById,
  sidebarTargets,
  specialRoutes,
  type CatalogItem,
} from '../data/navCatalog';

export type View =
  | 'home'
  | 'product'
  | 'shop'
  | 'discover'
  | 'energy'
  | 'charging-hub'
  | 'content'
  | 'compare'
  | 'inventory'
  | 'trade-in'
  | 'design'
  | 'offers'
  | 'trip';

export type NavState = {
  view: View;
  productId?: string;
  focus?: 'order' | 'learn';
  /** design studio vehicle id */
  designId?: string;
  /** inventory tab */
  inventoryTab?: 'new' | 'used';
};

type NavContextValue = {
  state: NavState;
  product: CatalogItem | null;
  goHome: () => void;
  goShop: () => void;
  goDiscover: () => void;
  goEnergy: () => void;
  goChargingHub: () => void;
  goProduct: (id: string, focus?: 'order' | 'learn') => void;
  goContent: (id: string) => void;
  goCompare: () => void;
  goInventory: (tab?: 'new' | 'used') => void;
  goTradeIn: () => void;
  goDesign: (vehicleId?: string) => void;
  goOffers: () => void;
  goTrip: () => void;
  navigateFromSidebar: (label: string) => void;
  navigateRoute: (key: string) => void;
  confirmAction: (label: string, productName?: string) => void;
  lastAction: string | null;
};

const NavContext = createContext<NavContextValue | null>(null);

function parseHash(): NavState {
  const raw = window.location.hash.replace(/^#\/?/, '');
  if (!raw || raw === 'home') return { view: 'home' };
  if (raw === 'shop') return { view: 'shop' };
  if (raw === 'discover') return { view: 'discover' };
  if (raw === 'energy') return { view: 'energy' };
  if (raw === 'charging' || raw === 'charging-hub') return { view: 'charging-hub' };
  if (raw === 'compare') return { view: 'compare' };
  if (raw === 'inventory' || raw === 'inventory/new') return { view: 'inventory', inventoryTab: 'new' };
  if (raw === 'inventory/used') return { view: 'inventory', inventoryTab: 'used' };
  if (raw === 'trade-in') return { view: 'trade-in' };
  if (raw === 'offers') return { view: 'offers' };
  if (raw === 'trip') return { view: 'trip' };
  if (raw.startsWith('design')) {
    const parts = raw.split('/');
    return { view: 'design', designId: parts[1] || 'model-3' };
  }
  if (raw.startsWith('product/')) {
    const parts = raw.split('/');
    const id = parts[1];
    const focus = parts[2] === 'order' ? 'order' : parts[2] === 'learn' ? 'learn' : undefined;
    return { view: 'product', productId: id, focus };
  }
  if (raw.startsWith('content/')) {
    return { view: 'content', productId: raw.split('/')[1] };
  }
  if (getById(raw)) return { view: 'product', productId: raw };
  return { view: 'home' };
}

function toHash(state: NavState): string {
  switch (state.view) {
    case 'home':
      return '#/';
    case 'shop':
      return '#/shop';
    case 'discover':
      return '#/discover';
    case 'energy':
      return '#/energy';
    case 'charging-hub':
      return '#/charging';
    case 'compare':
      return '#/compare';
    case 'inventory':
      return state.inventoryTab === 'used' ? '#/inventory/used' : '#/inventory';
    case 'trade-in':
      return '#/trade-in';
    case 'offers':
      return '#/offers';
    case 'trip':
      return '#/trip';
    case 'design':
      return `#/design/${state.designId || 'model-3'}`;
    case 'product':
      if (state.productId) {
        const focus = state.focus ? `/${state.focus}` : '';
        return `#/product/${state.productId}${focus}`;
      }
      return '#/';
    case 'content':
      return state.productId ? `#/content/${state.productId}` : '#/';
    default:
      return '#/';
  }
}

export function NavProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<NavState>(() =>
    typeof window !== 'undefined' ? parseHash() : { view: 'home' },
  );
  const [lastAction, setLastAction] = useState<string | null>(null);

  const apply = useCallback((next: NavState) => {
    setState(next);
    const hash = toHash(next);
    if (window.location.hash !== hash) {
      window.history.pushState(null, '', hash);
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onHash = () => setState(parseHash());
    window.addEventListener('hashchange', onHash);
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#/');
    }
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const goHome = useCallback(() => apply({ view: 'home' }), [apply]);
  const goShop = useCallback(() => apply({ view: 'shop' }), [apply]);
  const goDiscover = useCallback(() => apply({ view: 'discover' }), [apply]);
  const goEnergy = useCallback(() => apply({ view: 'energy' }), [apply]);
  const goChargingHub = useCallback(() => apply({ view: 'charging-hub' }), [apply]);
  const goCompare = useCallback(() => apply({ view: 'compare' }), [apply]);
  const goInventory = useCallback(
    (tab: 'new' | 'used' = 'new') => apply({ view: 'inventory', inventoryTab: tab }),
    [apply],
  );
  const goTradeIn = useCallback(() => apply({ view: 'trade-in' }), [apply]);
  const goDesign = useCallback(
    (vehicleId = 'model-3') => apply({ view: 'design', designId: vehicleId }),
    [apply],
  );
  const goOffers = useCallback(() => apply({ view: 'offers' }), [apply]);
  const goTrip = useCallback(() => apply({ view: 'trip' }), [apply]);

  const goProduct = useCallback(
    (id: string, focus?: 'order' | 'learn') => {
      // Map special product ids to dedicated pages
      if (id === 'inventory') {
        goInventory(focus === 'learn' ? 'used' : 'new');
        return;
      }
      if (id === 'current-offers') {
        goOffers();
        return;
      }
      apply({ view: 'product', productId: id, focus });
    },
    [apply, goInventory, goOffers],
  );

  const goContent = useCallback(
    (id: string) => apply({ view: 'content', productId: id }),
    [apply],
  );

  const navigateRoute = useCallback(
    (key: string) => {
      if (key === 'shop') goShop();
      else if (key === 'discover') goDiscover();
      else if (key === 'energy') goEnergy();
      else if (key === 'charging-hub' || key === 'charging-menu') goChargingHub();
      else if (key === 'compare') goCompare();
      else if (key === 'inventory') goInventory('new');
      else if (key === 'trade-in') goTradeIn();
      else if (key === 'design') goDesign();
      else if (key === 'offers') goOffers();
      else if (key === 'trip') goTrip();
      else if (getById(key)) goProduct(key);
      else goHome();
    },
    [
      goChargingHub,
      goCompare,
      goDesign,
      goDiscover,
      goEnergy,
      goHome,
      goInventory,
      goOffers,
      goProduct,
      goShop,
      goTradeIn,
      goTrip,
    ],
  );

  const navigateFromSidebar = useCallback(
    (label: string) => {
      if (label === 'Shop') {
        goShop();
        return;
      }
      if (label === 'Discover') {
        goDiscover();
        return;
      }
      if (label === 'Energy' || label === 'All Energy') {
        goEnergy();
        return;
      }
      if (label === 'All Charging' || label === 'Charging Overview') {
        goChargingHub();
        return;
      }
      const id = sidebarTargets[label];
      if (!id) {
        goHome();
        return;
      }
      if (specialRoutes.has(id)) {
        navigateRoute(id);
        return;
      }
      goProduct(id);
    },
    [goChargingHub, goDiscover, goEnergy, goHome, goProduct, goShop, navigateRoute],
  );

  const confirmAction = useCallback((label: string, productName?: string) => {
    const name = productName ? ` — ${productName}` : '';
    setLastAction(`${label}${name}`);
  }, []);

  const product = state.productId ? getById(state.productId) ?? null : null;

  const value = useMemo(
    () => ({
      state,
      product,
      goHome,
      goShop,
      goDiscover,
      goEnergy,
      goChargingHub,
      goProduct,
      goContent,
      goCompare,
      goInventory,
      goTradeIn,
      goDesign,
      goOffers,
      goTrip,
      navigateFromSidebar,
      navigateRoute,
      confirmAction,
      lastAction,
    }),
    [
      state,
      product,
      goHome,
      goShop,
      goDiscover,
      goEnergy,
      goChargingHub,
      goProduct,
      goContent,
      goCompare,
      goInventory,
      goTradeIn,
      goDesign,
      goOffers,
      goTrip,
      navigateFromSidebar,
      navigateRoute,
      confirmAction,
      lastAction,
    ],
  );

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav(): NavContextValue {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error('useNav must be used within NavProvider');
  return ctx;
}
