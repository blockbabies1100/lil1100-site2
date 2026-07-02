"use client";

import { motion } from "framer-motion";

export default function Article() {
  return (
    <section
      id="article"
      className="bg-black py-24 px-6 border-t border-zinc-900"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-black text-red-600 text-center mb-10"
        >
          FEATURE ARTICLE
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 shadow-2xl"
        >

          <h3 className="text-2xl font-bold mb-6 text-white">
            “The Rise of Lil 1100: A New Voice in Street Music”
          </h3>

          <p className="text-gray-400 leading-8 mb-6">
            Emerging from real-life experiences and raw environments, Lil 1100
            has built a reputation for delivering authentic, emotional, and
            hard-hitting music that reflects both struggle and ambition.
            His sound blends storytelling with modern street energy, creating
            a unique voice that resonates with listeners who value truth in music.
          </p>

          <p className="text-gray-400 leading-8 mb-6">
            Unlike many artists chasing trends, Lil 1100 focuses on personal
            experience and emotional honesty. Each track serves as a chapter
            in his journey, capturing loyalty, loss, growth, and determination.
          </p>

          <p className="text-gray-400 leading-8">
            With releases like <span className="text-red-500 font-semibold">MADE MEN</span>,
            <span className="text-red-500 font-semibold"> Life We Live</span>,
            and <span className="text-red-500 font-semibold">DawgShit</span>,
            Lil 1100 continues to build a catalog that connects deeply with fans
            while establishing himself as a rising independent force in music.
          </p>

        </motion.div>

      </div>
    </section>
  );
}
