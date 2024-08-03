import { placeholder } from "@repo/ui/assets/icons/index";
import Image from "next/image";
import { Module } from "utils";

export default function WhatYouCanExpect({ data }: Module) {
  if (!data) return null;
  const { list, image } = data;
  return (
    <section className="max-w-[1440px] mx-auto px-8 lg:px-[94px] pb-8 lg:pb-[64px]">
      <div
        className={`${data?.rtl === true ? "grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-[42px]" : " grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[42px]"}`}
      >
        <Image
          loading="lazy"
          decoding="async"
          width={600}
          height={600}
          quality={"85"}
          placeholder="blur"
          blurDataURL={placeholder.src}
          src={image}
          alt={list[0].title}
          className={`${data.rtl === true ? "lg:order-2" : "lg:order-1"}  max-lg:h-[242px] w-full h-full object-cover aspect-auto object-center`}
        />
        <article
          className={`${data.rtl === true ? "lg:order-1 lg:col-span-2" : "lg:order-2"} flex flex-col gap-6 justify-between`}
        >
          {list?.length > 0 &&
            list?.map((item: Module, index: number) => (
              <div key={index}>
                <div className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="header tracking-tight">{item.title}</h2>
                  <p className="description flex flex-col gap-4 lg:gap-6 ">
                    {item?.description?.map((desc: Module, desKey: number) => (
                      <span key={desKey}>{desc.list}</span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
        </article>
      </div>
    </section>
  );
}
