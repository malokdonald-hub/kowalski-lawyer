"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface PhoneItem {
  label: string;
  number: string;
  description: string;
}

interface HoursItem {
  day: string;
  time: string;
}

interface OfficeData {
  title: string;
  name: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  phones: PhoneItem[];
  email: string;
  hours: HoursItem[];
}

interface ContactInfoSectionProps {
  data: OfficeData;
}

export default function ContactInfoSection({ data }: ContactInfoSectionProps) {
  const { title, name, address, phones, email, hours } = data;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-8"
    >
      <div>
        <h2 className="font-playfair text-2xl font-bold text-secondary sm:text-3xl">{title}</h2>
        <p className="mt-1 text-sm font-semibold text-accent">{name}</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" stroke="currentColor" />
          <div className="text-sm text-foreground/80 sm:text-base">
            <p>{address.street}</p>
            <p>{address.city}</p>
            <p>{address.country}</p>
          </div>
        </div>

        {phones.map((phone) => (
          <div key={phone.number} className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" stroke="currentColor" />
            <div className="text-sm text-foreground/80 sm:text-base">
              <p className="font-semibold text-secondary">{phone.label}</p>
              <a href={`tel:${phone.number.replace(/\s+/g, "")}`} className="hover:text-accent">
                {phone.number}
              </a>
              <p className="text-xs text-foreground/60">{phone.description}</p>
            </div>
          </div>
        ))}

        <div className="flex items-start gap-3">
          <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" stroke="currentColor" />
          <a href={`mailto:${email}`} className="text-sm text-foreground/80 hover:text-accent sm:text-base">
            {email}
          </a>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" stroke="currentColor" />
          <div className="text-sm text-foreground/80 sm:text-base">
            {hours.map((item) => (
              <p key={item.day}>
                <span className="font-semibold text-secondary">{item.day}:</span> {item.time}
              </p>
            ))}
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.9!2d21.0122!3d52.2145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEyJzUyLjIiTiAyMcKwMDAnNDQuMCJF!5e0!3m2!1spl!2spl!4v1700000000000"
        className="h-64 w-full rounded-lg grayscale contrast-125"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokalizacja kancelarii na mapie"
      />
    </motion.div>
  );
}
