// import { IndustriesModuleData } from "utils";
import CapabilitiesModule from '@/components/modules/capabilitiesModule';
import { capabilitiesModuleData } from 'utils';

interface CapabilitiesProps {
  params: {
    slug: string;
  };
}
export default async function CapabalitiesPage({
  params: { slug },
}: CapabilitiesProps) {
  const data = capabilitiesModuleData[slug] || [];

  return <CapabilitiesModule modules={data} />;
}
