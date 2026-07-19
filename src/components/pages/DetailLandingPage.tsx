import { useState } from 'react';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import type { LandingDetail } from '../../data/types';
import { getById } from '../../data/navCatalog';
import { getLandingDetail } from '../../data/landing';
import { Button } from '../atoms/Button';
import { BackLink } from '../shared/BackLink';
import { ConfirmCard } from '../shared/ConfirmCard';
import { Section, SectionBody, SectionTitle } from '../shared/Section';
import { ContentBlocks } from '../shared/landing/ContentBlocks';
import { FeatureGrid } from '../shared/landing/FeatureGrid';
import { CompareCards } from '../shared/landing/CompareCards';
import { StatsBand } from '../shared/landing/StatsBand';
import { ImageBanner } from '../shared/landing/ImageBanner';
import { BulletList } from '../shared/landing/BulletList';
import { SpecsTable } from '../shared/landing/SpecsTable';
import { HighlightBand } from '../shared/landing/HighlightBand';

function useLandingNav() {
  const nav = useNav();
  const { notify } = useToast();

  const navigateTarget = (targetId?: string) => {
    if (!targetId) return;
    const hubs: Record<string, () => void> = {
      shop: nav.goShop,
      trip: nav.goTrip,
      compare: nav.goCompare,
      inventory: () => nav.goInventory('new'),
      energy: nav.goEnergy,
      'charging-hub': nav.goChargingHub,
      'charging-menu': nav.goChargingHub,
      discover: nav.goDiscover,
    };
    if (hubs[targetId]) {
      hubs[targetId]();
      return;
    }
    nav.goProduct(targetId, 'learn');
  };

  return { nav, notify, navigateTarget };
}

