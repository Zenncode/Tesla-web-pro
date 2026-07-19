import { Icon } from '../atoms/Icon';

type BackLinkProps = {
  label?: string;
  onDark?: boolean;
  onClick: () => void;
  className?: string;
};

export function BackLink({ label = 'Home', onDark = false, onClick, className = '' }: BackLinkProps) {
  return (
    <button
      type="button"
      className={`tds-back-link ${onDark ? 'is-dark' : ''} ${className}`.trim()}
      onClick={onClick}
    >
      <Icon name="chevron-left" size={20} />
      {label}
    </button>
  );
}
