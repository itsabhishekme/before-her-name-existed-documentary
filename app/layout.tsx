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
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl =
  "https://beforehernamefilm.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Before Her Name Existed",
    template: "%s | Soulfire Chronicles",
  },

  description:
    "Before Her Name Existed is the first documentary pillar in the Soulfire Chronicles, exploring identity, longing, destiny, and the unseen paths that exist before life's defining connections.",

  applicationName: "Before Her Name Existed",

  generator: "Next.js",

  referrer: "origin-when-cross-origin",

  creator: "Soulfire Chronicles",

  publisher: "Soulfire Chronicles",

  authors: [
    {
      name: "Soulfire Chronicles",
    },
  ],

  category: "Documentary",

  classification: "Film & Documentary",

  keywords: [
    "Before Her Name Existed",
    "Soulfire Chronicles",
    "Documentary",
    "Documentary Film",
    "Origin",
    "Identity",
    "Love",
    "Destiny",
    "Human Connection",
    "Psychology",
    "Spirituality",
    "Consciousness",
    "Meaningful Coincidences",
    "Storytelling",
    "Cinema",
    "Human Experience",
    "Long Form Documentary",
    "Film",
    "Origin Documentary",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Before Her Name Existed",

    description:
      "Who are we before the story begins? A cinematic documentary exploring identity, destiny, love, and human connection.",

    url: siteUrl,

    siteName: "Soulfire Chronicles",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/opengraph-image.jpg",
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

    images: ["/twitter-image.jpg"],

    creator: "@SoulfireChronicles",
  },

  appleWebApp: {
    capable: true,
    title: "Before Her Name Existed",
    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },
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
          selection:bg-amber-400
          selection:text-black
        `}
      >
        {children}
      </body>
    </html>
  );
}