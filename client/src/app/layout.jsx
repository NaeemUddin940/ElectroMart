import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/Header/TopHeader";
import MainHeader from "@/components/Header/MainHeader";
import Navigation from "@/components/Header/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Electro - Mart",
  description: "This is a Electronic Store.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${montserrat.variable} antialiased`}>
        <TopHeader />
        <MainHeader />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
