import { placeholder } from "@repo/ui/assets/icons/index";
import Image from "next/image";
import { Module } from "utils";

export default async function WhyChoseUs({ data }: Module) {
  if (!data) return null;

  const { title, description, image } = data;
  return (
    <section className="max-w-[1440px] mx-auto px-8 lg:px-[94px]">
      <article className=" space-y-8 lg:space-y-[64px]">
        <div className="flex flex-col gap-4 lg:gap-6">
          <h2 className="whyChoseHeader">{title}</h2>
          <p className="whyChoseDescription">{description}</p>
        </div>
        <Image
          loading="lazy"
          decoding="async"
          placeholder="blur"
          blurDataURL={placeholder.src}
          src={image}
          alt={title}
          className="h-[148px] lg:h-[310px] w-full aspect-auto"
        />
      </article>
    </section>
  );
}
