import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { getByCategory, type CatalogCategory } from '../../data/navCatalog';
import { Button } from '../atoms/Button';
import { HeroBanner } from '../shared/HeroBanner';
import { ProductGrid } from '../shared/ProductGrid';

type HubConfig = {
  category: CatalogCategory;
  title: string;
  subtitle: string;
  heroImage: string;
  primaryLabel: string;
  secondaryLabel?: string;
};

/** Shared hub layout for Energy / Charging (and reusable categories) */
export function CategoryHubPage({
  category,
  title,
  subtitle,
  heroImage,
  primaryLabel,
  secondaryLabel = 'Learn',
}: HubConfig) {
  const { goHome, goProduct } = useNav();
  const { notify } = useToast();
  const items = getByCategory(category);

  return (
    <main className="tds-page">
      <HeroBanner
        image={heroImage}
        title={title}
        subtitle={subtitle}
        kicker={title}
        onBack={() => {
          notify('Home');
          goHome();
        }}
      />

      <div className="tds-page-inner is-wide tds-hub-body">
        <ProductGrid
          items={items}
          primaryLabel={primaryLabel}
          secondaryLabel={secondaryLabel}
          onSelect={(item) => {
            notify(`Opening ${item.name}`);
            goProduct(item.id);
          }}
          onPrimary={(item) => {
            notify(`${primaryLabel} — ${item.name}`);
            goProduct(item.id, 'order');
          }}
          onSecondary={(item) => {
            notify(`Learn — ${item.name}`);
            goProduct(item.id, 'learn');
          }}
        />

        <div className="tds-hub-actions">
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              if (items[0]) {
                notify(items[0].name);
                goProduct(items[0].id, 'order');
              }
            }}
          >
            {items[0] ? `Explore ${items[0].name}` : 'Explore'}
          </Button>
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
