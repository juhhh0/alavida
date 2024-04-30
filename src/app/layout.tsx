import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getGlobalPageData } from "@/data/loaders";
import Navbar from "@/components/custom/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALAVIDA Blog Voyage | Road Trip - Blog Voyage Road Trip Amérique latine",
  description: "Road-trip en Amérique latine : nos itinéraires, conseils et bonnes adresses ! Voyager en backpack en tant que femmes, c'est possible.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalPageData();

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar data={globalData}/>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
