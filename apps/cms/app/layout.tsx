import type { Metadata } from "next";
import { Titillium_Web, Goudy_Bookletter_1911, Lavishly_Yours } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-titillium-web",
});

const goudy = Goudy_Bookletter_1911({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-goudy",
});

const lavishly = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lavishly",
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
          "min-h-screen bg-bynd-cream text-bynd-ink antialiased",
          titillium.variable,
          goudy.variable,
          lavishly.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
