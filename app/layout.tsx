import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const creepster = localFont({
  src: "./fonts/Creepster/Creepster-Regular.ttf",
  variable: "--font-creepster",
  
  weight: "100 900",
});

const octoberCrow = localFont({
  src: "./fonts/october_crow/October Crow.ttf",
  variable: "--font-october-crow",
  
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function Header() {

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {/* <CircleIcon className="h-6 w-6 text-orange-500" /> */}
          <span className=" ml-2 text-2xl font-semibold text-orange-600 font-[family-name:var(--font-october-crow)]">SPOOKIFIER</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/photos"
            className="text-lg font-medium text-orange-500 hover:text-orange-300 font-[family-name:var(--font-creepster)]"
          >
            Your photos
          </Link>
          <Link
            href="/share"
            className="text-lg font-medium text-orange-500 hover:text-orange-300 font-[family-name:var(--font-creepster)]"
          >
            share
          </Link>
          
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${creepster.variable} 
        ${octoberCrow.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
