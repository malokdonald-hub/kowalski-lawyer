"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface HeroData {
  headline: string;
  headlineHighlight?: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  primaryCtaHref?: string;
  secondaryCtaHref?: string;
}

interface HeroSectionProps {
  data: HeroData;
}

function renderHeadline(headline: string, highlight?: string) {
  if (!highlight) return headline;

  const index = headline.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) return headline;

  const before = headline.slice(0, index);
  const match = headline.slice(index, index + highlight.length);
  const after = headline.slice(index + highlight.length);

  return (
    <>
      {before}
      <span>{match}</span>
      {after}
    </>
  );
}

export default function HeroSection({ data }: HeroSectionProps) {
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'pl';

  const {
    headline,
    headlineHighlight,
    subheadline,
    primaryCta,
    secondaryCta,
    primaryCtaHref = `/${lang}/kontakt`,
    secondaryCtaHref,
  } = data;

  const phoneHref = secondaryCtaHref ?? `tel:${secondaryCta.replace(/[^\d+]/g, "")}`;

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-32 pb-20 py-20 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_rgba(185,45,45,0.04),_transparent_60%)">
      <div className="absolute inset-0 w-full h-full opacity-[0.04] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
      <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center px-4"
      >
        <h1 className="font-playfair text-4xl font-bold text-secondary sm:text-5xl">
          {renderHeadline(headline, headlineHighlight)}
        </h1>
        <p className="max-w-xl mx-auto text-base text-foreground/80 sm:text-lg mt-6">{subheadline}</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <a
            href={primaryCtaHref}
            className="bg-accent text-white hover:bg-accent/90 px-8 py-3.5 rounded-lg font-semibold text-base text-center transition-all w-full md:w-auto whitespace-nowrap"
          >
            {primaryCta}
          </a>
          <a
            href={phoneHref}
            className="bg-transparent text-dark border-2 border-dark hover:bg-dark hover:text-white px-8 py-3.5 rounded-lg font-semibold text-base text-center transition-all w-full md:w-auto whitespace-nowrap"
          >
            {secondaryCta}
          </a>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
