import { HomeTemplate } from '../templates/HomeTemplate';
import { VehicleHero } from '../organisms/VehicleHero';
import { FSDHero } from '../organisms/FSDHero';
import { EnergyHero } from '../organisms/EnergyHero';
import { OffersSection } from '../organisms/OffersSection';
import { images } from '../../assets/images';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { getById } from '../../data/navCatalog';
import { Button } from '../atoms/Button';

export function Home() {
  const { goProduct, goShop, goDiscover, goEnergy, goChargingHub, goCompare, goInventory } =
    useNav();
  const { notify } = useToast();

  const open = (id: string, focus?: 'order' | 'learn') => () => {
    const item = getById(id);
    const label =
      focus === 'order'
        ? item?.ctaPrimary ?? 'Order Now'
        : item?.ctaSecondary ?? 'Learn More';
    notify(`${label} — ${item?.name ?? id}`);
    goProduct(id, focus);
  };

  const sections = [
    <VehicleHero
      key="myl"
      id="model-y-l"
      image={images.modelYL}
      modelName="Introducing Model Y L Premium"
      subtitle="Three Rows, Six Seats"
      showScrollCue
      onOrder={open('model-y-l', 'order')}
      onLearn={open('model-y-l', 'learn')}
    />,
    <VehicleHero
      key="m3"
      id="model-3"
      image={images.model3}
      modelName="Model 3"
      promo="0.99% APR Available"
      onOrder={open('model-3', 'order')}
      onLearn={open('model-3', 'learn')}
    />,
    <VehicleHero
      key="my"
      id="model-y"
      image={images.modelY}
      modelName="Model Y"
      promo="0% APR Available"
      onOrder={open('model-y', 'order')}
      onLearn={open('model-y', 'learn')}
    />,
    <VehicleHero
      key="ms"
      id="model-s"
      image={images.modelSMain}
      category="Luxury Sedan"
      modelName="Model S"
      promo="Signature From Start to Finish"
      onOrder={open('model-s', 'order')}
      onLearn={open('model-s', 'learn')}
    />,
    <VehicleHero
      key="mx"
      id="model-x"
      image={images.modelXMain}
      category="Premium SUV"
      modelName="Model X"
      subtitle="Falcon Wing Doors"
      onOrder={open('model-x', 'order')}
      onLearn={open('model-x', 'learn')}
    />,
    <FSDHero
      key="fsd"
      id="fsd"
      image={images.fsd}
      onSchedule={open('demo-drive', 'order')}
      onLearn={open('fsd', 'learn')}
    />,
    <VehicleHero
      key="myl2"
      image={images.modelYAlt}
      category="Long Wheelbase Midsize SUV"
      modelName="Model Y L Premium"
      subtitle="Starting at $61,990"
      onOrder={open('model-y-l', 'order')}
      onLearn={open('model-y-l', 'learn')}
    />,
    <VehicleHero
      key="m3b"
      image={images.model3Exterior}
      category="Sport Sedan"
      modelName="Model 3"
      promo="Lease From $329/mo"
      onOrder={open('model-3', 'order')}
      onLearn={open('model-3', 'learn')}
    />,
    <VehicleHero
      key="myb"
      image={images.modelY2}
      category="Midsize SUV"
      modelName="Model Y"
      promo="Lease From $459/mo"
      onOrder={open('model-y', 'order')}
      onLearn={open('model-y', 'learn')}
    />,
    <VehicleHero
      key="ct"
      id="cybertruck"
      image={images.cybertruck}
      category="Utility Truck"
      modelName="Cybertruck"
      promo="Lease From $949/mo"
      onOrder={open('cybertruck', 'order')}
      onLearn={open('cybertruck', 'learn')}
    />,
    <OffersSection
      key="offers"
      id="offers"
      title="Current Offers"
      description="Explore limited-time offers on Tesla vehicles."
      type="offers"
      image={images.offers}
      onPrimary={open('current-offers', 'learn')}
    />,
    <OffersSection
      key="inv"
      id="inventory"
      title="Inventory"
      description="Find nearby vehicles available for immediate delivery."
      type="inventory"
      image={images.inventory}
      onPrimary={open('inventory', 'order')}
      onSecondary={open('inventory', 'learn')}
    />,
    <EnergyHero
      key="solar"
      id="solar-panels"
      image={images.solar}
      name="Solar Panels"
      tagline="Power Your Home"
      onOrder={open('solar-panels', 'order')}
      onLearn={open('solar-panels', 'learn')}
    />,
    <EnergyHero
      key="roof"
      id="solar-roof"
      image={images.solarRoof}
      name="Solar Roof"
      tagline="Generate Clean Energy"
      onOrder={open('solar-roof', 'order')}
      onLearn={open('solar-roof', 'learn')}
    />,
    <EnergyHero
      key="pw"
      id="powerwall"
      image={images.powerwall}
      name="Powerwall"
      tagline="Keep Your Lights On"
      onOrder={open('powerwall', 'order')}
      onLearn={open('powerwall', 'learn')}
    />,
    <EnergyHero
      key="mp"
      id="megapack"
      image={images.megapack}
      name="Megapack"
      tagline="Massive Energy Support"
      onOrder={open('megapack', 'order')}
      onLearn={open('megapack', 'learn')}
    />,
    <EnergyHero
      key="charging"
      id="charging"
      image={images.cardCharging}
      name="Charging"
      tagline="Home, Superchargers and On the Go"
      primaryLabel="Learn More"
      secondaryLabel="Find a Supercharger"
      onOrder={open('charging', 'learn')}
      onLearn={open('supercharger', 'learn')}
    />,
    <EnergyHero
      key="home-charging"
      id="home-charging"
      image={images.homeCharging}
      name="Home Charging"
      tagline="Wall Connector & Home Solutions"
      primaryLabel="Shop Now"
      secondaryLabel="Learn More"
      onOrder={open('home-charging', 'order')}
      onLearn={open('home-charging', 'learn')}
    />,
    <EnergyHero
      key="supercharger"
      id="supercharger"
      image={images.cardSupercharger}
      name="Supercharger"
      tagline="Fast Charging Network"
      primaryLabel="Find a Supercharger"
      secondaryLabel="Learn More"
      onOrder={open('supercharger', 'order')}
      onLearn={open('supercharger', 'learn')}
    />,
    <section
      key="hubs"
      style={{
        padding: '80px 24px',
        background: 'var(--color-light-ash)',
        fontFamily: 'var(--font-text)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: 'var(--color-carbon-dark)',
            margin: '0 0 12px',
          }}
        >
          Explore Tesla
        </h2>
        <p style={{ color: 'var(--color-graphite)', margin: '0 0 40px', fontSize: 15 }}>
          Jump into hubs for energy, charging, discover and shop — or compare models side by side.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16,
          }}
        >
          {[
            {
              title: 'Energy',
              body: 'Solar, Powerwall, Megapack',
              image: images.solar,
              action: () => {
                notify('Energy hub');
                goEnergy();
              },
            },
            {
              title: 'Charging',
              body: 'Home & Superchargers',
              image: images.cardCharging,
              action: () => {
                notify('Charging hub');
                goChargingHub();
              },
            },
            {
              title: 'Discover',
              body: 'Drives, stories, events',
              image: images.cardEvents,
              action: () => {
                notify('Discover');
                goDiscover();
              },
            },
            {
              title: 'Shop',
              body: 'Accessories & apparel',
              image: images.cardLifestyle,
              action: () => {
                notify('Shop');
                goShop();
              },
            },
            {
              title: 'Compare',
              body: 'Help Me Choose',
              image: images.cardModel3,
              action: () => {
                notify('Compare');
                goCompare();
              },
            },
            {
              title: 'Inventory',
              body: 'New & pre-owned',
              image: images.inventory,
              action: () => {
                notify('Inventory');
                goInventory('new');
              },
            },
          ].map((card) => (
            <button
              key={card.title}
              type="button"
              className="tds-card-lift"
              onClick={card.action}
              style={{
                border: '1px solid var(--color-cloud-gray)',
                borderRadius: 12,
                overflow: 'hidden',
                background: '#fff',
                cursor: 'pointer',
                textAlign: 'left',
                padding: 0,
                fontFamily: 'var(--font-text)',
              }}
            >
              <div
                style={{
                  height: 110,
                  background: `url(${card.image}) center/cover`,
                }}
              />
              <div style={{ padding: '16px 18px 20px' }}>
                <div style={{ fontWeight: 500, fontSize: 16, color: 'var(--color-carbon-dark)' }}>
                  {card.title}
                </div>
                <div style={{ fontSize: 13, color: 'var(--color-pewter)', marginTop: 4 }}>
                  {card.body}
                </div>
              </div>
            </button>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Button
            variant="secondary"
            type="button"
            onClick={() => {
              notify('Demo Drive');
              goProduct('demo-drive', 'order');
            }}
          >
            Schedule a Demo Drive
          </Button>
        </div>
      </div>
    </section>,
  ];

  return <HomeTemplate sections={sections} />;
}
