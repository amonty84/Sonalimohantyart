"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { Artwork } from "@/data/gallery";
import { X } from "lucide-react";

interface LightboxProps {
    artwork: Artwork | null;
    onClose: () => void;
    onNext?: () => void;
    onPrev?: () => void;
}

export default function Lightbox({ artwork, onClose, onNext, onPrev }: LightboxProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent scrolling when lightbox is open
    useEffect(() => {
        if (artwork) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [artwork]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight" && onNext) onNext();
            if (e.key === "ArrowLeft" && onPrev) onPrev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose, onNext, onPrev]);

    const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x > threshold && onPrev) {
            onPrev();
        } else if (info.offset.x < -threshold && onNext) {
            onNext();
        }
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {artwork && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key="lightbox-overlay"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Viewing artwork: ${artwork.title}`}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 md:p-12 text-white"
                    onClick={onClose}
                >
                    <button
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        className="absolute top-8 right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md"
                        aria-label="Close lightbox"
                    >
                        <X size={24} />
                    </button>

                    {onPrev && (
                        <button
                            onClick={(e) => { e.stopPropagation(); onPrev(); }}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md"
                            aria-label="Previous artwork"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                        </button>
                    )}
                    {onNext && (
                        <button
                            onClick={(e) => { e.stopPropagation(); onNext(); }}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md"
                            aria-label="Next artwork"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                        </button>
                    )}

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={artwork.id} // Re-animate when artwork changes
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.8}
                            onDragEnd={handleDragEnd}
                            className="relative w-full h-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center gap-6 cursor-grab active:cursor-grabbing"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div
                                layoutId={`image-container-${artwork.id}`}
                                className="relative w-full h-[70vh] flex items-center justify-center pointer-events-none"
                            >
                                <Image
                                    src={artwork.src}
                                    alt={artwork.title}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                    priority
                                />
                            </motion.div>

                            <div className="text-center max-w-2xl px-4 pointer-events-none">
                                <h2 className="font-serif text-3xl md:text-4xl mb-2">{artwork.title}</h2>
                                <div className="flex items-center justify-center gap-4 text-sm tracking-widest uppercase text-gray-300">
                                    {!artwork.year.toLowerCase().includes('unknown') && artwork.year.trim() !== "" && (
                                        <>
                                            <span>{artwork.year}</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-500" />
                                        </>
                                    )}
                                    <span>{artwork.medium}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
