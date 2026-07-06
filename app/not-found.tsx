import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-8xl font-black text-red-600">
        404
      </h1>

      <h2 className="text-4xl mt-6 font-bold">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-4 max-w-lg">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-10 bg-red-700 px-8 py-4 rounded-xl"
      >
        Back Home
      </Link>

    </main>
  );
}