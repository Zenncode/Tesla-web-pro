import type { ContentBlock } from '../../../data/types';
import { Section, SectionTitle } from '../Section';

type ContentBlocksProps = {
  title: string;
  blocks: ContentBlock[];
  id?: string;
};

export function ContentBlocks({ title, blocks, id = 'landing-blocks' }: ContentBlocksProps) {
  if (!blocks.length) return null;

  return (
    <Section id={id} tone="ash">
      <SectionTitle>
        <span className="tds-section-title is-center-block">{title}</span>
      </SectionTitle>
      <div className="tds-content-blocks">
        {blocks.map((block, i) => (
          <div key={block.title} className={`tds-content-block ${i % 2 === 1 ? 'is-reverse' : ''}`}>
            {block.image && (
              <div
                className="tds-content-block-media"
                style={{ backgroundImage: `url(${block.image})` }}
              />
            )}
            <div className="tds-content-block-copy">
              <h3>{block.title}</h3>
              <p>{block.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
