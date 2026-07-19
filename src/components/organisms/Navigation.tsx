import { useEffect, useRef, useState } from 'react';
import { NavItem } from '../molecules/NavItem';
import { Icon } from '../atoms/Icon';
import type { IconName } from '../atoms/Icon';
import { VehicleCard } from '../molecules/VehicleCard';
import { ProductCard } from '../molecules/ProductCard';
import { TeslaLogo } from '../atoms/TeslaLogo';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import {
  getByCategory,
  getById,
  primaryVehicleIds,
  type CatalogItem,
} from '../../data/navCatalog';
import {
  CATEGORY_MAP,
  HELP_LINKS,
  NAV_ITEMS,
  REGIONS,
  SIDEBAR_LINKS,
  primaryLabelFor,
  type ActiveDropdown,
  type IconMenu,
} from './navigation/navConfig';
import { useNavUi } from './navigation/useNavUi';

export function Navigation() {
  const { goHome, goShop, goDiscover, goEnergy, goChargingHub, goProduct, navigateFromSidebar } =
    useNav();
  const { notify } = useToast();
  const {
    active,
    mobileOpen,
    setMobileOpen,
    iconMenu,
    setIconMenu,
    closeAll,
    toggle,
    toggleIcon,
  } = useNavUi();
  const [region, setRegion] = useState('United States');
  const [signedIn, setSignedIn] = useState(false);
  const iconBarRef = useRef<HTMLDivElement>(null);

  const openProduct = (id: string, focus?: 'order' | 'learn', label?: string) => {
    closeAll();
    notify(label ?? `Opening ${id}`);
    goProduct(id, focus);
  };

  const handleSidebar = (label: string) => {
    closeAll();
    notify(label);
    if (label === 'Shop') goShop();
    else if (label === 'Discover') goDiscover();
    else if (label === 'All Energy') goEnergy();
    else if (label === 'All Charging') goChargingHub();
    else navigateFromSidebar(label);
  };

  useEffect(() => {
    if (!iconMenu) return;
    const onPointer = (e: MouseEvent) => {
      if (iconBarRef.current && !iconBarRef.current.contains(e.target as Node)) {
        setIconMenu(null);
      }
    };
    document.addEventListener('mousedown', onPointer);
    return () => document.removeEventListener('mousedown', onPointer);
  }, [iconMenu, setIconMenu]);

  const catalogFor = (menu: Exclude<ActiveDropdown, null>) => {
    if (menu === 'Vehicles') {
      return primaryVehicleIds
        .map((id) => getById(id))
        .filter((x): x is CatalogItem => Boolean(x));
    }
    return getByCategory(CATEGORY_MAP[menu]);
  };

  const renderMegaCards = (menu: Exclude<ActiveDropdown, null>) => {
    const items = catalogFor(menu);
    if (menu === 'Vehicles') {
      return (
        <div className="tds-mega-vehicles">
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
      <div className={`tds-mega-products ${menu === 'Discover' ? 'is-wide' : ''}`}>
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
        <div className="tds-icon-panel" role="menu" aria-label="Support">
          <div className="tds-panel-title">Support</div>
          {HELP_LINKS.map((label) => (
            <button
              key={label}
              type="button"
              role="menuitem"
              className="tds-icon-panel-item tds-panel-link"
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
        <div className="tds-icon-panel" role="menu" aria-label="Select region">
          <div className="tds-panel-title">Select Region</div>
          <p className="tds-panel-current">
            Current: <strong>{region}</strong>
          </p>
          {REGIONS.map((group) => (
            <div key={group.region} className="tds-region-group">
              <div className="tds-panel-title tds-panel-title-border">{group.region}</div>
              {group.items.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="menuitem"
                  className={`tds-icon-panel-item tds-panel-link ${item === region ? 'is-selected' : ''}`}
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
      <div className="tds-icon-panel" role="menu" aria-label="Account">
        <div className="tds-panel-title">Account</div>
        {!signedIn ? (
          <>
            <button
              type="button"
              role="menuitem"
              className="tds-icon-panel-item tds-panel-link"
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
              className="tds-icon-panel-item tds-panel-link"
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
            <p className="tds-panel-current">Signed in (demo)</p>
            <button
              type="button"
              role="menuitem"
              className="tds-icon-panel-item tds-panel-link"
              onClick={() => {
                notify('Orders (demo)');
                setIconMenu(null);
              }}
            >
              Orders
            </button>
            <button
              type="button"
              role="menuitem"
              className="tds-icon-panel-item tds-panel-link"
              onClick={() => {
                setSignedIn(false);
                setIconMenu(null);
                notify('Signed out');
              }}
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    );
  };

  const iconButtons: { id: IconMenu; icon: IconName; label: string }[] = [
    { id: 'help', icon: 'help', label: 'Support' },
    { id: 'region', icon: 'globe', label: 'Language and region' },
    { id: 'account', icon: 'account', label: 'Account' },
  ];

  return (
    <>
      <nav className="tds-nav" aria-label="Primary">
        <div className="tds-nav-inner">
          <TeslaLogo
            onClick={() => {
              closeAll();
              notify('Home');
              goHome();
            }}
          />

          <div className="tds-nav-center tds-desktop-only">
            {NAV_ITEMS.map((item) => (
              <div key={item} onClick={() => toggle(item)}>
                <NavItem label={item} active={active === item} />
              </div>
            ))}
          </div>

          <div ref={iconBarRef} className="tds-nav-icons">
            <div className="tds-desktop-only tds-nav-icon-row">
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
                setIconMenu(null);
              }}
            >
              <Icon name={mobileOpen ? 'close' : 'menu'} size={22} />
            </button>
          </div>
        </div>

        {active && (
          <div className="tds-mega">
            {renderMegaCards(active)}
            <div className="tds-mega-sidebar">
              {(SIDEBAR_LINKS[active] || []).map((label) => (
                <button
                  key={label}
                  type="button"
                  className="tds-link-sidebar"
                  onClick={() => handleSidebar(label)}
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
        <div className="tds-mobile-drawer">
          {NAV_ITEMS.map((item) => (
            <button key={item} type="button" className="tds-mobile-nav-item" onClick={() => toggle(item)}>
              {item}
              <Icon
                name={active === item ? 'chevron-down' : 'chevron-right'}
                size={20}
                style={{ color: 'var(--color-pewter)' }}
              />
            </button>
          ))}

          {active && (
            <div className="tds-mobile-mega">
              <p className="tds-panel-title">{active}</p>
              <div className="tds-mobile-cards">
                {catalogFor(active).map((item) => (
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
              <div className="tds-mobile-sidebar">
                {(SIDEBAR_LINKS[active] || []).map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="tds-link-sidebar"
                    onClick={() => handleSidebar(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="tds-mobile-quick">
            <p className="tds-panel-title">Quick links</p>
            {iconButtons.map(({ id, icon, label }) => (
              <button
                key={id}
                type="button"
                className="tds-mobile-quick-item"
                onClick={() => {
                  setMobileOpen(false);
                  setIconMenu(id);
                }}
              >
                <Icon name={icon} size={20} />
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
