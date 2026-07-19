import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { getByCategory } from '../../data/navCatalog';
import { images } from '../../assets/images';
import { Button } from '../atoms/Button';
import { HeroBanner } from '../shared/HeroBanner';
import { ProductGrid } from '../shared/ProductGrid';
import { BackLink } from '../shared/BackLink';

const featured = [
  {
    key: 'wall',
    id: 'shop-charging',
    name: 'Wall Connector',
    price: 'From $475',
    blurb: 'Charge at home overnight with Gen 3 Wall Connector.',
    image: images.wallConnector,
  },
  {
    key: 'mobile',
    id: 'shop-charging',
    name: 'Mobile Connector Bundle',
    price: 'Travel ready',
    blurb: 'Flexible charging accessories for destinations away from home.',
    image: images.chargingPlug,
  },
  {
    key: 'mats',
    id: 'vehicle-accessories',
    name: 'All-Weather Interior Set',
    price: 'Model-specific',
    blurb: 'Protect floors and cargo with Tesla-fit accessories.',
    image: images.cardAccessories,
  },
  {
    key: 'rack',
    id: 'vehicle-accessories',
    name: 'Roof Rack System',
    price: 'Adventure',
    blurb: 'Carry bikes, boards and cargo while keeping the cabin clear.',
    image: images.cardAccessories,
  },
  {
    key: 'apparel',
    id: 'apparel',
    name: 'Wordmark Essentials',
    price: 'Seasonal',
    blurb: 'Tees, hoodies and hats from the official shop.',
    image: images.cardApparel,
  },
  {
    key: 'life',
    id: 'lifestyle',
    name: 'Lifestyle Collection',
    price: 'Gift picks',
    blurb: 'Minimal design objects for home, desk and travel.',
    image: images.cardLifestyle,
  },
];

export function ShopPage() {
  const { goHome, goProduct } = useNav();
  const { notify } = useToast();
  const items = getByCategory('shop');

  return (
    <main className="tds-page">
      <HeroBanner
        image={images.cardLifestyle}
        title="Tesla Shop"
        subtitle="Charging products, vehicle accessories, apparel and lifestyle."
        kicker="Shop"
        minHeight="48svh"
      >
        <div className="tds-cta-group" style={{ marginTop: 28 }}>
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              notify('Shop Charging');
              goProduct('shop-charging', 'order');
            }}
          >
            Shop Charging
          </Button>
          <Button
            variant="hero-link"
            type="button"
            onClick={() => {
              document.getElementById('shop-categories')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Browse Categories
          </Button>
        </div>
      </HeroBanner>

      <div className="tds-page-inner is-wide tds-hub-body">
        <BackLink
          onClick={() => {
            notify('Home');
            goHome();
          }}
          className="tds-page-back"
        />

        <h2 className="tds-hub-heading">Featured</h2>
        <div className="tds-featured-grid">
          {featured.map((f) => (
            <button
              key={f.key}
              type="button"
              className="tds-featured-card tds-card-lift"
              onClick={() => {
                notify(f.name);
                goProduct(f.id, 'learn');
              }}
            >
              <div className="tds-featured-media" style={{ backgroundImage: `url(${f.image})` }} />
              <div className="tds-featured-copy">
                <div className="tds-featured-row">
                  <span>{f.name}</span>
                  <span className="tds-featured-price">{f.price}</span>
                </div>
                <p>{f.blurb}</p>
              </div>
            </button>
          ))}
        </div>

        <h2 id="shop-categories" className="tds-hub-heading">
          Categories
        </h2>
        <p className="tds-page-desc">Charging, vehicle accessories, apparel and lifestyle.</p>

        <ProductGrid
          items={items}
          primaryLabel="Shop"
          onSelect={(item) => {
            notify(`Opening ${item.name}`);
            goProduct(item.id);
          }}
          onPrimary={(item) => {
            notify(`Shop — ${item.name}`);
            goProduct(item.id, 'order');
          }}
          onSecondary={(item) => {
            notify(`Learn — ${item.name}`);
            goProduct(item.id, 'learn');
          }}
        />

        <div className="tds-hub-actions">
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
