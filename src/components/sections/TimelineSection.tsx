"use client";

import { motion } from "framer-motion";

interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

interface TimelineData {
  title: string;
  steps: TimelineStep[];
}

interface TimelineSectionProps {
  data: TimelineData;
}

export default function TimelineSection({ data }: TimelineSectionProps) {
  const { title, steps } = data;

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
        <div className="relative mt-12 pl-12 sm:pl-16">
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-primary/20 sm:left-7" />
          <div className="flex flex-col gap-10">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-12 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white sm:-left-16 sm:h-14 sm:w-14 sm:text-base">
                  {item.step}
                </span>
                <h3 className="font-playfair text-xl font-bold text-secondary">{item.title}</h3>
<p className="mt-2 text-sm text-gray-600 sm:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
