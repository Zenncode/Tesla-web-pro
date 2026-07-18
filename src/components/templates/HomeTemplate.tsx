import type { ReactNode } from 'react';

interface HomeTemplateProps {
  sections: ReactNode[];
}

export function HomeTemplate({ sections }: HomeTemplateProps) {
  return (
    <>
      {sections.map((section, i) => (
        <div key={i}>{section}</div>
      ))}
    </>
  );
}
