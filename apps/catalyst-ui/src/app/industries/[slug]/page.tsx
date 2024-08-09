import {
  ConsumerGoodsServices,
  Ecommerce,
  PublicSector,
  RealState,
  SoftwareTechnology,
} from '@/components/pages/what-we-do/industries';

interface IndustriesProps {
  params: {
    slug: string;
  };
}
export default async function Industries({
  params: { slug },
}: IndustriesProps) {
  let content = null;

  switch (slug) {
    case 'consumer-goods-services':
      content = <ConsumerGoodsServices />;
      break;
    case 'ecommerce':
      content = <Ecommerce />;
      break;
    case 'software-technology':
      content = <SoftwareTechnology />;
      break;
    case 'public-sector':
      content = <PublicSector />;
      break;
    case 'real-estate':
      content = <RealState />;
      break;

    default:
      content = null;
  }

  return <>{content}</>;
}
