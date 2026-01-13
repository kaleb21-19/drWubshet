"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"; // 1. Import this

export default function Navbar() {
    const pathname = usePathname(); // 2. Get current route

    return (
        <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                <Link href="/" className="text-xl font-bold tracking-tighter">Dr.Wubshet</Link>
                
                <div className="flex gap-8 items-center">
                    {[
                        { name: "Home", path: "#hero" },
                        { name: "About", path: "#about" },
                        { name: "Services", path: "#services" },
                        { name: "Experience", path: "#experience" },
                        { name: "Contact", path: "#contact" },
                        { name: "Pra", path: "#pra" },
                    ].map((link) => (
                        <Link key={link.path} href={link.path}>
                            <motion.span 
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative inline-block text-sm font-medium transition-colors ${
                                    pathname === link.path ? "text-black" : "text-gray-500 hover:text-black"
                                }`}
                            >
                                {link.name}
                                {/* 3. Animated underline for active link */}
                                {pathname === link.path && (
                                    <motion.div 
                                        layoutId="kaleb" 
                                        className="h-0.5 bg-blue-500 absolute left-0 right-0"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.span>
                        </Link>
                    ))}
                </div>  
            </div>
        </motion.nav>
    );
}