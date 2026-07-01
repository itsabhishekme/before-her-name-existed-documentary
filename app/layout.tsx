import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Before Her Name Existed",
  description:
    "A cinematic documentary exploring identity, destiny, love, and the unseen paths that exist before two lives intersect.",
  keywords: [
    "Documentary",
    "Origin",
    "Soulfire Chronicles",
    "Love",
    "Destiny",
    "Human Connection",
    "Storytelling",
  ],
  authors: [
    {
      name: "Soulfire Chronicles",
    },
  ],
  creator: "Soulfire Chronicles",
  applicationName: "Before Her Name Existed",
  openGraph: {
    title: "Before Her Name Existed",
    description:
      "Who are we before the story begins? A cinematic documentary exploring love, destiny, and human connection.",
    type: "website",
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
        className={`
          ${inter.variable}
          ${cormorant.variable}
          ${playfair.variable}
          bg-black
          text-white
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}