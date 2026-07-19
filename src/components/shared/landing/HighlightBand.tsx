import type { ContentBlock } from '../../../data/types';
import { Button } from '../../atoms/Button';

export function HighlightBand({
  kicker,
  data,
  ctaLabel,
  onCta,
}: {
  kicker?: string;
  data: ContentBlock;
  ctaLabel?: string;
  onCta?: () => void;
}) {
  return (
    <section
      className="tds-highlight-band"
      style={
        data.image
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.5)), url(${data.image})`,
            }
          : undefined
      }
    >
      <div className="tds-highlight-band-inner">
        {kicker && <p className="tds-highlight-kicker">{kicker}</p>}
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        {ctaLabel && (
          <Button variant="hero-link" type="button" onClick={onCta}>
            {ctaLabel}
          </Button>
        )}
      </div>
    </section>
  );
}
