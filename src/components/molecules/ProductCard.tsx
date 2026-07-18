interface ProductCardProps {
  name: string;
  imageUrl: string;
  desc?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onSelect?: () => void;
  onPrimary?: () => void;
  onSecondary?: () => void;
}

/** Shared mega-menu / shop card with image + actions */
export function ProductCard({
  name,
  imageUrl,
  desc,
  primaryLabel = 'Order',
  secondaryLabel = 'Learn',
  onSelect,
  onPrimary,
  onSecondary,
}: ProductCardProps) {
  return (
    <div
      className="tds-vehicle-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        background: 'transparent',
        cursor: onSelect ? 'pointer' : 'default',
      }}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (onSelect && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onSelect();
        }
      }}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
    >
      <div
        style={{
          width: '100%',
          height: 104,
          borderRadius: 'var(--radius-card)',
          overflow: 'hidden',
          background: 'var(--color-light-ash)',
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            display: 'block',
          }}
        />
      </div>
      <p
        style={{
          fontFamily: 'var(--font-text)',
          fontSize: 'var(--fs-product-name)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--color-carbon-dark)',
          margin: 0,
          textAlign: 'center',
        }}
      >
        {name}
      </p>
      {desc && (
        <p
          style={{
            fontFamily: 'var(--font-text)',
            fontSize: 13,
            fontWeight: 400,
            color: 'var(--color-pewter)',
            margin: 0,
            textAlign: 'center',
          }}
        >
          {desc}
        </p>
      )}
      <div style={{ display: 'flex', gap: 18 }} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="tds-link"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          onClick={(e) => {
            e.stopPropagation();
            onSecondary?.();
          }}
        >
          {secondaryLabel}
        </button>
        <button
          type="button"
          className="tds-link"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          onClick={(e) => {
            e.stopPropagation();
            onPrimary?.();
          }}
        >
          {primaryLabel}
        </button>
      </div>
    </div>
  );
}
