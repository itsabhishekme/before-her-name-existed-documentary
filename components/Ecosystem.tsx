"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

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

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="bg-black py-24 px-6 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          subtitle="Soulfire Chronicles"
          title="The Documentary Ecosystem"
          description="Five interconnected documentary pillars exploring humanity's shared journey from identity to transformation."
        />

        <div className="mt-20">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className={`relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${pillar.active
                    ? "border-amber-400 bg-amber-400/10 shadow-2xl shadow-amber-500/20"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
              >
                {pillar.active && (
                  <span className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black">
                    Current
                  </span>
                )}

                <div className="text-5xl font-bold text-amber-400">
                  {pillar.id}
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-gray-300">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="mt-8">
                  <div
                    className={`h-2 w-full rounded-full ${pillar.active
                        ? "bg-amber-400"
                        : "bg-white/10"
                      }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-6xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16"
        >
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-400">
              Narrative Arc
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
              Origin → Memory → Healing → Destiny → Transformation
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              Every documentary in this cinematic universe represents a chapter of a
              much larger human journey. While each story stands on its own, together
              they form an interconnected exploration of the invisible forces that
              shape our lives—our beginnings, our memories, our struggles, our
              purpose, and ultimately the people we become.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-400">
              Rather than presenting isolated biographies, the series unfolds as an
              emotional continuum where individual experiences echo universal truths.
              Across cultures, generations, and landscapes, every narrative contributes
              another piece to a collective portrait of humanity.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-5">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl">🌱</div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Origin
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Every story begins with a place, a family, a culture, and a set of
                circumstances that quietly shape identity long before choices are made.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl">🕊️</div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Memory
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Memories preserve joy, loss, and transformation. They become invisible
                threads connecting the past to the present while influencing every
                future decision.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl">❤️</div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Healing
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Growth emerges through resilience. Healing is portrayed not as an end,
                but as a continuous process of understanding ourselves and embracing
                vulnerability.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl">✨</div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Destiny
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                The journey gradually reveals purpose—not through certainty, but
                through courage, curiosity, and the willingness to follow unexpected
                paths.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl">🦋</div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Transformation
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                The culmination of every story is transformation—the quiet evolution
                that allows individuals and communities to redefine who they are and
                inspire those who follow.
              </p>
            </div>

          </div>

          <div className="mt-20 border-t border-white/10 pt-12">
            <blockquote className="mx-auto max-w-4xl text-center">
              <p className="text-2xl md:text-3xl italic font-light text-gray-200 leading-relaxed">
                "Five films. Five journeys. One cinematic exploration of identity, memory, healing, destiny, and transformation."
              </p>

              <p className="mt-6 text-sm uppercase tracking-[0.35em] text-amber-400">
                The Complete Documentary Collection
              </p>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}