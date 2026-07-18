import { Text } from '../atoms/Text';
import { CTAButtonGroup } from '../molecules/CTAButtonGroup';
import { Icon } from '../atoms/Icon';

interface VehicleHeroProps {
  image: string;
  modelName: string;
  category?: string;
  promo?: string;
  subtitle?: string;
  showScrollCue?: boolean;
  productId?: string;
  onOrder?: () => void;
  onLearn?: () => void;
  id?: string;
}

export function VehicleHero({
  image,
  modelName,
  category,
  promo,
  subtitle,
  showScrollCue,
  onOrder,
  onLearn,
  id,
}: VehicleHeroProps) {
  return (
    <section
      id={id}
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        minHeight: 560,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `linear-gradient(var(--color-scrim), var(--color-scrim)), url(${image})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-4)',
          padding: '0 var(--space-16)',
          marginBottom: '8vh',
        }}
      >
        {category && <Text role="category">{category}</Text>}
        <Text role="hero-title" as="h1">{modelName}</Text>
        {promo && <Text role="promo">{promo}</Text>}
        {subtitle && <p className="tds-body-on-dark" style={{ margin: 0 }}>{subtitle}</p>}
        <div style={{ marginTop: 'var(--space-16)' }}>
          <CTAButtonGroup onHero onPrimary={onOrder} onSecondary={onLearn} />
        </div>
      </div>

      {showScrollCue && (
        <div className="tds-scroll-cue" aria-hidden>
          <Icon name="chevron-down" size={28} />
        </div>
      )}
    </section>
  );
}
