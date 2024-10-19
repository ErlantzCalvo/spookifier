import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";


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
  title: "Spookifier",
  description: "Turn a person's photo into its most terrifying and spine-chilling version!",
};

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
        <Header/>
       
        {children}

        <Footer />
      </body>
    </html>
  );
}
