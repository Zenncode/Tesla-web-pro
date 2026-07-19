import { useState } from 'react';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { Input } from '../atoms/Input';
import { images } from '../../assets/images';

const vehicles = [
  { id: 'model-3', name: 'Model 3' },
  { id: 'model-y', name: 'Model Y' },
  { id: 'model-s', name: 'Model S' },
  { id: 'model-x', name: 'Model X' },
  { id: 'cybertruck', name: 'Cybertruck' },
];

const presets = [
  { from: 'Palo Alto, CA', to: 'Los Angeles, CA', label: 'Bay → LA' },
  { from: 'Austin, TX', to: 'Houston, TX', label: 'Austin → Houston' },
  { from: 'New York, NY', to: 'Boston, MA', label: 'NYC → Boston' },
];

/** Trip Planner / Find Superchargers (demo) */
export function TripPage() {
  const { goHome, goProduct, goChargingHub } = useNav();
  const { notify } = useToast();
  const [from, setFrom] = useState('Palo Alto, CA');
  const [to, setTo] = useState('Los Angeles, CA');
  const [vehicle, setVehicle] = useState('model-3');
  const [soc, setSoc] = useState(80);
  const [planned, setPlanned] = useState(false);

  const plan = () => {
    setPlanned(true);
    notify('Route planned (demo)');
  };

  const stops = [
    { name: 'Kettleman City Supercharger', detail: 'Stop 1 · ~2h · arrive 42% · 40 stalls', min: '18 min charge' },
    { name: 'Santa Clarita Supercharger', detail: 'Stop 2 · ~4h · arrive 28% · 20 stalls', min: '22 min charge' },
    { name: 'Los Angeles Supercharger', detail: 'Destination area · arrive ~55% · 30 stalls', min: 'Optional top-up' },
  ];

  return (
    <main style={{ paddingBottom: 96, fontFamily: 'var(--font-text)' }}>
      <div
        style={{
          minHeight: 300,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.55)), url(${images.cardSupercharger})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '32px 24px',
          color: '#fff',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto', width: '100%' }}>
          <button
            type="button"
            onClick={() => {
              notify('Home');
              goHome();
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 16,
              fontSize: 14,
              fontWeight: 500,
              color: '#fff',
            }}
          >
            <Icon name="chevron-left" size={20} /> Home
          </button>
          <h1 style={{ fontSize: 36, fontWeight: 500, margin: 0 }}>Trip Planner</h1>
          <p style={{ opacity: 0.9, margin: '8px 0 0', fontSize: 14 }}>
            Find Superchargers along your route — demo planner with live-style stops.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {presets.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                setFrom(p.from);
                setTo(p.to);
                setPlanned(false);
                notify(p.label);
              }}
              style={{
                padding: '8px 14px',
                borderRadius: 999,
                border: '1px solid var(--color-cloud-gray)',
                background: '#fff',
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 500, display: 'block', marginBottom: 6 }}>From</span>
          <div
            style={{
              border: '1px solid var(--color-cloud-gray)',
              borderRadius: 4,
              background: 'var(--color-light-ash)',
            }}
          >
            <Input value={from} onChange={(e) => setFrom(e.target.value)} style={{ padding: 12 }} />
          </div>
        </label>
        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 500, display: 'block', marginBottom: 6 }}>To</span>
          <div
            style={{
              border: '1px solid var(--color-cloud-gray)',
              borderRadius: 4,
              background: 'var(--color-light-ash)',
            }}
          >
            <Input value={to} onChange={(e) => setTo(e.target.value)} style={{ padding: 12 }} />
          </div>
        </label>

        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 500, display: 'block', marginBottom: 6 }}>Vehicle</span>
          <select
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            style={{
              width: '100%',
              padding: 12,
              borderRadius: 4,
              border: '1px solid var(--color-cloud-gray)',
              background: 'var(--color-light-ash)',
              fontFamily: 'var(--font-text)',
              fontSize: 14,
            }}
          >
            {vehicles.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name}
              </option>
            ))}
          </select>
        </label>

        <label style={{ display: 'block', marginBottom: 24 }}>
          <span style={{ fontSize: 13, fontWeight: 500, display: 'block', marginBottom: 6 }}>
            Departure charge: {soc}%
          </span>
          <input
            type="range"
            min={20}
            max={100}
            value={soc}
            onChange={(e) => setSoc(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </label>

        <Button variant="primary" type="button" onClick={plan} style={{ width: '100%', maxWidth: '100%' }}>
          Find My Route
        </Button>

        {planned && (
          <div style={{ marginTop: 32 }}>
            <div
              style={{
                borderRadius: 12,
                height: 160,
                marginBottom: 24,
                background: `linear-gradient(135deg, rgba(23,26,32,0.85), rgba(59,130,246,0.35)), url(${images.chargingAlt}) center/cover`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'center',
                padding: 16,
              }}
            >
              <div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>Demo map preview</div>
                <div style={{ fontSize: 13, opacity: 0.9, marginTop: 6 }}>
                  {from} → {to}
                </div>
                <div style={{ fontSize: 12, opacity: 0.8, marginTop: 4 }}>
                  {vehicles.find((v) => v.id === vehicle)?.name} · start {soc}%
                </div>
              </div>
            </div>

            <h2 style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>Suggested Superchargers</h2>
            <p style={{ fontSize: 13, color: 'var(--color-pewter)', marginBottom: 16 }}>
              Illustrative stops only — not live stall data.
            </p>
            {stops.map((s, i) => (
              <div
                key={s.name}
                className="tds-card-lift"
                style={{
                  padding: 16,
                  border: '1px solid var(--color-cloud-gray)',
                  borderRadius: 8,
                  marginBottom: 12,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 12,
                  background: '#fff',
                }}
              >
                <div>
                  <div style={{ fontWeight: 500, fontSize: 15, color: 'var(--color-carbon-dark)' }}>
                    {i + 1}. {s.name}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--color-pewter)', marginTop: 4 }}>{s.detail}</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-electric-blue)', whiteSpace: 'nowrap' }}>
                  {s.min}
                </div>
              </div>
            ))}

            <div className="tds-cta-group" style={{ marginTop: 28, justifyContent: 'flex-start' }}>
              <Button
                variant="secondary"
                type="button"
                onClick={() => {
                  notify('Supercharger');
                  goProduct('supercharger', 'learn');
                }}
              >
                About Supercharging
              </Button>
              <Button
                variant="text"
                type="button"
                onClick={() => {
                  notify('Charging hub');
                  goChargingHub();
                }}
              >
                Charging hub →
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
