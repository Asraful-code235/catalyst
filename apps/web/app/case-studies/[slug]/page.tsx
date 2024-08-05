import { caseStudyData } from "utils";
import CaseStudyModule from "~/components/modules/caseStudyModule";

interface CaseStudyDataProps {
  params: {
    slug: string;
  };
}
export default async function CaseStudyDetailsPage({
  params: { slug },
}: CaseStudyDataProps) {
  const data = caseStudyData[slug] || [];
  return <CaseStudyModule modules={data} />;
}
