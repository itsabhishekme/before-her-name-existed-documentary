"use client";

import Image from "next/image";

const team = [
  {
    name: "Abhishek (Vihaan) Shrivastava",
    role: "Founder & Creative Director",
    image: "/team/abhishek.jpg",
    bio: "Creative Director, Storyteller, Author and Documentary Filmmaker dedicated to building purpose-driven brands through storytelling, design and social impact.",
  },
  {
    name: "Creative Research Team",
    role: "Research & Documentation",
    image: "/team/research.jpg",
    bio: "Collecting authentic stories, historical records and real-life experiences that shape every documentary and awareness campaign.",
  },
  {
    name: "Production Team",
    role: "Film & Visual Production",
    image: "/team/production.jpg",
    bio: "Transforming ideas into cinematic documentaries through filmmaking, editing, photography and visual storytelling.",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block px-5 py-2 rounded-full border border-purple-600 text-purple-400 text-sm tracking-widest uppercase">
            Our Team
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            The People Behind
            <span className="text-purple-500"> Before Her Name Existed</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8">
            Every powerful documentary begins with people who believe stories
            can inspire empathy, preserve truth, and create meaningful social
            impact.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {team.map((member) => (

            <div
              key={member.name}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center hover:border-purple-500 transition-all duration-500 hover:-translate-y-2"
            >

              {/* Glow */}

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-700/10 via-transparent to-pink-700/10"></div>

              <div className="relative">

                {/* Image */}

                <div className="relative w-40 h-40 mx-auto">

                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 blur-xl opacity-40"></div>

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover border-4 border-purple-500 relative"
                  />

                </div>

                {/* Name */}

                <h3 className="text-2xl font-bold mt-8">
                  {member.name}
                </h3>

                {/* Role */}

                <p className="text-purple-400 mt-2 font-medium">
                  {member.role}
                </p>

                {/* Line */}

                <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mx-auto my-6"></div>

                {/* Bio */}

                <p className="text-gray-400 leading-7 text-sm">
                  {member.bio}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}