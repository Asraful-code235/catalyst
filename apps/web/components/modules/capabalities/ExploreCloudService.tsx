import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import { Module } from "utils";

export default function ExploreCloudService({ data }: Module) {
  if (!data) return null;
  return (
    <section className="max-w-[1440px] mx-auto p-8 lg:px-[94px] lg:py-[94px] ">
      <div className="flex flex-col gap-8 lg:gap-[42px]">
        <h2 className="text-[32px] max-sm:max-w-[266px] lg:text-[64px] font-medium">
          {data?.title}
        </h2>
        <div>
          <Select>
            <SelectTrigger className="w-full border-[0.5px] border-[#1A1A1A] py-3 rounded-none">
              <SelectValue placeholder={`${data?.items[0]?.title}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {data?.items?.map((service: Module, key: number) => (
                  <SelectItem
                    key={key}
                    value={service.value}
                    className="description"
                  >
                    {service.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <p>{data?.description}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1252"
          height="2"
          viewBox="0 0 1252 2"
          fill="none"
          className="w-full mx-auto"
        >
          <path
            d="M0 1L1252 0.999883"
            stroke="#1A1A1A"
            stroke-opacity="0.25"
            stroke-width="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
