import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/Effects";
import { Nav } from "@/components/Nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nehal Choudhary · Software Engineer & Applied ML",
    template: "%s · Nehal Choudhary",
  },
  description:
    "Nehal Choudhary is a UC San Diego Math–CS and Cognitive Science–ML student building reliable software systems, AI-powered developer tools, and applied machine-learning products.",
  openGraph: {
    title: "Nehal Choudhary · Software Engineer & Applied ML",
    description:
      "Selected software engineering and applied ML work, experience, and projects.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col font-sans text-ink">
        <ScrollProgress />
        <Nav />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
