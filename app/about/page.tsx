"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2">About</h2>
                            <h1 className="text-4xl font-bold text-dark mb-6">Dr. Wubshet Assefa</h1>
                            <div className="h-1 w-20 bg-secondary mb-6" />
                        </div>
                        
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
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
                                Dr. Assefa's expertise encompasses modern diagnostic techniques and maintains 
                                the highest standards of medical practice, contributing to improved healthcare 
                                outcomes in the region.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div>
                                <h3 className="font-bold text-dark mb-2">Specialization</h3>
                                <p className="text-sm text-gray-600">Diagnostic Pathology</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-dark mb-2">Location</h3>
                                <p className="text-sm text-gray-600">Addis Ababa, Ethiopia</p>
                            </div>
                        </div>
                    </div>

                   
                </motion.div>
            </div>
        </section>
    );
}