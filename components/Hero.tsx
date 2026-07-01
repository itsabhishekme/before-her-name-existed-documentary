"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 uppercase tracking-[0.45em] text-amber-400"
        >
          Soulfire Chronicles • Documentary
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl font-bold leading-tight text-white md:text-7xl"
        >
          Before Her
          <br />
          Name Existed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl"
        >
          An exploration of identity, longing, and the unseen paths that exist
          before destiny introduces itself.
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-2xl italic text-amber-300 md:text-3xl"
        >
          “Who are we before the story begins?”
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-14 flex flex-col justify-center gap-5 sm:flex-row"
        >
          <Link
            href="#questionnaire"
            className="rounded-full bg-amber-400 px-8 py-4 text-lg font-semibold text-black transition hover:bg-amber-300"
          >
            Share Your Story
          </Link>

          <Link
            href="#about"
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-lg text-white transition hover:border-amber-400 hover:text-amber-400"
          >
            <PlayCircle size={22} />
            Discover the Documentary
          </Link>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="#about"
            className="rounded-full border border-white/20 p-4 text-white transition hover:border-amber-400 hover:text-amber-400"
          >
            <ArrowDown size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}