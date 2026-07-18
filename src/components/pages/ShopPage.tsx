import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { getByCategory } from '../../data/navCatalog';
import { ProductCard } from '../molecules/ProductCard';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

export function ShopPage() {
  const { goHome, goProduct } = useNav();
  const { notify } = useToast();
  const items = getByCategory('shop');

  return (
    <main style={{ paddingBottom: 96 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px 16px' }}>
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
            color: 'var(--color-carbon-dark)',
            fontFamily: 'var(--font-text)',
            fontSize: 14,
            fontWeight: 500,
            marginBottom: 24,
          }}
        >
          <Icon name="chevron-left" size={20} />
          Home
        </button>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 36,
            fontWeight: 500,
            color: 'var(--color-carbon-dark)',
            margin: '0 0 8px',
          }}
        >
          Shop
        </h1>
        <p style={{ color: 'var(--color-pewter)', margin: '0 0 32px', fontSize: 14 }}>
          Charging products, vehicle accessories, apparel, and lifestyle.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 28,
          }}
        >
          {items.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              desc={item.desc}
              imageUrl={item.image}
              primaryLabel="Shop"
              secondaryLabel="Learn"
              onSelect={() => {
                notify(`Opening ${item.name}`);
                goProduct(item.id);
              }}
              onPrimary={() => {
                notify(`Shop — ${item.name}`);
                goProduct(item.id, 'order');
              }}
              onSecondary={() => {
                notify(`Learn — ${item.name}`);
                goProduct(item.id, 'learn');
              }}
            />
          ))}
        </div>

        <div style={{ marginTop: 48 }}>
          <Button
            variant="secondary"
            type="button"
            onClick={() => {
              notify('Home');
              goHome();
            }}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </main>
  );
}
