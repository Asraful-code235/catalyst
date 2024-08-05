"use client";

import { placeholder } from "@repo/ui/assets/icons/index";
import { cn } from "@repo/ui/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Module } from "utils";

export default function GridAccordionList({ data }: Module) {
  if (!data) return null;

  const param = useParams();
  const rtl = data?.rtl || false;
  return (
    <div className="flex flex-col gap-8 max-w-[1440px] mx-auto">
      <section
        className={cn(
          "px-8 lg:px-[94px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[42px] overflow-hidden"
        )}
      >
        <div
          className={cn(
            param.slug === "la-memoire"
              ? "max-lg:h-[405px]"
              : "h-full  max-lg:h-[571px]",
            "relative w-full",
            rtl ? "order-2" : "order-1"
          )}
        >
          <Image
            src={data?.image}
            placeholder="blur"
            blurDataURL={placeholder.src}
            alt={"image"}
            loading="lazy"
            decoding="async"
            quality={"85"}
            layout="fill"
            className="w-full h-auto object-cover object-center aspect-auto"
          />
        </div>
        <div className="flex flex-col gap-8 lg:gap-16">
          {data?.title && (
            <h1 className="lg:text-[40px] font-medium leading-[44px]">
              {data?.title}
            </h1>
          )}
          <ul className="flex flex-col gap-6 lg:gap-8">
            {data?.list?.map((list: Module, index: number) => (
              <li key={index} className="flex flex-col gap-6 lg:gap-8">
                <div className="flex flex-col gap-4">
                  <p className="header">{list?.title}</p>
                  <p className="description">{list?.description}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="591"
                  height="2"
                  viewBox="0 0 591 2"
                  fill="none"
                  className={cn(
                    data?.list?.length - 1 === index ? "hidden" : "block",
                    "w-full max-lg:mx-auto flex-1 "
                  )}
                >
                  <path
                    opacity="0.4"
                    d="M591 1L0 1"
                    stroke="#1A1A1A"
                    stroke-width="0.5"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1252"
        height="2"
        viewBox="0 0 1252 2"
        fill="none"
        className="w-full flex-1 mx-auto px-8 lg:px-[94px] "
      >
        <path
          opacity="0.4"
          d="M1252 1L0 1"
          stroke="#1A1A1A"
          stroke-width="0.5"
        />
      </svg>
    </div>
  );
}
