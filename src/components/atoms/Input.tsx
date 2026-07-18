import type { InputHTMLAttributes, CSSProperties } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  style?: CSSProperties;
}

const inputStyle: CSSProperties = {
  background: 'transparent',
  color: 'var(--color-carbon-dark)',
  fontFamily: 'var(--font-text)',
  fontSize: 'var(--fs-body)',
  fontWeight: 'var(--fw-regular)',
  border: 'none',
  outline: 'none',
  width: '100%',
  padding: 'var(--space-8)',
  // Placeholder color set via global ::placeholder
};

export function Input({ style, ...props }: InputProps) {
  return (
    <input
      style={{ ...inputStyle, ...style }}
      {...props}
    />
  );
}
