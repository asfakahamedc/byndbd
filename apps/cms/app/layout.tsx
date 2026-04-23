import type { Metadata } from "next";
import { Titillium_Web, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-titillium-web",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title: "Bynd BD CMS — Admin Portal",
  description: "Administrative interface for Bynd BD travel platform.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-bynd-parchment text-bynd-stone antialiased",
          titillium.variable,
          cormorant.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
