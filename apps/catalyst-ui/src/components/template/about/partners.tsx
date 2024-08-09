import Separator from '@/components/molecules/seperator/Separator';
import AboutPageTitle from '@/components/organisms/about/AboutPageTitle';
import PartnerSlider from '@/components/organisms/partners-slider/PartnersSlider';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Aws from '../../../../public/assets/aboutus/aws.webp';
import Mercury from '../../../../public/assets/aboutus/mercury.webp';
import Meta from '../../../../public/assets/aboutus/meta.webp';
import Microsoft from '../../../../public/assets/aboutus/microsoft.webp';
import Stripe from '../../../../public/assets/aboutus/stripe.webp';

const partners = [
  {
    img: Aws,
  },
  {
    img: Mercury,
  },
  {
    img: Microsoft,
  },
  {
    img: Meta,
  },
  {
    img: Stripe,
  },
];

const listItems = [
  {
    title: 'A Network Built on Knowledge',
    description:
      "We partner with trusted leaders across a wide spectrum of industries to co-create transformative solutions that address the unique challenges and opportunities facing our clients. Whether it's in consumer goods and services, e-commerce, real estate, or software and technology, our collaborations are driven by a shared vision of innovation and excellence.",
  },
  {
    title: 'A Sense of Belonging',
    description:
      'In the fast-paced world of technology, collaboration is key. We leverage our network of industry leaders to tap into unparalleled expertise and insights, ensuring that our clients benefit from best-in-class solutions and top-notch results. By fostering a culture of collaboration and knowledge-sharing, we empower our clients to thrive in an ever-evolving landscape.',
  },
  {
    title: 'A Pioneering Spirit',
    description:
      "Our partnerships extend beyond the conventional boundaries, embracing the bleeding edge of innovation and disruption. We collaborate with tech giants and industry trailblazers who continually push the boundaries of what's possible, driving forward-thinking solutions that redefine industries and shape the future.",
  },
  {
    title: 'A Comprehensive Approach',
    description:
      "With our clients' needs at the forefront, we take a comprehensive approach to our partnerships, encompassing diverse tools, platforms, and expertise areas. From consumer goods and services to e-commerce, real estate, and software and technology, our strategic collaborations enable seamless integrations and deliver holistic solutions tailored to our clients' unique requirements.",
  },
  {
    title: 'More Than the Sum of Our Parts',
    description:
      "Our strategic partnerships with industry leaders are more than just collaborations – they're catalysts for innovation and growth. By pooling our collective brainpower and resources, we unlock new possibilities and produce some of the most innovative solutions in the market today. Together, we're driving meaningful change and shaping the future of industries worldwide.",
  },
];
export function Partners() {
  return (
    <section className='max-w-[1440px] mx-auto flex flex-col gap-8 lg:gap-[64px] p-8 lg:p-[94px]'>
      <AboutPageTitle title={'Partners'} />
      <div className='flex flex-col gap-4'>
        <Title type='h2' size='medium'>
          Our Partnerships
        </Title>
        <Text>
          At Catalyst Venture Studio, we&apos;re proud to collaborate with a
          diverse array of industry leaders and innovators. Each partnership is
          not only integral to our work but also essential to the success of
          your business. Our network is built on a foundation of shared
          knowledge, collective expertise, and a commitment to driving
          transformative outcomes for our clients.
        </Text>
      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <Title size='medium' type='h2'>
            Our Partnerships
          </Title>
          <Text>
            We’re honored to collaborate with the industry’s most formidable
            tech titans. Each partnership is core to our work — and core to your
            business success.
          </Text>
        </div>
        <Separator />
        <PartnerSlider partners={partners} />
        <Separator />
      </div>
      <ul className='flex flex-col gap-8 lg:gap-[42px]  w-full'>
        {listItems.map((item, key) => (
          <li key={key} className='flex flex-col gap-8 lg:gap-[42px]'>
            <div className='grid lg:grid-cols-3 gap-4 lg:gap-16'>
              <Title type='h2' size='medium' className=' flex-shrink-0'>
                {item.title}
              </Title>
              <Text className=' lg:col-span-2'>{item.description}</Text>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1252'
              height='2'
              viewBox='0 0 1252 2'
              fill='none'
              className='w-full mx-auto'
            >
              <path
                d='M0 1L1252 0.999883'
                stroke='#1A1A1A'
                strokeOpacity='0.25'
                strokeWidth='0.5'
              />
            </svg>
          </li>
        ))}
      </ul>
    </section>
  );
}
