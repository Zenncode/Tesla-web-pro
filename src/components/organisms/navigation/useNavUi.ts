import { useEffect, useState } from 'react';
import type { ActiveDropdown, IconMenu } from './navConfig';

/** Shared dropdown / mobile menu open state + body scroll lock */
export function useNavUi() {
  const [active, setActive] = useState<ActiveDropdown>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [iconMenu, setIconMenu] = useState<IconMenu>(null);

  const closeAll = () => {
    setActive(null);
    setMobileOpen(false);
    setIconMenu(null);
  };

  const toggle = (item: string) => {
    setIconMenu(null);
    setActive(active === item ? null : (item as ActiveDropdown));
  };

  const toggleIcon = (menu: IconMenu) => {
    setActive(null);
    setMobileOpen(false);
    setIconMenu((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || active ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, active]);

  return {
    active,
    setActive,
    mobileOpen,
    setMobileOpen,
    iconMenu,
    setIconMenu,
    closeAll,
    toggle,
    toggleIcon,
  };
}
