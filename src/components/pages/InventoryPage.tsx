import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { images } from '../../assets/images';

const newStock = [
  { id: 'n1', model: 'Model 3', trim: 'Long Range AWD', color: 'Pearl White', range: '341 mi', price: '$47,990', image: images.cardModel3 },
  { id: 'n2', model: 'Model Y', trim: 'Rear-Wheel Drive', color: 'Stealth Grey', range: '320 mi', price: '$44,990', image: images.cardModelY },
  { id: 'n3', model: 'Cybertruck', trim: 'All-Wheel Drive', color: 'Stainless', range: '325 mi', price: '$79,990', image: images.cardCybertruck },
  { id: 'n4', model: 'Model Y L', trim: 'Premium', color: 'Ultra Red', range: '—', price: '$61,990', image: images.modelYL },
];

const usedStock = [
  { id: 'u1', model: 'Model S', trim: 'Plaid', color: 'Solid Black', range: '359 mi', price: '$72,500', image: images.cardModelS, miles: '12,400 mi' },
  { id: 'u2', model: 'Model 3', trim: 'Performance', color: 'Blue', range: '315 mi', price: '$38,900', image: images.cardModel3, miles: '28,100 mi' },
  { id: 'u3', model: 'Model X', trim: 'Long Range', color: 'White', range: '335 mi', price: '$68,200', image: images.cardModelX, miles: '19,800 mi' },
];

/** New / Pre-Owned inventory (demo) */
export function InventoryPage() {
  const { goHome, goProduct, goDesign, state, goInventory } = useNav();
  const { notify } = useToast();
  const tab = state.inventoryTab === 'used' ? 'used' : 'new';
  const list = tab === 'new' ? newStock : usedStock;

  return (
    <main style={{ paddingBottom: 96, fontFamily: 'var(--font-text)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
        <button
          type="button"
          onClick={() => { notify('Home'); goHome(); }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24, fontSize: 14, fontWeight: 500 }}
        >
          <Icon name="chevron-left" size={20} /> Home
        </button>

        <h1 style={{ fontSize: 36, fontWeight: 500, margin: '0 0 8px', color: 'var(--color-carbon-dark)' }}>
          Inventory
        </h1>
        <p style={{ color: 'var(--color-pewter)', margin: '0 0 24px', fontSize: 14 }}>
          Find nearby vehicles available for immediate delivery. Demo listings only.
        </p>

        <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
          {(['new', 'used'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => goInventory(t)}
              style={{
                padding: '10px 20px',
                borderRadius: 4,
                border: 'none',
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: 14,
                background: tab === t ? 'var(--color-carbon-dark)' : 'var(--color-light-ash)',
                color: tab === t ? '#fff' : 'var(--color-carbon-dark)',
              }}
            >
              {t === 'new' ? 'New' : 'Pre-Owned'}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
          {list.map((v) => (
            <article
              key={v.id}
              style={{
                border: '1px solid var(--color-cloud-gray)',
                borderRadius: 12,
                overflow: 'hidden',
                background: '#fff',
              }}
            >
              <div style={{ height: 140, background: `url(${v.image}) center/cover` }} />
              <div style={{ padding: 16 }}>
                <h2 style={{ fontSize: 17, fontWeight: 500, margin: '0 0 4px' }}>{v.model}</h2>
                <p style={{ fontSize: 13, color: 'var(--color-pewter)', margin: '0 0 8px' }}>{v.trim} · {v.color}</p>
                <p style={{ fontSize: 13, color: 'var(--color-graphite)', margin: '0 0 4px' }}>Range: {v.range}</p>
                {'miles' in v && v.miles && (
                  <p style={{ fontSize: 13, color: 'var(--color-graphite)', margin: '0 0 8px' }}>Odometer: {v.miles}</p>
                )}
                <p style={{ fontSize: 18, fontWeight: 500, margin: '12px 0' }}>{v.price}</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <Button
                    variant="primary"
                    type="button"
                    style={{ flex: 1, width: 'auto', minWidth: 0 }}
                    onClick={() => {
                      notify(`View ${v.model}`);
                      goProduct(
                        v.model.toLowerCase().includes('cyber') ? 'cybertruck'
                          : v.model.toLowerCase().includes('y l') ? 'model-y-l'
                            : v.model.toLowerCase().includes('y') ? 'model-y'
                              : v.model.toLowerCase().includes('3') ? 'model-3'
                                : v.model.toLowerCase().includes('x') ? 'model-x'
                                  : 'model-s',
                        'order',
                      );
                    }}
                  >
                    View
                  </Button>
                  <Button
                    variant="secondary"
                    type="button"
                    style={{ flex: 1, width: 'auto', minWidth: 0 }}
                    onClick={() => {
                      notify(`Design ${v.model}`);
                      goDesign(
                        v.model.toLowerCase().includes('cyber') ? 'cybertruck'
                          : v.model.toLowerCase().includes('y') ? 'model-y'
                            : v.model.toLowerCase().includes('3') ? 'model-3'
                              : v.model.toLowerCase().includes('x') ? 'model-x'
                                : 'model-s',
                      );
                    }}
                  >
                    Design
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
