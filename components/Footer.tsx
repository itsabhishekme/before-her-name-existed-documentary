"use client";

import Link from "next/link";
import { Heart, ArrowUp, Mail, Globe, Film, Sparkles } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pillars = [
    {
      id: "01",
      title: "Origin",
      subtitle: "Before Her Name Existed",
      active: true,
    },
    {
      id: "02",
      title: "Memory",
      subtitle: "The Human Archive",
      active: false,
    },
    {
      id: "03",
      title: "Healing",
      subtitle: "The Letters Never Sent",
      active: false,
    },
    {
      id: "04",
      title: "Destiny",
      subtitle: "Echoes of Destiny",
      active: false,
    },
    {
      id: "05",
      title: "Transformation",
      subtitle: "The Alchemy of Becoming",
      active: false,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111] to-black" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12">
        {/* Header */}
        <div className="text-center">
          <p className="uppercase tracking-[0.45em] text-amber-400">
            Soulfire Chronicles
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Before Her Name Existed
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-300">
            Every meaningful connection begins long before two lives intersect.
            Through cinematic storytelling and authentic human experiences,
            this documentary explores identity, destiny, memory, and the unseen
            paths that quietly shape our lives before the story begins.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-20 grid gap-12 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-3">
              <Film className="text-amber-400" size={22} />
              <h3 className="text-2xl font-semibold text-white">
                Documentary
              </h3>
            </div>

            <p className="mt-6 leading-8 text-gray-400">
              Pillar One of the Soulfire Chronicles documentary ecosystem,
              exploring humanity's shared journey through identity, memory,
              healing, destiny, and transformation.
            </p>

            <div className="mt-8 flex gap-3">
              <span className="rounded-full border border-amber-400 px-4 py-2 text-sm text-amber-400">
                Documentary
              </span>

              <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300">
                Origin
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Explore
            </h3>

            <ul className="mt-8 space-y-4">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 transition hover:text-amber-400"
                >
                  About the Documentary
                </Link>
              </li>

              <li>
                <Link
                  href="#ecosystem"
                  className="text-gray-400 transition hover:text-amber-400"
                >
                  Documentary Ecosystem
                </Link>
              </li>

              <li>
                <Link
                  href="#questionnaire"
                  className="text-gray-400 transition hover:text-amber-400"
                >
                  Share Your Story
                </Link>
              </li>

              <li>
                <Link
                  href="#release"
                  className="text-gray-400 transition hover:text-amber-400"
                >
                  Release Platforms
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition hover:text-amber-400"
                >
                  Home
                </Link>
              </li>
            </ul>

            {/* Release Platforms */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-white">
                Release Platforms
              </h3>

              <div className="mt-8 flex items-center gap-6">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition hover:text-red-600"
                  aria-label="YouTube"
                >
                  <FaYoutube className="h-10 w-10" />
                </a>

                <a
                  href="https://www.netflix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition hover:text-red-500"
                  aria-label="Netflix"
                >
                  <SiNetflix className="h-10 w-10" />
                </a>
              </div>
            </div>
          </div>

          {/* Journey */}
          <div>
            <div className="flex items-center gap-3">
              <Sparkles className="text-amber-400" size={22} />

              <h3 className="text-2xl font-semibold text-white">
                Narrative Journey
              </h3>
            </div>

            <div className="mt-8 space-y-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className={`rounded-xl border p-4 ${pillar.active
                    ? "border-amber-400 bg-amber-400/10"
                    : "border-white/10 bg-white/5"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-400">
                      {pillar.id}
                    </span>

                    {pillar.active && (
                      <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-black">
                        Current
                      </span>
                    )}
                  </div>

                  <h4 className="mt-3 text-lg font-semibold text-white">
                    {pillar.title}
                  </h4>

                  <p className="mt-1 text-sm text-gray-400">
                    {pillar.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Participate
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Every story matters. If you've experienced meaningful
              coincidences, profound connections, recurring dreams, or moments
              that changed your understanding of destiny, we'd love to hear your
              journey.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-3">
                <Mail className="text-amber-400" size={18} />

                <a
                  href="mailto:abhishekkumardipu@gmail.com"
                  className="text-gray-300 hover:text-amber-400"
                >
                  stories@beforehernameexisted.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="text-amber-400" size={18} />

                <span className="text-gray-300">
                  Worldwide Documentary Project
                </span>
              </div>
            </div>

            <Link
              href="#questionnaire"
              className="mt-8 inline-flex rounded-full bg-amber-400 px-8 py-4 font-semibold text-black transition hover:bg-amber-300"
            >
              Submit Your Story
            </Link>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-24 rounded-3xl border border-amber-400/20 bg-gradient-to-r from-amber-400/5 to-transparent p-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-400">
            Documentary Question
          </p>

          <blockquote className="mx-auto mt-8 max-w-4xl text-3xl font-light italic leading-relaxed text-white md:text-5xl">
            "Who are we before the story begins?"
          </blockquote>
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <p className="flex items-center gap-2 text-gray-400">
                © {year} Soulfire Chronicles

                <Heart
                  size={16}
                  className="fill-amber-400 text-amber-400"
                />

                All Rights Reserved.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Documentary Pillar 01 • Before Her Name Existed
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 rounded-full border border-amber-400 px-6 py-3 font-medium text-amber-400 transition hover:bg-amber-400 hover:text-black"
            >
              Back to Top

              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}