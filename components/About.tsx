"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0b0b0b] py-24 px-6 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            subtitle="Documentary"
            title="Before Her Name Existed"
            description="An exploration of identity, longing, and the unseen paths that exist before destiny introduces itself."
          />
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <span className="text-sm uppercase tracking-[0.35em] text-amber-400">
              Documentary Overview
            </span>

            <h3 className="mt-4 text-3xl font-bold text-white">
              A Documentary About Love, Destiny & Human Connection
            </h3>

            <p className="mt-6 leading-8 text-gray-300">
              <strong>Before Her Name Existed</strong> explores the mysterious
              experiences many people describe before meeting someone who
              profoundly changes their lives. Through personal testimonies,
              reflective storytelling, and perspectives from psychology,
              spirituality, and human consciousness, the documentary examines
              whether certain relationships begin long before two people ever
              meet.
            </p>

            <p className="mt-5 leading-8 text-gray-300">
              Across cultures and generations, individuals have shared stories
              of recurring dreams, powerful intuitions, meaningful
              coincidences, unexplained familiarity, and moments that only
              revealed their significance years later. These experiences invite
              one timeless question:
            </p>

            <blockquote className="mt-8 border-l-4 border-amber-400 pl-6 text-2xl italic text-white">
              “Who are we before the story begins?”
            </blockquote>

            <p className="mt-8 leading-8 text-gray-300">
              Rather than providing definitive answers, the film encourages
              viewers to reflect on their own lives and consider how seemingly
              ordinary moments can become extraordinary when viewed through the
              lens of time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-amber-400/30 bg-gradient-to-br from-amber-400/10 to-transparent p-8">
              <h4 className="text-xl font-semibold text-amber-300">
                Central Question
              </h4>

              <p className="mt-4 text-2xl leading-relaxed text-white">
                Who are we before the story begins?
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h4 className="text-xl font-semibold text-white">
                Why It Matters
              </h4>

              <p className="mt-4 leading-8 text-gray-300">
                Every documentary pillar explores a unique dimension of the
                human experience. Through authentic stories, cultural
                perspectives, and cinematic storytelling, this chapter
                contributes to a larger ecosystem dedicated to understanding
                what it truly means to be human.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h4 className="text-xl font-semibold text-white">
                Ecosystem Contribution
              </h4>

              <p className="mt-4 leading-8 text-gray-300">
                This documentary serves as the opening chapter in the
                <span className="mx-1 font-semibold text-amber-400">
                  Soulfire Chronicles
                </span>
                documentary ecosystem.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Origin",
                  "Memory",
                  "Healing",
                  "Destiny",
                  "Transformation",
                ].map((stage, index) => (
                  <div
                    key={stage}
                    className={`rounded-full px-5 py-2 text-sm font-semibold ${
                      index === 0
                        ? "bg-amber-400 text-black"
                        : "border border-white/20 text-gray-300"
                    }`}
                  >
                    {stage}
                  </div>
                ))}
              </div>

              <p className="mt-8 leading-8 text-gray-300">
                While each documentary stands independently, together they form
                a five-part narrative exploring humanity's shared journey from
                origin to transformation.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8">
              <div className="text-sm uppercase tracking-[0.3em] text-amber-400">
                Status
              </div>

              <div className="mt-2 text-3xl font-bold text-white">
                Ongoing
              </div>

              <p className="mt-4 text-gray-300">
                Production continues as new voices and personal stories are
                gathered from people around the world, creating a collective
                reflection on love, destiny, identity, and human connection.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}