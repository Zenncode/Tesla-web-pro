import type { ListSection } from '../../../data/types';
import { Section, SectionBody, SectionTitle } from '../Section';

export function BulletList({ data }: { data: ListSection }) {
  return (
    <Section>
      <SectionTitle>{data.title}</SectionTitle>
      <SectionBody>{data.body}</SectionBody>
      {data.bullets && data.bullets.length > 0 && (
        <ul className="tds-bullet-list">
          {data.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </Section>
  );
}
