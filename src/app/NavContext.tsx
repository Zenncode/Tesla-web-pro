import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { getById, sidebarTargets, type CatalogItem } from '../data/navCatalog';

export type View = 'home' | 'product' | 'shop' | 'content';

export type NavState = {
  view: View;
  productId?: string;
  focus?: 'order' | 'learn';
};

type NavContextValue = {
  state: NavState;
  product: CatalogItem | null;
  goHome: () => void;
  goShop: () => void;
  goProduct: (id: string, focus?: 'order' | 'learn') => void;
  goContent: (id: string) => void;
  navigateFromSidebar: (label: string) => void;
  /** Simulate order / shop / schedule action with optional notify hook from outside */
  confirmAction: (label: string, productName?: string) => void;
  lastAction: string | null;
};

const NavContext = createContext<NavContextValue | null>(null);

function parseHash(): NavState {
  const raw = window.location.hash.replace(/^#\/?/, '');
  if (!raw || raw === 'home') return { view: 'home' };
  if (raw === 'shop') return { view: 'shop' };
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
  if (state.view === 'home') return '#/';
  if (state.view === 'shop') return '#/shop';
  if (state.view === 'product' && state.productId) {
    const focus = state.focus ? `/${state.focus}` : '';
    return `#/product/${state.productId}${focus}`;
  }
  if (state.view === 'content' && state.productId) return `#/content/${state.productId}`;
  return '#/';
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
  const goProduct = useCallback(
    (id: string, focus?: 'order' | 'learn') => {
      apply({ view: 'product', productId: id, focus });
    },
    [apply],
  );
  const goContent = useCallback(
    (id: string) => apply({ view: 'content', productId: id }),
    [apply],
  );

  const navigateFromSidebar = useCallback(
    (label: string) => {
      if (label === 'Shop') {
        goShop();
        return;
      }
      const id = sidebarTargets[label];
      if (id === 'shop') goShop();
      else if (id) goProduct(id);
      else goHome();
    },
    [goHome, goProduct, goShop],
  );

  const confirmAction = useCallback((label: string, productName?: string) => {
    const name = productName ? ` — ${productName}` : '';
    const msg = `${label}${name}`;
    setLastAction(msg);
  }, []);

  const product = state.productId ? getById(state.productId) ?? null : null;

  const value = useMemo(
    () => ({
      state,
      product,
      goHome,
      goShop,
      goProduct,
      goContent,
      navigateFromSidebar,
      confirmAction,
      lastAction,
    }),
    [
      state,
      product,
      goHome,
      goShop,
      goProduct,
      goContent,
      navigateFromSidebar,
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
