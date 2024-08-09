import { CardProps, PageTitleProps, QnaItem } from '@/types/what-we-do';

import Separator from '@/components/molecules/seperator/Separator';
import PageTitle from '@/components/molecules/What-we-do/capabilities/PageTitle';
import CardSection from '@/components/organisms/what-we-do/CardSection';
import RowSeparatedListSection from '@/components/organisms/what-we-do/RowSeparatedListSection';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Container from '@repo/ui/components/molecules/Container';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';

const PageData: PageTitleProps = {
  title: 'Business Transformation',
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

const qnaData: QnaItem[] = [
  {
    id: '1.',
    title: 'Performance and Value Acceleration',
    description:
      'Rather than focusing solely on cost efforts, we drive holistic transformations, re-evaluating strategic opportunities, enhancing topline results, and optimizing the balance sheet.',
  },
  {
    id: '2.',
    title: 'Accelerated Cost Transformation',
    description:
      'Our holistic approach efficiently transforms organizations, leading to effective cost optimization, improved performance, and margins, while reinvesting in future growth, stability, and strategy.',
  },
  {
    id: '3.',
    title: 'Business Turnaround and Restructuring',
    description:
      'In times requiring fast and focused action, we help companies swiftly turn around financial decline, optimize debt management and cash flow, and address operational inefficiencies while making strategic choices.',
  },
  {
    id: '4.',
    title: 'Tech-Led Business Transformation',
    description:
      'We guide clients in leveraging the right technology, digital, or AI levers for their situation, complementing existing capabilities to drive efficiencies, innovation, and superior customer experiences.',
  },
];

const howWeWork: QnaItem[] = [
  {
    id: '1.',
    title: 'Partnership',
    description:
      'We operate in full partnership with leadership teams, sharing the agenda, incentives, and risks.',
  },
  {
    id: '2.',
    title: 'Collaboration',
    description:
      'Working closely with client teams ensures full engagement, empowerment, and upskilling.',
  },
  {
    id: '3.',
    title: 'Expertise',
    description:
      'Our dedicated team of experts brings deep experience along both the what and the how of transformation.',
  },
  {
    id: '4.',
    title: 'Methodology',
    description:
      'Our holistic methodology focuses on strategy, cost, top-line, and balance sheet improvements.',
  },
  {
    id: '5.',
    title: 'Utilization',
    description:
      "We leverage the best of Catalyst Venture Studio's industry, sector, and functional expertise to deliver value.",
  },
  {
    id: '4.',
    title: 'Sustainability',
    description:
      'Our approach ensures that improvements stick by mobilizing and enabling organizations and addressing culture.',
  },
];
export function BusinessTransformation() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col gap-8 max-w-[1440px] px-8 mx-auto pt-8 lg:pt-[94px] lg:px-[94px]'>
        <PageTitle data={PageData} />
        <div className='flex flex-col gap-8 lg:gap-[64px]'>
          <div className='flex flex-col gap-4 lg:gap-6'>
            <Title type='h2' size='medium'>
              Software Development Services
            </Title>
            <Text>
              Transformation is imperative—even for thriving companies. At
              Catalyst Venture Studio, we specialize in helping our clients
              unlock their full potential and expedite performance and value
              creation in a sustainable manner. While many business
              transformations yield short-term results, 75% fail to effect
              long-term, fundamental change. Successful transformations are
              characterized by three pivotal outcomes:
            </Text>
          </div>
          <div className='flex flex-col gap-8 lg:gap-[42px]'>
            <CardSection
              cards={cardsData}
              className='lg:grid-cols-3 xl:grid-cols-3 lg:gap-8'
            />
            <Text className=''>
              Companies achieving these outcomes are three times more likely to
              outperform average short- and long-term total shareholder returns
              for their sector. Notably, the 50 largest transformations
              we&apos;ve undertaken over the past five years have delivered 17%
              higher TSR for those companies compared to relevant stock indices.
            </Text>
            <div className='flex flex-col gap-4'>
              <Title type='h2' size='medium'>
                Our Business Transformation Services
              </Title>
              <Text>
                We collaborate closely with our clients to accelerate
                performance and drive value creation, employing a proven
                methodology tailored for business transformation:
              </Text>
            </div>
          </div>
          <div className='flex flex-col gap-8 lg:gap-6'>
            <RowSeparatedListSection
              lists={qnaData}
              className='lg:gap-[42px]'
              separatorGap='lg:gap-6'
            />
            <Separator />
          </div>
        </div>
      </div>
      <Container className='flex flex-col gap-8 lg:gap-[64px] lg:pt-[64px]'>
        <Title type='h2' size='big'>
          How We Work with Clients
        </Title>
        <div className='flex flex-col gap-6 lg:gap-6'>
          <RowSeparatedListSection
            lists={howWeWork}
            className='lg:gap-[42px]'
            separatorGap='lg:gap-6'
          />
        </div>
        <div className='-mt-2 lg:-mt-[40px]'>
          <ContactSection
            title='Connect with our Consumer Goods & Services Team'
            scheduleLink='/'
          />
        </div>
      </Container>
    </section>
  );
}
