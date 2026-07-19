import type { ContentBlock } from '../../../data/types';
import { Section, SectionTitle } from '../Section';

export function FeatureGrid({
  title,
  features,
}: {
  title: string;
  features: ContentBlock[];
}) {
  if (!features.length) return null;

  return (
    <Section>
      <SectionTitle>
        <span className="tds-section-title is-center-block">{title}</span>
      </SectionTitle>
      <div className="tds-feature-grid">
        {features.map((p) => (
          <div key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
