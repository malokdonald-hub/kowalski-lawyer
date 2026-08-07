import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import globalDataPl from "@/data/pl/global.json";
import globalDataEn from "@/data/en/global.json";

export default function Footer({ lang }: { lang: string }) {
  const globalData = lang === "en" ? globalDataEn : globalDataPl;
  const { footer } = globalData;

  const localizedHref = (href: string) => `/${lang}${href === "/" ? "" : href}`;

  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex flex-col leading-tight">
            <span className="font-playfair text-xl font-bold text-white">
              {footer.logo.title}
            </span>
            <span className="text-sm text-white/70">{footer.logo.subtitle}</span>
          </div>
          <p className="mt-4 text-sm text-white/70">{footer.description}</p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href={footer.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white transition-colors hover:text-accent"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.79c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
              </svg>
            </a>
            <a
              href={footer.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white transition-colors hover:text-accent"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.42.46.65.25 1.2.6 1.73 1.13.53.53.88 1.08 1.13 1.73.24.63.41 1.36.46 2.42.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.46 2.42a4.6 4.6 0 0 1-1.13 1.73c-.53.53-1.08.88-1.73 1.13-.63.24-1.36.41-2.42.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.42-.46a4.6 4.6 0 0 1-1.73-1.13 4.6 4.6 0 0 1-1.13-1.73c-.24-.63-.41-1.36-.46-2.42C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.46-2.42.25-.65.6-1.2 1.13-1.73A4.6 4.6 0 0 1 5.38 2.6c.63-.24 1.36-.41 2.42-.46C8.86 2.01 9.2 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.86.04-1.33.18-1.64.3-.41.16-.71.35-1.02.66-.31.31-.5.61-.66 1.02-.12.31-.26.78-.3 1.64C4.29 8.53 4.28 8.85 4.28 12s.01 3.47.06 4.52c.04.86.18 1.33.3 1.64.16.41.35.71.66 1.02.31.31.61.5 1.02.66.31.12.78.26 1.64.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.86-.04 1.33-.18 1.64-.3.41-.16.71-.35 1.02-.66.31-.31.5-.61.66-1.02.12-.31.26-.78.3-1.64.05-1.05.06-1.37.06-4.52s-.01-3.47-.06-4.52c-.04-.86-.18-1.33-.3-1.64a2.8 2.8 0 0 0-.66-1.02 2.8 2.8 0 0 0-1.02-.66c-.31-.12-.78-.26-1.64-.3-1.05-.05-1.37-.06-4.04-.06Zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5.98-2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
              </svg>
            </a>
          </div>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
              {column.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={localizedHref(link.href)} className="text-sm text-white/80 hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
            Kontakt
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-white/80">
            {footer.contact.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <Phone size={16} stroke="currentColor" className="text-accent" />
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-accent">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail size={16} stroke="currentColor" className="text-accent" />
              <a href={`mailto:${footer.contact.email}`} className="hover:text-accent">
                {footer.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} stroke="currentColor" className="mt-0.5 text-accent" />
              <span>{footer.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60 sm:px-6 lg:px-8">
        {footer.copyright}
      </div>
    </footer>
  );
}
