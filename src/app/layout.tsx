import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingContact from "@/components/layout/FloatingContact";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kancelaria Kowalski – Adwokat Warszawa",
  description:
    "Doświadczony adwokat w Warszawie. Ochrona w sprawach karnych i karno-gospodarczych.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
