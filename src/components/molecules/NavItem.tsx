import { Button } from '../atoms/Button';

interface NavItemProps {
  label: string;
  active?: boolean;
}

export function NavItem({ label, active }: NavItemProps) {
  return (
    <Button variant="nav" active={active} type="button">
      {label}
    </Button>
  );
}
