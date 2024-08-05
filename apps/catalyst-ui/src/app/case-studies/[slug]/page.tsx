import CaseStudyETR from '@/components/case-studies/407etr/CaseStudyETR';
import CaseStudyLaMemoire from '@/components/case-studies/CaseStudyLaMemoire/CaseStudyLaMemoire';
import CaseStudyTradible from '@/components/case-studies/tradible/CaseStudyTradible';

interface CaseStudyDataProps {
  params: {
    slug: string;
  };
}
export default async function CaseStudyDetailsPage({
  params: { slug },
}: CaseStudyDataProps) {
  let content = null;

  switch (slug) {
    case 'tradible':
      content = <CaseStudyTradible />;
      break;
    case '407-etr':
      content = <CaseStudyETR />;
      break;
    case 'la-memoire':
      content = <CaseStudyLaMemoire />;
      break;

    default:
      content = null;
  }

  return <>{content}</>;
}
