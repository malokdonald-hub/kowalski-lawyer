"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { MessageSquare, Phone, X } from "lucide-react";
import globalDataPl from "@/data/pl/global.json";
import globalDataEn from "@/data/en/global.json";

export default function FloatingContact() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const segments = pathname.split("/").filter(Boolean);
  const lang = segments[0] === "en" ? "en" : "pl";
  const globalData = lang === "en" ? globalDataEn : globalDataPl;

  const phone = globalData.cta.phone;

  const whatsappNumber = phone.replace(/\s+/g, "").replace("+", "");

  return (
    <div className="fixed bottom-10 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex flex-col items-end gap-3">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.47 14.38c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.75.94-.92 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.15-.15.34-.39.51-.58.17-.2.22-.34.34-.56.11-.22.06-.42-.03-.58-.09-.15-.63-1.53-.87-2.09-.23-.55-.47-.48-.65-.49-.17-.01-.36-.01-.56-.01-.2 0-.51.07-.79.37-.29.29-1.1 1.08-1.1 2.63 0 1.56 1.13 3.06 1.29 3.27.15.2 2.11 3.23 5.14 4.4 3.03 1.16 3.03.78 3.58.72.55-.06 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34ZM12.02 21.8h-.01a9.7 9.7 0 0 1-4.94-1.36l-.35-.21-3.68.96.98-3.58-.23-.37a9.72 9.72 0 0 1-1.49-5.18C2.3 6.7 6.66 2.34 12.02 2.34c2.6 0 5.04 1.01 6.87 2.85a9.63 9.63 0 0 1 2.84 6.86c0 5.36-4.36 9.75-9.71 9.75Zm8.3-18.05A11.6 11.6 0 0 0 12.02.34C5.56.34.3 5.6.3 12.06c0 2.14.56 4.14 1.62 5.9L.3 23.66l5.86-1.53a11.7 11.7 0 0 0 5.85 1.57h.01c6.45 0 11.71-5.26 11.71-11.72a11.65 11.65 0 0 0-3.41-8.23Z" />
            </svg>
          </a>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0088cc] text-white shadow-lg transition-transform hover:scale-105"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.9 4.3 18.6 20c-.25 1.1-.9 1.38-1.83.86l-5.06-3.73-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.16 9.4-8.5c.41-.36-.09-.56-.63-.2L6.28 12.72l-5.02-1.57c-1.1-.34-1.11-1.1.23-1.63L20.5 2.72c.9-.34 1.7.2 1.4 1.58Z" />
            </svg>
          </a>

          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            aria-label="Zadzwoń"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-105"
          >
            <Phone size={20} stroke="currentColor" />
          </a>
        </div>
      )}

      <button
        type="button"
        aria-label={isOpen ? "Zamknij kontakt" : "Otwórz kontakt"}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-transform hover:scale-105"
      >
        {isOpen ? (
          <X size={26} stroke="currentColor" />
        ) : (
          <MessageSquare size={26} stroke="currentColor" />
        )}
      </button>
    </div>
  );
}
