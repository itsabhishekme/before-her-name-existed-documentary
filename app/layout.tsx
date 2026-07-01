import type { Metadata } from "next";
import {
  Inter,
  Cormorant_Garamond,
  Playfair_Display,
} from "next/font/google";
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
  metadataBase: new URL("https://your-domain.com"), // Replace with your actual domain

  title: {
    default: "Before Her Name Existed",
    template: "%s | Soulfire Chronicles",
  },

  description:
    "An exploration of identity, longing, and the unseen paths that exist before destiny introduces itself.",

  applicationName: "Before Her Name Existed",

  creator: "Soulfire Chronicles",

  publisher: "Soulfire Chronicles",

  authors: [
    {
      name: "Soulfire Chronicles",
    },
  ],

  keywords: [
    "Before Her Name Existed",
    "Soulfire Chronicles",
    "Documentary",
    "Origin",
    "Love",
    "Destiny",
    "Human Connection",
    "Identity",
    "Storytelling",
    "Cinema",
    "Documentary Film",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "app/favicon.ico",
    shortcut: "app/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Before Her Name Existed",
    description:
      "Who are we before the story begins? A cinematic documentary exploring identity, destiny, love, and human connection.",

    url: "https://before-her-name-existed-origin.vercel.app/",

    siteName: "Before Her Name Existed Documentary",
    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Before Her Name Existed Documentary",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Before Her Name Existed",

    description:
      "A cinematic documentary exploring identity, destiny, love, and human connection.",

    creator: "@yourusername",

    images: ["/og-image.jpg"],
  },

  category: "Documentary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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