"use client";
import { motion } from "framer-motion";

const highlights = [
  { label: "Specialization", value: "Anatomic Pathology" },
  { label: "Current Position", value: "Assistant Professor, Bahir Dar University" },
  { label: "Experience", value: "10+ Years" },
  { label: "Focus", value: "Gynecologic & Oncopathology" }
];

const memberships = [
  "Ethiopian Pathology Society - Founding Member & Executive Council",
  "College of American Pathologists - International Fellow",
  "Ethiopian Medical Association - Active Member"
];

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12 text-center"
        >
          <p className="text-primary font-medium uppercase tracking-wide text-sm mb-2">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dr. Wubshet Assefa
          </h2>
          <div className="h-1 w-16 bg-primary mt-4 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
           <div className="space-y-4 text-gray-600 leading-relaxed text-left">
  <p className="text-base md:text-lg">
    Dr. Wubshet Assefa Tessema, M.D., is an Assistant Professor and Chief Anatomic Pathologist 
    at Bahir Dar University, Ethiopia. He has been actively involved in diagnostic pathology 
    practice since 2015, providing comprehensive anatomic pathology services in academic 
    and clinical settings.
  </p>

  <p>
    Dr. Wubshet earned his Doctor of Medicine degree from Haramaya University and completed 
    his specialization in Anatomic Pathology at Jimma University. His professional experience 
    includes histopathology, cytopathology, hematopathology, and autopsy pathology, with a 
    particular interest in gynecologic pathology and oncopathology.
  </p>

  <p>
    He is a founding member and executive council member of the Ethiopian Pathology Society 
    and an International Fellow of the College of American Pathologists. Dr. Wubshet has 
    contributed to pathology education, service development, and research, with multiple 
    peer-reviewed publications in international journals.
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
            <div className="bg-gray-50 rounded-2xl p-5 md:p-6 border border-gray-100">
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