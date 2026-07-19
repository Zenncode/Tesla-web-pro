import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  children: ReactNode;
  tone?: 'default' | 'ash' | 'dark';
  narrow?: boolean;
  className?: string;
  center?: boolean;
};

export function Section({
  id,
  children,
  tone = 'default',
  narrow = false,
  className = '',
  center = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`tds-section tone-${tone} ${narrow ? 'is-narrow' : ''} ${center ? 'is-center' : ''} ${className}`.trim()}
    >
      <div className="tds-section-inner">{children}</div>
    </section>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="tds-section-title">{children}</h2>;
}

export function SectionBody({ children }: { children: ReactNode }) {
  return <p className="tds-section-body">{children}</p>;
}
