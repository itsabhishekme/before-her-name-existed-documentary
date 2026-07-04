import type { Metadata, Viewport } from "next";
import {
  Inter,
  Cormorant_Garamond,
  Playfair_Display,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
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

const siteName = "Soulfire Chronicles";

const siteTitle = "Before Her Name Existed";

const description =
  "Before Her Name Existed is the first documentary pillar in the Soulfire Chronicles, exploring identity, destiny, memory, love, consciousness, and the unseen paths that shape human existence.";

const siteUrl =
  "https://beforehernamefilm.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },

  description,

  applicationName: siteTitle,

  generator: "Next.js",

  referrer: "origin-when-cross-origin",

  creator: siteName,

  publisher: siteName,

  category: "Documentary",

  classification: "Film",

  abstract:
    "A cinematic documentary exploring identity, destiny, consciousness, memory and human connection.",

  archives: [siteUrl],

  assets: [siteUrl],

  bookmarks: [siteUrl],

  authors: [
    {
      name: siteName,
      url: siteUrl,
    },
  ],

  keywords: [
    // Brand
    "Before Her Name Existed",
    "Soulfire Chronicles",
    "Soulfire",

    // Documentary
    "Documentary",
    "Documentary Film",
    "Feature Documentary",
    "Independent Documentary",
    "Independent Film",
    "Feature Film",
    "Documentary Series",
    "Cinematic Documentary",
    "Creative Documentary",
    "Original Documentary",
    "Long Form Documentary",
    "Art Documentary",
    "Human Documentary",
    "Thought Provoking Documentary",

    // Film
    "Cinema",
    "Film",
    "Motion Picture",
    "Visual Storytelling",
    "Documentary Cinema",
    "Independent Cinema",
    "Narrative Documentary",
    "Modern Documentary",
    "Art Film",
    "Experimental Film",

    // Themes
    "Identity",
    "Human Identity",
    "Self Discovery",
    "Who Am I",
    "Personal Identity",
    "Finding Yourself",
    "Origin",
    "Beginning",
    "Purpose",
    "Meaning",
    "Meaning of Life",
    "Life Journey",
    "Life Story",
    "Human Experience",
    "Existence",
    "Existential",
    "Existential Documentary",
    "Existential Questions",
    "Human Condition",

    // Relationships
    "Love",
    "Human Connection",
    "Relationships",
    "Soul Connection",
    "Soulmate",
    "Companionship",
    "Belonging",
    "Emotional Journey",
    "Shared Humanity",

    // Consciousness
    "Consciousness",
    "Awareness",
    "Mindfulness",
    "Inner Journey",
    "Inner World",
    "Self Awareness",
    "Collective Consciousness",
    "Human Consciousness",

    // Spiritual
    "Spiritual Documentary",
    "Spiritual Journey",
    "Spiritual Growth",
    "Spirituality",
    "Inner Peace",
    "Sacred Journey",
    "Universal Truth",
    "Higher Consciousness",

    // Psychology
    "Psychology",
    "Human Psychology",
    "Behavior",
    "Emotions",
    "Memory",
    "Human Memory",
    "Identity Formation",
    "Cognitive Science",
    "Perception",
    "Self Reflection",

    // Philosophy
    "Philosophy",
    "Philosophical Documentary",
    "Existential Philosophy",
    "Life Philosophy",
    "Purpose of Life",
    "Meaning of Existence",
    "Reality",
    "Truth",
    "Wisdom",

    // Destiny
    "Destiny",
    "Fate",
    "Coincidence",
    "Synchronicity",
    "Life Path",
    "Future",
    "Choice",
    "Free Will",
    "Serendipity",

    // Storytelling
    "Storytelling",
    "Visual Narrative",
    "Human Stories",
    "Documentary Storytelling",
    "Inspirational Story",
    "Authentic Storytelling",
    "Narrative Film",

    // Audience
    "Inspirational Film",
    "Thought Provoking Film",
    "Emotional Documentary",
    "Meaningful Cinema",
    "Award Winning Documentary",
    "Independent Filmmaking",
    "Modern Cinema",
    "Creative Storytelling",

    // Discovery
    "Life Purpose",
    "Self Exploration",
    "Personal Growth",
    "Transformation",
    "Journey Within",
    "Finding Meaning",
    "Human Nature",
    "Inner Transformation",
    "Life Lessons",
    "Documentary Experience",
  ],

  alternates: {
    canonical: siteUrl,

    languages: {
      "en-US": siteUrl,
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon-192.png",
        sizes: "192x192",
      },
      {
        url: "/icon-512.png",
        sizes: "512x512",
      },
    ],

    shortcut: "/favicon.ico",

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },

  manifest: "/manifest.json",

  openGraph: {
    type: "website",

    url: siteUrl,

    siteName,

    title: siteTitle,

    description,

    locale: "en_US",

    countryName: "Worldwide",

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

    title: siteTitle,

    description,

    creator: "@SoulfireChronicles",

    site: "@SoulfireChronicles",

    images: [
      {
        url: "/twitter-image.jpg",
        alt: "Before Her Name Existed Documentary",
      },
    ],
  },

  appleWebApp: {
    capable: true,

    title: siteTitle,

    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION",

    yandex: "YOUR_YANDEX_CODE",

    yahoo: "YOUR_YAHOO_CODE",

    other: {
      "msvalidate.01": "YOUR_BING_CODE",
    },
  },

  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style":
      "black-translucent",

    "theme-color": "#000000",

    "color-scheme": "dark",

    rating: "General",

    distribution: "Global",

    coverage: "Worldwide",

    target: "all",

    audience: "Everyone",

    HandheldFriendly: "true",

    MobileOptimized: "320",

    "revisit-after": "7 days",

    language: "English",

    copyright:
      "© Soulfire Chronicles",

    designer: siteName,

    owner: siteName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
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
       {/* Vercel Analytics */}
      <Analytics />

      {/* Google Analytics */}
      <GoogleAnalytics gaId={""}/>
    </html>
  );
}