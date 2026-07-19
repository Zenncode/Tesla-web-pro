import type { BannerBlock } from '../../../data/types';
import { Button } from '../../atoms/Button';

export function ImageBanner({
  data,
  onCta,
}: {
  data: BannerBlock;
  onCta?: () => void;
}) {
  return (
    <section
      className="tds-image-banner"
      style={
        data.image
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.45)), url(${data.image})`,
            }
          : undefined
      }
    >
      <div className="tds-image-banner-inner">
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        {data.ctaLabel && (
          <Button variant="hero-link" type="button" onClick={onCta}>
            {data.ctaLabel}
          </Button>
        )}
      </div>
    </section>
  );
}
