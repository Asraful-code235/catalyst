export default function AboutPageTitle({ title }: { title: string }) {
  return (
    <h1 className="text-2xl lg:text-[64px] font-medium leading-normal">
      {title}
    </h1>
  );
}
