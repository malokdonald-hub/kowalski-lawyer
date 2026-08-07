"use client";

import { motion } from "framer-motion";
import {
  Gavel,
  ShieldCheck,
  Users,
  Lock,
  Clock,
  Heart,
  Briefcase,
  Receipt,
  Building,
  Globe,
  Award,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Gavel: Gavel,
  ShieldCheck: ShieldCheck,
  Users: Users,
  Lock: Lock,
  Clock: Clock,
  Heart: Heart,
  Briefcase: Briefcase,
  Receipt: Receipt,
  Building: Building,
  Globe: Globe,
  Award: Award,
};

interface IconCardItem {
  icon: string;
  title: string;
  description: string;
}

interface IconCardsData {
  title: string;
  description?: string;
  items: IconCardItem[];
}

interface IconCardsSectionProps {
  data: IconCardsData;
  background?: "white" | "background";
}

export default function IconCardsSection({ data, background = "white" }: IconCardsSectionProps) {
  const { title, description, items } = data;

  return (
    <section className={background === "white" ? "bg-white" : "bg-background"}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-playfair text-3xl font-bold text-secondary sm:text-4xl">{title}</h2>
          {description && (
            <p className="mt-4 text-base text-foreground/80 sm:text-lg">{description}</p>
          )}
        </motion.div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-4 rounded-lg border border-secondary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {Icon && <Icon className="h-10 w-10 text-accent" stroke="currentColor" />}
                <h3 className="font-playfair text-xl font-bold text-secondary">{item.title}</h3>
                <p className="text-sm text-foreground/80 sm:text-base">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
