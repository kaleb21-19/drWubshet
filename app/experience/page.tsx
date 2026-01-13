"use client";
import { motion } from "framer-motion";

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
  <section className="py-24 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6">
    
    {/* Section Title */}
    <div className="mb-16">
      <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Pathology Journey</h2>
      <h3 className="text-4xl font-bold text-dark mt-2">Professional Experience</h3>
      <div className="h-1 w-20 bg-secondary mt-4" />
    </div>

    {/* The Timeline Container */}
    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      
      {experience.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          {/* 1. THE DOT: Always stays on the line */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-hover:bg-primary group-hover:text-white transition-colors duration-300 absolute left-0 md:left-[8.75rem] -translate-x-1/2 z-10 shadow-sm">
            <span className="text-xs">🔬</span>
          </div>

          {/* 2. THE CONTENT CARD */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(100%-12rem)] ml-auto md:ml-auto p-6 bg-slate-50 rounded-3xl border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
               {/* Date moved inside for better mobile/desktop stability */}
               <time className="font-bold text-primary text-sm mb-1 md:mb-0">{item.year}</time>
               <span className="hidden md:block text-xs font-semibold px-3 py-1 bg-accent/30 text-primary rounded-full uppercase">Full-Time</span>
            </div>
            
            <h4 className="text-xl font-bold text-dark">{item.role}</h4>
            <p className="text-secondary font-medium mb-4">{item.location}</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              {item.details}
            </p>
          </div>
        </motion.div>
      ))}
      
    </div>
  </div>
</section>
    );
}