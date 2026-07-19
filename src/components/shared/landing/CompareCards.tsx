import type { CompareCard } from '../../../data/types';
import { Section, SectionTitle } from '../Section';

export function CompareCards({ title, cards }: { title: string; cards: CompareCard[] }) {
  if (!cards.length) return null;

  return (
    <Section tone="ash">
      <SectionTitle>
        <span className="tds-section-title is-center-block">{title}</span>
      </SectionTitle>
      <div className="tds-compare-cards">
        {cards.map((card) => (
          <div key={card.name} className="tds-compare-card">
            <h3>{card.name}</h3>
            <div className="tds-compare-card-stats">
              {card.stats.map((s) => (
                <div key={s.label}>
                  <div className="tds-stat-value">
                    {s.value}
                    {s.note && <sup>{s.note}</sup>}
                  </div>
                  <div className="tds-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <p>{card.blurb}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
