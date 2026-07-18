import { useState } from 'react';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { Input } from '../atoms/Input';

/** Trade-in estimate form (demo) */
export function TradeInPage() {
  const { goHome, goInventory, goDesign } = useNav();
  const { notify } = useToast();
  const [year, setYear] = useState('2022');
  const [make, setMake] = useState('Tesla');
  const [model, setModel] = useState('Model 3');
  const [miles, setMiles] = useState('25000');
  const [zip, setZip] = useState('94304');
  const [estimate, setEstimate] = useState<number | null>(null);

  const submit = () => {
    const base = model.toLowerCase().includes('s') ? 68000
      : model.toLowerCase().includes('x') ? 65000
        : model.toLowerCase().includes('y') ? 38000
          : model.toLowerCase().includes('cyber') ? 72000
            : 32000;
    const yearAdj = (Number(year) - 2018) * 1200;
    const milesAdj = Math.max(0, 40000 - Number(miles)) * 0.15;
    const val = Math.max(8000, Math.round(base + yearAdj + milesAdj));
    setEstimate(val);
    notify(`Estimate ready: $${val.toLocaleString()}`);
  };

  return (
    <main style={{ paddingBottom: 96, fontFamily: 'var(--font-text)' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '32px 24px' }}>
        <button type="button" onClick={() => { notify('Home'); goHome(); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24, fontSize: 14, fontWeight: 500 }}>
          <Icon name="chevron-left" size={20} /> Home
        </button>
        <h1 style={{ fontSize: 36, fontWeight: 500, margin: '0 0 8px' }}>Get an Estimate</h1>
        <p style={{ color: 'var(--color-pewter)', margin: '0 0 32px', fontSize: 14 }}>
          Trade-in estimate for your current vehicle. Demo calculator only.
        </p>

        {[
          { label: 'Year', value: year, set: setYear },
          { label: 'Make', value: make, set: setMake },
          { label: 'Model', value: model, set: setModel },
          { label: 'Mileage', value: miles, set: setMiles },
          { label: 'ZIP code', value: zip, set: setZip },
        ].map((f) => (
          <label key={f.label} style={{ display: 'block', marginBottom: 16 }}>
            <span style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6, color: 'var(--color-carbon-dark)' }}>
              {f.label}
            </span>
            <div style={{ border: '1px solid var(--color-cloud-gray)', borderRadius: 4, background: 'var(--color-light-ash)' }}>
              <Input value={f.value} onChange={(e) => f.set(e.target.value)} style={{ padding: 12 }} />
            </div>
          </label>
        ))}

        <Button variant="primary" type="button" onClick={submit} style={{ width: '100%', maxWidth: '100%' }}>
          Get Estimate
        </Button>

        {estimate !== null && (
          <div style={{ marginTop: 32, padding: 24, background: 'var(--color-light-ash)', borderRadius: 12 }}>
            <p style={{ fontSize: 14, color: 'var(--color-pewter)', margin: '0 0 8px' }}>Estimated trade-in value</p>
            <p style={{ fontSize: 32, fontWeight: 500, margin: '0 0 16px', color: 'var(--color-carbon-dark)' }}>
              ${estimate.toLocaleString()}
            </p>
            <p style={{ fontSize: 13, color: 'var(--color-graphite)', marginBottom: 20 }}>
              Demo only. Actual Tesla trade-in offers require a real appraisal on tesla.com.
            </p>
            <div className="tds-cta-group" style={{ justifyContent: 'flex-start' }}>
              <Button variant="primary" type="button" onClick={() => goDesign('model-3')}>
                Design New Tesla
              </Button>
              <Button variant="secondary" type="button" onClick={() => goInventory('new')}>
                Browse Inventory
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
