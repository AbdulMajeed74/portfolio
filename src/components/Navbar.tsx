"use client";
import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <m.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 text-white"
        >
            <div className="flex items-center gap-3">
                <div className="text-xl font-bold tracking-tighter">
                    MAJEED.
                </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide items-center">
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className="hover:opacity-50 transition-opacity">{link.name}</a>
                ))}
            </div>

            <div className="hidden md:block">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-1 leading-none">Status</div>
                <div className="text-sm font-medium text-green-400">Open for Hire</div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <m.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full bg-[#050505] border-b border-white/5 overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:text-blue-500 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-white/5">
                                <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Status</div>
                                <div className="text-sm font-medium text-green-400">Open for Hire</div>
                            </div>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </m.nav>
    );
};

export default Navbar;
