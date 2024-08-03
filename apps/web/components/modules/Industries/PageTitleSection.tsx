import { placeholder } from "@repo/ui/assets/icons/index";
import Image from "next/image";
import { Module } from "utils";

export default function PageTitleSection({ data }: Module) {
  if (!data) return null;
  const { title, category, backgroundImage } = data;
  return (
    <section className="flex flex-col relative">
      <Image
        src={backgroundImage}
        placeholder="blur"
        blurDataURL={placeholder.src}
        alt={title}
        loading="lazy"
        decoding="async"
        width={1200}
        height={434}
        className="h-[227px] lg:h-[434px] w-full aspect-auto"
      />
      <div className="max-w-[1440px] mx-auto w-full lg:gap-6 px-8 lg:px-[94] py-[42px] absolute bottom-0 left-0 right-0  ">
        <div className="flex flex-col gap-4 ">
          <h1 className="pageTitle">{title}</h1>
          <p className="pageCategory">{category}</p>
        </div>
      </div>
    </section>
  );
}
