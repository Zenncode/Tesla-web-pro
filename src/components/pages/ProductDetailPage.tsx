import { DetailLandingPage } from './DetailLandingPage';

/** @deprecated Prefer ProductPage routing via getLandingDetail */
export function ProductDetailPage({ productId }: { productId: string }) {
  return <DetailLandingPage productId={productId} />;
}
