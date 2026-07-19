import { useState, type ReactNode } from 'react';
import type { SpecGroup } from '../../../data/types';
import { Section, SectionTitle } from '../Section';

export function SpecsTable({
  name,
  specs,
  footer,
}: {
  name: string;
  specs: SpecGroup[];
  footer?: ReactNode;
}) {
  const [trim, setTrim] = useState(0);
  if (!specs.length) return null;

  return (
    <Section tone="ash">
      <SectionTitle>
        <span className="tds-section-title is-center-block">{name} Specs</span>
      </SectionTitle>
      {specs.length > 1 && (
        <div className="tds-spec-tabs">
          {specs.map((s, i) => (
            <button
              key={s.trim}
              type="button"
              className={`tds-spec-tab ${trim === i ? 'is-active' : ''}`}
              onClick={() => setTrim(i)}
            >
              {s.trim}
            </button>
          ))}
        </div>
      )}
      <div className="tds-specs-table">
        {specs[trim]?.rows.map((row) => (
          <div key={row.label} className="tds-specs-row">
            <span>{row.label}</span>
            <span>{row.value}</span>
          </div>
        ))}
      </div>
      {footer}
    </Section>
  );
}
