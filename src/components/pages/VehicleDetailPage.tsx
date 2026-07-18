import { useState } from 'react';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { getVehicleDetail } from '../../data/vehicleDetails';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

const sectionPad: React.CSSProperties = {
  maxWidth: 1100,
  margin: '0 auto',
  padding: '64px 24px',
  fontFamily: 'var(--font-text)',
};

const h2: React.CSSProperties = {
  fontSize: 32,
  fontWeight: 500,
  color: 'var(--color-carbon-dark)',
  margin: '0 0 16px',
  letterSpacing: '-0.01em',
};

const body: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.6,
  color: 'var(--color-graphite)',
  margin: 0,
};

/** Full vehicle landing page (Model S–style layout from tesla.com) */
export function VehicleDetailPage({ vehicleId }: { vehicleId: string }) {
  const detail = getVehicleDetail(vehicleId);
  const { goHome, goProduct } = useNav();
  const { notify } = useToast();
  const [specTrim, setSpecTrim] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  if (!detail) return null;

  const primary = () => {
    setConfirmed(true);
    notify(`${detail.primaryCta} — ${detail.name}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const secondary = () => {
    notify(`${detail.secondaryCta} — ${detail.name}`);
    if (detail.secondaryCta.toLowerCase().includes('inventory')) {
      goProduct('inventory', 'learn');
    } else if (detail.secondaryCta.toLowerCase().includes('estimate')) {
      notify('Trade-in estimate (demo)');
    } else {
      const el = document.getElementById('vehicle-interior');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '100svh',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.45)), url(${detail.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          textAlign: 'center',
          padding: '96px 24px 72px',
          color: '#fff',
        }}
      >
        <button
          type="button"
          onClick={() => {
            notify('Home');
            goHome();
          }}
          style={{
            position: 'absolute',
            top: 72,
            left: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            color: '#fff',
            fontFamily: 'var(--font-text)',
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          <Icon name="chevron-left" size={20} />
          Home
        </button>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 48px)',
            fontWeight: 500,
            margin: '0 0 8px',
          }}
        >
          {detail.name}
        </h1>
        <p style={{ fontSize: 16, margin: '0 0 32px', opacity: 0.95 }}>{detail.tagline}</p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '32px 48px',
            marginBottom: 32,
          }}
        >
          {detail.heroStats.map((s) => (
            <div key={s.label} style={{ minWidth: 100 }}>
              <div style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.2 }}>
                {s.value}
                {s.note && <sup style={{ fontSize: 12 }}>{s.note}</sup>}
              </div>
              <div style={{ fontSize: 13, opacity: 0.9, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {confirmed ? (
          <div
            style={{
              background: 'rgba(255,255,255,0.96)',
              color: 'var(--color-carbon-dark)',
              padding: '20px 24px',
              borderRadius: 4,
              maxWidth: 400,
              fontFamily: 'var(--font-text)',
            }}
          >
            <p style={{ fontWeight: 500, margin: '0 0 8px' }}>✓ {detail.primaryCta} received</p>
            <p style={{ fontSize: 14, color: 'var(--color-graphite)', margin: '0 0 16px' }}>
              Demo only — no real order for {detail.name}.
            </p>
            <div className="tds-cta-group">
              <Button variant="primary" type="button" onClick={goHome}>
                Back to Home
              </Button>
              <Button variant="secondary" type="button" onClick={() => setConfirmed(false)}>
                Continue
              </Button>
            </div>
          </div>
        ) : (
          <div className="tds-cta-group">
            <Button variant="primary" type="button" onClick={primary}>
              {detail.primaryCta}
            </Button>
            <Button variant="hero-link" type="button" onClick={secondary}>
              {detail.secondaryCta}
            </Button>
          </div>
        )}
      </section>

      {/* Notice / signature */}
      {(detail.notice || detail.signature) && (
        <section style={{ ...sectionPad, textAlign: 'center', maxWidth: 800 }}>
          {detail.signature && (
            <>
              <h2 style={h2}>{detail.signature.title}</h2>
              <p style={{ ...body, fontSize: 16 }}>{detail.signature.body}</p>
            </>
          )}
          {detail.notice && (
            <p
              style={{
                ...body,
                marginTop: 24,
                padding: 16,
                background: 'var(--color-light-ash)',
                borderRadius: 4,
                fontSize: 14,
              }}
            >
              {detail.notice}
            </p>
          )}
          <div className="tds-cta-group" style={{ marginTop: 24, justifyContent: 'center' }}>
            <Button variant="primary" type="button" onClick={primary}>
              {detail.primaryCta}
            </Button>
          </div>
        </section>
      )}

      {/* Interior */}
      <section id="vehicle-interior" style={{ background: 'var(--color-light-ash)' }}>
        <div style={sectionPad}>
          <h2 style={{ ...h2, textAlign: 'center' }}>{detail.name} Interior</h2>
          <div style={{ display: 'grid', gap: 40, marginTop: 40 }}>
            {detail.interior.map((block, i) => (
              <div
                key={block.title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: block.image ? 'minmax(0, 1.1fr) minmax(0, 1fr)' : '1fr',
                  gap: 32,
                  alignItems: 'center',
                }}
                className="tds-vehicle-block"
              >
                {block.image && (
                  <div
                    style={{
                      borderRadius: 12,
                      overflow: 'hidden',
                      minHeight: 240,
                      background: `url(${block.image}) center/cover`,
                      order: i % 2 === 1 ? 2 : 0,
                    }}
                  />
                )}
                <div>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 500,
                      color: 'var(--color-carbon-dark)',
                      margin: '0 0 12px',
                    }}
                  >
                    {block.title}
                  </h3>
                  <p style={body}>{block.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomy */}
      {detail.autonomy && (
        <section
          style={{
            minHeight: 480,
            backgroundImage: detail.autonomy.image
              ? `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.5)), url(${detail.autonomy.image})`
              : 'var(--color-carbon-dark)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          <div style={{ ...sectionPad, textAlign: 'center', maxWidth: 720 }}>
            <p style={{ fontSize: 14, opacity: 0.85, marginBottom: 8 }}>{detail.name} Autonomy</p>
            <h2 style={{ ...h2, color: '#fff' }}>{detail.autonomy.title}</h2>
            <p style={{ ...body, color: 'rgba(255,255,255,0.92)', marginBottom: 24 }}>
              {detail.autonomy.body}
            </p>
            <Button
              variant="hero-link"
              type="button"
              onClick={() => {
                notify('Full Self-Driving (Supervised)');
                goProduct('fsd', 'learn');
              }}
            >
              Learn More
            </Button>
          </div>
        </section>
      )}

      {/* Powertrain */}
      {detail.powertrain && (
        <section style={sectionPad}>
          <p style={{ fontSize: 14, color: 'var(--color-pewter)', marginBottom: 8 }}>
            {detail.name} Powertrain
          </p>
          <h2 style={h2}>{detail.powertrain.title}</h2>
          <p style={{ ...body, maxWidth: 640 }}>{detail.powertrain.body}</p>
        </section>
      )}

      {/* Trims compare */}
      {detail.trims && detail.trims.length > 0 && (
        <section style={{ background: 'var(--color-light-ash)' }}>
          <div style={sectionPad}>
            <h2 style={{ ...h2, textAlign: 'center' }}>All-Electric Performance</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 24,
                marginTop: 40,
              }}
            >
              {detail.trims.map((trim) => (
                <div
                  key={trim.name}
                  style={{
                    background: '#fff',
                    borderRadius: 12,
                    padding: 28,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                      margin: '0 0 20px',
                      color: 'var(--color-carbon-dark)',
                    }}
                  >
                    {trim.name}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 20 }}>
                    {trim.stats.map((s) => (
                      <div key={s.label}>
                        <div style={{ fontSize: 28, fontWeight: 500, color: 'var(--color-carbon-dark)' }}>
                          {s.value}
                          {s.note && <sup style={{ fontSize: 11 }}>{s.note}</sup>}
                        </div>
                        <div style={{ fontSize: 13, color: 'var(--color-pewter)' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <p style={{ ...body, fontSize: 14 }}>{trim.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Design points */}
      {detail.designPoints && (
        <section style={sectionPad}>
          <h2 style={{ ...h2, textAlign: 'center' }}>Efficient by Design</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 28,
              marginTop: 40,
            }}
          >
            {detail.designPoints.map((p) => (
              <div key={p.title}>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 500,
                    color: 'var(--color-carbon-dark)',
                    margin: '0 0 8px',
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ ...body, fontSize: 14 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Go anywhere */}
      {detail.goAnywhere && (
        <section style={{ background: 'var(--color-carbon-dark)', color: '#fff' }}>
          <div style={{ ...sectionPad, textAlign: 'center' }}>
            <h2 style={{ ...h2, color: '#fff' }}>{detail.goAnywhere.title}</h2>
            <p style={{ ...body, color: 'rgba(255,255,255,0.9)', maxWidth: 720, margin: '0 auto 32px' }}>
              {detail.goAnywhere.body}
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '32px 48px',
                marginBottom: 28,
              }}
            >
              {detail.goAnywhere.stats.map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 28, fontWeight: 500 }}>{s.value}</div>
                  <div style={{ fontSize: 13, opacity: 0.85 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <Button
              variant="hero-link"
              type="button"
              onClick={() => {
                notify('Trip Planner (demo)');
                goProduct('supercharger', 'learn');
              }}
            >
              Find My Route
            </Button>
          </div>
        </section>
      )}

      {/* Charge home */}
      {detail.chargeHome && (
        <section
          style={{
            minHeight: 420,
            backgroundImage: detail.chargeHome.image
              ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.45)), url(${detail.chargeHome.image})`
              : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ ...sectionPad, color: '#fff', maxWidth: 560 }}>
            <h2 style={{ ...h2, color: '#fff' }}>{detail.chargeHome.title}</h2>
            <p style={{ ...body, color: 'rgba(255,255,255,0.92)', marginBottom: 24 }}>
              {detail.chargeHome.body}
            </p>
            <Button
              variant="hero-link"
              type="button"
              onClick={() => {
                notify('Home Charging');
                goProduct('home-charging', 'learn');
              }}
            >
              Learn more about home charging
            </Button>
          </div>
        </section>
      )}

      {/* Safety */}
      {detail.safety && (
        <section style={sectionPad}>
          <h2 style={h2}>{detail.safety.title}</h2>
          <p style={{ ...body, maxWidth: 720, marginBottom: 24 }}>{detail.safety.body}</p>
          {detail.safety.bullets && (
            <ul style={{ listStyle: 'none', display: 'grid', gap: 12, maxWidth: 640 }}>
              {detail.safety.bullets.map((b) => (
                <li
                  key={b}
                  style={{
                    padding: '14px 18px',
                    background: 'var(--color-light-ash)',
                    borderRadius: 4,
                    fontWeight: 500,
                    fontSize: 14,
                    color: 'var(--color-carbon-dark)',
                  }}
                >
                  {b}
                </li>
              ))}
            </ul>
          )}
          <div style={{ marginTop: 24 }}>
            <Button
              variant="text"
              type="button"
              onClick={() => {
                notify('Safety');
                goProduct('fsd', 'learn');
              }}
            >
              Learn More →
            </Button>
          </div>
        </section>
      )}

      {/* Specs */}
      {detail.specs && detail.specs.length > 0 && (
        <section style={{ background: 'var(--color-light-ash)' }}>
          <div style={sectionPad}>
            <h2 style={{ ...h2, textAlign: 'center' }}>{detail.name} Specs</h2>
            {detail.specs.length > 1 && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 8,
                  margin: '24px 0 32px',
                  flexWrap: 'wrap',
                }}
              >
                {detail.specs.map((s, i) => (
                  <button
                    key={s.trim}
                    type="button"
                    onClick={() => setSpecTrim(i)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 4,
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-text)',
                      fontSize: 14,
                      fontWeight: 500,
                      background: specTrim === i ? 'var(--color-carbon-dark)' : '#fff',
                      color: specTrim === i ? '#fff' : 'var(--color-carbon-dark)',
                    }}
                  >
                    {s.trim}
                  </button>
                ))}
              </div>
            )}
            <div
              style={{
                background: '#fff',
                borderRadius: 12,
                overflow: 'hidden',
                maxWidth: 640,
                margin: '0 auto',
              }}
            >
              {detail.specs[specTrim]?.rows.map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '14px 20px',
                    borderBottom: '1px solid var(--color-cloud-gray)',
                    fontSize: 14,
                  }}
                >
                  <span style={{ color: 'var(--color-pewter)' }}>{row.label}</span>
                  <span style={{ fontWeight: 500, color: 'var(--color-carbon-dark)', textAlign: 'right' }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="tds-cta-group" style={{ marginTop: 32, justifyContent: 'center' }}>
              <Button
                variant="secondary"
                type="button"
                onClick={() => {
                  notify('Compare Models');
                  goProduct('model-3', 'learn');
                }}
              >
                Compare Models
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section style={{ ...sectionPad, textAlign: 'center' }}>
        <h2 style={h2}>{detail.name}</h2>
        <p style={{ ...body, marginBottom: 24 }}>
          Design yours or get a trade-in estimate for your current vehicle.
        </p>
        <div className="tds-cta-group" style={{ justifyContent: 'center' }}>
          <Button variant="primary" type="button" onClick={primary}>
            {detail.primaryCta}
          </Button>
          <Button variant="secondary" type="button" onClick={secondary}>
            {detail.secondaryCta}
          </Button>
        </div>
      </section>

      {/* Footnotes */}
      {detail.footnotes && (
        <section style={{ ...sectionPad, paddingTop: 0, maxWidth: 800 }}>
          {detail.footnotes.map((f) => (
            <p key={f} style={{ fontSize: 12, color: 'var(--color-silver-fog)', margin: '0 0 8px', lineHeight: 1.5 }}>
              {f}
            </p>
          ))}
        </section>
      )}

      <style>{`
        @media (max-width: 768px) {
          .tds-vehicle-block {
            grid-template-columns: 1fr !important;
          }
          .tds-vehicle-block > div[style*="order"] {
            order: 0 !important;
          }
        }
      `}</style>
    </main>
  );
}
