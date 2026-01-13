"use client";
import { Variants, motion } from "framer-motion";
import { FiDownload, FiLinkedin, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

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
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const skillVariants = (direction: "left" | "right"): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -30 : 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
});


  return (
    <main className="min-h-screen px-6 py-16 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HERO CONTENT - Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex justify-center relative order-first lg:order-last">
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.img
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src="/images/wub.jpg"
                alt="Dr. Wubshet Assefa"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover ring-4 ring-white shadow-xl"
              />
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center lg:text-left space-y-6"
          >
            <motion.div variants={itemVariants}>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
                Specialist Pathologist
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
                Dr. Wubshet
                <br />
                <span className="text-primary">Assefa</span>
              </h1>
            </motion.div>
            
            <motion.p 
              variants={itemVariants} 
              className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Dedicated to diagnostic excellence and precision medicine with over a decade of clinical expertise.
            </motion.p>

            {/* CALL TO ACTION */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <motion.a
                href="/Kaleb Tegegn CV.pdf"
                download="Kaleb Tegegn CV.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
              >
                <FiDownload className="text-lg" />
                Download CV
              </motion.a>

              <div className="flex items-center gap-3">
                {[
                  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
                  { icon: FiFacebook, href: "#", label: "Facebook" },
                  { icon: FiTwitter, href: "#", label: "Twitter" },
                  { icon: FiInstagram, href: "#", label: "Instagram" },
                  { icon: FaTiktok, href: "#", label: "TikTok" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* SKILLS - Mobile only (below CTA) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:hidden pt-4"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => {
                  const direction = index % 2 === 0 ? "left" : "right";
                  return (
                    <motion.div
                      key={index}
                      variants={skillVariants(direction)}
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-colors"
                    >
                      <h2 className="text-xl font-bold text-primary">{skill.subtitle}</h2>
                      <p className="text-sm font-medium text-gray-900 mt-1">{skill.title}</p>
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed">{skill.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* SKILLS - Full width at bottom on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:block mt-12"
        >
          <div className="grid grid-cols-6 gap-4">
            {skills.map((skill, index) => {
              const direction = index % 2 === 0 ? "left" : "right";
              return (
                <motion.div
                  key={index}
                  variants={skillVariants(direction)}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-colors"
                >
                  <h2 className="text-xl font-bold text-primary">{skill.subtitle}</h2>
                  <p className="text-sm font-medium text-gray-900 mt-1">{skill.title}</p>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </main>
  );
}