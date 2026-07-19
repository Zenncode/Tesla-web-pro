import type { LandingDetail } from './types';
import { getVehicleDetail, type VehicleDetail } from './vehicleDetails';
import { getProductDetail, type ProductDetail } from './productDetails';

function fromVehicle(v: VehicleDetail): LandingDetail {
  return {
    id: v.id,
    name: v.name,
    tagline: v.tagline,
    categoryLabel: 'Vehicle',
    heroImage: v.heroImage,
    heroStats: v.heroStats,
    notice: v.notice,
    signature: v.signature,
    blocks: v.interior,
    highlight: v.autonomy,
    highlightKicker: v.autonomy ? `${v.name} Autonomy` : undefined,
    powertrain: v.powertrain,
    features: v.designPoints,
    featuresTitle: 'Efficient by Design',
    cards: v.trims,
    cardsTitle: 'All-Electric Performance',
    statsBand: v.goAnywhere
      ? {
          ...v.goAnywhere,
          ctaLabel: 'Find My Route',
          ctaTargetId: 'supercharger',
        }
      : undefined,
    banner: v.chargeHome
      ? {
          ...v.chargeHome,
          ctaLabel: 'Learn more about home charging',
          ctaTargetId: 'home-charging',
        }
      : undefined,
    listSection: v.safety,
    specs: v.specs,
    footnotes: v.footnotes,
    primaryCta: v.primaryCta,
    secondaryCta: v.secondaryCta,
    closingBody: 'Design yours or get a trade-in estimate for your current vehicle.',
    kind: 'vehicle',
  };
}

function fromProduct(p: ProductDetail): LandingDetail {
  return {
    id: p.id,
    name: p.name,
    tagline: p.tagline,
    categoryLabel: p.categoryLabel,
    heroImage: p.heroImage,
    heroStats: p.heroStats,
    notice: p.notice,
    signature: p.signature,
    blocks: p.blocks,
    highlight: p.highlight,
    features: p.features,
    featuresTitle: `Why ${p.name}`,
    cards: p.cards,
    cardsTitle: 'Options & Paths',
    statsBand: p.statsBand,
    banner: p.banner,
    listSection: p.listSection,
    specs: p.specs,
    footnotes: p.footnotes,
    primaryCta: p.primaryCta,
    secondaryCta: p.secondaryCta,
    relatedIds: p.relatedIds,
    closingBody: p.tagline,
    kind: 'product',
  };
}

/** Resolve a full landing model for any catalog/product/vehicle id */
export function getLandingDetail(id: string): LandingDetail | undefined {
  const vehicle = getVehicleDetail(id);
  if (vehicle) return fromVehicle(vehicle);

  const product = getProductDetail(id);
  if (product) return fromProduct(product);

  return undefined;
}
