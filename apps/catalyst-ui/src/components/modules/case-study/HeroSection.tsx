import { placeholder } from "@repo/ui/assets/icons/index";
import { cn } from "@repo/ui/lib/utils";
import Image from "next/image";
import { Module } from "utils";

export default function HeroSection({ data }: Module) {
  if (!data) return null;
  const isImageAbsolute = data?.isImageAbsolute || false;
  const rtl = data?.rtl || false;
  return (
    <div className="flex flex-col gap-8 lg:gap-[64px]">
      <section
        className={cn(
          isImageAbsolute ? " " : " max-w-[1440px] mx-auto lg:px-[94px]",
          " max-lg:px-8 "
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[42px]">
          <div
            className={cn(
              rtl ? "col-span-2" : "col-span-2 lg:col-span-1",
              isImageAbsolute ? "w-full lg:max-w-[649px] ml-auto" : "",
              "flex flex-col gap-[42px]"
            )}
          >
            <div className="flex flex-col gap-8">
              <h2 className="header max-lg:text-[32px] leading-[35.2px]">
                {data?.category}
              </h2>
              <h1 className="font-medium text-xs lg:text-[40px] leading-[13.2px] lg:leading-[44px]">
                {data?.title}
              </h1>
              <p className="description max-lg:-mt-4">{data?.description}</p>
            </div>
            <div>
              {isImageAbsolute ? (
                <div className="border-[0.5px] border-[#000] w-fit overflow-hidden">
                  <Image
                    src={data?.smallImage}
                    placeholder="blur"
                    blurDataURL={placeholder.src}
                    alt={data?.title}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={434}
                    className="w-full max-w-[402px] max-h-[175px] aspect-auto object-center object-cover lg:object-contain"
                  />
                </div>
              ) : (
                <Image
                  src={data?.smallImage}
                  placeholder="blur"
                  blurDataURL={placeholder.src}
                  alt={data?.title}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={434}
                  className="w-full h-[130px] lg:h-[198px] object-cover object-center aspect-auto"
                />
              )}
            </div>
          </div>
          {data?.bigImage && (
            <div className="w-full relative max-lg:h-[330px] max-lg:col-span-2">
              <Image
                src={data?.bigImage}
                placeholder="blur"
                blurDataURL={placeholder.src}
                alt={data?.title}
                loading="lazy"
                decoding="async"
                quality={"85"}
                layout="fill"
                className="w-full h-full object-cover object-center aspect-auto"
              />
            </div>
          )}

          {data?.partnering ? (
            <div className="flex flex-col gap-4 lg:gap-8 lg:-mt-[10px] col-span-2">
              <h2 className="header">{data?.partnering?.title}</h2>
              <p className="description">{data?.partnering?.description}</p>
            </div>
          ) : null}
        </div>
      </section>
      <div className="w-full px-8 lg:px-[94px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1252"
          height="2"
          viewBox="0 0 1252 2"
          fill="none"
          className=" w-full "
        >
          <path
            opacity="0.4"
            d="M1252 1L0 1"
            stroke="#1A1A1A"
            stroke-width="0.5"
          />
        </svg>
      </div>
    </div>
  );
}
