{
  "name": "lil1100-official",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "framer-motion": "^11.3.0",
    "lucide-react": "^0.462.0",
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.3.0",
    "react-player": "^2.16.0"
  },
  "devDependencies": {
    "@types/node": "^22.7.4",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.0.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "typescript": "^5.6.3"
  }
}import "./globals.css";

export const metadata = {
  title: "Lil 1100 Official",
  description:
    "Official website for independent recording artist Lil 1100."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestRelease from "@/components/LatestRelease";
import Playlist from "@/components/Playlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestRelease />
      <Playlist />
      <Footer />
    </>
  );
}@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background: #000;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.red-gradient {
  background: linear-gradient(90deg,#7a0000,#000);
}

.glow {
  box-shadow: 0 0 25px red;
}

.new-badge {
  background:#b30000;
  padding:4px 10px;
  border-radius:999px;
  color:white;
  font-size:.7rem;
  box-shadow:0 0 15px red;
}export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-red-700 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold text-red-600">
          LIL 1100
        </h1>

        <div className="flex gap-8 text-white">
          <a href="#home">Home</a>
          <a href="#music">Music</a>
          <a href="#videos">Videos</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}import { motion } from "framer-motion";

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
}export default function LatestRelease() {
  return (
    <section
      id="latest"
      className="py-24 red-gradient text-center"
    >

      <h2 className="text-5xl font-bold mb-6">
        🔥 NEW RELEASE
      </h2>

      <h3 className="text-3xl mb-10">
        MADE MEN
      </h3>

      <div className="max-w-5xl mx-auto">

        <iframe
          className="w-full aspect-video rounded-3xl"
          src="https://www.youtube.com/embed/HDReZI3xQtc"
          title="MADE MEN"
          allowFullScreen
        />

      </div>

      <p className="mt-8 text-xl">
        Watch the Official Video for Lil 1100 – MADE MEN
      </p>

    </section>
  );
}"use client";

import { useState } from "react";

const songs = [
  {
    title: "MADE MEN",
    id: "HDReZI3xQtc",
    badge: "NEW",
    desc: "Latest release built on loyalty and ambition."
  },
  {
    title: "DawgShit",
    id: "xhrTtYMgNaI",
    desc: "Hard street anthem with raw storytelling."
  },
  {
    title: "Life We Live",
    id: "xnoV5Iu8gAk",
    desc: "Reflection on pain, loyalty and survival."
  },
  {
    title: "Thinking Bout The Guys",
    id: "sCQgzyFFhkg",
    desc: "Tribute to fallen friends."
  },
  {
    title: "RRR",
    id: "_qJFVHfGkfw",
    desc: "Raw. Real. Relentless."
  },
  {
    title: "🔥 1 N 1",
    id: "taVdfpk5cS8",
    desc: "Street anthem with relentless energy."
  }
];

export default function Playlist() {

  const [current,setCurrent]=useState(songs[0]);

  return(

<section
id="music"
className="py-24 bg-black">

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

<div>

<iframe
className="w-full aspect-video rounded-3xl"
src={`https://www.youtube.com/embed/${current.id}`}
allowFullScreen
/>

</div>

<div>

<h2 className="text-4xl mb-8 font-bold">
Playlist
</h2>

{songs.map(song=>(

<div
key={song.id}
onClick={()=>setCurrent(song)}
className="cursor-pointer border-b border-gray-800 py-6 hover:text-red-500 transition">

<h3 className="text-2xl font-bold">

{song.title}

{song.badge && (
<span className="new-badge ml-3">
NEW
</span>
)}

</h3>

<p className="text-gray-400">
{song.desc}
</p>

</div>

))}

</div>

</div>

</section>

)
}export default function Footer(){

return(

<footer
id="contact"
className="bg-zinc-950 py-20">

<div className="max-w-6xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-5">
Business Inquiries
</h2>

<p className="text-xl text-gray-400">
Bookings • Features • Performances • Interviews
</p>

<a
href="mailto:big1100z@icloud.com"
className="inline-block mt-8 bg-red-700 px-8 py-4 rounded-xl">

big1100z@icloud.com

</a>

<p className="mt-14 text-gray-600">
© 2026 Lil 1100 Official
</p>

</div>

</footer>

)
}"use client";

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
