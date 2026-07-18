import type { CSSProperties } from 'react';

export type IconName =
  | 'help'
  | 'globe'
  | 'account'
  | 'chat'
  | 'send'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-down'
  | 'schedule'
  | 'menu'
  | 'close';

interface IconProps {
  name: IconName;
  size?: number;
  style?: CSSProperties;
  className?: string;
}

/**
 * Refined outline icons (24×24, 1.5 stroke) — closer to Tesla marketing UI
 * than filled Material glyphs.
 */
function IconPaths({ name }: { name: IconName }) {
  const stroke = {
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (name) {
    case 'help':
      return (
        <g {...stroke}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.25c-.7.4-1.1.9-1.1 1.75" />
          <circle cx="12" cy="17" r="0.75" fill="currentColor" stroke="none" />
        </g>
      );
    case 'globe':
      return (
        <g {...stroke}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9s1.3-6.2 3.8-9z" />
        </g>
      );
    case 'account':
      return (
        <g {...stroke}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 19.5c0-3.2 3-5.5 7-5.5s7 2.3 7 5.5" />
        </g>
      );
    case 'chat':
      return (
        <g {...stroke}>
          <path d="M5 16.5V7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6A2.5 2.5 0 0 1 16.5 16H9l-4 3v-2.5z" />
        </g>
      );
    case 'send':
      return (
        <g {...stroke}>
          <path d="M4.5 11.5 19 5l-5.5 15-2.2-6.3L4.5 11.5z" />
          <path d="M11.3 13.7 19 5" />
        </g>
      );
    case 'chevron-left':
      return (
        <path
          d="M14.5 6.5 9 12l5.5 5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    case 'chevron-right':
      return (
        <path
          d="M9.5 6.5 15 12l-5.5 5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    case 'chevron-down':
      return (
        <path
          d="M6.5 9.5 12 15l5.5-5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    case 'schedule':
      return (
        <g {...stroke}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7.5V12l3.5 2" />
        </g>
      );
    case 'menu':
      return (
        <g {...stroke}>
          <path d="M5 7h14" />
          <path d="M5 12h14" />
          <path d="M5 17h14" />
        </g>
      );
    case 'close':
      return (
        <g {...stroke}>
          <path d="M7 7l10 10" />
          <path d="M17 7 7 17" />
        </g>
      );
    default:
      return null;
  }
}

export function Icon({ name, size = 24, style, className = '' }: IconProps) {
  return (
    <svg
      className={`tds-icon ${className}`.trim()}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'block',
        flexShrink: 0,
        color: 'inherit',
        ...style,
      }}
      aria-hidden
    >
      <IconPaths name={name} />
    </svg>
  );
}
