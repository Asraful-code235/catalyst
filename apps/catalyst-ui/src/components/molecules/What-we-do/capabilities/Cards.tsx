export default function Cards({ item }: any) {
  return (
    <div className="description flex flex-col gap-8 lg:gap-[42px] p-4 bg-[#1A1A1A] text-white hover:bg-opacity-90 cursor-pointer transition-colors duration-300 ease-in-out">
      <div className="flex flex-col gap-0.5 font-medium ">
        <p>{item.id}</p>
        <p>{item.title}</p>
      </div>
      <p className="font-normal tracking-tight">{item.description}</p>
    </div>
  );
}
