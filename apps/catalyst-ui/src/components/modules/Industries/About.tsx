import { separator } from "@repo/ui/assets/icons/index";
import Image from "next/image";
import { Module } from "utils";

export default function About({ data }: Module) {
  if (!data) return null;
  const { title, description, extraDescription } = data;
  return (
    <>
      <section className="max-w-[1440px] mx-auto p-8 lg:p-[94px] grid grid-cols-1 lg:grid-cols-2 max-lg:gap-4 ">
        <p className="aboutTitle text-left tracking-tight h-fit">{title}</p>
        <div className="aboutDescription tracking-tight flex flex-col gap-6 lg:gap-8 w-full lg:max-w-[671px]">
          <p className="">{description}</p>
          {extraDescription && <p>{extraDescription}</p>}
        </div>
      </section>
      <Image
        src={separator.src}
        alt="separator"
        width={400}
        height={400}
        className="w-full h-auto pb-8 lg:pb-[64px] max-w-[1440px] mx-auto px-8 lg:px-[94px]"
      />
    </>
  );
}
