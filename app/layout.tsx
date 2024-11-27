import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Transition from "./components/Transition";

import TopleftImg from "./components/TopleftImg";
import TransitionWrapper from "./components/TransitionWrapper";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sore",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Joel ILETI",
  description: "Joel Ileti's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` sora.className text-white font-sora relative`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
