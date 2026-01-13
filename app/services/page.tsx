"use client";

import { motion, type Variants } from "framer-motion";
import { Microscope, Dna, BarChart3 } from "lucide-react";

const pathologyServices = [
  { 
    title: "Surgical Pathology", 
    desc: "Definitive diagnosis of tissue specimens through expert microscopic analysis.",
    icon: Microscope 
  },
  { 
    title: "Cytopathology", 
    desc: "Evaluation of individual cell characteristics for cancer screening and prevention.",
    icon: Dna 
  },
  { 
    title: "Clinical Consultation", 
    desc: "Partnering with clinical teams to interpret complex laboratory results.",
    icon: BarChart3 
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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 text-center md:text-left"
        >
          <p className="text-primary font-medium uppercase tracking-wide text-sm mb-2">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Diagnostic Services
          </h2>
          <div className="h-1 w-16 bg-primary mt-4 mx-auto md:mx-0 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg hover:border-primary/20 transition-colors duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
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
