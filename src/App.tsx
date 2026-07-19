import { NavProvider, useNav } from './app/NavContext';
import { ToastProvider } from './app/ToastContext';
import { Navigation } from './components/organisms/Navigation';
import { Footer } from './components/organisms/Footer';
import { ChatBar } from './components/organisms/ChatBar';
import { Home } from './components/pages/Home';
import { ProductPage } from './components/pages/ProductPage';
import { ShopPage } from './components/pages/ShopPage';
import { DiscoverPage } from './components/pages/DiscoverPage';
import { CategoryHubPage } from './components/pages/CategoryHubPage';
import { ComparePage } from './components/pages/ComparePage';
import { InventoryPage } from './components/pages/InventoryPage';
import { TradeInPage } from './components/pages/TradeInPage';
import { DesignPage } from './components/pages/DesignPage';
import { OffersPage } from './components/pages/OffersPage';
import { TripPage } from './components/pages/TripPage';
import { images } from './assets/images';

const viewMap = {
  home: () => <Home />,
  product: () => <ProductPage />,
  content: () => <ProductPage />,
  shop: () => <ShopPage />,
  discover: () => <DiscoverPage />,
  energy: () => (
    <CategoryHubPage
      category="energy"
      title="Energy"
      subtitle="Solar, Solar Roof, Powerwall and Megapack — power your home and the grid."
      heroImage={images.solar}
      primaryLabel="Order"
    />
  ),
  'charging-hub': () => (
    <CategoryHubPage
      category="charging"
      title="Charging"
      subtitle="Home charging, Superchargers and everything you need on the road."
      heroImage={images.cardCharging}
      primaryLabel="View"
    />
  ),
  compare: () => <ComparePage />,
  inventory: () => <InventoryPage />,
  'trade-in': () => <TradeInPage />,
  design: () => <DesignPage />,
  offers: () => <OffersPage />,
  trip: () => <TripPage />,
} as const;

function AppShell() {
  const { state } = useNav();
  const View = viewMap[state.view] ?? viewMap.home;

  return (
    <div className="tds-app">
      <Navigation />
      <View />
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
