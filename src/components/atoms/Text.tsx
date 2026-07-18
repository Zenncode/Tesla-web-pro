import type { CSSProperties, ReactNode } from 'react';

type TextRole = 'hero-title' | 'product-name' | 'nav' | 'body' | 'sub-link' | 'promo' | 'category' | 'stat';

const roleClass: Partial<Record<TextRole, string>> = {
  'hero-title': 'tds-hero-title',
  promo: 'tds-promo',
  category: 'tds-category',
};

const roles: Record<TextRole, CSSProperties> = {
  'hero-title': {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--fs-hero-title)',
    fontWeight: 'var(--fw-medium)',
    lineHeight: 'var(--lh-hero)',
    letterSpacing: 'normal',
    color: 'var(--color-pure-white)',
  },
  'product-name': {
    fontFamily: 'var(--font-text)',
    fontSize: 'var(--fs-product-name)',
    fontWeight: 'var(--fw-medium)',
    lineHeight: 'var(--lh-product)',
    color: 'var(--color-carbon-dark)',
  },
  nav: {
    fontFamily: 'var(--font-text)',
    fontSize: 'var(--fs-nav)',
    fontWeight: 'var(--fw-medium)',
    lineHeight: 'var(--lh-nav)',
    color: 'var(--color-carbon-dark)',
  },
  body: {
    fontFamily: 'var(--font-text)',
    fontSize: 'var(--fs-body)',
    fontWeight: 'var(--fw-regular)',
    lineHeight: 'var(--lh-body)',
    color: 'var(--color-graphite)',
  },
  'sub-link': {
    fontFamily: 'var(--font-text)',
    fontSize: 'var(--fs-sub-link)',
    fontWeight: 'var(--fw-regular)',
    lineHeight: 'var(--lh-body)',
    color: 'var(--color-pewter)',
  },
  promo: {
    fontFamily: 'var(--font-text)',
    fontSize: 'var(--fs-promo)',
    fontWeight: 'var(--fw-medium)',
    color: 'var(--color-electric-blue)',
  },
  category: {
    fontFamily: 'var(--font-text)',
    fontSize: 'var(--fs-category)',
    fontWeight: 'var(--fw-medium)',
    color: 'var(--color-pure-white)',
  },
  stat: {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--fs-stat)',
    fontWeight: 'var(--fw-medium)',
    lineHeight: 1.2,
    color: 'var(--color-pure-white)',
  },
};

interface TextProps {
  role: TextRole;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export function Text({ role, as: Tag = 'p', children, style, className = '' }: TextProps) {
  const extra = roleClass[role] || '';
  return (
    <Tag
      className={[extra, className].filter(Boolean).join(' ')}
      style={{ ...roles[role], ...style }}
    >
      {children}
    </Tag>
  );
}
