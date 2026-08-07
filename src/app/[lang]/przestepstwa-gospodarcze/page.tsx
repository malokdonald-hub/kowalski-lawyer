import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import IconCardsSection from "@/components/sections/IconCardsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import FaqSection from "@/components/sections/FaqSection";
import dataPl from "@/data/pl/criminal-economic-crimes.json";
import dataEn from "@/data/en/criminal-economic-crimes.json";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const data = params.lang === "en" ? dataEn : dataPl;
  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}

export default function PrzestepstwaGospodarczePage({ params }: { params: { lang: string } }) {
  const data = params.lang === "en" ? dataEn : dataPl;

  return (
    <>
      <HeroSection data={data.hero} />
      <IconCardsSection data={data.criminalLaw} background="white" />
      <IconCardsSection data={data.economicCrimes} background="background" />
      <TimelineSection data={{ title: data.process.title, steps: data.process.steps }} />
      <IconCardsSection data={data.whyMe} background="white" />
      <FaqSection data={data.faq} />
    </>
  );
}
