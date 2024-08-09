import { CardProps, PageTitleProps, QnaItem } from '@/types/what-we-do';

import Separator from '@/components/molecules/seperator/Separator';
import PageTitle from '@/components/molecules/What-we-do/capabilities/PageTitle';
import RowSeparatedListSection from '@/components/organisms/what-we-do/RowSeparatedListSection';
import UnorderedList from '@/components/organisms/what-we-do/UnorderedList';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Container from '@repo/ui/components/molecules/Container';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';

const PageData: PageTitleProps = {
  title: 'Pricing and Revenue Management',
  description: 'Capabilities - Business Strategy ',
};

export const cardsData: CardProps[] = [
  {
    number: '01',
    title: 'Sustainable Value Creation',
    description:
      'We prioritize sustained gains post-transformation, emphasizing continuous value delivery.',
  },
  {
    number: '02',
    title: 'Step Changes in Capabilities',
    description:
      'Our goal is to equip organizations with the necessary capabilities to implement changes and drive continuous improvement effectively.',
  },
  {
    number: '03',
    title: 'Sustained Culture Shift',
    description:
      'We foster a culture that ensures alignment and engagement in new ways of working, facilitating long-term success.',
  },
];

const howWeHelp = ['B2B Pricing', 'B2C Pricing', 'Revenue Growth Management'];

const howWeWork: QnaItem[] = [
  {
    id: '1.',
    title: 'Tailored B2B Pricing Strategies',
    description:
      "Effective B2B pricing isn't just about numbers—it's about effectively communicating and monetizing the value of your offerings. Our experts help companies leverage data insights to set optimal prices while also equipping sales teams with the necessary tools and knowledge.",
  },
  {
    id: '2.',
    title: 'Understanding B2C Purchasing Behavior',
    description:
      'In the B2C realm, understanding consumer behavior and preferences is paramount. We assist companies in gaining deep insights into purchasing behaviors, enabling them to devise pricing strategies that resonate with their target audience and drive customer loyalty.',
  },
  {
    id: '3.',
    title: 'Dynamic Pricing and Personalization',
    description:
      'Dynamic pricing, powered by data, AI, and automation, enables companies to adjust prices rapidly and personalize offerings based on individual preferences or segment-specific trends. We help companies implement dynamic pricing strategies to manage volatility and enhance customer engagement.',
  },
  {
    id: '4.',
    title: 'Net Revenue Management for Growth',
    description:
      'Net revenue management shifts the focus from volume-based growth to pricing and mix optimization. Our consultants collaborate with companies to prototype, incubate, and industrialize solutions that drive growth by maximizing revenue from pricing strategies.',
  },
  {
    id: '5.',
    title: 'Adapting to Evolving Pricing Models',
    description:
      "As industries evolve, so do pricing strategies and models. Whether it's subscription-based services or innovative digital pricing models, we help companies assess new approaches and adapt their pricing strategies to capture emerging opportunities.",
  },
  {
    id: '6.',
    title: 'Monetizing Digital Innovation',
    description:
      'In the digital age, pricing innovation is crucial for capturing and accelerating value creation. We assist companies in applying innovative pricing frameworks, aligning sales incentives, and optimizing packaging to capitalize on digital opportunities.',
  },
];

export function PricingRevenueManagement() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col gap-8 max-w-[1440px] px-8 mx-auto pt-8 lg:pt-[94px] lg:px-[94px]'>
        <PageTitle data={PageData} />
        <Text>
          In today&apos;s dynamic business landscape, pricing isn&apos;t just
          about setting a number—it&apos;s about unlocking substantial value and
          driving growth. At Catalyst Venture Studio, our pricing and revenue
          management consulting teams specialize in equipping companies with the
          capabilities, processes, and mindset needed to harness the full
          potential of pricing strategies, regardless of market conditions.
        </Text>
      </div>
      <Container className='flex flex-col gap-8 lg:gap-[64px] lg:pt-[64px]'>
        <div className='flex flex-col gap-4 lg:gap-8 '>
          <Title type='h2' size='medium'>
            Our Pricing and Revenue Management Services
          </Title>
          <UnorderedList lists={howWeHelp} />
        </div>
        <Separator />

        <div className='flex flex-col gap-8 lg:gap-[120px]'>
          <div className='flex flex-col gap-4 lg:gap-8'>
            <Title type='h2' size='medium'>
              How Catalyst Venture Studio Empowers Companies in Pricing and
              Revenue Management
            </Title>
            <Text>
              To truly leverage the power of pricing, companies must cultivate a
              robust internal capability that seamlessly integrates technology,
              advanced analytics, and agile methodologies. Here&apos;s how we
              support companies in mastering pricing and revenue management:
            </Text>
          </div>
          <RowSeparatedListSection
            lists={howWeWork}
            className='lg:gap-[42px]'
            separatorGap='lg:gap-6'
          />
        </div>
        <div className='-mt-2 lg:-mt-[40px]'>
          <ContactSection
            title='Connect with our Innovation Strategy and Delivery Team'
            scheduleLink='/'
          />
        </div>
      </Container>
    </section>
  );
}
