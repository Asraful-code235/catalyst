import {
  CaseStudyETR,
  LaMemoire,
  Tradible,
} from '@/components/pages/case-study';

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
      content = <Tradible />;
      break;
    case '407-etr':
      content = <CaseStudyETR />;
      break;
    case 'la-memoire':
      content = <LaMemoire />;
      break;

    default:
      content = null;
  }

  return <>{content}</>;
}
