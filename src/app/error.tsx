"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Website Error:", error);
    }, [error]);

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-lg p-12 border border-border bg-card/50 backdrop-blur-sm"
            >
                <div className="w-12 h-12 border border-red-200 dark:border-red-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-red-500 font-serif text-xl">!</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl tracking-[0.1em] uppercase mb-4">A Momentary Pause</h2>
                <p className="text-muted font-light leading-relaxed mb-8">
                    Something unexpected occurred while rendering this page.
                    The canvas is currently resetting to bring back the clarity of the vision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="border border-foreground bg-foreground text-background px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-foreground transition-all duration-300"
                    >
                        Try Again
                    </button>
                    <button
                        onClick={() => window.location.href = "/"}
                        className="border border-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                        Return Home
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
