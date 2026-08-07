"use client";

import { motion } from "framer-motion";

interface StatItem {
  value: string;
  unit: string;
}

interface StatsSectionProps {
  data: StatItem[];
}

export default function StatsSection({ data }: StatsSectionProps) {
  return (
<section className="bg-secondary text-white py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {data.map((stat, index) => (
          <motion.div
            key={stat.unit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center gap-2 text-center"
          >
<span className="font-playfair text-4xl md:text-5xl font-bold mb-2 text-white">
              {stat.value}
            </span>
            <span className="text-xs text-white/70 sm:text-sm">{stat.unit}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}