"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PricingPreviewData {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

interface PricingPreviewSectionProps {
  data: PricingPreviewData;
}

export default function PricingPreviewSection({ data }: PricingPreviewSectionProps) {
  const { title, description, linkText, linkUrl } = data;

  return (
    <section className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6 lg:px-8"
      >
        <h2 className="font-playfair text-3xl font-bold text-secondary sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-base text-foreground/80 sm:text-lg">{description}</p>
        <Link
          href={linkUrl}
          className="mt-2 rounded-md bg-primary px-10 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90 sm:text-base"
        >
          {linkText}
        </Link>
      </motion.div>
    </section>
  );
}