"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Artwork } from "@/data/gallery";
import Lightbox from "./Lightbox";

// Parallax wrapper for grid items
function ParallaxGridItem({ children, index, className }: { children: React.ReactNode; index: number; className?: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Create variation based on index so items move at slightly different speeds
    const offset = (index % 3 + 1) * 20;
    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}

interface MasonryGridProps {
    items: Artwork[];
}

export default function MasonryGrid({ items }: MasonryGridProps) {
    const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

    const handleNext = () => {
        if (!selectedArtwork) return;
        const currentIndex = items.findIndex((a) => a.id === selectedArtwork.id);
        const nextIndex = (currentIndex + 1) % items.length;
        setSelectedArtwork(items[nextIndex]);
    };

    const handlePrev = () => {
        if (!selectedArtwork) return;
        const currentIndex = items.findIndex((a) => a.id === selectedArtwork.id);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        setSelectedArtwork(items[prevIndex]);
    };

    return (
        <>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                <AnimatePresence mode="popLayout">
                    {items.map((artwork, idx) => (
                        <ParallaxGridItem key={artwork.id} index={idx} className="break-inside-avoid">
                            <motion.div
                                initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
                                animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                role="button"
                                tabIndex={0}
                                aria-label={`View ${artwork.title}`}
                                className="group relative cursor-pointer overflow-hidden pb-4"
                                onClick={() => setSelectedArtwork(artwork)}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedArtwork(artwork); } }}
                            >
                                {/* Image wrapper with sophisticated border and shadow */}
                                <div className="relative overflow-hidden bg-card rounded-md border border-border shadow-[0_4px_20px_rgb(0,0,0,0.02)] group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 ease-out">
                                    {/* Image with subtle zoom on hover */}
                                    <motion.div
                                        layoutId={`image-container-${artwork.id}`}
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                                        className="relative w-full h-auto min-h-[250px] bg-card overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-border animate-pulse transition-opacity duration-1000" id={`pulse-${artwork.id}`} />
                                        <Image
                                            src={artwork.src}
                                            alt={`${artwork.title} — ${artwork.medium}, ${artwork.dimensions}`}
                                            width={600}
                                            height={800}
                                            className="w-full h-auto object-cover hover:scale-105 transition-all duration-1000 opacity-0"
                                            onLoad={(e) => {
                                                const img = e.currentTarget;
                                                img.classList.remove('opacity-0');
                                                img.classList.add('opacity-100');
                                                const pulse = document.getElementById(`pulse-${artwork.id}`);
                                                if (pulse) pulse.classList.add('opacity-0');
                                            }}
                                            priority={idx < 4}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </motion.div>

                                    {/* Texture Reveal Overlay & Info */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="font-serif text-xl text-white tracking-wide mb-1">{artwork.title}</h3>
                                            {!artwork.year.toLowerCase().includes('unknown') && artwork.year.trim() !== "" && (
                                                <p className="text-sm font-light tracking-widest uppercase text-white/80">{artwork.year}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </ParallaxGridItem>
                    ))}
                </AnimatePresence>
            </div>

            <Lightbox
                artwork={selectedArtwork}
                onClose={() => setSelectedArtwork(null)}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        </>
    );
}
