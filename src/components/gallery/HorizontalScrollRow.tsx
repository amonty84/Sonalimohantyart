"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Artwork } from "@/data/gallery";

interface HorizontalScrollRowProps {
  title: string;
  description: string;
  items: Artwork[];
  onArtworkClick: (artwork: Artwork) => void;
}

function ArtworkCard({
  artwork,
  onClick,
}: {
  artwork: Artwork;
  index: number;
  onClick: () => void;
}) {
  return (
    <div className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px]">
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="group relative cursor-pointer overflow-hidden rounded-md border border-neutral-200/40 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-700"
        onClick={onClick}
      >
        <div className="relative h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px] bg-neutral-200 overflow-hidden">
          <Image
            src={artwork.src}
            alt={artwork.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, (max-width: 1024px) 280px, 300px"
          />
        </div>

        {/* Hover overlay with title/year */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-serif text-lg text-white tracking-wide mb-1">
              {artwork.title}
            </h3>
            <p className="text-xs font-light tracking-widest uppercase text-white/80">
              {artwork.year}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HorizontalScrollRow({
  title,
  description,
  items,
  onArtworkClick,
}: HorizontalScrollRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const checkScrollPosition = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScrollPosition, { passive: true });
    checkScrollPosition();
    return () => el.removeEventListener("scroll", checkScrollPosition);
  }, [checkScrollPosition]);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -600 : 600,
      behavior: "smooth",
    });
  };

  if (items.length === 0) return null;

  return (
    <section
      className="relative py-8 md:py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category heading */}
      <div className="mb-6 md:mb-8 px-6 md:px-12">
        <h2 className="font-serif text-2xl md:text-3xl mb-2">{title}</h2>
        <p className="text-sm text-gray-500 font-light">{description}</p>
      </div>

      {/* Scroll container */}
      <div className="relative">
        <div
          ref={scrollRef}
          data-lenis-prevent
          className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 pb-4 scrollbar-hide"
        >
          {items.map((artwork, idx) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              index={idx}
              onClick={() => onArtworkClick(artwork)}
            />
          ))}
        </div>

        {/* Left Arrow */}
        <AnimatePresence>
          {isHovered && canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => scroll("left")}
              className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={22} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Right Arrow */}
        <AnimatePresence>
          {isHovered && canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => scroll("right")}
              className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight size={22} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
