import type { Metadata } from "next";
import { Titillium_Web, Cormorant_Garamond, Lavishly_Yours } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// --- Google Fonts ---
const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-titillium-web",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
});

const lavishly = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lavishly-yours",
});

export const metadata: Metadata = {
  title: "Bynd BD — Travel Experiences Beyond Every Horizon",
  description: "Bespoke adventure travel and cultural experiences in Bangladesh.",
  icons: {
    icon: "/favicon.ico",
  },
};

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-bynd-parchment text-bynd-stone antialiased",
          titillium.variable,
          cormorant.variable,
          lavishly.variable
        )}
      >
        <Navbar />
        <main id="main-content" className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
