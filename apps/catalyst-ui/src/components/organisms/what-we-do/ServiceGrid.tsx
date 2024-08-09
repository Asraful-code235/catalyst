import ServiceCard from '@/components/molecules/card/ServiceCard';
import { Service } from '@/types/what-we-do';
import { cn } from '@repo/ui/lib/utils';

interface ServiceGridProps {
  services: Service[];
  rtl?: boolean;
  className?: any;
}

export default function ServiceGrid({
  services,
  rtl = false,
  className,
}: ServiceGridProps) {
  return (
    <div
      className={cn(
        'grid gap-8 ',
        rtl ? 'grid-cols-1' : 'lg:grid-cols-2 lg:gap-y-[58px] lg:gap-x-[84px]',
        className
      )}
    >
      {services.map((service: Service, index: number) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}
