"use client";
import { motion } from "framer-motion";

const pathologyServices = [
  { 
    title: "Surgical Pathology", 
    desc: "Definitive diagnosis of tissue specimens through expert microscopic analysis.",
    icon: "🔬" 
  },
  { 
    title: "Cytopathology", 
    desc: "Evaluation of individual cell characteristics for cancer screening and prevention.",
    icon: "🧬" 
  },
  { 
    title: "Clinical Consultation", 
    desc: "Partnering with clinical teams to interpret complex laboratory results.",
    icon: "📊" 
  }
];
export default function Services() {
    return (
      <section className="py-24 bg-slate-50">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Section Title */}
    <div className="mb-16 text-center md:text-left">
      <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Expertise</h2>
      <h3 className="text-4xl font-bold text-dark">Diagnostic Services</h3>
      <div className="h-1 w-20 bg-secondary mt-4 hidden md:block" />
    </div>

    {/* The Grid - This is where the .map() goes */}
   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {pathologyServices.map((service, index) => (
    <motion.div
      key={index}
      // Start slightly invisible and lower down
      initial={{ opacity: 0, y: 20 }}
      // Slide up when the user scrolls to this section
      whileInView={{ opacity: 1, y: 0 }}
      // Stagger the timing: Card 1 (0s), Card 2 (0.1s), Card 3 (0.2s)
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      
      // The "Pro" Hover: Lifts up and adds a glow
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
    >
      {/* Icon: Using the 'Accent' color for a soft medical look */}
      <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {service.icon}
      </div>

      <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {service.desc}
      </p>
    </motion.div>
  ))}
</div>
  </div>
</section>
    );
}