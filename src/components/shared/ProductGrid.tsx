import type { CatalogItem } from '../../data/navCatalog';
import { ProductCard } from '../molecules/ProductCard';

type ProductGridProps = {
  items: CatalogItem[];
  primaryLabel?: string | ((item: CatalogItem) => string);
  secondaryLabel?: string;
  onSelect: (item: CatalogItem) => void;
  onPrimary: (item: CatalogItem) => void;
  onSecondary: (item: CatalogItem) => void;
};

export function ProductGrid({
  items,
  primaryLabel = 'Order',
  secondaryLabel = 'Learn',
  onSelect,
  onPrimary,
  onSecondary,
}: ProductGridProps) {
  return (
    <div className="tds-product-grid">
      {items.map((item) => {
        const primary =
          typeof primaryLabel === 'function' ? primaryLabel(item) : primaryLabel;
        return (
          <div key={item.id} className="tds-card-lift">
            <ProductCard
              name={item.name}
              desc={item.desc}
              imageUrl={item.image}
              primaryLabel={primary}
              secondaryLabel={secondaryLabel}
              onSelect={() => onSelect(item)}
              onPrimary={() => onPrimary(item)}
              onSecondary={() => onSecondary(item)}
            />
          </div>
        );
      })}
    </div>
  );
}
