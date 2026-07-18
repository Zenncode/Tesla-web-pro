import { TeslaLogo } from '../atoms/TeslaLogo';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';

const columns = [
  {
    title: 'Vehicles',
    links: [
      { label: 'Model S', action: 'model-s' },
      { label: 'Model 3', action: 'model-3' },
      { label: 'Model Y', action: 'model-y' },
      { label: 'Model X', action: 'model-x' },
      { label: 'Cybertruck', action: 'cybertruck' },
      { label: 'Inventory', action: 'inventory' },
    ],
  },
  {
    title: 'Energy',
    links: [
      { label: 'Solar Panels', action: 'solar-panels' },
      { label: 'Solar Roof', action: 'solar-roof' },
      { label: 'Powerwall', action: 'powerwall' },
      { label: 'Megapack', action: 'megapack' },
    ],
  },
  {
    title: 'Charging',
    links: [
      { label: 'Charging', action: 'charging' },
      { label: 'Home Charging', action: 'home-charging' },
      { label: 'Supercharger', action: 'supercharger' },
      { label: 'Trip Planner', action: 'trip' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Shop', action: 'shop' },
      { label: 'Compare', action: 'compare' },
      { label: 'Trade-in', action: 'trade-in' },
      { label: 'Current Offers', action: 'offers' },
      { label: 'Support', action: 'support' },
      { label: 'Demo Drive', action: 'demo-drive' },
    ],
  },
];

const legal = [
  { label: 'Tesla © 2026', action: 'home' },
  { label: 'Privacy & Legal', action: 'support' },
  { label: 'Vehicle Recalls', action: 'support' },
  { label: 'Contact', action: 'support' },
  { label: 'News', action: 'events' },
  { label: 'Get Updates', action: 'support' },
  { label: 'Locations', action: 'demo-drive' },
  { label: 'Learn', action: 'video-guides' },
];

export function Footer() {
  const { goHome, goProduct, navigateRoute } = useNav();
  const { notify } = useToast();

  const go = (action: string) => {
    notify(action);
    if (action === 'home') goHome();
    else if (['shop', 'compare', 'inventory', 'trade-in', 'offers', 'trip', 'design'].includes(action)) {
      navigateRoute(action);
    } else {
      goProduct(action);
    }
  };

  return (
    <footer
      style={{
        background: 'var(--color-pure-white)',
        padding: '56px 24px 88px',
        borderTop: '1px solid var(--color-cloud-gray)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 40 }}>
          <TeslaLogo
            width={100}
            onClick={() => {
              notify('Home');
              goHome();
            }}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 32,
            marginBottom: 48,
          }}
        >
          {columns.map((col) => (
            <div key={col.title}>
              <h3
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'var(--color-carbon-dark)',
                  margin: '0 0 12px',
                }}
              >
                {col.title}
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      className="tds-link"
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        fontSize: 13,
                      }}
                      onClick={() => go(link.action)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <nav
          aria-label="Legal"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px 20px',
            marginBottom: 16,
          }}
        >
          {legal.map((link) => (
            <button
              key={link.label}
              type="button"
              className="tds-link"
              style={{
                fontSize: 12,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              onClick={() => go(link.action)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <p
          style={{
            fontFamily: 'var(--font-text)',
            fontSize: 12,
            color: 'var(--color-silver-fog)',
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Price and feature availability subject to change. This is an educational UI demo, not affiliated with Tesla, Inc.
        </p>
      </div>
    </footer>
  );
}
