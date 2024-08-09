import { Button } from '@repo/ui/components/atoms/button';
import Title from '@repo/ui/components/atoms/Title';
import Separator from '../../seperator/Separator';

interface Props {
  title: string;
  scheduleLink: string;
}

export default function ContactSection({ title, scheduleLink }: Props) {
  return (
    <section className='flex flex-col gap-8 lg:gap-[64px] '>
      <Separator />
      <div className='flex flex-col gap-6'>
        <Title type='h2' size='medium' className='header text-center'>
          {title}
        </Title>
        <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
          <Button className='max-lg:text-xs'>
            <a href={scheduleLink} target='_blank'>
              Schedule a Consultation
            </a>
          </Button>
          <Button className='max-lg:text-xs' variant={'link'}>
            <a href={`/contact-us`}>Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
