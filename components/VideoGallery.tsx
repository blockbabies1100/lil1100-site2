"use client";

import { motion } from "framer-motion";

const videos = [
  {
    title: "MADE MEN",
    id: "HDReZI3xQtc",
    featured: true,
    caption: "Latest Release — Loyalty. Power. Respect."
  },
  {
    title: "DawgShit",
    id: "xhrTtYMgNaI",
    caption: "Raw street energy with real-life storytelling."
  },
  {
    title: "Life We Live",
    id: "xnoV5Iu8gAk",
    caption: "A reflection of struggle, growth, and survival."
  },
  {
    title: "Thinking Bout The Guys",
    id: "sCQgzyFFhkg",
    caption: "Dedicated to loyalty and fallen ones."
  },
  {
    title: "RRR",
    id: "_qJFVHfGkfw",
    caption: "Real. Raw. Relentless."
  },
  {
    title: "1 N 1",
    id: "taVdfpk5cS8",
    caption: "One-on-one energy. No distractions."
  }
];

export default function VideoGallery() {
  return (
    <section
      id="videos"
      className="bg-zinc-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-black text-center text-red-600 mb-6"
        >
          MUSIC VIDEOS
        </motion.h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          Official visuals from Lil 1100 — raw storytelling, real moments, and street-driven energy.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`rounded-3xl overflow-hidden border ${
                video.featured
                  ? "border-red-600 shadow-red-700 shadow-2xl"
                  : "border-zinc-800"
              } bg-black`}
            >
              <div className="relative w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  {video.title}
                  {video.featured && (
                    <span className="text-xs bg-red-600 px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  {video.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
