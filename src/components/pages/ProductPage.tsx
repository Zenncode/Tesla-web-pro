import { useEffect, useRef, useState } from 'react';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { getLandingDetail } from '../../data/landing';
import { DetailLandingPage } from './DetailLandingPage';
import { Button } from '../atoms/Button';
import { BackLink } from '../shared/BackLink';
import { ConfirmCard } from '../shared/ConfirmCard';
import { PageShell } from '../shared/PageShell';

/** Routes to full landing when detail data exists; compact fallback otherwise */
export function ProductPage() {
  const { product, goHome, goProduct, state, confirmAction } = useNav();
  const { notify } = useToast();
  const [confirmed, setConfirmed] = useState(false);
  const detailsRef = useRef<HTMLElement>(null);

  const productId = product?.id ?? state.productId;

  useEffect(() => {
    setConfirmed(false);
  }, [productId, state.focus]);

  useEffect(() => {
    if (state.focus === 'learn' && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [state.focus, productId]);

  if (productId && getLandingDetail(productId)) {
    return <DetailLandingPage productId={productId} />;
  }

  if (!product) {
    return (
      <PageShell
        title="Product not found"
        onBack={() => {
          notify('Back to home');
          goHome();
        }}
      >
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
      </PageShell>
    );
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
        className="tds-compact-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.4)), url(${product.image})`,
        }}
      >
        <BackLink
          onDark
          onClick={() => {
            notify('Home');
            goHome();
          }}
          className="tds-landing-hero-back"
        />
        <p className="tds-category">{product.desc}</p>
        <h1 className="tds-hero-title">{product.name}</h1>

        {confirmed ? (
          <ConfirmCard
            title={`${product.ctaPrimary} received`}
            body={`Demo only — no real order was placed for ${product.name}.`}
            onHome={goHome}
            onContinue={() => setConfirmed(false)}
          />
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

      <section ref={detailsRef} id="product-details" className="tds-compact-details">
        <h2>About {product.name}</h2>
        <p>{product.blurb}</p>
        {product.features && product.features.length > 0 && (
          <ul className="tds-bullet-list">
            {product.features.map((f) => (
              <li key={f}>{f}</li>
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
