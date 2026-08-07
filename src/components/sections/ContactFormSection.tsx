"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
}

interface FormData {
  title: string;
  description: string;
  fields: FormField[];
  submitButtonText: string;
  disclaimer: string;
  successMessage: string;
  errorMessage: string;
}

interface ContactFormSectionProps {
  data: FormData;
}

export default function ContactFormSection({ data }: ContactFormSectionProps) {
  const { title, description, fields, submitButtonText, disclaimer } = data;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const fieldClassName =
    "w-full rounded-md border border-secondary/20 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent sm:text-base";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex flex-col gap-6"
    >
      <div>
        <h2 className="font-playfair text-2xl font-bold text-secondary sm:text-3xl">{title}</h2>
        <p className="mt-2 text-sm text-foreground/80 sm:text-base">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-2">
            <label htmlFor={field.name} className="text-sm font-semibold text-secondary">
              {field.label}
              {field.required && <span className="text-primary"> *</span>}
            </label>
            {field.type === "select" ? (
              <select id={field.name} name={field.name} required={field.required} className={fieldClassName}>
                <option value="">Wybierz...</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={5}
                className={fieldClassName}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                className={fieldClassName}
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90 sm:text-base"
        >
          {submitButtonText}
        </button>

        {submitted && (
          <p className="text-sm font-semibold text-accent">{data.successMessage}</p>
        )}

        <div className="flex items-start gap-2">
          <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" stroke="currentColor" />
          <p className="text-xs text-foreground/60 sm:text-sm">{disclaimer}</p>
        </div>
      </form>
    </motion.div>
  );
}
