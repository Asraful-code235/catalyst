import React from "react";
import { cn } from "@repo/ui/lib/utils";

interface TitleProps {
  className?: string;
  size: "big" | "medium";
  type?: "h1" | "h2" | "h3";
  children: React.ReactNode;
}

const sizeStyles = {
  big: `
     text-[32px] font-medium lg:text-[64px]
    leading-normal line-clamp-4 w-full
  `,
  medium: `
    text-xs leading-[18px] lg:text-2xl lg:leading-[36px]
    font-normal font-medium
  `,
  small: `
  text-xs lg:text-xl leading-normal font-medium 
`,
};

const Title: React.FC<TitleProps> = ({
  className,
  size,
  type = "h2",
  children,
}) => {
  const Component = type as keyof JSX.IntrinsicElements;
  const baseStyles = sizeStyles[size];

  return (
    <Component className={cn(baseStyles, className)}>{children}</Component>
  );
};

export default Title;
