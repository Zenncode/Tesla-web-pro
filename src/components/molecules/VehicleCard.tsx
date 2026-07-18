import { ProductCard } from './ProductCard';

interface VehicleCardProps {
  name: string;
  imageUrl: string;
  onSelect?: () => void;
  onLearn?: () => void;
  onOrder?: () => void;
}

/** Vehicles mega-menu card — thin wrapper around ProductCard */
export function VehicleCard({ name, imageUrl, onSelect, onLearn, onOrder }: VehicleCardProps) {
  return (
    <ProductCard
      name={name}
      imageUrl={imageUrl}
      secondaryLabel="Learn"
      primaryLabel="Order"
      onSelect={onSelect}
      onSecondary={onLearn}
      onPrimary={onOrder}
    />
  );
}
