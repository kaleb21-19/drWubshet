"use client";
import { motion } from "framer-motion";
import { MapPin, Mail, Building2, Send } from "lucide-react";
import { useState, FormEvent } from "react";

const EMAIL = "wubossassefa@yahoo.com";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Bahir Dar, Ethiopia" },
  { icon: Mail, label: "Email", value: EMAIL },
  { icon: Building2, label: "Specialization", value: "Diagnostic Pathology" }
];

const services = [
  "Surgical pathology consultation",
  "Cytopathology case evaluation",
  "Clinical laboratory consultation",
  "Second-opinion diagnostic review"
];


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-primary font-medium uppercase tracking-wide text-sm mb-2">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <div className="h-1 w-16 bg-primary mt-4 mx-auto rounded-full" />
          <p className="text-gray-600 max-w-xl mx-auto mt-4">
            For professional consultations, referrals, or inquiries about diagnostic services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-medium text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-3">Professional Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="Consultation inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Describe your inquiry..."
                ></textarea>
              </div>

              <p className="text-xs text-gray-500 text-center">
                This will open your email client to send the message.
              </p>
              
              <button 
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-xl hover:bg-primary/90 transition-colors font-medium shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}