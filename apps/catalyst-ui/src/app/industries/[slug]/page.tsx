import IndustriesModule from '@/components/modules/IndustriesModule';
import { IndustriesModuleData } from 'utils';

interface IndustriesProps {
  params: {
    slug: string;
  };
}
export default async function Industries({
  params: { slug },
}: IndustriesProps) {
  const data = IndustriesModuleData[slug] || [];
  return <IndustriesModule modules={data} />;
}
