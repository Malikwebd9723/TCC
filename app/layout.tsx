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
  description: "Premium general contracting, licensed electrical, carpentry, framing, drywall, plumbing, sewer, water, HVAC, heat pump, and chiller services by Danny DeSantis.",
  keywords: ["General Contracting", "Licensed Electrical", "Carpentry", "Framing", "Drywall", "Plumbing", "Sewer", "Water", "HVAC", "Heat Pumps", "Chillers", "Residential", "Commercial", "Industrial", "Tradecraft Consulting", "TCC", "Danny DeSantis"],
};

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
