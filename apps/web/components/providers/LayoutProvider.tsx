import Footer from "@repo/ui/components/shared/Footer";
import Header from "@repo/ui/components/shared/Header";

export default function LayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
}
