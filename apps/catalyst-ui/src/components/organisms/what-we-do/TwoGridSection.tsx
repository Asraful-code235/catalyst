import { TwoGridSectionProps } from '@/types/what-we-do';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import { cn } from '@repo/ui/lib/utils';

interface ExtendedTwoGridSectionProps extends TwoGridSectionProps {
  titleClassName?: string;
}

export default function TwoGridSection({
  data,
  titleClassName,
}: ExtendedTwoGridSectionProps) {
  return (
    <div className='flex flex-col gap-8 lg:gap-[42px]'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
        <Title
          type='h2'
          size='big'
          className={cn(
            'text-xs leading-[18px] lg:text-[40px] lg:leading-[40px]',
            titleClassName
          )}
        >
          {data.title}
        </Title>
        <div className='flex flex-col gap-4 lg:gap-6 paragraph text-start '>
          {data?.descriptions?.map((description, key: number) => (
            <div key={key} className='flex flex-col gap-4 lg:gap-6'>
              <Text>{description.description}</Text>
              {description?.extraDescription && (
                <Text>{description.extraDescription}</Text>
              )}

              <ul>
                {description?.items && description?.items?.length > 0 ? (
                  <>
                    <ul className='flex flex-col list-disc gap-2'>
                      {description?.items?.map((child, key: number) => (
                        <li className='ml-4' key={key}>
                          <Text>{child.item}</Text>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
