import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ConsultationSection from "@/components/sections/ConsultationSection";
import PricingSection from "@/components/sections/PricingSection";
import PaymentInfoSection from "@/components/sections/PaymentInfoSection";
import FaqSection from "@/components/sections/FaqSection";
import dataPl from "@/data/pl/services-pricing.json";
import dataEn from "@/data/en/services-pricing.json";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const data = params.lang === "en" ? dataEn : dataPl;
  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}

export default function UslugiPage({ params }: { params: { lang: string } }) {
  const data = params.lang === "en" ? dataEn : dataPl;

  return (
    <>
      <HeroSection data={data.hero} />
      <ConsultationSection data={data.consultation} />
      <PricingSection data={data.pricing} />
      <PaymentInfoSection data={data.paymentInfo} />
      <FaqSection data={data.faq} />
    </>
  );
}
