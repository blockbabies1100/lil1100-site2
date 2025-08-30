import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Lil1100Website() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-3xl font-bold">Lil 1100</h1>
        <a href="mailto:big1100z@icloud.com">
          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-4 py-2 flex items-center">
            <Mail className="mr-2 h-5 w-5" /> Contact
          </Button>
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative text-center p-12 bg-gradient-to-b from-red-900 to-black">
        <motion.img
          src="/uploads/IMG_0625.png"
          alt="Life We Live Cover"
          className="mx-auto rounded-2xl shadow-lg max-h-[500px] object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <h2 className="text-4xl mt-6 font-bold">The Voice of the Streets</h2>
        <p className="mt-2 text-gray-300 max-w-xl mx-auto">
          Raw, real, and unfiltered — Lil 1100 brings his story to life through music.
        </p>
      </section>

      {/* Bio Section */}
      <section className="p-10 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">About Lil 1100</h3>
        <p className="text-gray-300 leading-relaxed">
          Lil 1100 is an up-and-coming rap artist whose music reflects the grind, the struggle, and the triumph of life in his city. With a style that blends raw storytelling and hard-hitting beats, he’s carving out a unique lane in hip hop. His authenticity and dedication to his craft resonate with fans, making him one of the rising voices to watch.
        </p>
      </section>

      {/* Article / Press */}
      <section className="p-10 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">In the Spotlight</h3>
        <Card className="bg-gray-900 text-white border-gray-800">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold mb-2">Lil 1100: Breaking Barriers with Every Verse</h4>
            <p className="text-gray-300 mb-4">
              With his unapologetic lyrics and bold delivery, Lil 1100’s music is more than entertainment—it’s a reflection of real-life experiences. Tracks like <i>"DawgShit"</i> and <i>"Life We Live"</i> showcase his ability to paint vivid pictures through sound. The energy in his performances proves he’s not just rapping, he’s telling his story.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Music Playlist */}
      <section className="p-10 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">Music Playlist</h3>
        <div className="space-y-6">
          {[
            { title: "DawgShit", url: "https://www.youtube.com/embed/xhrTtYMgNaI", desc: "Street anthem with raw energy and storytelling." },
            { title: "Life We Live", url: "https://www.youtube.com/embed/xnoV5Iu8gAk", desc: "A real reflection on everyday struggles and survival." },
            { title: "Thinking Bout the Guys", url: "https://www.youtube.com/embed/sCQgzyFFhkg", desc: "Emotional dedication to fallen brothers and loyalty." },
            { title: "RRR", url: "https://www.youtube.com/embed/_qJFVHfGkfw", desc: "Hard-hitting track representing resilience, respect, and reality." },
            { title: "MADE MEN", url: "https://www.youtube.com/embed/HDReZI3xQtc", desc: "Latest release — powerful message about loyalty and legacy.", latest: true },
            { title: "1 N 1", url: "https://www.youtube.com/embed/taVdfpk5cS8", desc: "🔥 A raw and energetic anthem that showcases Lil 1100’s unstoppable grind." },
          ].map((track, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl shadow-lg p-6 text-left">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-semibold flex items-center">
                  {track.title}
                  {track.title === "1 N 1" && <span className="ml-2 text-red-500 animate-pulse">🔥</span>}
                  {track.latest && (
                    <span className="ml-2 px-2 py-1 text-xs bg-red-600 text-white rounded-lg shadow-lg animate-pulse">
                      NEW
                    </span>
                  )}
                </h4>
              </div>
              <iframe
                className="w-full h-64 rounded-xl"
                src={track.url}
                title={track.title}
                allowFullScreen
              ></iframe>
              <p className="mt-3 text-gray-400">{track.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Media Section */}
      <section className="p-10 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Music & Art</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.img
            src="/uploads/IMG_0862.jpeg"
            alt="DawgShit Cover"
            className="rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="/uploads/IMG_0625.png"
            alt="Life We Live Cover"
            className="rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="/uploads/IMG_0003.jpeg"
            alt="Lil 1100 Photo"
            className="rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="/uploads/IMG_0858.png"
            alt="Lil 1100 Artwork"
            className="rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </section>

      {/* Contact Section */}
      <footer className="p-6 border-t border-gray-800 text-center">
        <p className="text-gray-400">For business inquiries contact:</p>
        <a href="mailto:big1100z@icloud.com" className="text-red-500 font-semibold">
          big1100z@icloud.com
        </a>
      </footer>
    </div>
  )
}