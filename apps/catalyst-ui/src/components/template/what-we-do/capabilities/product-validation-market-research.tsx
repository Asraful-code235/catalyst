import { CardProps, PageTitleProps, QnaItem } from '@/types/what-we-do';

import Separator from '@/components/molecules/seperator/Separator';
import PageTitle from '@/components/molecules/What-we-do/capabilities/PageTitle';
import RowSeparatedListSection from '@/components/organisms/what-we-do/RowSeparatedListSection';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Container from '@repo/ui/components/molecules/Container';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';

const PageData: PageTitleProps = {
  title: 'Product Validation/Market Research',
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

const howWeWork: QnaItem[] = [
  {
    id: '1.',
    title: '01. Concept Testing',
    description:
      'We conduct concept testing to assess the viability and potential of new product ideas. By gathering feedback from target customers, we help companies validate their concepts, identify market demand, and refine their product offerings accordingly.',
  },
  {
    id: '2.',
    title: '02. Market Analysis',
    description:
      'Our experts conduct in-depth market analysis to understand industry trends, competitive landscape, and customer preferences. By analyzing market data and insights, we help companies identify market opportunities, assess market dynamics, and make informed strategic decisions.',
  },
  {
    id: '3.',
    title: '03. Customer Validation',
    description:
      'We help companies validate their product ideas by engaging with target customers through surveys, interviews, and focus groups. By gathering firsthand feedback and insights from potential users, we help companies refine their product features, value proposition, and go-to-market strategy.',
  },
  {
    id: '4.',
    title: '04. Prototype Testing',
    description:
      'We assist companies in developing prototypes and conducting user testing to evaluate product usability, functionality, and design. By gathering user feedback early in the product development process, we help companies identify areas for improvement and iterate on their prototypes effectively.',
  },
  {
    id: '5.',
    title: '05. Competitive Analysis',
    description:
      'We conduct competitive analysis to assess the strengths and weaknesses of competitors and benchmark against industry best practices. By analyzing competitor products, pricing strategies, and market positioning, we help companies identify competitive advantages and differentiate their offerings in the market.',
  },
  {
    id: '6.',
    title: '06. Market Segmentation',
    description:
      'We help companies identify and segment their target market based on demographic, psychographic, and behavioral factors. By understanding the diverse needs and preferences of different customer segments, we help companies tailor their product offerings and marketing strategies to effectively reach and engage their target audience.',
  },
];

export function ProductValidationMarketResearch() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col gap-8 max-w-[1440px] px-8 mx-auto pt-8 lg:pt-[94px] lg:px-[94px]'>
        <PageTitle data={PageData} />
        <Text>
          In the dynamic landscape of entrepreneurship, validating product ideas
          and conducting thorough market research are crucial steps towards
          building successful ventures. At Catalyst Venture Studio, we offer
          comprehensive product validation and market research services to help
          startups and companies navigate the path from concept to market with
          confidence.
        </Text>
      </div>
      <Container className='flex flex-col gap-8 lg:gap-[64px] lg:pt-[64px]'>
        <div className='flex flex-col gap-6 lg:gap-16'>
          <Title type='h2' size='medium'>
            Our Product Validation and Market Research Services
          </Title>

          <div className='flex flex-col gap-8 lg:gap-6'>
            <RowSeparatedListSection
              lists={howWeWork}
              className='lg:gap-[42px]'
              separatorGap='lg:gap-6'
            />
            <Separator />
          </div>
        </div>

        <div className='flex flex-col gap-6 lg:gap-[42px]'>
          <Title type='h2' size='medium'>
            How We Help Companies Validate Products and Conduct Market Research
          </Title>
          <ul className='flex flex-col gap-0.5 lg:gap-2 list-disc'>
            <li className='ml-4 lg:ml-6'>
              <Text>
                <strong className='font-bold'>
                  Identifying Market Opportunities:
                </strong>{' '}
                We help companies identify untapped market opportunities and
                niche segments where their products can meet unmet needs or
                solve specific pain points.
              </Text>
            </li>
            <li className='ml-4 lg:ml-6'>
              <Text>
                <strong className='font-bold'>
                  Gathering Actionable Insights:
                </strong>{' '}
                Through qualitative and quantitative research methods, we gather
                actionable insights that inform product development, marketing
                strategy, and go-to-market planning.
              </Text>
            </li>
            <li className='ml-4 lg:ml-6'>
              <Text>
                <strong className='font-bold'>Mitigating Risk:</strong> By
                validating product concepts and conducting thorough market
                research upfront, we help companies mitigate the risk of
                investing resources in products or markets with limited
                potential for success.
              </Text>
            </li>
            <li className='ml-4 lg:ml-6'>
              <Text>
                <strong className='font-bold'>
                  Optimizing Product-Market Fit:
                </strong>{' '}
                We help companies refine their product offerings to better align
                with market needs and preferences, increasing the likelihood of
                achieving product-market fit and driving customer adoption and
                satisfaction.
              </Text>
            </li>
            <li className='ml-4 lg:ml-6'>
              <Text>
                <strong className='font-bold'>
                  Informing Strategic Decision-Making:
                </strong>{' '}
                We help Our research and insights empower companies to make
                informed strategic decisions, guiding resource allocation,
                investment priorities, and growth strategies based on market
                dynamics and customer feedback.
              </Text>
            </li>
          </ul>
        </div>
        <Text className='lg:mt-5'>
          At Catalyst Venture Studio, we understand the importance of rigorous
          product validation and market research in building successful
          ventures. With our expertise and tailored approach, we help companies
          navigate the complexities of product development and market entry,
          positioning them for long-term success and growth.
        </Text>

        <ContactSection
          title='Connect with our Product Validation/Market Research Team'
          scheduleLink='/'
        />
      </Container>
    </section>
  );
}
