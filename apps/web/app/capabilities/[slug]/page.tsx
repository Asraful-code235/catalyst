// import { IndustriesModuleData } from "utils";
import { capabilitiesModuleData } from "utils";
import CapabilitiesModule from "~/components/modules/capabilitiesModule";

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
