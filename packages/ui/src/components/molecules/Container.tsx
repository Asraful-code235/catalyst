import { cn } from "@repo/ui/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <section
      className={cn(
        "max-w-[1440px] mx-auto p-8 pb-[64px] lg:px-[94px] lg:py-[94px]",
        className
      )}
    >
      {children}
    </section>
  );
}
