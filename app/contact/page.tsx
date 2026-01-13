"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Contact</h2>
                    <h1 className="text-4xl font-bold text-dark mb-4">Get In Touch</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        For professional consultations, referrals, or inquiries about diagnostic services, 
                        please reach out through the following channels.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-xl font-bold text-dark mb-6">Contact Information</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <span className="text-primary text-xl">📍</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-dark">Location</h4>
                                        <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <span className="text-primary text-xl">✉️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-dark">Email</h4>
                                        <p className="text-gray-600">info@drwubshet.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <span className="text-primary text-xl">🏥</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-dark">Specialization</h4>
                                        <p className="text-gray-600">Diagnostic Pathology & Laboratory Medicine</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-dark mb-3">Professional Services</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Surgical Pathology Consultations</li>
                                <li>• Cytopathology Evaluations</li>
                                <li>• Clinical Laboratory Consultations</li>
                                <li>• Second Opinion Services</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <h3 className="text-xl font-bold text-dark mb-6">Send a Message</h3>
                        
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-dark mb-2">Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-dark mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-dark mb-2">Subject</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                                    placeholder="Consultation inquiry"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-dark mb-2">Message</label>
                                <textarea 
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
                                    placeholder="Please describe your inquiry or consultation needs..."
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}