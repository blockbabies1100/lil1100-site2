export default function TourPage() {
  return (
    <section className="min-h-screen bg-black py-24 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-black text-red-600 text-center mb-12">
          TOUR DATES
        </h1>

        <div className="space-y-6">

          <div className="border border-zinc-800 p-6 rounded-2xl">
            <h2 className="text-xl font-bold">New Castle, PA</h2>
            <p className="text-gray-400">TBA — Live Performance</p>
          </div>

          <div className="border border-zinc-800 p-6 rounded-2xl">
            <h2 className="text-xl font-bold">Pittsburgh, PA</h2>
            <p className="text-gray-400">TBA — Club Show</p>
          </div>

          <div className="border border-zinc-800 p-6 rounded-2xl">
            <h2 className="text-xl font-bold">Youngstown, OH</h2>
            <p className="text-gray-400">TBA — Special Event</p>
          </div>

        </div>

      </div>

    </section>
  );
}
