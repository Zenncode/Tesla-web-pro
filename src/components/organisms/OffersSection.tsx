import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

interface OffersSectionProps {
  title: string;
  description: string;
  type: 'offers' | 'inventory';
  image: string;
  id?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
}

export function OffersSection({
  title,
  description,
  type,
  image,
  id,
  onPrimary,
  onSecondary,
}: OffersSectionProps) {
  return (
    <section
      id={id}
      style={{
        width: '100%',
        height: '100svh',
        minHeight: 560,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${image})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 var(--space-16)',
      }}
    >
      <Text role="hero-title" as="h1">{title}</Text>
      <p className="tds-body-on-dark" style={{ margin: '8px 0 0', maxWidth: 420 }}>
        {description}
      </p>
      {type === 'offers' ? (
        <div style={{ marginTop: 'var(--space-24)' }}>
          <Button variant="hero-link" type="button" onClick={onPrimary}>
            Learn More
          </Button>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-8)',
            marginTop: 'var(--space-24)',
            alignItems: 'center',
          }}
        >
          <Button variant="hero-link" type="button" onClick={onPrimary}>
            New
          </Button>
          <span style={{ color: 'var(--color-pure-white)', opacity: 0.7 }}>·</span>
          <Button variant="hero-link" type="button" onClick={onSecondary}>
            Pre-Owned
          </Button>
        </div>
      )}
    </section>
  );
}
