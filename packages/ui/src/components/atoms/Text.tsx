import { cn } from "@repo/ui/lib/utils";
import React from "react";

interface TextProps {
  className?: string;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: React.ReactNode;
}

const baseStyles = `
  text-xs leading-[18px] lg:text-base lg:leading-6 font-normal
`;

const Text: React.FC<TextProps> = ({ className, type = "p", children }) => {
  const Component = type as keyof JSX.IntrinsicElements;

  return (
    <Component className={cn(baseStyles, className)}>{children}</Component>
  );
};

export default Text;
