"use client";
import { motion } from "framer-motion";
const skills = [
  {
    title: "Years of Experience",
    subtitle: "10+",
    description: "Over a decade of professional experience in clinical and diagnostic pathology"
  },
  {
    title: "Pathology Specialization",
    subtitle: "Expert",
    description: "Specialist in anatomical, clinical, and laboratory pathology diagnostics"
  },
  {
    title: "Accurate Diagnosis",
    subtitle: "Trusted",
    description: "Highly precise diagnostic evaluations supporting effective patient treatment"
  },
  {
    title: "Laboratory Expertise",
    subtitle: "Advanced",
    description: "Extensive hands-on experience with modern laboratory techniques and equipment"
  },
  {
    title: "Patient-Centered Care",
    subtitle: "Dedicated",
    description: "Committed to ethical practice and high-quality patient care standards"
  },
  {
    title: "Professional Recognition",
    subtitle: "Certified",
    description: "Licensed and recognized pathology specialist with continuous medical education"
  }
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-8 bg-gray-50">
      {/* 1. The Grid: Stacks on mobile, side-by-side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        
        {/* IMAGE SIDE (Right on Desktop, Top on Mobile) */}
        <div className="flex justify-center relative order-first md:order-last">
          {/* THE GLOW: Added 'blur-3xl' to make it look like a light aura */}

          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.img
              animate={{ y: [0, -15, 0] }} // Floating movement
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="/images/wub.jpg"
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-2xl"
            />
          </motion.div>
        </div>

        {/* TEXT SIDE (Left on Desktop, Bottom on Mobile) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center md:text-left space-y-4"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-8xl font-bold tracking-tighter"
          >
            Dr.Wubshet  <br /> <span className="text-primary">Assefa</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-gray-500 text-lg md:text-xl max-w-md mx-auto md:mx-0"
          >
            Specialist Pathologist dedicated to diagnostic excellence and precision medicine.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start"

          >
            <div className="flex gap-4">
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                Contact
              </button>
              <button className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary/10 transition-colors">
                Resume
              </button>
              
            </div>
            
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start"
          >
               <div  className="grid grid-cols-2 md:grid-cols-3 gap-6">
            { skills.map((skill, index) =>{
              return(
             
                  <motion.div 
               key={index}

        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1, 
          ease: "easeOut" 
        }}
        
        whileHover={{ scale: 1.1, rotate:5 }}
                  className="bg-white p-4 rounded-lg shadow-xl ">
                    <h2 className="text-md text-primary font-bold ">{skill.subtitle}</h2>
                    <p className="text-sm text-gray-900">{skill.title}</p>
                    <p className="text-xs flex flex-col items-start text-gray-500">{skill.description}</p>
                  </motion.div>
                
             
              )

              })};
                 </div>
              
     
              
             
          </motion.div>
        
        </motion.div>

      </div>
    </main>
  );
}