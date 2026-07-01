"use client";

import Link from "next/link";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
              Soulfire Chronicles
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Before Her Name Existed
            </h2>

            <p className="mt-6 leading-7 text-gray-400">
              Pillar 01 of a five-part documentary ecosystem exploring identity,
              memory, healing, destiny, and transformation through authentic
              human stories.
            </p>
          </div>

          {/* Documentary */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Documentary
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>
                <Link
                  href="#about"
                  className="transition hover:text-amber-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="#ecosystem"
                  className="transition hover:text-amber-400"
                >
                  Ecosystem
                </Link>
              </li>

              <li>
                <Link
                  href="#questionnaire"
                  className="transition hover:text-amber-400"
                >
                  Share Your Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Stage */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Current Stage
            </h3>

            <div className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                Stage 01
              </p>

              <h4 className="mt-2 text-2xl font-bold text-white">
                Origin
              </h4>

              <p className="mt-3 text-gray-300">
                Who are we before the story begins?
              </p>
            </div>
          </div>
        </div>

        <div className="my-12 h-px bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="flex items-center gap-2 text-gray-400">
            © {new Date().getFullYear()} Soulfire Chronicles
            <Heart
              size={16}
              className="fill-amber-400 text-amber-400"
            />
            All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-amber-400 px-5 py-3 text-sm font-medium text-amber-400 transition hover:bg-amber-400 hover:text-black"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}