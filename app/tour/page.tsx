"use client";

const events = [
  {
    city: "Detroit, MI",
    venue: "Coming Soon",
    date: "TBA"
  },
  {
    city: "Chicago, IL",
    venue: "Coming Soon",
    date: "TBA"
  },
  {
    city: "Atlanta, GA",
    venue: "Coming Soon",
    date: "TBA"
  }
];

export default function TourPage() {
  return (
    <main className="min-h-screen bg-black text-white py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black text-red-600 mb-8">
          TOUR
        </h1>

        <p className="text-gray-400 mb-16">
          Upcoming performances and appearances.
        </p>

        <div className="space-y-6">

          {events.map((show) => (

            <div
              key={show.city}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex justify-between items-center flex-col md:flex-row gap-4"
            >

              <div>
                <h2 className="text-2xl font-bold">
                  {show.city}
                </h2>

                <p className="text-gray-400">
                  {show.venue}
                </p>
              </div>

              <div className="text-red-500 font-bold text-xl">
                {show.date}
              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}
