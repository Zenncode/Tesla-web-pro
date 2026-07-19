import type { ReactNode } from 'react';
import { BackLink } from './BackLink';

type PageShellProps = {
  title?: string;
  description?: string;
  onBack?: () => void;
  backLabel?: string;
  children: ReactNode;
  /** Wider content (default 1100) */
  wide?: boolean;
  className?: string;
};

/** Standard interior page: optional back + title + padded content */
export function PageShell({
  title,
  description,
  onBack,
  backLabel = 'Home',
  children,
  wide = false,
  className = '',
}: PageShellProps) {
  return (
    <main className={`tds-page ${className}`.trim()}>
      <div className={`tds-page-inner ${wide ? 'is-wide' : ''}`.trim()}>
        {onBack && (
          <BackLink
            label={backLabel}
            onClick={onBack}
            className="tds-page-back"
          />
        )}
        {title && <h1 className="tds-page-title">{title}</h1>}
        {description && <p className="tds-page-desc">{description}</p>}
        {children}
      </div>
    </main>
  );
}
