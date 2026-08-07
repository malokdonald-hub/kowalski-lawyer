"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  period: string;
  role: string;
  institution: string;
  description: string;
}

interface ExperienceData {
  title: string;
  items: ExperienceItem[];
}

interface ExperienceSectionProps {
  data: ExperienceData;
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  const { title, items } = data;

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-playfair text-3xl font-bold text-secondary sm:text-4xl"
        >
          {title}
        </motion.h2>
        <div className="relative mt-12 pl-8 sm:pl-10">
          <div className="absolute left-1 top-2 bottom-2 w-0.5 bg-primary/20 sm:left-1.5" />
          <div className="flex flex-col gap-10">
            {items.map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-8 top-1.5 h-3 w-3 rounded-full bg-primary sm:-left-10" />
                <p className="text-sm font-semibold text-accent">{item.period}</p>
                <h3 className="mt-1 font-playfair text-xl font-bold text-secondary">
                  {item.role}
                </h3>
<p className="text-sm font-semibold text-gray-800">{item.institution}</p>
<p className="mt-2 text-sm text-gray-600 sm:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
