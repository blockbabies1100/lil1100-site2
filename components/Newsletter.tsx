"use client";

export default function Newsletter() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-black text-red-600">
          JOIN THE FAN LIST
        </h2>

        <p className="text-gray-400 mt-4">
          Be the first to hear about new music, videos, merch drops,
          and tour announcements.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="mt-10 w-full bg-black border border-zinc-700 rounded-xl p-4"
        />

        <button className="mt-6 bg-red-700 px-10 py-4 rounded-xl hover:bg-red-600">
          Subscribe
        </button>

      </div>

    </section>
  );
}
