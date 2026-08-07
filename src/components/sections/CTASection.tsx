"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import globalDataPl from "@/data/pl/global.json";
import globalDataEn from "@/data/en/global.json";

export default function CTASection({ lang }: { lang: string }) {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'pl';
  const globalData = currentLang === "en" ? globalDataEn : globalDataPl;
  const { cta } = globalData;

  return (
    <section className="bg-secondary text-dark">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl font-bold text-white sm:text-4xl">{cta.title}</h2>
        <p className="max-w-2xl text-base text-white/70 sm:text-lg">{cta.description}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href={`/${currentLang}/kontakt`}
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90 sm:text-base"
          >
            {cta.primaryButton}
          </Link>
          <a
            href={`tel:${cta.phone.replace(/\s+/g, "")}`}
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-dark"
          >
            {cta.secondaryButton}
          </a>
        </div>
      </div>
    </section>
  );
}