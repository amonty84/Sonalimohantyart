"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-md"
            >
                <h1 className="font-serif text-8xl md:text-9xl text-border font-light mb-4">404</h1>
                <h2 className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase mb-6">Lost in Expression</h2>
                <p className="text-muted font-light leading-relaxed mb-10">
                    The path you followed seems to have vanished into the ether.
                    Like a brushstroke that didn&apos;t quite land, this space remains empty.
                </p>
                <Link
                    href="/"
                    className="inline-block border border-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-foreground hover:text-background transition-all duration-300"
                >
                    Return to Studio
                </Link>
            </motion.div>

            {/* Visual element */}
            <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 800 600" className="w-full h-full opacity-50" preserveAspectRatio="xMidYMid slice">
                    <motion.path
                        d="M 100,500 C 200,400 300,600 400,300 C 500,0 600,400 700,200"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </svg>
            </div>
        </div>
    );
}
