"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Gavel, Briefcase, ShieldCheck, Clock, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Gavel: Gavel,
  Briefcase: Briefcase,
  ShieldCheck: ShieldCheck,
  Clock: Clock,
};

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

interface ServicesData {
  title: string;
  items: ServiceItem[];
}

interface ServicesSectionProps {
  data: ServicesData;
}

export default function ServicesSection({ data }: ServicesSectionProps) {
  const { title, items } = data;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-playfair text-3xl font-bold text-secondary sm:text-4xl"
        >
          {title}
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href="/przestepstwa-gospodarcze"
                  className="flex h-full flex-col gap-4 rounded-lg border border-secondary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  {Icon && <Icon className="mb-4 h-10 w-10 text-accent" stroke="currentColor" />}
                  <h3 className="font-playfair text-xl font-bold text-secondary">{item.title}</h3>
<p className="text-sm text-gray-600 sm:text-base">{item.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
