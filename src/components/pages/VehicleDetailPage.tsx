import { DetailLandingPage } from './DetailLandingPage';

/** @deprecated Prefer ProductPage routing via getLandingDetail */
export function VehicleDetailPage({ vehicleId }: { vehicleId: string }) {
  return <DetailLandingPage productId={vehicleId} />;
}
