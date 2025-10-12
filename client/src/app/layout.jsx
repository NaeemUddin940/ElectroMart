import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/Header/TopHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Axentra - Store",
  description: "This is a Electronic Store.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TopHeader />
        {children}
      </body>
    </html>
  );
}
