import { useState } from 'react';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { getById } from '../../data/navCatalog';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { images } from '../../assets/images';

const paints = [
  { id: 'white', name: 'Pearl White', hex: '#E8E8E8' },
  { id: 'black', name: 'Solid Black', hex: '#171A20' },
  { id: 'blue', name: 'Deep Blue', hex: '#1E3A5F' },
  { id: 'red', name: 'Ultra Red', hex: '#8B1A1A' },
  { id: 'grey', name: 'Stealth Grey', hex: '#5C5E62' },
];

const wheels = ['19" Gemini', '20" Induction', '21" Überturbine'];
const interiors = ['All Black', 'Black & White', 'Cream'];

/** Design Your Tesla — configurator stub */
export function DesignPage() {
  const { goHome, goProduct, goInventory, state } = useNav();
  const { notify } = useToast();
  const vehicleId = state.designId || 'model-3';
  const product = getById(vehicleId);
  const name = product?.name ?? 'Model 3';

  const hero =
    vehicleId === 'cybertruck' ? images.cybertruck
      : vehicleId === 'model-y' || vehicleId === 'model-y-l' ? images.modelYAlt
        : vehicleId === 'model-s' ? images.modelSMain
          : vehicleId === 'model-x' ? images.modelXMain
            : images.model3Alt;

  const [paint, setPaint] = useState(paints[0]);
  const [wheel, setWheel] = useState(wheels[0]);
  const [interior, setInterior] = useState(interiors[0]);
  const [autopilot, setAutopilot] = useState(true);
  const [fsd, setFsd] = useState(false);

  const base =
    vehicleId === 'cybertruck'
      ? 69990
      : vehicleId === 'model-y-l'
        ? 61990
        : vehicleId === 'model-s'
          ? 74990
          : vehicleId === 'model-x'
            ? 79990
            : vehicleId.includes('y')
              ? 44990
              : 42490;
  const total = base + (fsd ? 8000 : 0) + (autopilot ? 0 : 0) + paints.indexOf(paint) * 1000;

  return (
    <main style={{ paddingBottom: 96, fontFamily: 'var(--font-text)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
        <button type="button" onClick={() => { notify('Home'); goHome(); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24, fontSize: 14, fontWeight: 500 }}>
          <Icon name="chevron-left" size={20} /> Home
        </button>

        <h1 style={{ fontSize: 32, fontWeight: 500, margin: '0 0 8px' }}>Design {name}</h1>
        <p style={{ color: 'var(--color-pewter)', margin: '0 0 32px', fontSize: 14 }}>
          Configure your Tesla — demo studio (not a live order form).
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(280px, 0.9fr)', gap: 40 }}>
          <div>
            <div
              style={{
                borderRadius: 12,
                minHeight: 320,
                background: `linear-gradient(135deg, ${paint.hex}33, transparent), url(${hero}) center/cover`,
                border: '1px solid var(--color-cloud-gray)',
                marginBottom: 16,
              }}
            />
            <p style={{ fontSize: 13, color: 'var(--color-pewter)' }}>
              Preview tinted with {paint.name} · {wheel} · {interior}
            </p>
          </div>

          <div>
            <h2 style={h2}>Paint</h2>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
              {paints.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  title={p.name}
                  onClick={() => { setPaint(p); notify(p.name); }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: p.hex,
                    border: paint.id === p.id ? '3px solid var(--color-electric-blue)' : '2px solid var(--color-cloud-gray)',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

            <h2 style={h2}>Wheels</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
              {wheels.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => { setWheel(w); notify(w); }}
                  style={optBtn(wheel === w)}
                >
                  {w}
                </button>
              ))}
            </div>

            <h2 style={h2}>Interior</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
              {interiors.map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => { setInterior(i); notify(i); }}
                  style={optBtn(interior === i)}
                >
                  {i}
                </button>
              ))}
            </div>

            <h2 style={h2}>Autopilot</h2>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, fontSize: 14, cursor: 'pointer' }}>
              <input type="checkbox" checked={autopilot} onChange={(e) => setAutopilot(e.target.checked)} />
              Autopilot (Included)
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, fontSize: 14, cursor: 'pointer' }}>
              <input type="checkbox" checked={fsd} onChange={(e) => { setFsd(e.target.checked); notify(e.target.checked ? 'FSD added' : 'FSD removed'); }} />
              Full Self-Driving (Supervised) +$8,000 demo
            </label>

            <div style={{ padding: 20, background: 'var(--color-light-ash)', borderRadius: 8, marginBottom: 20 }}>
              <p style={{ fontSize: 13, color: 'var(--color-pewter)', margin: 0 }}>Estimated price (demo)</p>
              <p style={{ fontSize: 28, fontWeight: 500, margin: '8px 0 0' }}>${total.toLocaleString()}</p>
            </div>

            <div className="tds-cta-group" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
              <Button
                variant="primary"
                type="button"
                style={{ width: '100%', maxWidth: '100%' }}
                onClick={() => {
                  notify(`Order ${name} — demo`);
                  goProduct(vehicleId, 'order');
                }}
              >
                Order Now
              </Button>
              <Button
                variant="secondary"
                type="button"
                style={{ width: '100%', maxWidth: '100%' }}
                onClick={() => goInventory('new')}
              >
                Browse Inventory
              </Button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          main div[style*="grid-template-columns: minmax(0, 1.2fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

const h2: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
  margin: '0 0 10px',
  color: 'var(--color-carbon-dark)',
};

function optBtn(active: boolean): React.CSSProperties {
  return {
    textAlign: 'left',
    padding: '12px 14px',
    borderRadius: 4,
    border: active ? '2px solid var(--color-electric-blue)' : '1px solid var(--color-cloud-gray)',
    background: active ? 'rgba(62,106,225,0.06)' : '#fff',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'var(--font-text)',
    color: 'var(--color-carbon-dark)',
  };
}
