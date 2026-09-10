import { Hero } from "@/components/Hero";
import {
  About,
  Contact,
  Experience,
  Footer,
  Projects,
  Resume,
} from "@/components/Sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <div className="section-pad mx-auto max-w-6xl">
        <div className="reveal-line" />
      </div>
      <Projects />
      <div className="bg-bg-deep/40">
        <Experience />
      </div>
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
