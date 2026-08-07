"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import globalDataPl from "@/data/pl/global.json";
import globalDataEn from "@/data/en/global.json";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const segments = pathname.split("/").filter(Boolean);
  const lang = segments[0] === "en" ? "en" : "pl";
  const globalData = lang === "en" ? globalDataEn : globalDataPl;

  const { nav } = globalData;

  const restOfPath = "/" + segments.slice(1).join("/");
  const switchHref = (targetLang: string) =>
    `/${targetLang}${restOfPath === "/" ? "" : restOfPath}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/85 backdrop-blur-md shadow-md border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 w-full flex justify-between items-center py-4">

        <Link href={`/${lang}`} className="flex flex-col leading-tight" onClick={() => setIsOpen(false)}>
          <span className="font-playfair text-xl font-bold text-secondary sm:text-2xl">
            Kancelaria Kowalski
          </span>
          <span className="text-xs text-foreground/70 sm:text-sm">Adwokat Warszawa</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const href = `/${lang}${item.href === "/" ? "" : item.href}`;
            const isActive = pathname === href;
            return (
              <Link
                key={item.href}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive ? "text-accent" : "text-secondary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={switchHref("pl")}
            className={`text-sm font-medium transition-colors hover:text-accent ${
              lang === "pl" ? "text-accent" : "text-secondary"
            }`}
          >
            PL
          </Link>
          <span className="text-secondary/40">/</span>
          <Link
            href={switchHref("en")}
            className={`text-sm font-medium transition-colors hover:text-accent ${
              lang === "en" ? "text-accent" : "text-secondary"
            }`}
          >
            EN
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          className="text-secondary lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={28} stroke="currentColor" /> : <Menu size={28} stroke="currentColor" />}
        </button>
      </div>


      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-secondary/10 bg-white px-4 py-4 lg:hidden">
          {nav.map((item) => {
            const href = `/${lang}${item.href === "/" ? "" : item.href}`;
            const isActive = pathname === href;
            return (
              <Link
                key={item.href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`rounded-md px-3 py-3 text-base font-medium transition-colors ${
                  isActive ? "text-accent" : "text-secondary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-2 flex items-center gap-2 border-t border-secondary/10 pt-3">
            <Link
              href={switchHref("pl")}
              onClick={() => setIsOpen(false)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                lang === "pl" ? "text-accent" : "text-secondary"
              }`}
            >
              PL
            </Link>
            <span className="text-secondary/40">/</span>
            <Link
              href={switchHref("en")}
              onClick={() => setIsOpen(false)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                lang === "en" ? "text-accent" : "text-secondary"
              }`}
            >
              EN
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
