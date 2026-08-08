import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import PricingPreviewSection from "@/components/sections/PricingPreviewSection";
import homePl from "@/data/pl/home.json";
import homeEn from "@/data/en/home.json";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const home = params.lang === "en" ? homeEn : homePl;
  return {
    title: home.seo.title,
    description: home.seo.description,
  };
}

export default function Home({ params }: { params: { lang: string } }) {
  const home = params.lang === "en" ? homeEn : homePl;

  return (
    <>
      <HeroSection data={home.hero} />
      <StatsSection data={home.stats} />
      <ServicesSection data={home.services} />
      <BenefitsSection data={home.benefits} />
      <TestimonialsSection data={home.testimonials} />
      <div className="bg-secondary border border-gray-200 rounded-lg w-full max-w-4xl mx-auto p-8 md:p-12 text-center mt-16">
        <PricingPreviewSection
          data={{ ...home.pricingPreview, linkUrl: `/${params.lang}/uslugi` }}
        />
      </div>
      <FaqSection data={home.faq} />
    </>
  );
}
