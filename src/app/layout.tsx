import type { Metadata } from "next";
import { Nunito, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Where the Giants Sleep — A Sleep Podcast for the Waking Mind",
  description:
    "Drift into sleep with immersive stories, guided wind-downs, and science-backed techniques. A premium sleep podcast crafted for restless minds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
