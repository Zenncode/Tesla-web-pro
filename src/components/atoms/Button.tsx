import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'nav' | 'text' | 'hero-link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  children: ReactNode;
  active?: boolean;
}

const variantClass: Record<Variant, string> = {
  primary: 'tds-btn tds-btn-primary',
  secondary: 'tds-btn tds-btn-secondary',
  nav: 'tds-btn tds-btn-nav',
  text: 'tds-btn tds-btn-text',
  'hero-link': 'tds-btn tds-btn-hero-link',
};

export function Button({
  variant,
  children,
  active,
  className = '',
  style,
  ...props
}: ButtonProps) {
  const classes = [
    variantClass[variant],
    active ? 'is-active' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} style={style} {...props}>
      {children}
    </button>
  );
}
