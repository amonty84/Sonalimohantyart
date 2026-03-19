"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Immersive background parallax
    const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const opacityBg = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    // Tagline reveal (addressing branding redundancy)
    const tagline = "Articulating the Soul through Texture and Light";
    const words = tagline.split(" ");

    const initialDelay = 1.0; // Shorter delay for smoother feel

    const wordVariants: Variants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
        },
    };

    const containerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: initialDelay },
        },
    };

    return (
        <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Immersive Background Artwork */}
            <motion.div
                style={{ scale: scaleBg, opacity: opacityBg, y: yBg }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/images/The-Magnificient-Duo_36X30_SonaliMohanty_2025-1.webp"
                    alt="Atmospheric Background Artwork"
                    fill
                    className="object-cover object-center grayscale-[0.2]"
                    priority
                />
                {/* Enhanced overlay for strong text legibility */}
                <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
            </motion.div>

            {/* Cinematic Center Content */}
            <motion.div
                style={{ y: yText }}
                className="relative z-10 w-full px-6 pt-20 flex flex-col items-center justify-center text-center text-white"
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl"
                >
                    <motion.h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] tracking-tight flex flex-wrap justify-center gap-x-3 md:gap-x-6">
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                variants={wordVariants}
                                className="inline-block whitespace-nowrap"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: initialDelay + 1, ease: "easeOut" }}
                        className="w-16 h-[1px] bg-white/60 mx-auto mb-10"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: initialDelay + 1.2 }}
                        className="text-white/80 tracking-widest uppercase text-xs md:text-sm font-light mb-12"
                    >
                        The Digital Collection 2026
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: initialDelay + 1.5 }}
                    >
                        <Link href="/gallery" className="inline-block px-10 py-4 border border-white/40 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-700 tracking-[0.3em] uppercase text-[10px] font-medium rounded-full">
                            Begin Exploration
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
            >
                <span className="text-white/40 uppercase tracking-[0.5em] text-[8px] rotate-90 origin-left ml-2">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
            </motion.div>
        </section>
    );
}
