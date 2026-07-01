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
                className={`relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                  pillar.active
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
                    className={`h-2 w-full rounded-full ${
                      pillar.active
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
            Narrative Arc
          </p>

          <h3 className="mt-5 text-3xl font-bold text-white">
            Origin → Memory → Healing → Destiny → Transformation
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Each documentary stands independently while contributing to a
            larger cinematic exploration of identity, memory, emotional
            healing, destiny, and the continual transformation that shapes the
            human experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}