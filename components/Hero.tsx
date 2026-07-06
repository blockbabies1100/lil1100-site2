import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black pt-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-8">
        <motion.div
          initial={{opacity:0,x:-50}}
          animate={{opacity:1,x:0}}
          transition={{duration:1}}
        >
          <h1 className="text-6xl font-black">
            LIL <span className="text-red-600">1100</span>
          </h1>
          <h2 className="text-2xl text-gray-300 mt-4">
            The Voice of the Streets
          </h2>
          <p className="mt-6 text-gray-400 leading-8">
            Raw storytelling. Real emotion. Authentic street music.
            Experience the official home of Lil 1100.
          </p>
          <div className="flex gap-5 mt-10">
            <a
              href="#latest"
              className="bg-red-700 px-8 py-4 rounded-xl hover:bg-red-600 transition"
            >
              Watch Latest Release
            </a>
            <a
              href="#music"
              className="border border-red-700 px-8 py-4 rounded-xl"
            >
              Listen Now
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{opacity:0,x:50}}
          animate={{opacity:1,x:0}}
          transition={{duration:1}}
        >
          <img
            src="/images/life-we-live.jpg"
            className="rounded-3xl shadow-2xl"
            alt="Lil 1100"
          />
        </motion.div>
      </div>
    </section>
  );
}
