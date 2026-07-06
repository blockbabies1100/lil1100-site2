export default function Loading() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center">

      <div className="w-24 h-24 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />

      <h1 className="mt-10 text-4xl font-black text-red-600">
        LIL 1100
      </h1>

      <p className="text-gray-500 mt-3">
        Loading Official Website...
      </p>

    </main>
  );
}