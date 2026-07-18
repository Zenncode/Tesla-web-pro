import { Button } from '../atoms/Button';

interface CTAButtonGroupProps {
  onHero?: boolean;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
}

export function CTAButtonGroup({
  onHero = true,
  primaryLabel = 'Order Now',
  secondaryLabel = 'Learn More',
  onPrimary,
  onSecondary,
}: CTAButtonGroupProps) {
  return (
    <div className="tds-cta-group">
      <Button variant="primary" type="button" onClick={onPrimary}>
        {primaryLabel}
      </Button>
      <Button
        variant={onHero ? 'hero-link' : 'secondary'}
        type="button"
        onClick={onSecondary}
      >
        {secondaryLabel}
      </Button>
    </div>
  );
}
