import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

interface FSDHeroProps {
  image: string;
  id?: string;
  onSchedule?: () => void;
  onLearn?: () => void;
}

export function FSDHero({ image, id, onSchedule, onLearn }: FSDHeroProps) {
  return (
    <section
      id={id}
      style={{
        width: '100%',
        height: '100svh',
        minHeight: 560,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 var(--space-16)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-8)',
          maxWidth: 720,
        }}
      >
        <Text role="hero-title" as="h1">Full Self-Driving (Supervised)</Text>
        <p className="tds-body-on-dark" style={{ margin: 0 }}>
          Makes every drive easier. Subscribe for $99/mo.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 'var(--space-64)',
            marginTop: 'var(--space-40)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div>
            <Text role="stat" as="p">7x</Text>
            <p className="tds-body-on-dark" style={{ margin: '4px 0 0' }}>Fewer Collisions</p>
          </div>
          <div>
            <Text role="stat" as="p">11,974,619,551</Text>
            <p className="tds-body-on-dark" style={{ margin: '4px 0 0' }}>Miles Driven</p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 'var(--space-24)',
            marginTop: 'var(--space-40)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Button variant="hero-link" type="button" onClick={onSchedule}>
            Schedule Demo
          </Button>
          <Button variant="hero-link" type="button" onClick={onLearn}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
