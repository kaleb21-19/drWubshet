import Image from "next/image";
import Hero from "./hero/page";
import Services from "./services/page";
import Contact from "./contact/page";
import About from "./about/page";
import Experience from "./experience/page";

export default function Home() {
  return (
   <>
   <div className="scroll-smooth">
  <div id="hero" className=""><Hero /></div>
   <div id="services" className=""><Services /></div>
   <div id="experience" className=""><Experience /></div>
   <div id="about" className=""><About /></div>
   <div id="contact" className=""><Contact /></div>
   </div>
 
   </>
  );
}
