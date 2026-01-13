"use client";
import { motion } from "framer-motion";

const highlights = [
  { label: "Specialization", value: "Diagnostic Pathology" },
  { label: "Location", value: "Addis Ababa, Ethiopia" },
  { label: "Experience", value: "10+ Years" },
  { label: "Focus", value: "Precision Medicine" }
];

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-primary font-medium uppercase tracking-wide text-sm mb-2">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dr. Wubshet Assefa
          </h2>
          <div className="h-1 w-16 bg-primary mt-4 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Dr. Wubshet Assefa is a dedicated Specialist Pathologist with extensive experience 
                in diagnostic pathology and laboratory medicine. Based in Addis Ababa, Ethiopia, 
                Dr. Assefa is committed to providing accurate and timely diagnostic services.
              </p>
              
              <p>
                With a focus on surgical pathology, cytopathology, and clinical consultation, 
                Dr. Assefa works closely with clinical teams to ensure optimal patient care 
                through precise diagnostic interpretation.
              </p>
              
              <p>
                Dr. Assefa&apos;s expertise encompasses modern diagnostic techniques and maintains 
                the highest standards of medical practice, contributing to improved healthcare 
                outcomes in the region.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <span className="text-sm font-medium text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}