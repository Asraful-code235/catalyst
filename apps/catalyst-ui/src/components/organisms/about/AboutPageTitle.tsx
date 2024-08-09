import Title from '@repo/ui/components/atoms/Title';

export default function AboutPageTitle({ title }: { title: string }) {
  return (
    <Title
      type='h1'
      size='medium'
      className='text-2xl lg:text-[64px] font-medium leading-normal'
    >
      {title}
    </Title>
  );
}
