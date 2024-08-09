import { Module } from "utils";

export default function AccordionList({ data }: Module) {
  if (!data) return null;
  return (
    <section className="max-w-[1440px] mx-auto p-8 lg:px-[94px] lg:py-16 flex flex-col gap-8 lg:gap-16">
      {data?.title ||
        (data?.description && (
          <div className="flex flex-col gap-4">
            {data?.title && <h2 className="header">{data?.title}</h2>}
            {data?.description && (
              <h2 className="paragraph text-left">{data?.description}</h2>
            )}
          </div>
        ))}

      <section className="flex flex-col divide-y-2 divide-gray-200">
        {!data?.rtl ? (
          <>
            {data?.accordion?.map((item: Module, key: number) => (
              <div
                key={key}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[125px] py-6 lg:py-[42px] first:pt-[0px] last:pb-[0px]"
              >
                <p className="header">{item.id}. </p>
                <div className="flex flex-col gap-4 lg:gap-6 col-span-2">
                  <p className="header">{item.title}</p>
                  <p className="description ">{item.description}</p>
                </div>
              </div>
            ))}
          </>
        ) : null}
      </section>
    </section>
  );
}
