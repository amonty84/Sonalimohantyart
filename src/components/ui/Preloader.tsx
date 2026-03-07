"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("sm-art-visited");
        const duration = hasVisited ? 0 : 2500;

        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("sm-art-visited", "true");
        }, duration);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background text-foreground overflow-hidden"
                >
                    <div className="relative flex flex-col items-center justify-center text-center px-4 w-full h-full max-w-3xl">

                        {/* Abstract background drawing animation */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]">
                            <svg viewBox="0 0 800 600" className="w-full h-full max-w-4xl" preserveAspectRatio="xMidYMid slice">
                                <motion.path
                                    d="M 100,500 C 200,400 300,600 400,300 C 500,0 600,400 700,200"
                                    fill="transparent"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 3.8, ease: "easeInOut" }}
                                />
                                <motion.path
                                    d="M 50,200 C 150,300 250,100 350,400 C 450,700 550,200 750,500"
                                    fill="transparent"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 4.2, ease: "easeOut", delay: 0.2 }}
                                />
                            </svg>
                        </div>

                        {/* Text Content */}
                        <div className="overflow-hidden py-2 relative z-10">
                            <motion.h1
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 1 }}
                                className="font-serif text-4xl md:text-6xl tracking-[0.2em] uppercase font-light"
                            >
                                Sonali Mohanty
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden mt-4 relative z-10">
                            <motion.p
                                initial={{ y: "110%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 1.5 }}
                                className="text-muted font-light leading-relaxed text-[10px] md:text-[11px] tracking-[0.25em] uppercase max-w-sm"
                            >
                                Exploring the intersection of heritage, texture, and light through contemporary mixed media expressions.
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
