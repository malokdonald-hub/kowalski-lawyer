import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";

export function generateStaticParams() {
  return [{ lang: "pl" }, { lang: "en" }];
}

export default function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const { lang } = params;

  return (
    <>
      <Header />
      <main>{children}</main>
      <CTASection lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
