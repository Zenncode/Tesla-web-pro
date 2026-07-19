import { useMemo, useState } from 'react';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { images } from '../../assets/images';

type StockItem = {
  id: string;
  model: string;
  productId: string;
  trim: string;
  color: string;
  range: string;
  price: string;
  image: string;
  miles?: string;
  tags: string[];
};

const newStock: StockItem[] = [
  { id: 'n1', model: 'Model 3', productId: 'model-3', trim: 'Long Range AWD', color: 'Pearl White', range: '341 mi', price: '$47,990', image: images.cardModel3, tags: ['sedan', 'awd'] },
  { id: 'n2', model: 'Model Y', productId: 'model-y', trim: 'Rear-Wheel Drive', color: 'Stealth Grey', range: '320 mi', price: '$44,990', image: images.cardModelY, tags: ['suv', 'rwd'] },
  { id: 'n3', model: 'Cybertruck', productId: 'cybertruck', trim: 'All-Wheel Drive', color: 'Stainless', range: '325 mi', price: '$79,990', image: images.cardCybertruck, tags: ['truck', 'awd'] },
  { id: 'n4', model: 'Model Y L', productId: 'model-y-l', trim: 'Premium', color: 'Ultra Red', range: '—', price: '$61,990', image: images.modelYL, tags: ['suv', 'family'] },
  { id: 'n5', model: 'Model 3', productId: 'model-3', trim: 'Performance', color: 'Deep Blue', range: '315 mi', price: '$54,990', image: images.model3Performance, tags: ['sedan', 'performance'] },
  { id: 'n6', model: 'Model Y', productId: 'model-y', trim: 'Long Range AWD', color: 'Pearl White', range: '320 mi', price: '$48,990', image: images.modelY2, tags: ['suv', 'awd'] },
  { id: 'n7', model: 'Model S', productId: 'model-s', trim: 'Inventory', color: 'Solid Black', range: '410 mi', price: '$74,990', image: images.cardModelS, tags: ['sedan', 'luxury'] },
  { id: 'n8', model: 'Model X', productId: 'model-x', trim: 'Inventory', color: 'White', range: '335 mi', price: '$79,990', image: images.cardModelX, tags: ['suv', 'luxury'] },
];

const usedStock: StockItem[] = [
  { id: 'u1', model: 'Model S', productId: 'model-s', trim: 'Plaid', color: 'Solid Black', range: '359 mi', price: '$72,500', image: images.cardModelS, miles: '12,400 mi', tags: ['sedan', 'performance'] },
  { id: 'u2', model: 'Model 3', productId: 'model-3', trim: 'Performance', color: 'Blue', range: '315 mi', price: '$38,900', image: images.cardModel3, miles: '28,100 mi', tags: ['sedan', 'performance'] },
  { id: 'u3', model: 'Model X', productId: 'model-x', trim: 'Long Range', color: 'White', range: '335 mi', price: '$68,200', image: images.cardModelX, miles: '19,800 mi', tags: ['suv', 'luxury'] },
  { id: 'u4', model: 'Model Y', productId: 'model-y', trim: 'Long Range', color: 'Grey', range: '310 mi', price: '$36,400', image: images.cardModelY, miles: '31,200 mi', tags: ['suv', 'awd'] },
  { id: 'u5', model: 'Cybertruck', productId: 'cybertruck', trim: 'AWD', color: 'Stainless', range: '320 mi', price: '$71,000', image: images.cardCybertruck, miles: '8,900 mi', tags: ['truck'] },
];

const filters = ['All', 'Sedan', 'SUV', 'Truck', 'Performance', 'Family'] as const;

/** New / Pre-Owned inventory (demo) */
export function InventoryPage() {
  const { goHome, goProduct, goDesign, state, goInventory } = useNav();
  const { notify } = useToast();
  const tab = state.inventoryTab === 'used' ? 'used' : 'new';
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [query, setQuery] = useState('');

  const list = useMemo(() => {
    const base = tab === 'new' ? newStock : usedStock;
    return base.filter((v) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        v.model.toLowerCase().includes(q) ||
        v.trim.toLowerCase().includes(q) ||
        v.color.toLowerCase().includes(q);
      if (!matchesQuery) return false;
      if (filter === 'All') return true;
      const f = filter.toLowerCase();
      if (f === 'sedan') return v.tags.includes('sedan');
      if (f === 'suv') return v.tags.includes('suv');
      if (f === 'truck') return v.tags.includes('truck');
      if (f === 'performance') return v.tags.includes('performance');
      if (f === 'family') return v.tags.includes('family') || v.productId === 'model-y-l' || v.productId === 'model-x';
      return true;
    });
  }, [tab, filter, query]);

  return (
    <main style={{ paddingBottom: 96, fontFamily: 'var(--font-text)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
        <button
          type="button"
          onClick={() => {
            notify('Home');
            goHome();
          }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24, fontSize: 14, fontWeight: 500 }}
        >
          <Icon name="chevron-left" size={20} /> Home
        </button>

        <h1 style={{ fontSize: 36, fontWeight: 500, margin: '0 0 8px', color: 'var(--color-carbon-dark)' }}>
          Inventory
        </h1>
        <p style={{ color: 'var(--color-pewter)', margin: '0 0 24px', fontSize: 14 }}>
          Find nearby vehicles available for immediate delivery. Demo listings only — {list.length} shown.
        </p>

        <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
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

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28, alignItems: 'center' }}>
          <input
            type="search"
            placeholder="Search model, trim, color…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: '1 1 200px',
              minWidth: 180,
              padding: '10px 14px',
              borderRadius: 4,
              border: '1px solid var(--color-cloud-gray)',
              background: 'var(--color-light-ash)',
              fontFamily: 'var(--font-text)',
              fontSize: 14,
            }}
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 999,
                  border: '1px solid var(--color-cloud-gray)',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 500,
                  background: filter === f ? 'var(--color-electric-blue)' : '#fff',
                  color: filter === f ? '#fff' : 'var(--color-carbon-dark)',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {list.length === 0 ? (
          <p style={{ color: 'var(--color-pewter)', padding: '40px 0' }}>
            No vehicles match your filters. Try another search.
          </p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
            {list.map((v) => (
              <article
                key={v.id}
                className="tds-card-lift"
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
                  <p style={{ fontSize: 13, color: 'var(--color-pewter)', margin: '0 0 8px' }}>
                    {v.trim} · {v.color}
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--color-graphite)', margin: '0 0 4px' }}>
                    Range: {v.range}
                  </p>
                  {v.miles && (
                    <p style={{ fontSize: 13, color: 'var(--color-graphite)', margin: '0 0 8px' }}>
                      Odometer: {v.miles}
                    </p>
                  )}
                  <p style={{ fontSize: 18, fontWeight: 500, margin: '12px 0' }}>{v.price}</p>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <Button
                      variant="primary"
                      type="button"
                      style={{ flex: 1, width: 'auto', minWidth: 0 }}
                      onClick={() => {
                        notify(`View ${v.model}`);
                        goProduct(v.productId, 'order');
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
                        goDesign(v.productId);
                      }}
                    >
                      Design
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