function handlePrimary(detail: LandingDetail, nav: ReturnType<typeof useNav>, setConfirmed: (v: boolean) => void, notify: (m: string) => void) {
  const label = detail.primaryCta.toLowerCase();

  if (detail.kind === 'vehicle') {
    if (label.includes('inventory') || label.includes('browse')) {
      notify(detail.primaryCta);
      nav.goInventory('new');
      return;
    }
    if (label.includes('order') || label.includes('design')) {
      notify(detail.primaryCta);
      nav.goDesign(detail.id);
      return;
    }
  }

  if (label.includes('shop')) {
    notify(detail.primaryCta);
    if (detail.id.startsWith('shop-') || detail.categoryLabel === 'Shop') {
      setConfirmed(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      nav.goShop();
    }
    return;
  }
  if (label.includes('supercharger') || (label.includes('find') && label.includes('super'))) {
    notify(detail.primaryCta);
    nav.goTrip();
    return;
  }
  if (label.includes('schedule') || label.includes('demo')) {
    notify(detail.primaryCta);
    nav.goProduct('demo-drive', 'order');
    return;
  }
  if (label.includes('inventory') || label.includes('browse')) {
    notify(detail.primaryCta);
    nav.goInventory('new');
    return;
  }

  setConfirmed(true);
  notify(`${detail.primaryCta} — ${detail.name}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleSecondary(detail: LandingDetail, nav: ReturnType<typeof useNav>, notify: (m: string) => void) {
  notify(`${detail.secondaryCta} — ${detail.name}`);
  const label = detail.secondaryCta.toLowerCase();

  if (label.includes('supercharger') || label.includes('find')) {
    nav.goTrip();
    return;
  }
  if (label.includes('contact')) {
    nav.goProduct('support', 'learn');
    return;
  }
  if (label.includes('inventory')) {
    nav.goInventory(label.includes('pre') || label.includes('used') ? 'used' : 'new');
    return;
  }
  if (label.includes('estimate') || label.includes('trade')) {
    nav.goTradeIn();
    return;
  }
  if (label.includes('order') || label.includes('design')) {
    nav.goDesign(detail.id);
    return;
  }
  document.getElementById('landing-blocks')?.scrollIntoView({ behavior: 'smooth' });
}

/** Unified full landing for vehicles + energy/charging/discover/shop */
export function DetailLandingPage({ productId }: { productId: string }) {
  const detail = getLandingDetail(productId);
  const { nav, notify, navigateTarget } = useLandingNav();
  const [confirmed, setConfirmed] = useState(false);

  if (!detail) return null;

  const primary = () => handlePrimary(detail, nav, setConfirmed, notify);
  const secondary = () => handleSecondary(detail, nav, notify);

  return (
    <main>
      <section
        className="tds-landing-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.45)), url(${detail.heroImage})`,
        }}
      >
        <BackLink
          onDark
          onClick={() => {
            notify('Home');
            nav.goHome();
          }}
          className="tds-landing-hero-back"
        />

        {detail.categoryLabel && <p className="tds-landing-kicker">{detail.categoryLabel}</p>}
        <h1>{detail.name}</h1>
        <p className="tds-landing-tagline">{detail.tagline}</p>

        <div className="tds-stats-row is-hero">
          {detail.heroStats.map((s) => (
            <div key={s.label}>
              <div className="tds-stat-value is-light">
                {s.value}
                {s.note && <sup>{s.note}</sup>}
              </div>
              <div className="tds-stat-label is-light">{s.label}</div>
            </div>
          ))}
        </div>

        {confirmed ? (
          <ConfirmCard
            title={`${detail.primaryCta} received`}
            body={`Demo only — no real order or booking for ${detail.name}.`}
            onHome={nav.goHome}
            onContinue={() => setConfirmed(false)}
          />
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

      {(detail.notice || detail.signature) && (
        <Section narrow center>
          {detail.signature && (
            <>
              <SectionTitle>{detail.signature.title}</SectionTitle>
              <SectionBody>{detail.signature.body}</SectionBody>
            </>
          )}
          {detail.notice && <p className="tds-notice">{detail.notice}</p>}
          <div className="tds-cta-group" style={{ marginTop: 24, justifyContent: 'center' }}>
            <Button variant="primary" type="button" onClick={primary}>
              {detail.primaryCta}
            </Button>
          </div>
        </Section>
      )}

      <ContentBlocks
        title={detail.kind === 'vehicle' ? `${detail.name} Interior` : detail.name}
        blocks={detail.blocks}
      />

      {detail.highlight && (
        <HighlightBand
          kicker={detail.highlightKicker}
          data={detail.highlight}
          ctaLabel={detail.kind === 'vehicle' ? 'Learn More' : undefined}
          onCta={
            detail.kind === 'vehicle'
              ? () => {
                  notify('Full Self-Driving (Supervised)');
                  nav.goProduct('fsd', 'learn');
                }
              : undefined
          }
        />
      )}

      {detail.powertrain && (
        <Section>
          <p className="tds-kicker">{detail.name} Powertrain</p>
          <SectionTitle>{detail.powertrain.title}</SectionTitle>
          <SectionBody>{detail.powertrain.body}</SectionBody>
        </Section>
      )}

      {detail.cards && (
        <CompareCards title={detail.cardsTitle ?? 'Options'} cards={detail.cards} />
      )}

      {detail.features && (
        <FeatureGrid title={detail.featuresTitle ?? `Why ${detail.name}`} features={detail.features} />
      )}

      {detail.statsBand && (
        <StatsBand
          data={detail.statsBand}
          onCta={() => {
            if (detail.statsBand?.ctaLabel) notify(detail.statsBand.ctaLabel);
            if (detail.statsBand?.ctaTargetId === 'supercharger' && detail.kind === 'vehicle') {
              notify('Trip Planner (demo)');
              nav.goProduct('supercharger', 'learn');
              return;
            }
            navigateTarget(detail.statsBand?.ctaTargetId);
          }}
        />
      )}

      {detail.banner && (
        <ImageBanner
          data={detail.banner}
          onCta={() => {
            if (detail.banner?.ctaLabel) notify(detail.banner.ctaLabel);
            navigateTarget(detail.banner?.ctaTargetId);
          }}
        />
      )}

      {detail.listSection && <BulletList data={detail.listSection} />}

      {detail.specs && (
        <SpecsTable
          name={detail.name}
          specs={detail.specs}
          footer={
            detail.kind === 'vehicle' ? (
              <div className="tds-cta-group" style={{ marginTop: 32, justifyContent: 'center' }}>
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => {
                    notify('Compare Models');
                    nav.goCompare();
                  }}
                >
                  Compare Models
                </Button>
              </div>
            ) : undefined
          }
        />
      )}

      {detail.relatedIds && detail.relatedIds.length > 0 && (
        <Section center>
          <SectionTitle>
            <span className="tds-section-title is-center-block">Related</span>
          </SectionTitle>
          <div className="tds-related-row">
            {detail.relatedIds.map((id) => {
              const item = getById(id);
              const label = item?.name ?? getLandingDetail(id)?.name ?? id;
              return (
                <Button
                  key={id}
                  variant="secondary"
                  type="button"
                  onClick={() => {
                    notify(label);
                    navigateTarget(id);
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </div>
        </Section>
      )}

      <Section center>
        <SectionTitle>{detail.name}</SectionTitle>
        <SectionBody>{detail.closingBody ?? detail.tagline}</SectionBody>
        <div className="tds-cta-group" style={{ marginTop: 24, justifyContent: 'center' }}>
          <Button variant="primary" type="button" onClick={primary}>
            {detail.primaryCta}
          </Button>
          <Button variant="secondary" type="button" onClick={secondary}>
            {detail.secondaryCta}
          </Button>
        </div>
      </Section>

      {detail.footnotes && (
        <Section narrow className="tds-footnotes">
          {detail.footnotes.map((f) => (
            <p key={f}>{f}</p>
          ))}
        </Section>
      )}
    </main>
  );
}
