import "./globals.css";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Lil 1100 | Official Website",
  description:
    "Official website of Lil 1100. Music, videos, gallery, tour dates, booking and merchandise.",

  keywords: [
    "Lil 1100",
    "Rap",
    "Hip Hop",
    "Music",
    "DawgShit",
    "MADE MEN",
    "Life We Live",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}