import { NavProvider, useNav } from './app/NavContext';
import { ToastProvider } from './app/ToastContext';
import { Navigation } from './components/organisms/Navigation';
import { Footer } from './components/organisms/Footer';
import { ChatBar } from './components/organisms/ChatBar';
import { Home } from './components/pages/Home';
import { ProductPage } from './components/pages/ProductPage';
import { ShopPage } from './components/pages/ShopPage';
import { ComparePage } from './components/pages/ComparePage';
import { InventoryPage } from './components/pages/InventoryPage';
import { TradeInPage } from './components/pages/TradeInPage';
import { DesignPage } from './components/pages/DesignPage';
import { OffersPage } from './components/pages/OffersPage';
import { TripPage } from './components/pages/TripPage';

function AppShell() {
  const { state } = useNav();

  return (
    <div style={{ minHeight: '100svh', background: 'var(--color-pure-white)', paddingBottom: 56 }}>
      <Navigation />
      {state.view === 'home' && <Home />}
      {state.view === 'product' && <ProductPage />}
      {state.view === 'content' && <ProductPage />}
      {state.view === 'shop' && <ShopPage />}
      {state.view === 'compare' && <ComparePage />}
      {state.view === 'inventory' && <InventoryPage />}
      {state.view === 'trade-in' && <TradeInPage />}
      {state.view === 'design' && <DesignPage />}
      {state.view === 'offers' && <OffersPage />}
      {state.view === 'trip' && <TripPage />}
      <Footer />
      <ChatBar />
    </div>
  );
}

export default function App() {
  return (
    <NavProvider>
      <ToastProvider>
        <AppShell />
      </ToastProvider>
    </NavProvider>
  );
}
