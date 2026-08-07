"use client";

import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

interface BioData {
  name: string;
  role: string;
  imageAlt: string;
  summary: string;
  education: EducationItem[];
}

interface BioSectionProps {
  data: BioData;
}

export default function BioSection({ data }: BioSectionProps) {
  const { name, role, imageAlt, summary, education } = data;

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/lawyer.webp"
            alt={imageAlt}
            className="aspect-[4/5] w-full rounded-lg object-cover shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div>
            <h2 className="font-playfair text-3xl font-bold text-secondary sm:text-4xl">{name}</h2>
            <p className="mt-2 text-sm font-semibold text-accent sm:text-base">{role}</p>
          </div>
          <p className="text-base text-foreground/80 sm:text-lg">{summary}</p>
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-xl font-bold text-secondary">Wykształcenie</h3>
            <ul className="flex flex-col gap-4 border-l-2 border-primary/20 pl-4">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="font-semibold text-secondary">{item.degree}</p>
                  <p className="text-sm text-foreground/70">{item.institution}</p>
                  <p className="text-xs text-foreground/50">{item.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
