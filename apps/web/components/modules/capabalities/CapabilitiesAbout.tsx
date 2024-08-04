"use client";
import { placeholder } from "@repo/ui/assets/icons/index";
import Image from "next/image";
import { Module } from "utils";

export default function CapabilitiesAbout({ data }: Module) {
  if (!data) return null;

  return (
    <section className="flex flex-col gap-6 lg:gap-8 w-full">
      <section className="max-w-[1440px] mx-auto px-8 lg:px-[94px] flex flex-col gap-8">
        <ul className="flex flex-col gap-8 lg:gap-[64px]">
          {data?.sections?.map((item: Module, key: number) => (
            <div key={key} className="flex flex-col gap-4 lg:gap-8">
              <h2 className="header">{item.title}</h2>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1252"
          height="2"
          viewBox="0 0 1252 2"
          fill="none"
          className="w-full mx-auto"
        >
          <path
            opacity="0.4"
            d="M1252 1L0 1"
            stroke="#1A1A1A"
            strokeWidth="0.5"
          />
        </svg>
      </section>
      {data?.services && (
        <div className="w-full flex flex-col gap-8 overflow-x-auto max-w-[1440px] mx-auto no-scrollbar">
          <ul className="flex items-center gap-4 lg:gap-8 whitespace-nowrap  no-scrollbar">
            {data?.services?.map((item: Module, key: number) => (
              <li
                key={key}
                className="bg-[#d9d9d9] rounded-lg px-2 py-2 flex-shrink-0"
              >
                <Image
                  src={item.img || placeholder.src}
                  alt={item.title || "Not provided"}
                  width={400}
                  height={400}
                  placeholder="blur"
                  blurDataURL={placeholder.src}
                  loading="lazy"
                  decoding="async"
                  className="lg:w-[191px] lg:h-[62px] w-[69px] h-[34px] object-center object-cover"
                />
              </li>
            ))}
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1252"
            height="2"
            viewBox="0 0 1252 2"
            fill="none"
            className="w-full mx-auto max-w-[1440px] px-8 lg:px-[94px]"
          >
            <path
              opacity="0.4"
              d="M1252 1L0 1"
              stroke="#1A1A1A"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      )}
    </section>
  );
}
