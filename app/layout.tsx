import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Analyze Bank Statements',
  description: 'Grinding those banks to the core.',
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
        <main className="flex flex-col items-center justify-center gap-24 p-24 max-w-sm md:max-w-6xl">
          <div className="flex flex-row relative items-center group">
            <h1 className="text-5xl font-bold italic text-center before:block before:absolute before:-inset-7 before:-skew-y-2 before:bg-primary relative inline-block">
              <span className="relative text-white">
                Bank Statement Scrapper
              </span>
            </h1>
            <Image
              src="/logo.svg"
              alt="Bank Statement Scrapper"
              className="translate-x-20 -translate-y-4 group-hover:translate-x-30 group-hover:translate-y-6 group-hover:scale-110 ease-in-out duration-300 group-hover:rotate-45 absolute right-0 hidden md:block"
              width={75}
              height={75}
            />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
