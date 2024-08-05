import { placeholder } from "@repo/ui/assets/icons/index";
import Image from "next/image";
import { Module } from "utils";

export default function WhyPartnerWithUs({ data }: Module) {
  if (!data) return null;
  return (
    <section className="flex flex-col gap-8 w-full">
      <div className="max-w-[1440px] w-full mx-auto px-8 lg:px-[94px] flex flex-col gap-4 lg:gap-8">
        <h1 className="text-xs lg:text-[40px] font-medium leading-[13.2px] lg:leading-[44px]">
          {data?.title}
        </h1>
        <p className="description lg:w-[780px] lg:ml-auto">
          {data?.description}
        </p>
      </div>
      <div className="w-full">
        <div className="max-w-[1440px] max-lg:px-8 max-lg:mx-auto lg:max-w-[1190px] lg:w-full lg:ml-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data?.images?.map((item: Module, index: number) => (
            <div
              key={index}
              className=" relative h-[172px] lg:h-[270px] w-full lg:max-w-[572px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                placeholder="blur"
                blurDataURL={placeholder.src}
                loading="lazy"
                decoding="async"
                quality={"85"}
                width={600}
                height={400}
                className="w-full h-full object-center object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
