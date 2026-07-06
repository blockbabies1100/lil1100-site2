"use client";

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
    <section id="music" className="py-24 bg-black">
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
}
