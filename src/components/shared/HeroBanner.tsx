import type { ReactNode } from 'react';
import { BackLink } from './BackLink';

type HeroBannerProps = {
  image: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  minHeight?: string;
  onBack?: () => void;
  children?: ReactNode;
  align?: 'end' | 'center';
};

/** Full-bleed photo hero used by hubs and tool pages */
export function HeroBanner({
  image,
  title,
  subtitle,
  kicker,
  minHeight = '46svh',
  onBack,
  children,
  align = 'center',
}: HeroBannerProps) {
  return (
    <section
      className={`tds-hero-banner is-${align}`}
      style={{
        minHeight,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.38), rgba(0,0,0,0.52)), url(${image})`,
      }}
    >
      {onBack && (
        <BackLink label="Home" onDark onClick={onBack} className="tds-hero-banner-back" />
      )}
      {kicker && <p className="tds-hero-banner-kicker">{kicker}</p>}
      <h1 className="tds-hero-banner-title">{title}</h1>
      {subtitle && <p className="tds-hero-banner-sub">{subtitle}</p>}
      {children}
    </section>
  );
}
