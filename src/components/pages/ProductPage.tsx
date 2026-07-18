import { useEffect, useRef, useState } from 'react';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { getVehicleDetail } from '../../data/vehicleDetails';
import { VehicleDetailPage } from './VehicleDetailPage';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

/** Routes vehicles to full landing page; other products keep compact layout */
export function ProductPage() {
  const { product, goHome, goProduct, state, confirmAction } = useNav();
  const { notify } = useToast();
  const [confirmed, setConfirmed] = useState(false);
  const detailsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setConfirmed(false);
  }, [product?.id, state.focus]);

  useEffect(() => {
    if (state.focus === 'learn' && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [state.focus, product?.id]);

  if (!product) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ marginBottom: 16 }}>Product not found.</p>
        <Button
          variant="primary"
          type="button"
          onClick={() => {
            notify('Back to home');
            goHome();
          }}
        >
          Back to Home
        </Button>
      </div>
    );
  }

  // Full Model S–style vehicle pages when we have detail content
  if (product.category === 'vehicles' && getVehicleDetail(product.id)) {
    return <VehicleDetailPage vehicleId={product.id} />;
  }

  const handlePrimary = () => {
    setConfirmed(true);
    confirmAction(product.ctaPrimary, product.name);
    notify(`${product.ctaPrimary} — ${product.name} (demo)`);
    goProduct(product.id, 'order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSecondary = () => {
    notify(`${product.ctaSecondary} — ${product.name}`);
    goProduct(product.id, 'learn');
    detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main>
      <section
        style={{
          position: 'relative',
          minHeight: '70svh',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.4)), url(${product.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '80px 24px 48px',
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

        <p className="tds-category" style={{ marginBottom: 8 }}>{product.desc}</p>
        <h1 className="tds-hero-title" style={{ margin: 0 }}>{product.name}</h1>

        {confirmed ? (
          <div
            style={{
              marginTop: 24,
              padding: '20px 24px',
              background: 'rgba(255,255,255,0.95)',
              borderRadius: 4,
              maxWidth: 400,
              color: 'var(--color-carbon-dark)',
              fontFamily: 'var(--font-text)',
            }}
          >
            <p style={{ fontWeight: 500, fontSize: 17, margin: '0 0 8px' }}>
              ✓ {product.ctaPrimary} received
            </p>
            <p style={{ fontSize: 14, color: 'var(--color-graphite)', margin: '0 0 16px' }}>
              Demo only — no real order was placed for {product.name}.
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
          <div className="tds-cta-group" style={{ marginTop: 24 }}>
            <Button variant="primary" type="button" onClick={handlePrimary}>
              {product.ctaPrimary}
            </Button>
            <Button variant="hero-link" type="button" onClick={handleSecondary}>
              {product.ctaSecondary}
            </Button>
          </div>
        )}
      </section>

      <section
        ref={detailsRef}
        id="product-details"
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '48px 24px 96px',
          fontFamily: 'var(--font-text)',
        }}
      >
        <h2
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: 'var(--color-carbon-dark)',
            marginBottom: 16,
          }}
        >
          About {product.name}
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--color-graphite)', marginBottom: 32 }}>
          {product.blurb}
        </p>
        {product.features && product.features.length > 0 && (
          <ul style={{ listStyle: 'none', display: 'grid', gap: 12, marginBottom: 40 }}>
            {product.features.map((f) => (
              <li
                key={f}
                style={{
                  padding: '14px 18px',
                  background: 'var(--color-light-ash)',
                  borderRadius: 'var(--radius-btn)',
                  color: 'var(--color-carbon-dark)',
                  fontWeight: 500,
                  fontSize: 14,
                }}
              >
                {f}
              </li>
            ))}
          </ul>
        )}
        <div className="tds-cta-group" style={{ justifyContent: 'flex-start' }}>
          <Button variant="primary" type="button" onClick={handlePrimary}>
            {product.ctaPrimary}
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
      </section>
    </main>
  );
}
