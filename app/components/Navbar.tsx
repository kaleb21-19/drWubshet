"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
    { name: "Home", path: "#hero" },
    { name: "Services", path: "#services" },
    { name: "Experience", path: "#experience" },
    { name: "Publications", path: "#publications" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                <Link href="/" className="text-xl font-bold tracking-tighter">Dr.Wubshet</Link>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link key={link.path} href={link.path}>
                            <motion.span 
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative inline-block text-sm font-medium transition-colors ${
                                    pathname === link.path ? "text-black" : "text-gray-500 hover:text-black"
                                }`}
                            >
                                {link.name}
                                {pathname === link.path && (
                                    <motion.div 
                                        layoutId="underline" 
                                        className="h-0.5 bg-primary absolute left-0 right-0 -bottom-1"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMenu}
                    className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
                    >
                        <div className="flex flex-col py-4">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link 
                                        href={link.path}
                                        onClick={closeMenu}
                                        className={`block px-6 py-3 text-base font-medium transition-colors ${
                                            pathname === link.path 
                                                ? "text-primary bg-primary/5 border-l-2 border-primary" 
                                                : "text-gray-600 hover:text-black hover:bg-gray-50"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}