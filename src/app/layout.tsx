import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Sora } from "next/font/google";
import { MouseGlow, ScrollProgress } from "@/components/Effects";
import { Nav } from "@/components/Nav";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nehal Choudhary — Software & ML",
    template: "%s · Nehal Choudhary",
  },
  description:
    "Portfolio of Nehal Choudhary — UCSD Math-CS & CogSci-ML student building full-stack systems and machine learning products.",
  openGraph: {
    title: "Nehal Choudhary — Software & ML",
    description:
      "Full-stack systems, LLM tooling, and applied ML — projects, experience, and resumes.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sora.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col font-sans text-ink">
        <div className="noise" aria-hidden />
        <ScrollProgress />
        <MouseGlow />
        <Nav />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
