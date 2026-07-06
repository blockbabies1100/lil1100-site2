"use client";

const products = [
  {
    name: "WEIRD 2 YOU Hoodie",
    price: "$65",
    image: "/images/hoodie.jpg"
  },
  {
    name: "WEIRD 2 YOU Tee",
    price: "$40",
    image: "/images/shirt.jpg"
  },
  {
    name: "WEIRD 2 YOU Hat",
    price: "$35",
    image: "/images/hat.jpg"
  }
];

export default function MerchPage() {
  return (
    <main className="min-h-screen bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black text-red-600 mb-6">
          WEIRD 2 YOU
        </h1>

        <p className="text-gray-400 mb-16">
          Official Lil 1100 merchandise.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {products.map((item) => (

            <div
              key={item.name}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold mb-2">
                  {item.name}
                </h2>

                <p className="text-red-500 font-bold mb-6">
                  {item.price}
                </p>

                <button className="w-full bg-red-600 hover:bg-red-700 transition rounded-xl py-3 font-bold">
                  Coming Soon
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}
