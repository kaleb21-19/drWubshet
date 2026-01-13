import Image from "next/image";
import Hero from "./hero/page";
import Services from "./services/page";
import Contact from "./contact/page";
import About from "./about/page";
import Experience from "./experience/page";

export default function Home() {
  return (
   <>
   <Hero />
   <Services />
  <Experience />
   <About />
   <Contact />
   </>
  );
}
