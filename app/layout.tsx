import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TCC | Tradecraft Consulting & Contracting",
  description: "Premium General Contracting, Electrical, Carpentry, and HVAC services. Residential, Commercial, and Industrial solutions by Danny DeSantis.",
  keywords: ["General Contracting", "Electrical", "Carpentry", "Plumbing", "HVAC", "Tradecraft Consulting", "TCC", "Danny DeSantis"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
