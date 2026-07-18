import { NavProvider, useNav } from './app/NavContext';
import { ToastProvider } from './app/ToastContext';
import { Navigation } from './components/organisms/Navigation';
import { Footer } from './components/organisms/Footer';
import { ChatBar } from './components/organisms/ChatBar';
import { Home } from './components/pages/Home';
import { ProductPage } from './components/pages/ProductPage';
import { ShopPage } from './components/pages/ShopPage';

function AppShell() {
  const { state } = useNav();

  return (
    <div style={{ minHeight: '100svh', background: 'var(--color-pure-white)', paddingBottom: 56 }}>
      <Navigation />
      {state.view === 'home' && <Home />}
      {state.view === 'product' && <ProductPage />}
      {state.view === 'shop' && <ShopPage />}
      {state.view === 'content' && <ProductPage />}
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
