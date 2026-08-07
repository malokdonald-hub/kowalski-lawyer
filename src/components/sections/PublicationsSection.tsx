"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

interface PublicationItem {
  title: string;
  journal: string;
  description: string;
}

interface PublicationsData {
  title: string;
  items: PublicationItem[];
}

interface PublicationsSectionProps {
  data: PublicationsData;
}

export default function PublicationsSection({ data }: PublicationsSectionProps) {
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
        <div className="mt-10 flex flex-col gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 rounded-lg border border-secondary/10 bg-white p-6 shadow-sm"
            >
              <FileText className="h-6 w-6 flex-shrink-0 text-accent" stroke="currentColor" />
              <div>
                <h3 className="font-playfair text-lg font-bold text-secondary">{item.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.journal}
                </p>
<p className="mt-2 text-sm text-gray-600 sm:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
