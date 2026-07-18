import { Text } from '../atoms/Text';
import { CTAButtonGroup } from '../molecules/CTAButtonGroup';

interface EnergyHeroProps {
  image: string;
  name: string;
  tagline?: string;
  id?: string;
  onOrder?: () => void;
  onLearn?: () => void;
}

export function EnergyHero({ image, name, tagline, id, onOrder, onLearn }: EnergyHeroProps) {
  return (
    <section
      id={id}
      style={{
        width: '100%',
        height: '100svh',
        minHeight: 560,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `linear-gradient(var(--color-scrim), var(--color-scrim)), url(${image})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 var(--space-16)',
      }}
    >
      <Text role="hero-title" as="h1">{name}</Text>
      {tagline && (
        <p className="tds-body-on-dark" style={{ margin: '8px 0 0', maxWidth: 420 }}>
          {tagline}
        </p>
      )}
      <div style={{ marginTop: 'var(--space-24)' }}>
        <CTAButtonGroup onHero onPrimary={onOrder} onSecondary={onLearn} />
      </div>
    </section>
  );
}
