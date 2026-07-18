import { useState } from 'react';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { Input } from '../atoms/Input';
import { images } from '../../assets/images';

/** Trip Planner / Find Superchargers (demo) */
export function TripPage() {
  const { goHome, goProduct } = useNav();
  const { notify } = useToast();
  const [from, setFrom] = useState('Palo Alto, CA');
  const [to, setTo] = useState('Los Angeles, CA');
  const [planned, setPlanned] = useState(false);

  const plan = () => {
    setPlanned(true);
    notify('Route planned (demo)');
  };

  return (
    <main style={{ paddingBottom: 96, fontFamily: 'var(--font-text)' }}>
      <div
        style={{
          minHeight: 280,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${images.cardSupercharger})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '32px 24px',
          color: '#fff',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto', width: '100%' }}>
          <button type="button" onClick={() => { notify('Home'); goHome(); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16, fontSize: 14, fontWeight: 500, color: '#fff' }}>
            <Icon name="chevron-left" size={20} /> Home
          </button>
          <h1 style={{ fontSize: 36, fontWeight: 500, margin: 0 }}>Trip Planner</h1>
          <p style={{ opacity: 0.9, margin: '8px 0 0', fontSize: 14 }}>Find Superchargers along your route — demo planner.</p>
        </div>
      </div>

      <div style={{ maxWidth: 560, margin: '0 auto', padding: '32px 24px' }}>
        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 500, display: 'block', marginBottom: 6 }}>From</span>
          <div style={{ border: '1px solid var(--color-cloud-gray)', borderRadius: 4, background: 'var(--color-light-ash)' }}>
            <Input value={from} onChange={(e) => setFrom(e.target.value)} style={{ padding: 12 }} />
          </div>
        </label>
        <label style={{ display: 'block', marginBottom: 24 }}>
          <span style={{ fontSize: 13, fontWeight: 500, display: 'block', marginBottom: 6 }}>To</span>
          <div style={{ border: '1px solid var(--color-cloud-gray)', borderRadius: 4, background: 'var(--color-light-ash)' }}>
            <Input value={to} onChange={(e) => setTo(e.target.value)} style={{ padding: 12 }} />
          </div>
        </label>
        <Button variant="primary" type="button" onClick={plan} style={{ width: '100%', maxWidth: '100%' }}>
          Find My Route
        </Button>

        {planned && (
          <div style={{ marginTop: 32 }}>
            <h2 style={{ fontSize: 18, fontWeight: 500, marginBottom: 16 }}>Suggested Superchargers</h2>
            {[
              { name: 'Kettleman City Supercharger', detail: 'Stop 1 · ~2h · 40 stalls' },
              { name: 'Santa Clarita Supercharger', detail: 'Stop 2 · ~4h · 20 stalls' },
              { name: 'Los Angeles Supercharger', detail: 'Destination area · 30 stalls' },
            ].map((s) => (
              <div
                key={s.name}
                style={{
                  padding: 16,
                  borderBottom: '1px solid var(--color-cloud-gray)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <div>
                  <div style={{ fontWeight: 500, fontSize: 15 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--color-pewter)' }}>{s.detail}</div>
                </div>
                <Button
                  variant="text"
                  type="button"
                  onClick={() => {
                    notify(s.name);
                    goProduct('supercharger', 'learn');
                  }}
                >
                  Details
                </Button>
              </div>
            ))}
            <div className="tds-cta-group" style={{ marginTop: 24, justifyContent: 'flex-start' }}>
              <Button variant="secondary" type="button" onClick={() => goProduct('home-charging')}>
                Home Charging
              </Button>
              <Button variant="text" type="button" onClick={() => goProduct('charging')}>
                Learn about charging
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
