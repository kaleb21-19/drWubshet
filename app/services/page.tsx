"use client";

import { motion, type Variants } from "framer-motion";
import { Microscope, Dna, FlaskConical, Stethoscope, FileSearch } from "lucide-react";

const pathologyServices = [
  { 
    title: "Histopathology", 
    desc: "Gross and microscopic examination of biopsy and surgical specimens, with focused experience in gynecologic pathology and oncopathology.",
    icon: Microscope 
  },
  { 
    title: "Cytopathology", 
    desc: "Fine needle aspiration cytology (FNAC) procedures and interpretation of cytology specimens, including effusion cytology.",
    icon: Dna 
  },
  { 
    title: "Hematopathology", 
    desc: "Interpretation of peripheral blood films, bone marrow aspirates, and trephine biopsies.",
    icon: FlaskConical 
  },
  { 
    title: "Autopsy Pathology", 
    desc: "Autopsy pathology services including specimen grossing and histologic tissue evaluation.",
    icon: Stethoscope 
  },
  { 
    title: "Consultative Review", 
    desc: "Consultative review of pathology cases and provision of second-opinion diagnostic interpretation.",
    icon: FileSearch 
  }
];

// Optional: reduced motion distance for subtlety
const cardVariants = (direction: "left" | "right"): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -30 : 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
});

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 md:mb-16 text-center"
        >
          <p className="text-primary font-medium uppercase tracking-wide text-sm mb-2">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Diagnostic Services
          </h2>
          <div className="h-1 w-16 bg-primary mt-4 mx-auto rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {pathologyServices.map((service, index) => {
            const direction = index % 2 === 0 ? "left" : "right";

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                variants={cardVariants(direction)}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg hover:border-primary/20 transition-colors duration-300 group text-center md:text-left"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300 mx-auto md:mx-0">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
