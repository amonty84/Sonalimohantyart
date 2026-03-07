"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggle: toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const isNotHome = pathname !== "/";
            setScrolled(isNotHome || window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                ? "py-3 bg-background/70 backdrop-blur-md shadow-sm border-b border-border"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link
                    href="/"
                    className={`font-serif text-lg md:text-2xl tracking-[0.15em] md:tracking-[0.3em] uppercase transition-colors duration-500 ${scrolled ? "text-foreground" : "text-white"}`}
                    onClick={() => setIsOpen(false)}
                >
                    SONALI MOHANTY
                </Link>

                {/* Desktop Nav */}
                <nav aria-label="Main navigation" className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-[10px] font-medium uppercase tracking-[0.3em] transition-all duration-500 hover:opacity-100 relative group overflow-hidden ${scrolled ? "text-foreground/70" : "text-white/70"}`}
                        >
                            <span className="group-hover:text-current">{item.name}</span>
                            <span className={`absolute bottom-0 left-0 w-full h-[1px] transform translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500 ${scrolled ? "bg-foreground" : "bg-white"}`}></span>
                        </Link>
                    ))}
                    <button
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                        className={`p-1.5 rounded-full transition-colors duration-300 ${scrolled ? "text-foreground/70 hover:text-foreground" : "text-white/70 hover:text-white"}`}
                    >
                        {theme === "light" ? <Moon size={14} strokeWidth={1.5} /> : <Sun size={14} strokeWidth={1.5} />}
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden flex flex-col items-end justify-center w-8 h-8 z-50 mix-blend-difference"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label="Toggle navigation menu"
                >
                    <span className="sr-only">Toggle Menu</span>
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                        className="w-6 h-0.5 bg-current mb-1.5 rounded-full"
                    />
                    <motion.div
                        animate={{ opacity: isOpen ? 0 : 1 }}
                        className="w-4 h-0.5 bg-current mb-1.5 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0, width: isOpen ? "1.5rem" : "1rem" }}
                        className="h-0.5 bg-current rounded-full"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        role="dialog"
                        aria-label="Navigation menu"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 w-full h-screen bg-background p-12 flex flex-col items-start justify-center gap-6 md:hidden z-[60]"
                    >
                        <div className="flex flex-col gap-2 mb-10">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-muted">Navigation</span>
                            <div className="w-10 h-[1px] bg-border"></div>
                        </div>
                        {navItems.map((item, idx) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + idx * 0.05 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`font-serif text-5xl transition-colors ${pathname === item.href ? "text-foreground" : "text-muted hover:text-foreground"}`}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                        <div className="mt-8">
                            <button
                                onClick={toggleTheme}
                                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                                className="p-2 text-muted hover:text-foreground transition-colors"
                            >
                                {theme === "light" ? <Moon size={20} strokeWidth={1.5} /> : <Sun size={20} strokeWidth={1.5} />}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
