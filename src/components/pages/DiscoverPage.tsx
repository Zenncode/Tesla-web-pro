import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { getByCategory } from '../../data/navCatalog';
import { images } from '../../assets/images';
import { Button } from '../atoms/Button';
import { HeroBanner } from '../shared/HeroBanner';
import { ProductGrid } from '../shared/ProductGrid';

export function DiscoverPage() {
  const { goHome, goProduct } = useNav();
  const { notify } = useToast();
  const items = getByCategory('discover');

  return (
    <main className="tds-page">
      <HeroBanner
        image={images.cardEvents}
        title="Explore Tesla"
        subtitle="Demo drives, insurance, owner stories, events and more."
        kicker="Discover"
        minHeight="42svh"
        onBack={() => {
          notify('Home');
          goHome();
        }}
      />

      <div className="tds-page-inner is-wide tds-hub-body">
        <ProductGrid
          items={items}
          primaryLabel="Explore"
          onSelect={(item) => {
            notify(`Opening ${item.name}`);
            goProduct(item.id);
          }}
          onPrimary={(item) => {
            notify(`Explore — ${item.name}`);
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
              notify('Schedule Demo Drive');
              goProduct('demo-drive', 'order');
            }}
          >
            Schedule a Demo Drive
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
