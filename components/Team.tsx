"use client";

import Image from "next/image";
import { Globe, Mail } from "lucide-react";

export default function Team() {
    return (
        <section
            id="team"
            className="relative overflow-hidden bg-black py-24"
        >
            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[150px]" />
                <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mb-20 text-center">
                    <p className="mb-3 uppercase tracking-[0.35em] text-yellow-400 text-sm">
                        Meet The Founder
                    </p>

                    <h2 className="text-5xl font-bold text-white md:text-6xl">
                        The Vision Behind
                        <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
                            Before Her Name Existed
                        </span>
                    </h2>

                    <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-yellow-400"></div>
                </div>

                {/* Card */}

                <div className="grid items-center gap-14 lg:grid-cols-2">

                    {/* Image */}

                    <div className="group relative mx-auto">

                        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 opacity-40 blur-xl transition duration-500 group-hover:opacity-80" />

                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">

                            <Image
                                src="/team/abhishek.jpg"
                                alt="Abhishek Shrivastava"
                                width={650}
                                height={800}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                priority
                            />

                        </div>

                    </div>

                    {/* Content */}

                    <div>

                        <span className="rounded-full border border-yellow-400/40 bg-yellow-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-yellow-300">
                            Founder
                        </span>

                        <h3 className="mt-6 text-4xl font-bold text-white">
                            Abhishek (Vihaan) Shrivastava
                        </h3>

                        <p className="mt-4 text-xl font-medium text-yellow-400">
                            Creative Director • Storyteller • Author • Documentary Filmmaker
                        </p>

                        <p className="mt-2 text-lg text-gray-400">
                            Founder at NextGrid Style
                        </p>

                        <div className="mt-8 space-y-5 text-gray-300 leading-8">

                            <p>
                                Abhishek (Vihaan) Shrivastava is a multidisciplinary creative
                                professional dedicated to crafting stories that inspire,
                                educate, and create lasting social impact.
                            </p>

                            <p>
                                As the founder of <span className="text-yellow-400 font-semibold">NextGrid Style</span>,
                                he combines storytelling, branding, filmmaking, and design to
                                build purpose-driven brands that resonate deeply with people.
                            </p>

                            <p>
                                <strong className="text-white">
                                    Before Her Name Existed
                                </strong>{" "}
                                is a thought-provoking documentary exploring the extraordinary moments
                                people experience before meeting someone who ultimately changes their
                                lives forever. Through authentic stories, personal testimonies, and
                                reflective insights, the film invites audiences to consider whether the
                                most meaningful connections begin long before two lives ever cross paths,
                                revealing the unseen threads that quietly shape our destinies.
                            </p>

                        </div>

                        {/* Skills */}

                        <div className="mt-10 flex flex-wrap gap-3">

                            {[
                                "Storytelling",
                                "Brand Strategy",
                                "Documentary",
                                "Creative Direction",
                                "Social Impact",
                                "Visual Design",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-yellow-500/30 bg-white/5 px-5 py-2 text-sm text-yellow-300 transition hover:bg-yellow-500 hover:text-black"
                                >
                                    {skill}
                                </span>
                            ))}

                        </div>

                        {/* Social */}

                        <div className="mt-10 flex gap-5">

                            <a
                                href="#"
                                className="rounded-full border border-white/10 bg-zinc-900 p-4 text-white transition hover:border-yellow-400 hover:bg-yellow-500 hover:text-black"
                            >
                                <Globe size={22} />
                            </a>

                            <a
                                href="mailto:your@email.com"
                                className="rounded-full border border-white/10 bg-zinc-900 p-4 text-white transition hover:border-yellow-400 hover:bg-yellow-500 hover:text-black"
                            >
                                <Mail size={22} />
                            </a>

                        </div>

                        {/* Quote */}

                        <div className="mt-12 rounded-2xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-transparent p-8">

                            <p className="text-lg italic leading-8 text-gray-300">
                                “Stories have the power to preserve memories, challenge
                                perspectives, and create change. Every voice deserves to be
                                heard before history forgets its name.”
                            </p>

                            <p className="mt-5 font-semibold text-yellow-400">
                                — Abhishek (Vihaan) Shrivastava
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}