import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Analyze Bank Statements",
  description: "Grinding those banks to the core.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-zinc-50 text-text ${inter.className} flex flex-col min-h-screen items-center justify-center`}
      >
        <main className="flex flex-col items-center justify-center gap-24 p-24 max-w-6xl">
          <h1 className="text-5xl font-bold italic text-center before:block before:absolute before:-inset-7 before:-skew-y-2 before:bg-primary relative inline-block">
            <span className="relative text-white">Bank Statement Scrapper</span>
          </h1>
          {children}
        </main>
      </body>
    </html>
  );
}
