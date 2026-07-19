import { Button } from '../atoms/Button';

type ConfirmCardProps = {
  title: string;
  body: string;
  onHome: () => void;
  onContinue: () => void;
  onDark?: boolean;
};

export function ConfirmCard({ title, body, onHome, onContinue, onDark = true }: ConfirmCardProps) {
  return (
    <div className={`tds-confirm-card ${onDark ? 'on-dark' : ''}`.trim()}>
      <p className="tds-confirm-title">✓ {title}</p>
      <p className="tds-confirm-body">{body}</p>
      <div className="tds-cta-group">
        <Button variant="primary" type="button" onClick={onHome}>
          Back to Home
        </Button>
        <Button variant="secondary" type="button" onClick={onContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
}
