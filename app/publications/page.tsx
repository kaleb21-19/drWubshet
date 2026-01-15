"use client";
import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Cytologic bloom: A candidal garden in a Pap smear",
    journal: "International Journal of Infectious Diseases",
    doi: "https://doi.org/10.1016/j.ijid.2025.107981",
    year: "2025"
  },
  {
    title: "Antidiabetic potentials of Galactomannan and Chlorogenic Acid combinations obtained from Ethiopian medicinal plants in Streptozotocin-Induced Hyperglycemic Mice",
    journal: "Multidisciplinary Science Journal",
    doi: "https://doi.org/10.31893/multiscience.2025223",
    year: "2025"
  },
  {
    title: "Supra-sellar clear cell ependymoma in a 2-year-old female: A case report",
    journal: "International Journal of Surgery Case Reports",
    doi: "#",
    year: "2024"
  },
  {
    title: "Early onset, delayed diagnosis, and laterality of breast carcinoma: Evidence from a tertiary care hospital",
    journal: "Journal of the Society for Breast Disease",
    doi: "https://doi.org/10.1177/20503121221114623",
    year: "2022"
  },
  {
    title: "Breast hydatid cyst presented as a fluctuant painless lump mimicking galactocele: A case report",
    journal: "International Journal of Infectious Diseases",
    doi: "https://doi.org/10.1016/j.ijid.2022.11.004",
    year: "2022"
  },
  {
    title: "Clinico-epidemiologic considerations in the diagnosis of tuberculous lymphadenitis: Evidence from a high burden country",
    journal: "International Journal of Infectious Diseases",
    doi: "https://doi.org/10.1016/j.ijid.2022.09.030",
    year: "2022"
  },
  {
    title: "A glimpse at locally advanced melanomas in the settings of poverty: Pathologist's viewpoint",
    journal: "Cancer Management and Research",
    doi: "https://doi.org/10.1097/CMR.0000000000000909",
    year: "2023"
  },
  {
    title: "Chromoblastomycosis: Delayed diagnosis with extensive cutaneous lesions",
    journal: "International Journal of Infectious Diseases",
    doi: "https://doi.org/10.1016/j.ijid.2023.03.040",
    year: "2023"
  },
  {
    title: "Sub-chronic toxicity of the aqueous leaf extract of Ocimum lamiifolium Hochst. ex Benth on biochemical parameters and histopathology of liver and kidney in rats",
    journal: "BMC Complementary Medicine and Therapies",
    doi: "https://doi.org/10.1186/s12906-023-03863-7",
    year: "2023"
  },
  {
    title: "COVID-19 vaccine: Side effects after the first dose of the Oxford AstraZeneca vaccine among health professionals in a low-income country",
    journal: "Journal of Multidisciplinary Healthcare",
    doi: "https://doi.org/10.2147/jmdh.s331140",
    year: "2021"
  }
];

export default function Publications() {
  return (
    <section className="relative py-16 md:py-24">
      {/* Professional background with gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-blue-50/30 to-teal-50/20" />
      
      {/* Subtle pattern overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f52ba' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative max-w-5xl mx-auto px-6">
        
        {/* Header with professional background */}
        <div className="relative mb-12 md:mb-20 text-center rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <div 
            className="absolute inset-0 bg-cover bg-center-top bg-no-repeat"
            style={{ 
              backgroundImage: "url('/images/unnamed.jpg')",
              filter: "brightness(0.9) contrast(1.1)",
              backgroundPosition: "center 40%"
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-slate-900/20 to-slate-900/30" />
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/5" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative py-16 md:py-20 px-8"
          >
          <p className="text-white font-medium uppercase tracking-wide text-sm mb-3 drop-shadow-lg">
            Research & Publications
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Academic Publications
          </h2>
          <div className="h-1 w-20 bg-white mt-4 mx-auto rounded-full shadow-lg" />
          <a 
            href="https://orcid.org/0000-0002-5428-1624"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-900 hover:bg-white transition-all duration-300 shadow-lg"
          >
            ORCID Profile
            <ExternalLink className="w-4 h-4" />
          </a>
          </motion.div>
        </div>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              className="bg-white p-5 md:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex gap-4">
                <div className="hidden sm:flex w-10 h-10 bg-primary/10 rounded-lg items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
                      {pub.title}
                    </h3>
                    <span className="text-xs font-medium px-2 py-1 bg-primary/5 text-primary rounded-full flex-shrink-0">
                      {pub.year}
                    </span>
                  </div>
                  <p className="text-sm text-secondary font-medium mt-1">
                    {pub.journal}
                  </p>
                  {pub.doi !== "#" && (
                    <a 
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-primary mt-2 transition-colors"
                    >
                      View Publication
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
