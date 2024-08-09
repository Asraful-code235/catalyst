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
  title: 'Innovation Strategy and Delivery',
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

const howWeHelp = [
  'Business Model Innovation',
  'Corporate Venturing',
  'Product Innovation and Engineering',
];

const howWeWork: QnaItem[] = [
  {
    id: '1.',
    title: 'Innovation Strategy',
    description:
      'We delve deep into both external and internal factors to craft an innovation strategy that harmonizes with your overarching business objectives. By analyzing market trends and assessing your innovation capabilities, we identify key areas for investment to drive meaningful impact.',
  },
  {
    id: '2.',
    title: 'Innovation Sprints',
    description:
      "Crafting a great innovation strategy is just the beginning. In today's fast-paced environment, swift action is paramount. Through sprint-based approaches, we collaborate with you to develop and launch minimum viable products, fostering a culture of experimentation and iteration.",
  },
  {
    id: '3.',
    title: 'Business Build and Scale-Up',
    description:
      'Transitioning from experimentation to execution requires finding product-market fit and scaling successful initiatives rapidly. We work alongside you to navigate this critical phase, ensuring the most promising projects reach their full potential.',
  },
  {
    id: '4.',
    title: 'Innovation Enablement',
    description:
      'Adaptability is key to sustained innovation success. We help you identify and cultivate the necessary capabilities to drive innovation, whether through internal development, strategic partnerships, or external acquisitions.',
  },
];

export function InnovationStrategyDelivery() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col gap-8 max-w-[1440px] px-8 mx-auto pt-8 lg:pt-[94px] lg:px-[94px]'>
        <PageTitle data={PageData} />
        <Text>
          Innovation is the lifeblood of progress, yet navigating the
          complexities of capitalizing on new ideas requires more than just
          creativity—it demands a strategic approach tailored to your business
          objectives. At Catalyst Venture Studio, we specialize in guiding
          clients to build an innovation engine that not only thrives in the
          present but also remains adaptable to future market shifts.
        </Text>
      </div>
      <Container className='flex flex-col gap-8 lg:gap-[64px] lg:pt-[64px]'>
        <div className='flex flex-col gap-4 lg:gap-8 '>
          <Title type='h2' size='medium'>
            Our Innovation Services
          </Title>
          <UnorderedList lists={howWeHelp} />
        </div>
        <Separator />

        <div className='flex flex-col gap-8 lg:gap-[120px]'>
          <div className='flex flex-col gap-4 lg:gap-8'>
            <Title type='h2' size='medium'>
              Our Approach to the Innovation Journey
            </Title>
            <Text>
              Avoiding the pitfalls of innovation necessitates an approach that
              blends strategic vision with actionable steps and agility. Whether
              it&apos;s revolutionizing consumer products or reshaping B2B
              landscapes, our innovation consulting methodology centers on these
              core principles. Here&apos;s how we guide you through the
              innovation journey:
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
