"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-5xl font-black text-center text-red-600 mb-10">
            ABOUT LIL 1100
          </h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl">

            <p className="text-gray-300 text-lg leading-9 mb-8">

              Lil 1100 is an independent recording artist whose music is
              built on authenticity, loyalty, perseverance, and real-life
              experiences. Every record reflects the highs and lows of
              growing up surrounded by adversity while remaining committed
              to family, ambition, and the pursuit of success.

            </p>

            <p className="text-gray-300 text-lg leading-9 mb-8">

              His music combines emotional storytelling with hard-hitting
              production, allowing listeners to connect with both the pain
              and the victories behind every lyric. Rather than chasing
              trends, Lil 1100 focuses on creating timeless music rooted
              in real experiences.

            </p>

            <p className="text-gray-300 text-lg leading-9">

              From songs like <span className="text-red-500 font-semibold">DawgShit</span>,
              <span className="text-red-500 font-semibold"> Life We Live</span>,
              <span className="text-red-500 font-semibold"> Thinking Bout The Guys</span>,
              <span className="text-red-500 font-semibold"> RRR</span>,
              <span className="text-red-500 font-semibold"> MADE MEN</span>,
              and
              <span className="text-red-500 font-semibold"> 1 N 1</span>,
              Lil 1100 continues building a catalog that reflects both
              struggle and determination while inspiring listeners to keep
              moving forward.

            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
