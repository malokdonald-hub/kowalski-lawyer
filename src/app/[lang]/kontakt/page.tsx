import type { Metadata } from "next";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import dataPl from "@/data/pl/contact.json";
import dataEn from "@/data/en/contact.json";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const data = params.lang === "en" ? dataEn : dataPl;
  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}

export default function KontaktPage({ params }: { params: { lang: string } }) {
  const data = params.lang === "en" ? dataEn : dataPl;

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <ContactInfoSection data={data.office} />
        <div id="formularz">
          <ContactFormSection data={data.form} />
        </div>
      </div>
    </section>
  );
}
