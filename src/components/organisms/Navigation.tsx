import { useEffect, useRef, useState } from 'react';
import { NavItem } from '../molecules/NavItem';
import { Icon } from '../atoms/Icon';
import type { IconName } from '../atoms/Icon';
import { VehicleCard } from '../molecules/VehicleCard';
import { ProductCard } from '../molecules/ProductCard';
import { TeslaLogo } from '../atoms/TeslaLogo';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { getByCategory, type CatalogItem } from '../../data/navCatalog';

type ActiveDropdown = 'Vehicles' | 'Energy' | 'Charging' | 'Discover' | 'Shop' | null;
type IconMenu = 'help' | 'region' | 'account' | null;

const navItems = ['Vehicles', 'Energy', 'Charging', 'Discover', 'Shop'] as const;

const sidebarLinks: Record<string, string[]> = {
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
    'Schedule a Consultation',
    'Why Solar',
    'Incentives',
    'Support',
    'Partner with Tesla',
  ],
  Charging: [
    'Find a Supercharger',
    'Trip Planner',
    'Charging Calculator',
    'Supercharging',
    'Help',
  ],
  Discover: ['Support', 'About', 'Careers', 'Find Us'],
  Shop: ['Shop', 'Find a Store'],
};

const helpLinks = [
  'Support',
  'Get Help',
  'Schedule a Demo Drive',
  'Find Us',
  'Careers',
  'Contact',
];

const regions = [
  { region: 'North America', items: ['United States', 'Canada', 'México'] },
  { region: 'Europe', items: ['United Kingdom', 'Deutschland', 'France', 'Italia', 'España'] },
  { region: 'Asia Pacific', items: ['中国大陆', '香港', '台灣', '日本', 'Australia'] },
  { region: 'Middle East', items: ['ישראל', 'UAE'] },
];

const categoryMap: Record<Exclude<ActiveDropdown, null>, CatalogItem['category'] | 'vehicles'> = {
  Vehicles: 'vehicles',
  Energy: 'energy',
  Charging: 'charging',
  Discover: 'discover',
  Shop: 'shop',
};

const primaryLabelFor = (item: CatalogItem) => {
  if (item.category === 'shop') return 'Shop';
  if (item.category === 'discover') return 'Explore';
  if (item.category === 'charging') return 'View';
  return 'Order';
};

const iconPanelStyle: React.CSSProperties = {
  position: 'absolute',
  top: 'calc(100% + 8px)',
  right: 0,
  minWidth: 260,
  maxWidth: 'min(360px, calc(100vw - 24px))',
  maxHeight: 'min(70vh, 420px)',
  overflowY: 'auto',
  background: 'var(--color-pure-white)',
  borderRadius: 'var(--radius-card)',
  border: '1px solid var(--color-cloud-gray)',
  padding: '12px 0',
  zIndex: 120,
  animation: 'tds-slide-down var(--transition-base) var(--ease-tesla)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
};

const panelTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-text)',
  fontSize: 12,
  fontWeight: 500,
  color: 'var(--color-pewter)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase' as const,
  padding: '8px 20px 10px',
};

const panelLinkStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  textAlign: 'left' as const,
  fontFamily: 'var(--font-text)',
  fontSize: 14,
  fontWeight: 500,
  color: 'var(--color-carbon-dark)',
  padding: '12px 20px',
  cursor: 'pointer',
  transition: 'background-color var(--transition-base)',
  background: 'none',
  border: 'none',
};

