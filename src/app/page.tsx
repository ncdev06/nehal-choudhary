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
      <Projects />
      <div className="bg-bg-deep/45">
        <Experience />
      </div>
      <About />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
