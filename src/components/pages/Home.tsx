import { HomeTemplate } from '../templates/HomeTemplate';
import { VehicleHero } from '../organisms/VehicleHero';
import { FSDHero } from '../organisms/FSDHero';
import { EnergyHero } from '../organisms/EnergyHero';
import { OffersSection } from '../organisms/OffersSection';
import { images } from '../../assets/images';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { getById } from '../../data/navCatalog';

export function Home() {
  const { goProduct } = useNav();
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
  ];

  return <HomeTemplate sections={sections} />;
}
