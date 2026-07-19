/** Shared content types used by vehicle + product landings */

export type Stat = { value: string; label: string; note?: string };

export type ContentBlock = {
  title: string;
  body: string;
  image?: string;
};

export type CompareCard = {
  name: string;
  stats: Stat[];
  blurb: string;
};

export type SpecRow = { label: string; value: string };

export type SpecGroup = { trim: string; rows: SpecRow[] };

export type StatsBand = {
  title: string;
  body: string;
  stats: Stat[];
  ctaLabel?: string;
  ctaTargetId?: string;
};

export type BannerBlock = ContentBlock & {
  ctaLabel?: string;
  ctaTargetId?: string;
};

export type ListSection = ContentBlock & { bullets?: string[] };

/** Normalized landing model for all full product/vehicle pages */
export type LandingDetail = {
  id: string;
  name: string;
  tagline: string;
  categoryLabel?: string;
  heroImage: string;
  heroStats: Stat[];
  notice?: string;
  signature?: { title: string; body: string };
  blocks: ContentBlock[];
  highlight?: ContentBlock;
  /** Optional label above highlight (e.g. "Model S Autonomy") */
  highlightKicker?: string;
  powertrain?: ContentBlock;
  features?: ContentBlock[];
  featuresTitle?: string;
  cards?: CompareCard[];
  cardsTitle?: string;
  statsBand?: StatsBand;
  banner?: BannerBlock;
  listSection?: ListSection;
  specs?: SpecGroup[];
  footnotes?: string[];
  primaryCta: string;
  secondaryCta: string;
  relatedIds?: string[];
  closingBody?: string;
  kind: 'vehicle' | 'product';
};
