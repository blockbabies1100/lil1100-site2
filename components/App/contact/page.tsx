"use client";

import { useState } from "react";

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  return (
    <section className="min-h-screen bg-black py-24 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-black text-red-600 text-center mb-12">
          BOOKING / CONTACT
        </h1>

        <p className="text-gray-400 text-center mb-10">
          Business inquiries, features, shows, and collaborations.
        </p>

        <div className="space-y-6">

          <input
            className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl"
            placeholder="Your Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl"
            placeholder="Your Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl h-40"
            placeholder="Your Message"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            className="w-full bg-red-700 py-4 rounded-xl hover:bg-red-600"
            onClick={() => {
              window.location.href =
                "mailto:big1100z@icloud.com?subject=Booking Inquiry&body=" +
                encodeURIComponent(
                  `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
                );
            }}
          >
            Send Message
          </button>

        </div>

      </div>

    </section>
  );
}
