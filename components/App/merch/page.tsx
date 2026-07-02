"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "WEIRD 2 YOU Hoodie",
    price: "$85",
    image: "/images/hoodie.jpg"
  },
  {
    name: "WEIRD 2 YOU Tee",
    price: "$45",
    image: "/images/shirt.jpg"
  },
  {
    name: "1100 Signature Cap",
    price: "$35",
    image: "/images/hat.jpg"
  }
];

export default function MerchPage() {
  return (
    <section className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black text-red-600 text-center mb-12">
          WEIRD 2 YOU MERCH
        </h1>

        <p className="text-gray-400 text-center mb-16">
          Official merchandise from Lil 1100. Limited drops only.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {products.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden"
            >

              <div className="h-72 bg-zinc-900 flex items-center justify-center text-gray-500">
                Image Coming Soon
              </div>

              <div className="p-6">

                <h2 className="text-xl font-bold">{item.name}</h2>

                <p className="text-red-500 mt-2">{item.price}</p>

                <button className="mt-6 w-full bg-red-700 py-3 rounded-xl hover:bg-red-600">
                  Buy Now
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
