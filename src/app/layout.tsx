import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

import { NavBar } from "@/app/components";

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

export const metadata: Metadata = {
  title: "Portfolio - Xavier NAIDET",
  description: "Le portfolio de Xavier NAIDET",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col w-full h-full mb-4 bg-slate-500`}
      >
        <NavBar />
        <main className="flex h-auto mt-24 p-6 bg-slate-500">
          <div id="layoutDiv" className="container mx-auto flex flex-col items-center justify-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
