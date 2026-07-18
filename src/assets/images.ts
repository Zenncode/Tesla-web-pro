/**
 * Image map aligned with tesla.com product themes.
 *
 * ENERGY  → solar panels / solar roof / Powerwall / large energy
 * CHARGING → Wall Connector, EV chargers, Supercharger-style
 * VEHICLES → Tesla marketing heroes
 *
 * Official Tesla CDN used wherever the asset responds 200.
 * Pure solar-array / public-charger shots fill gaps (CDN often 404s those filenames).
 */
const TDS = 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto';

const photo = (id: string, w = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // ── Vehicles (Tesla CDN) ──
  modelYL: `${TDS}/Model-Y-L-Hero-Desktop.jpg`,
  modelY: `${TDS}/Homepage-Model-Y-Desktop-Global.jpg`,
  modelYAlt: `${TDS}/Model-Y-Main-Hero-Desktop-Global.jpg`,
  modelY2: `${TDS}/Model-Y-2-Hero-Desktop.jpg`,
  model3: `${TDS}/Homepage-Model-3-Desktop-LHD.jpg`,
  model3Alt: `${TDS}/Model-3-Main-Hero-Desktop-LHD.jpg`,
  model3Exterior: `${TDS}/Model-3-Exterior-Hero-Desktop-LHD.jpg`,
  model3Performance: `${TDS}/Model-3-Performance-Hero-Desktop-LHD.jpg`,
  cybertruck: `${TDS}/Homepage-Cybertruck-Desktop.jpg`,
  modelS: `${TDS}/Homepage-Model-S-Desktop-LHD.jpg`,
  modelSMain: `${TDS}/Model-S-Main-Hero-Desktop-LHD.jpg`,
  modelX: `${TDS}/Homepage-Model-X-Desktop-LHD.jpg`,
  modelXMain: `${TDS}/Model-X-Main-Hero-Desktop-LHD.jpg`,
  fsd: `${TDS}/Autopilot-Hero-Desktop.jpg`,

  cardModelS: `${TDS}/Model-S-Main-Hero-Desktop-LHD.jpg`,
  cardModel3: `${TDS}/Model-3-Main-Hero-Desktop-LHD.jpg`,
  cardModelY: `${TDS}/Model-Y-Main-Hero-Desktop-Global.jpg`,
  cardModelX: `${TDS}/Model-X-Main-Hero-Desktop-LHD.jpg`,
  cardCybertruck: `${TDS}/Homepage-Cybertruck-Desktop.jpg`,

  offers: `${TDS}/Model-3-Performance-Hero-Desktop-LHD.jpg`,
  inventory: `${TDS}/Model-Y-2-Hero-Desktop.jpg`,

  // ── ENERGY (solar + storage — never car heroes) ──
  /** Official Tesla “charge on solar” / solar home */
  solar: `${TDS}/Charge-On-Solar-Desktop.jpg`,
  solarAlt: `${TDS}/charge-on-solar-hero.jpg`,
  /** Rooftop panel array (when you need classic panels) */
  solarPanels: photo('photo-1509391366360-2e959784a276'),
  solarFarm: photo('photo-1508514177221-188b1cf16e9d'),
  solarHouse: photo('photo-1559302504-64aae6ca6b6d'),
  solarAerial: photo('photo-1497435334941-8c899ee9e8e9'),

  /** Solar Roof — Tesla CDN */
  solarRoof: `${TDS}/Solar-Roof-Hero-Desktop-Global.jpg`,

  /** Powerwall — Tesla CDN */
  powerwall: `${TDS}/Powerwall-Hero-Desktop.jpg`,
  powerwallHome: `${TDS}/Homepage-Powerwall-Desktop.jpg`,

  /** Megapack — large solar / utility energy field */
  megapack: photo('photo-1508514177221-188b1cf16e9d'),

  cardSolar: `${TDS}/Charge-On-Solar-Desktop.jpg`,
  cardSolarRoof: `${TDS}/Solar-Roof-Hero-Desktop-Global.jpg`,
  cardPowerwall: `${TDS}/Powerwall-Hero-Desktop.jpg`,
  cardMegapack: photo('photo-1497435334941-8c899ee9e8e9'),

  // ── CHARGING (chargers only) ──
  /** Gen 3 Wall Connector — official Tesla product image */
  wallConnector: `${TDS}/gen-3-wall-connector-hero.png`,
  /** Home charging lifestyle — Tesla CDN */
  homeCharging: `${TDS}/Home-Charging-Hero-Desktop.jpg`,
  /** Public EV charging stations */
  cardCharging: photo('photo-1593941707882-a5bba14938c7'),
  cardHomeCharging: `${TDS}/gen-3-wall-connector-hero.png`,
  cardSupercharger: photo('photo-1647166545674-ce28ce93bdca'),
  chargingAlt: photo('photo-1617788138017-80ad40651399'),
  chargingPlug: photo('photo-1677442136019-21780ecad995'),
  cardShopCharging: `${TDS}/gen-3-wall-connector-hero.png`,

  // ── Discover / Shop ──
  cardDemoDrive: `${TDS}/Model-3-Main-Hero-Desktop-LHD.jpg`,
  cardInsurance: `${TDS}/Model-Y-Main-Hero-Desktop-Global.jpg`,
  cardMilitary: `${TDS}/Homepage-Model-Y-Desktop-Global.jpg`,
  cardVideo: `${TDS}/Autopilot-Hero-Desktop.jpg`,
  cardStories: `${TDS}/Model-3-Exterior-Hero-Desktop-LHD.jpg`,
  cardEvents: `${TDS}/Homepage-Model-S-Desktop-LHD.jpg`,
  cardAccessories: `${TDS}/Model-Y-2-Hero-Desktop.jpg`,
  cardApparel: photo('photo-1523381210434-271e8be1f52b'),
  cardLifestyle: photo('photo-1441986300917-64674bd600d8'),
} as const;
