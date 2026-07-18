import { useState } from 'react';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { images } from '../../assets/images';

const models = [
  {
    id: 'model-3',
    name: 'Model 3',
    image: images.cardModel3,
    range: '363 mi',
    accel: '2.9 s',
    seats: '5',
    type: 'Sport Sedan',
    price: 'From $42,490*',
  },
  {
    id: 'model-y',
    name: 'Model Y',
    image: images.cardModelY,
    range: '320 mi',
    accel: '3.5 s',
    seats: '5',
    type: 'Midsize SUV',
    price: 'From $44,990*',
  },
  {
    id: 'model-s',
    name: 'Model S',
    image: images.cardModelS,
    range: '410 mi',
    accel: '1.99 s',
    seats: '5',
    type: 'Luxury Sedan',
    price: 'Inventory',
  },
  {
    id: 'model-x',
    name: 'Model X',
    image: images.cardModelX,
    range: '335 mi',
    accel: '2.5 s',
    seats: '6–7',
    type: 'Premium SUV',
    price: 'Inventory',
  },
  {
    id: 'cybertruck',
    name: 'Cybertruck',
    image: images.cardCybertruck,
    range: '340 mi',
    accel: '2.6 s',
    seats: '5',
    type: 'Utility Truck',
    price: 'From $69,990*',
  },
];

/** Help Me Choose / Compare Models — tesla.com-style */
export function ComparePage() {
  const { goHome, goProduct, goDesign, goInventory } = useNav();
  const { notify } = useToast();
  const [selected, setSelected] = useState<string[]>(['model-3', 'model-y']);

  const toggle = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) {
        notify('Compare up to 3 models');
        return prev;
      }
      return [...prev, id];
    });
  };

  const chosen = models.filter((m) => selected.includes(m.id));

  return (
    <main style={{ paddingBottom: 96, fontFamily: 'var(--font-text)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
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
            marginBottom: 24,
            fontSize: 14,
            fontWeight: 500,
            color: 'var(--color-carbon-dark)',
          }}
        >
          <Icon name="chevron-left" size={20} />
          Home
        </button>

        <h1 style={{ fontSize: 36, fontWeight: 500, margin: '0 0 8px', color: 'var(--color-carbon-dark)' }}>
          Compare Models
        </h1>
        <p style={{ color: 'var(--color-pewter)', margin: '0 0 32px', fontSize: 14 }}>
          Help Me Choose — select up to 3 vehicles (demo specs).
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 16,
            marginBottom: 40,
          }}
        >
          {models.map((m) => {
            const on = selected.includes(m.id);
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => toggle(m.id)}
                style={{
                  border: on ? '2px solid var(--color-electric-blue)' : '1px solid var(--color-cloud-gray)',
                  borderRadius: 12,
                  padding: 12,
                  background: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    height: 90,
                    borderRadius: 8,
                    background: `url(${m.image}) center/cover`,
                    marginBottom: 10,
                  }}
                />
                <div style={{ fontWeight: 500, fontSize: 15, color: 'var(--color-carbon-dark)' }}>{m.name}</div>
                <div style={{ fontSize: 12, color: 'var(--color-pewter)' }}>{m.type}</div>
              </button>
            );
          })}
        </div>

        {chosen.length > 0 && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
              <thead>
                <tr>
                  <th style={th}>Spec</th>
                  {chosen.map((m) => (
                    <th key={m.id} style={th}>{m.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Type', ...chosen.map((m) => m.type)],
                  ['Range (EPA est.)', ...chosen.map((m) => m.range)],
                  ['0–60 mph', ...chosen.map((m) => m.accel)],
                  ['Seats', ...chosen.map((m) => m.seats)],
                  ['Price', ...chosen.map((m) => m.price)],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i} style={td}>{cell}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td style={td}>Actions</td>
                  {chosen.map((m) => (
                    <td key={m.id} style={td}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <Button
                          variant="primary"
                          type="button"
                          style={{ width: '100%', minWidth: 0 }}
                          onClick={() => {
                            notify(`Design ${m.name}`);
                            goDesign(m.id);
                          }}
                        >
                          Design
                        </Button>
                        <Button
                          variant="secondary"
                          type="button"
                          style={{ width: '100%', minWidth: 0 }}
                          onClick={() => {
                            notify(m.name);
                            goProduct(m.id, 'learn');
                          }}
                        >
                          Learn
                        </Button>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="tds-cta-group" style={{ marginTop: 40, justifyContent: 'flex-start' }}>
          <Button variant="secondary" type="button" onClick={() => goInventory('new')}>
            Browse Inventory
          </Button>
          <Button variant="text" type="button" onClick={goHome}>
            Back to Home
          </Button>
        </div>
        <p style={{ marginTop: 16, fontSize: 12, color: 'var(--color-silver-fog)' }}>
          * Demo pricing. Real Tesla prices and specs change; check tesla.com.
        </p>
      </div>
    </main>
  );
}

const th: React.CSSProperties = {
  textAlign: 'left',
  padding: '12px 16px',
  borderBottom: '1px solid var(--color-cloud-gray)',
  fontWeight: 500,
  fontSize: 14,
  color: 'var(--color-carbon-dark)',
  background: 'var(--color-light-ash)',
};

const td: React.CSSProperties = {
  padding: '14px 16px',
  borderBottom: '1px solid var(--color-cloud-gray)',
  fontSize: 14,
  color: 'var(--color-graphite)',
  verticalAlign: 'top',
};
