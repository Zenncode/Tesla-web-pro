import type { StatsBand as StatsBandData } from '../../../data/types';
import { Button } from '../../atoms/Button';
import { Section, SectionBody, SectionTitle } from '../Section';

export function StatsBand({
  data,
  onCta,
}: {
  data: StatsBandData;
  onCta?: () => void;
}) {
  return (
    <Section tone="dark" center>
      <SectionTitle>
        <span className="tds-section-title is-light is-center-block">{data.title}</span>
      </SectionTitle>
      <SectionBody>
        <span className="tds-section-body is-light is-center-block">{data.body}</span>
      </SectionBody>
      <div className="tds-stats-row">
        {data.stats.map((s) => (
          <div key={s.label}>
            <div className="tds-stat-value is-light">{s.value}</div>
            <div className="tds-stat-label is-light">{s.label}</div>
          </div>
        ))}
      </div>
      {data.ctaLabel && (
        <Button variant="hero-link" type="button" onClick={onCta}>
          {data.ctaLabel}
        </Button>
      )}
    </Section>
  );
}
