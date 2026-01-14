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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16 text-center"
        >
          <p className="text-primary font-medium uppercase tracking-wide text-sm mb-2">
            Research
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Publications
          </h2>
          <div className="h-1 w-16 bg-primary mt-4 mx-auto rounded-full" />
          <a 
            href="https://orcid.org/0000-0002-5428-1624"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:underline"
          >
            ORCID Profile
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
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
