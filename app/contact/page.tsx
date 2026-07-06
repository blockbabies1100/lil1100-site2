"use client";

import { Mail, Instagram, Youtube } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-black text-red-600 mb-8">
          CONTACT
        </h1>

        <p className="text-gray-400 mb-12 text-lg">
          For booking inquiries, collaborations, features, interviews,
          and business opportunities, contact Lil 1100 using the
          information below.
        </p>

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">

          <div className="flex items-center gap-4 mb-6">
            <Mail className="text-red-600" size={28} />
            <div>
              <h2 className="font-bold text-xl">Business Email</h2>
              <p className="text-gray-400">
                big1100z@icloud.com
              </p>
            </div>
          </div>

          <div className="flex gap-8 mt-10">

            <a
              href="https://youtube.com/@lil1100"
              target="_blank"
              className="hover:text-red-500"
            >
              <Youtube size={34} />
            </a>

            <a
              href="#"
              className="hover:text-red-500"
            >
              <Instagram size={34} />
            </a>

          </div>

        </div>

      </div>
    </main>
  );
}
