"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqData {
  title: string;
  items: FaqItem[];
}

interface FaqSectionProps {
  data: FaqData;
}

export default function FaqSection({ data }: FaqSectionProps) {
  const { title, items } = data;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-playfair text-3xl font-bold text-secondary text-center sm:text-4xl"
        >
          {title}
        </motion.h2>
        <div className="mt-10 flex flex-col gap-2">
          {items.map((item, index) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group rounded-lg border border-secondary/10 bg-white p-4 sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-secondary">
                <span>{item.question}</span>
                <ChevronDown className="h-5 w-5 flex-shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm text-foreground/80 sm:text-base">{item.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
