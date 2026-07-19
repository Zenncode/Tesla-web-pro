import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { images } from '../../assets/images';

const offers = [
  {
    title: 'Model 3 — 0.99% APR Available',
    body: 'Limited-time financing on select Model 3 configurations. Terms apply.',
    image: images.model3,
    cta: 'model-3',
  },
  {
    title: 'Model Y — 0% APR Available',
    body: 'Special APR offer on qualifying Model Y orders. Terms apply.',
    image: images.modelY,
    cta: 'model-y',
  },
  {
    title: 'Model Y L Premium — Starting at $61,990',
    body: 'Launch Series includes limited-time benefits. Price and features subject to change.',
    image: images.modelYL,
    cta: 'model-y-l',
  },
  {
    title: 'Lease From $329/mo — Model 3',
    body: 'Lease offers available. With down payment and approved credit.',
    image: images.model3Exterior,
    cta: 'model-3',
  },
  {
    title: 'Lease From $459/mo — Model Y',
    body: 'Lease offers available. With down payment and approved credit.',
    image: images.modelY2,
    cta: 'model-y',
  },
  {
    title: 'Full Self-Driving (Supervised) — $99/mo',
    body: 'Subscribe monthly. Driver supervision required at all times.',
    image: images.fsd,
    cta: 'fsd',
  },
  {
    title: 'Cybertruck — Lease From $949/mo',
    body: 'Utility truck lease offers on select configurations. Terms apply.',
    image: images.cybertruck,
    cta: 'cybertruck',
  },
  {
    title: 'Solar + Powerwall Bundle (Demo)',
    body: 'Explore home energy packages. Incentives and savings vary by region.',
    image: images.powerwall,
    cta: 'powerwall',
  },
  {
    title: 'Wall Connector — Shop Charging',
    body: 'Home charging hardware available in the Tesla Shop demo.',
    image: images.wallConnector,
    cta: 'home-charging',
  },
];

/** Current Offers page */
export function OffersPage() {
  const { goHome, goProduct, goDesign, goInventory } = useNav();
  const { notify } = useToast();

  return (
    <main style={{ paddingBottom: 96, fontFamily: 'var(--font-text)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
        <button type="button" onClick={() => { notify('Home'); goHome(); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24, fontSize: 14, fontWeight: 500 }}>
          <Icon name="chevron-left" size={20} /> Home
        </button>
        <h1 style={{ fontSize: 36, fontWeight: 500, margin: '0 0 8px' }}>Current Offers</h1>
        <p style={{ color: 'var(--color-pewter)', margin: '0 0 32px', fontSize: 14 }}>
          Explore limited-time offers on Tesla vehicles. Demo snapshot — verify on tesla.com.
        </p>

        <div style={{ display: 'grid', gap: 20 }}>
          {offers.map((o) => (
            <article
              key={o.title}
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(120px, 220px) 1fr',
                gap: 20,
                border: '1px solid var(--color-cloud-gray)',
                borderRadius: 12,
                overflow: 'hidden',
                background: '#fff',
              }}
            >
              <div style={{ minHeight: 140, background: `url(${o.image}) center/cover` }} />
              <div style={{ padding: '20px 20px 20px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ fontSize: 18, fontWeight: 500, margin: '0 0 8px' }}>{o.title}</h2>
                <p style={{ fontSize: 14, color: 'var(--color-graphite)', margin: '0 0 16px', lineHeight: 1.5 }}>{o.body}</p>
                <div className="tds-cta-group" style={{ justifyContent: 'flex-start' }}>
                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => {
                      notify(o.title);
                      goProduct(o.cta, 'order');
                    }}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={() => goDesign(o.cta.startsWith('model') || o.cta === 'cybertruck' ? o.cta : 'model-3')}
                  >
                    Design
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="tds-cta-group" style={{ marginTop: 40, justifyContent: 'flex-start' }}>
          <Button variant="secondary" type="button" onClick={() => goInventory('new')}>
            Browse Inventory
          </Button>
        </div>
      </div>
    </main>
  );
}
