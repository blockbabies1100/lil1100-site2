"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/images/life-we-live.jpg",
    title: "Life We Live",
  },
  {
    src: "/images/dawgshit.jpg",
    title: "DawgShit",
  },
  {
    src: "/images/artist-1.jpg",
    title: "Lil 1100",
  },
  {
    src: "/images/artist-2.jpg",
    title: "Studio Session",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="text-5xl font-black text-center text-red-600 mb-6"
        >
          PHOTO GALLERY
        </motion.h2>

        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          Behind every song is a story. Explore exclusive artwork,
          promotional images, and moments from Lil 1100's journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {images.map((image, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotate: 1
              }}
              transition={{
                duration: .3
              }}
              className="overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl border border-zinc-800"
            >

              <div className="relative h-96">

                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-5">

                <h3 className="text-xl font-bold text-white">
                  {image.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
