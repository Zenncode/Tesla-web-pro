import { TeslaLogo } from '../atoms/TeslaLogo';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';

const links = [
  { label: 'Tesla © 2026', action: 'home' as const },
  { label: 'Privacy & Legal', action: 'support' as const },
  { label: 'Vehicle Recalls', action: 'support' as const },
  { label: 'Contact', action: 'support' as const },
  { label: 'News', action: 'events' as const },
  { label: 'Get Updates', action: 'support' as const },
  { label: 'Locations', action: 'demo-drive' as const },
  { label: 'Learn', action: 'video-guides' as const },
];

export function Footer() {
  const { goHome, goProduct } = useNav();
  const { notify } = useToast();

  return (
    <footer
      style={{
        background: 'var(--color-pure-white)',
        padding: '56px 24px 88px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 28,
      }}
    >
      <TeslaLogo
        width={96}
        onClick={() => {
          notify('Home');
          goHome();
        }}
        style={{ color: 'var(--color-carbon-dark)' }}
      />

      <nav
        aria-label="Legal"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px 22px',
          maxWidth: 720,
        }}
      >
        {links.map((link) => (
          <button
            key={link.label}
            type="button"
            className="tds-link"
            style={{
              fontSize: 'var(--fs-footer)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            onClick={() => {
              notify(link.label);
              if (link.action === 'home') goHome();
              else goProduct(link.action);
            }}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <p
        style={{
          fontFamily: 'var(--font-text)',
          fontSize: 'var(--fs-footer)',
          fontWeight: 'var(--fw-regular)',
          color: 'var(--color-silver-fog)',
          margin: 0,
          textAlign: 'center',
          maxWidth: 480,
          lineHeight: 1.5,
        }}
      >
        Price and feature availability subject to change.
      </p>
    </footer>
  );
}
