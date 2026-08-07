"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ConsultationData {
  title: string;
  description: string;
  price: string;
  duration: string;
  includes: string[];
}

interface ConsultationSectionProps {
  data: ConsultationData;
}

export default function ConsultationSection({ data }: ConsultationSectionProps) {
  const { title, description, price, duration, includes } = data;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 rounded-lg border border-secondary/10 bg-background p-6 sm:p-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <h2 className="font-playfair text-3xl font-bold text-secondary sm:text-4xl">{title}</h2>
            <p className="text-base text-foreground/80 sm:text-lg">{description}</p>
            <div className="mt-2 flex flex-wrap items-baseline gap-3">
              <span className="font-playfair text-3xl font-bold text-primary">{price}</span>
              <span className="text-sm text-foreground/60">{duration}</span>
            </div>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center gap-4"
          >
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" stroke="currentColor" />
                <span className="text-sm text-foreground/80 sm:text-base">{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
