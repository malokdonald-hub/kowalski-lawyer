"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialItem {
  quote: string;
  author: string;
  caseType: string;
}

interface TestimonialsData {
  title: string;
  items: TestimonialItem[];
}

interface TestimonialsSectionProps {
  data: TestimonialsData;
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const { title, items } = data;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-playfair text-3xl font-bold text-secondary text-center sm:text-4xl"
        >
          {title}
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col gap-4 rounded-lg border border-secondary/10 bg-white p-6 shadow-sm"
            >
              <Quote className="h-12 w-12 text-accent/20" fill="currentColor" stroke="currentColor" />
<p className="text-sm text-gray-600 sm:text-base">{item.quote}</p>
              <div className="mt-auto pt-4">
                <p className="text-sm font-semibold text-secondary">{item.author}</p>
                <p className="text-xs text-accent">{item.caseType}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
