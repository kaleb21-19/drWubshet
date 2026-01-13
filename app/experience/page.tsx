"use client";
import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";

const experience = [
  {
    year: "2018 - Present",
    role: "Senior Pathologist",
    location: "National Referral Hospital",
    details: "Specializing in oncological histopathology and laboratory quality management."
  },
  {
    year: "2015 - 2018",
    role: "Clinical Researcher",
    location: "Medical Research Institute",
    details: "Focused on cytopathology and early detection patterns in cellular structures."
  },
  {
    year: "2012 - 2015",
    role: "Resident Pathologist",
    location: "University Teaching Hospital",
    details: "Comprehensive training in forensic and surgical pathology."
  }
];

export default function Experience() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <p className="text-primary font-medium uppercase tracking-wide text-sm mb-2">
            Pathology Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Professional Experience
          </h2>
          <div className="h-1 w-16 bg-primary mt-4 mx-auto md:mx-0 rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
          
          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" as const }}
                className="relative pl-12 md:pl-20 group"
              >
                <div className="absolute left-0 md:left-4 top-2 w-8 h-8 rounded-full bg-white border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300 flex items-center justify-center shadow-sm">
                  <FlaskConical className="w-4 h-4 text-primary" />
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <time className="text-primary font-semibold text-sm">{item.year}</time>
                    <span className="text-xs font-medium px-3 py-1 bg-primary/5 text-primary rounded-full">
                      Full-Time
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.role}</h3>
                  <p className="text-secondary font-medium text-sm mb-3">{item.location}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}