import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { getGlobalPageData } from "@/data/loaders";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALAVIDA Blog Voyage | Road Trip - Blog Voyage Road Trip Amérique latine",
  description: "Road-trip en Amérique latine : nos itinéraires, conseils et bonnes adresses ! Voyager en backpack en tant que femmes, c'est possible.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getGlobalPageData();

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header>
          <Navbar data={data}/>
        </header>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
