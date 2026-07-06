import { Youtube, Instagram, Mail } from "lucide-react";

export default function Socials() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-black text-red-600 mb-8">
          CONNECT WITH LIL 1100
        </h2>

        <div className="flex justify-center gap-10 text-white text-3xl">

          <a
            href="https://youtube.com/@Lil1100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube />
          </a>

          <a
            href="https://instagram.com/lil1100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>

          <a href="mailto:big1100z@icloud.com">
            <Mail />
          </a>

          

        </div>

      </div>
    </section>
  );
}