export function Navigation() {
  const { goHome, goShop, goProduct, navigateFromSidebar } = useNav();
  const { notify } = useToast();
  const [active, setActive] = useState<ActiveDropdown>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [iconMenu, setIconMenu] = useState<IconMenu>(null);
  const [region, setRegion] = useState('United States');
  const [signedIn, setSignedIn] = useState(false);
  const iconBarRef = useRef<HTMLDivElement>(null);

  const toggle = (item: string) => {
    setIconMenu(null);
    setActive(active === item ? null : (item as ActiveDropdown));
  };

  const toggleIcon = (menu: IconMenu) => {
    setActive(null);
    setMobileOpen(false);
    setIconMenu((prev) => (prev === menu ? null : menu));
  };

  const closeAll = () => {
    setActive(null);
    setMobileOpen(false);
    setIconMenu(null);
  };

  const openProduct = (id: string, focus?: 'order' | 'learn', label?: string) => {
    closeAll();
    notify(label ?? `Opening ${id}`);
    goProduct(id, focus);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!iconMenu) return;
    const onPointer = (e: MouseEvent) => {
      if (iconBarRef.current && !iconBarRef.current.contains(e.target as Node)) {
        setIconMenu(null);
      }
    };
    document.addEventListener('mousedown', onPointer);
    return () => document.removeEventListener('mousedown', onPointer);
  }, [iconMenu]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || active ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, active]);

  const iconButtons: { id: IconMenu; icon: IconName; label: string }[] = [
    { id: 'help', icon: 'help', label: 'Support' },
    { id: 'region', icon: 'globe', label: 'Language and region' },
    { id: 'account', icon: 'account', label: 'Account' },
  ];

  const catalogFor = (menu: Exclude<ActiveDropdown, null>) =>
    getByCategory(categoryMap[menu] as CatalogItem['category']);

  const renderMegaCards = (menu: Exclude<ActiveDropdown, null>) => {
    const items = catalogFor(menu);
    if (menu === 'Vehicles') {
      return (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 28,
            maxWidth: 920,
          }}
        >
          {items.map((v) => (
            <VehicleCard
              key={v.id}
              name={v.name}
              imageUrl={v.image}
              onSelect={() => openProduct(v.id, undefined, v.name)}
              onLearn={() => openProduct(v.id, 'learn', `Learn — ${v.name}`)}
              onOrder={() => openProduct(v.id, 'order', `Order — ${v.name}`)}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: 24,
          maxWidth: menu === 'Discover' ? 900 : 720,
        }}
      >
        {items.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            desc={item.desc}
            imageUrl={item.image}
            primaryLabel={primaryLabelFor(item)}
            secondaryLabel="Learn"
            onSelect={() => openProduct(item.id, undefined, item.name)}
            onPrimary={() =>
              openProduct(item.id, 'order', `${primaryLabelFor(item)} — ${item.name}`)
            }
            onSecondary={() => openProduct(item.id, 'learn', `Learn — ${item.name}`)}
          />
        ))}
      </div>
    );
  };

  const renderIconPanel = () => {
    if (!iconMenu) return null;

    if (iconMenu === 'help') {
      return (
        <div className="tds-icon-panel" role="menu" aria-label="Support" style={iconPanelStyle}>
          <div style={panelTitleStyle}>Support</div>
          {helpLinks.map((label) => (
            <button
              key={label}
              type="button"
              role="menuitem"
              className="tds-icon-panel-item"
              style={panelLinkStyle}
              onClick={() => {
                closeAll();
                if (label.includes('Demo')) {
                  notify(label);
                  goProduct('demo-drive', 'order');
                } else {
                  notify(label);
                  goProduct('support');
                }
              }}
            >
              {label}
            </button>
          ))}
        </div>
      );
    }

    if (iconMenu === 'region') {
      return (
        <div className="tds-icon-panel" role="menu" aria-label="Select region" style={iconPanelStyle}>
          <div style={panelTitleStyle}>Select Region</div>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--color-pewter)', padding: '0 20px 12px', margin: 0 }}>
            Current: <strong style={{ color: 'var(--color-carbon-dark)', fontWeight: 500 }}>{region}</strong>
          </p>
          {regions.map((group) => (
            <div key={group.region} style={{ marginBottom: 8 }}>
              <div style={{ ...panelTitleStyle, paddingTop: 12, borderTop: '1px solid var(--color-cloud-gray)' }}>
                {group.region}
              </div>
              {group.items.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="menuitem"
                  className="tds-icon-panel-item"
                  style={{
                    ...panelLinkStyle,
                    fontWeight: item === region ? 500 : 400,
                    color: item === region ? 'var(--color-electric-blue)' : 'var(--color-carbon-dark)',
                  }}
                  onClick={() => {
                    setRegion(item);
                    setIconMenu(null);
                    notify(`Region: ${item}`);
                  }}
                >
                  {item}
                  {item === region ? '  ✓' : ''}
                </button>
              ))}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="tds-icon-panel" role="menu" aria-label="Account" style={iconPanelStyle}>
        <div style={panelTitleStyle}>Account</div>
        {!signedIn ? (
          <>
            <button
              type="button"
              role="menuitem"
              className="tds-icon-panel-item"
              style={panelLinkStyle}
              onClick={() => {
                setSignedIn(true);
                setIconMenu(null);
                notify('Signed in (demo)');
              }}
            >
              Sign In
            </button>
            <button
              type="button"
              role="menuitem"
              className="tds-icon-panel-item"
              style={panelLinkStyle}
              onClick={() => {
                setSignedIn(true);
                setIconMenu(null);
                notify('Account created (demo)');
              }}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            {['Account', 'Order History', 'Profile Settings'].map((label) => (
              <button
                key={label}
                type="button"
                role="menuitem"
                className="tds-icon-panel-item"
                style={panelLinkStyle}
                onClick={() => {
                  setIconMenu(null);
                  notify(label);
                  goProduct('support', 'learn');
                }}
              >
                {label}
              </button>
            ))}
            <button
              type="button"
              role="menuitem"
              className="tds-icon-panel-item"
              style={panelLinkStyle}
              onClick={() => {
                setSignedIn(false);
                setIconMenu(null);
                notify('Signed out');
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <nav className="tds-nav">
        <div className="tds-nav-inner">
          <TeslaLogo
            width={118}
            onClick={() => {
              closeAll();
              notify('Home');
              goHome();
            }}
          />

          <div className="tds-desktop-only" style={{ alignItems: 'center', gap: 2 }}>
            {navItems.map((item) => (
              <div key={item} onClick={() => toggle(item)}>
                <NavItem label={item} active={active === item} />
              </div>
            ))}
          </div>

          <div
            ref={iconBarRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              minWidth: 118,
              justifyContent: 'flex-end',
              position: 'relative',
            }}
          >
            <div className="tds-desktop-only" style={{ alignItems: 'center', gap: 2, position: 'relative' }}>
              {iconButtons.map(({ id, icon, label }) => (
                <button
                  key={id}
                  type="button"
                  className={`tds-icon-btn${iconMenu === id ? ' is-active' : ''}`}
                  aria-label={label}
                  aria-expanded={iconMenu === id}
                  aria-haspopup="menu"
                  onClick={() => toggleIcon(id)}
                >
                  <Icon name={icon} size={22} />
                </button>
              ))}
              {renderIconPanel()}
            </div>

            <button
              type="button"
              className="tds-icon-btn tds-mobile-only"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => {
                setMobileOpen((o) => !o);
                setActive(null);
                setIconMenu(null);
              }}
            >
              <Icon name={mobileOpen ? 'close' : 'menu'} size={22} />
            </button>
          </div>
        </div>

        {active && (
          <div
            className="tds-mega"
            style={{
              position: 'absolute',
              top: 'var(--nav-height)',
              left: 0,
              right: 0,
              background: 'var(--color-pure-white)',
              padding: '36px 48px 48px',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 3fr) minmax(160px, 1fr)',
              gap: 40,
              zIndex: 99,
              maxHeight: 'min(72vh, 620px)',
              overflowY: 'auto',
            }}
          >
            {renderMegaCards(active)}

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                paddingLeft: 28,
                borderLeft: '1px solid var(--color-cloud-gray)',
              }}
            >
              {(sidebarLinks[active] || []).map((label) => (
                <button
                  key={label}
                  type="button"
                  className="tds-link-sidebar"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    closeAll();
                    notify(label);
                    if (label === 'Shop') goShop();
                    else navigateFromSidebar(label);
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {(active || iconMenu) && (
        <div className="tds-backdrop" onClick={closeAll} aria-hidden />
      )}

      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: 'var(--nav-height)',
            zIndex: 95,
            background: 'var(--color-pure-white)',
            overflowY: 'auto',
            padding: '12px 20px 48px',
            animation: 'tds-slide-down var(--transition-base) var(--ease-tesla)',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => toggle(item)}
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '18px 4px',
                borderBottom: '1px solid var(--color-cloud-gray)',
                fontFamily: 'var(--font-text)',
                fontSize: 17,
                fontWeight: 500,
                color: 'var(--color-carbon-dark)',
              }}
            >
              {item}
              <Icon
                name={active === item ? 'chevron-down' : 'chevron-right'}
                size={20}
                style={{ color: 'var(--color-pewter)' }}
              />
            </button>
          ))}

          {active && (
            <div style={{ paddingTop: 24 }}>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, fontWeight: 500, color: 'var(--color-pewter)', marginBottom: 16 }}>
                {active}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {catalogFor(active).map((item) => (
                  <ProductCard
                    key={item.id}
                    name={item.name}
                    desc={item.desc}
                    imageUrl={item.image}
                    primaryLabel={primaryLabelFor(item)}
                    secondaryLabel="Learn"
                    onSelect={() => openProduct(item.id, undefined, item.name)}
                    onPrimary={() => openProduct(item.id, 'order', `${primaryLabelFor(item)} — ${item.name}`)}
                    onSecondary={() => openProduct(item.id, 'learn', `Learn — ${item.name}`)}
                  />
                ))}
              </div>
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {(sidebarLinks[active] || []).map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="tds-link-sidebar"
                    style={{ background: 'none', border: 'none', textAlign: 'left', padding: '8px 0', cursor: 'pointer' }}
                    onClick={() => {
                      closeAll();
                      notify(label);
                      if (label === 'Shop') goShop();
                      else navigateFromSidebar(label);
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 36, paddingTop: 16, borderTop: '1px solid var(--color-cloud-gray)' }}>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, fontWeight: 500, color: 'var(--color-pewter)', marginBottom: 8 }}>
              Quick links
            </p>
            {iconButtons.map(({ id, icon, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setIconMenu(id);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 4px',
                  fontFamily: 'var(--font-text)',
                  fontSize: 16,
                  fontWeight: 500,
                  color: 'var(--color-carbon-dark)',
                }}
              >
                <Icon name={icon} size={22} />
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {iconMenu && !mobileOpen && (
        <div
          className="tds-mobile-only"
          style={{
            position: 'fixed',
            inset: 0,
            top: 'var(--nav-height)',
            zIndex: 110,
            background: 'var(--color-pure-white)',
            overflowY: 'auto',
            padding: '16px 0 48px',
            display: 'block',
          }}
        >
          <div style={{ padding: '0 20px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 500, fontSize: 17, color: 'var(--color-carbon-dark)' }}>
              {iconMenu === 'help' ? 'Support' : iconMenu === 'region' ? 'Region' : 'Account'}
            </span>
            <button type="button" className="tds-icon-btn" aria-label="Close" onClick={() => setIconMenu(null)}>
              <Icon name="close" size={22} />
            </button>
          </div>
          <div style={{ ...iconPanelStyle, position: 'static', boxShadow: 'none', border: 'none', maxHeight: 'none', width: '100%', maxWidth: 'none' }}>
            {iconMenu === 'help' &&
              helpLinks.map((label) => (
                <button
                  key={label}
                  type="button"
                  style={panelLinkStyle}
                  onClick={() => {
                    setIconMenu(null);
                    if (label.includes('Demo')) goProduct('demo-drive');
                    else goProduct('support');
                  }}
                >
                  {label}
                </button>
              ))}
            {iconMenu === 'region' &&
              regions.flatMap((g) =>
                g.items.map((item) => (
                  <button
                    key={item}
                    type="button"
                    style={{
                      ...panelLinkStyle,
                      color: item === region ? 'var(--color-electric-blue)' : 'var(--color-carbon-dark)',
                    }}
                    onClick={() => {
                      setRegion(item);
                      setIconMenu(null);
                    }}
                  >
                    {item}
                    {item === region ? '  ✓' : ''}
                  </button>
                )),
              )}
            {iconMenu === 'account' &&
              (!signedIn ? (
                <>
                  <button type="button" style={panelLinkStyle} onClick={() => { setSignedIn(true); setIconMenu(null); }}>Sign In</button>
                  <button type="button" style={panelLinkStyle} onClick={() => setIconMenu(null)}>Create Account</button>
                </>
              ) : (
                <>
                  {['Account', 'Order History', 'Profile Settings'].map((l) => (
                    <button key={l} type="button" style={panelLinkStyle} onClick={() => setIconMenu(null)}>{l}</button>
                  ))}
                  <button type="button" style={panelLinkStyle} onClick={() => { setSignedIn(false); setIconMenu(null); }}>Logout</button>
                </>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
