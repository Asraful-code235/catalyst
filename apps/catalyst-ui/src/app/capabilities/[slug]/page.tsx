import {
  ApplicationDesignAndDevelopment,
  BlockchainCryptocurrency,
  BrandDevelopmentPositing,
  BusinessTransformation,
  CyberSecurity,
  FinanceStrategy,
  GoToMarketStrategy,
  InnovationStrategyDelivery,
  ItServicesStartups,
  PricingRevenueManagement,
  ProductValidationMarketResearch,
  StartupAdvisory,
  WebDesignDevelopment,
} from '@/components/pages/what-we-do/capabilities';

interface CapabilitiesProps {
  params: {
    slug: string;
  };
}
export default async function Capabilities({
  params: { slug },
}: CapabilitiesProps) {
  let content = null;

  switch (slug) {
    case 'application-design-development':
      content = <ApplicationDesignAndDevelopment />;
      break;
    case 'blockchain-cryptocurrency':
      content = <BlockchainCryptocurrency />;
      break;
    case 'cyber-security':
      content = <CyberSecurity />;
      break;
    case 'web-design-development':
      content = <WebDesignDevelopment />;
      break;
    case 'business-transformation':
      content = <BusinessTransformation />;
      break;
    case 'brand-development-positioning':
      content = <BrandDevelopmentPositing />;
      break;
    case 'go-to-market-strategy':
      content = <GoToMarketStrategy />;
      break;
    case 'finance-strategy':
      content = <FinanceStrategy />;
      break;
    case 'innovation-strategy-delivery':
      content = <InnovationStrategyDelivery />;
      break;
    case 'pricing-revenue-management':
      content = <PricingRevenueManagement />;
      break;
    case 'product-validation-market-research':
      content = <ProductValidationMarketResearch />;
      break;
    case 'startup-advisory':
      content = <StartupAdvisory />;
      break;
    case 'it-services-startups':
      content = <ItServicesStartups />;
      break;

    default:
      content = null;
  }

  return <>{content}</>;
}
