"use client";
import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { MapPin, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", path: "#hero" },
  { name: "Services", path: "#services" },
  { name: "Experience", path: "#experience" },
  { name: "Publications", path: "#publications" },
  { name: "About", path: "#about" },
  { name: "Contact", path: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12 mb-8 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Dr. Wubshet Assefa</h3>
            <p className="text-gray-400 text-sm max-w-xs mb-6">
              Specialist Pathologist focused on diagnostic excellence.
            </p>
            
            <div className="flex items-center gap-3">
              {[
                { icon: FiFacebook, href: "https://www.facebook.com/wubshet.assefa.3", label: "Facebook" },
                { icon: FiTwitter, href: "https://twitter.com/WubshetAssefa", label: "Twitter" },
                { icon: FiInstagram, href: "https://instagram.com/WubshetAssefa", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-6 md:mb-4">Navigation</h4>
            <ul className="space-y-4 md:space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-6 md:mb-4">Contact</h4>
            <div className="text-gray-400 text-sm space-y-4 md:space-y-3">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Bahir Dar, Ethiopia</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-primary" />
                <span>wubossassefa@yahoo.com</span>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Dr. Wubshet Assefa.</p>
          <p>Designed for Medical Excellence.</p>
        </div>

      </div>
    </footer>
  );
}