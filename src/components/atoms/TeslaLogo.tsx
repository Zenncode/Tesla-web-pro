import type { CSSProperties } from 'react';

interface TeslaLogoProps {
  width?: number;
  className?: string;
  style?: CSSProperties;
  title?: string;
  onClick?: () => void;
}

/**
 * Official TESLA wordmark (viewBox 0 0 342 35) — same geometry as tesla.com.
 */
const WORDMARK_PATH =
  'M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9c3 0 6 3 6 6.7v.8H197a13.6 13.6 0 0 0 7.2-7V21h-35.1v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z';

export function TeslaLogo({
  width = 120,
  className = '',
  style,
  title = 'Tesla',
  onClick,
}: TeslaLogoProps) {
  const height = (width * 35) / 342;
  const interactive = Boolean(onClick);

  const svg = (
    <svg
      className={`tds-logo ${className}`.trim()}
      viewBox="0 0 342 35"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
      aria-label={title}
      style={{
        display: 'block',
        fill: 'currentColor',
        color: 'var(--color-carbon-dark)',
        flexShrink: 0,
        shapeRendering: 'geometricPrecision',
        ...style,
      }}
    >
      <title>{title}</title>
      <path d={WORDMARK_PATH} />
    </svg>
  );

  if (!interactive) return svg;

  return (
    <button
      type="button"
      className="tds-logo-btn"
      onClick={onClick}
      aria-label={title}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px 4px',
        marginLeft: -4,
        borderRadius: 'var(--radius-btn)',
        color: 'var(--color-carbon-dark)',
        transition: 'opacity var(--transition-base), background-color var(--transition-base)',
      }}
    >
      {svg}
    </button>
  );
}

/** Classic three-bar “T” mark for favicon / small brand use */
export function TeslaTMark({
  size = 24,
  style,
  className = '',
}: {
  size?: number;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Tesla"
      style={{
        display: 'block',
        fill: 'currentColor',
        shapeRendering: 'geometricPrecision',
        ...style,
      }}
    >
      <path d="M10 20c0 0 4-2 14-2h52c10 0 14 2 14 2-6 8-14 12-22 12H32C24 32 16 28 10 20z" />
      <path d="M42 30h16v48c0 5.5-3.6 10-8 10s-8-4.5-8-10V30z" />
    </svg>
  );
}
