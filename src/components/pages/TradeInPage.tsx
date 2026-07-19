import { useState } from 'react';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { PageShell } from '../shared/PageShell';

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
    const base = model.toLowerCase().includes('s')
      ? 68000
      : model.toLowerCase().includes('x')
        ? 65000
        : model.toLowerCase().includes('y')
          ? 38000
          : model.toLowerCase().includes('cyber')
            ? 72000
            : 32000;
    const yearAdj = (Number(year) - 2018) * 1200;
    const milesAdj = Math.max(0, 40000 - Number(miles)) * 0.15;
    const val = Math.max(8000, Math.round(base + yearAdj + milesAdj));
    setEstimate(val);
    notify(`Estimate ready: $${val.toLocaleString()}`);
  };

  const fields = [
    { label: 'Year', value: year, set: setYear },
    { label: 'Make', value: make, set: setMake },
    { label: 'Model', value: model, set: setModel },
    { label: 'Mileage', value: miles, set: setMiles },
    { label: 'ZIP code', value: zip, set: setZip },
  ];

  return (
    <PageShell
      title="Get an Estimate"
      description="Trade-in estimate for your current vehicle. Demo calculator only."
      onBack={() => {
        notify('Home');
        goHome();
      }}
    >
      {fields.map((f) => (
        <label key={f.label} className="tds-form-field">
          <span>{f.label}</span>
          <div className="tds-form-control">
            <Input value={f.value} onChange={(e) => f.set(e.target.value)} style={{ padding: 12 }} />
          </div>
        </label>
      ))}

      <Button variant="primary" type="button" onClick={submit} style={{ width: '100%', maxWidth: '100%' }}>
        Get Estimate
      </Button>

      {estimate !== null && (
        <div className="tds-estimate-card">
          <p className="tds-estimate-label">Estimated trade-in value</p>
          <p className="tds-estimate-value">${estimate.toLocaleString()}</p>
          <p className="tds-estimate-note">
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
    </PageShell>
  );
}
