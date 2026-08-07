"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended: boolean;
}

interface PricingData {
  title: string;
  description: string;
  plans: PricingPlan[];
}

interface PricingSectionProps {
  data: PricingData;
}

export default function PricingSection({ data }: PricingSectionProps) {
  const { title, description, plans } = data;

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-playfair text-3xl font-bold text-secondary sm:text-4xl">{title}</h2>
<p className="mt-4 text-base text-gray-600 sm:text-lg">{description}</p>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative flex h-full flex-col gap-4 rounded-lg bg-white p-6 shadow-sm ${
                plan.recommended ? "border-2 border-accent" : "border border-secondary/10"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 right-4 flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  <Star className="h-3.5 w-3.5" stroke="currentColor" fill="currentColor" />
                  Polecane
                </span>
              )}
              <h3 className="font-playfair text-lg font-bold text-secondary">{plan.name}</h3>
              <div className="flex flex-col gap-1">
                <span className="font-playfair text-2xl font-bold text-primary">{plan.price}</span>
<span className="text-xs text-gray-800">{plan.period}</span>
              </div>
              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" stroke="currentColor" />
<span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
