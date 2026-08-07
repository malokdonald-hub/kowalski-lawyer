import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import BioSection from "@/components/sections/BioSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import IconCardsSection from "@/components/sections/IconCardsSection";
import StatsSection from "@/components/sections/StatsSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import FaqSection from "@/components/sections/FaqSection";
import dataPl from "@/data/pl/about.json";
import dataEn from "@/data/en/about.json";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const data = params.lang === "en" ? dataEn : dataPl;
  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}

export default function OKancelariiPage({ params }: { params: { lang: string } }) {
  const data = params.lang === "en" ? dataEn : dataPl;

  return (
    <>
      <HeroSection data={data.hero} />
      <BioSection data={data.bio} />
      <ExperienceSection data={data.experience} />
      <IconCardsSection data={data.achievements} background="white" />
      <StatsSection data={data.stats} />
      <IconCardsSection data={data.values} background="background" />
      <PublicationsSection data={data.publications} />
      <FaqSection data={data.faq} />
    </>
  );
}
