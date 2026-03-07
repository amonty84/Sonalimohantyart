"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArtworkCategory, CATEGORIES } from "@/data/gallery";

interface CategoryFilterProps {
  activeCategory: ArtworkCategory | null;
  onCategoryChange: (category: ArtworkCategory | null) => void;
  categoryCounts: Record<string, number>;
  totalCount: number;
}

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
  categoryCounts,
  totalCount,
}: CategoryFilterProps) {
  const allCategories: { label: string; value: ArtworkCategory | null }[] = [
    { label: "All", value: null },
    ...CATEGORIES.map((cat) => ({ label: cat, value: cat })),
  ];

  return (
    <div className="relative mb-12">
      <nav
        className="flex items-center gap-x-2 md:gap-x-3 overflow-x-auto scrollbar-hide pb-4 -mx-2 px-2 snap-x snap-mandatory md:snap-none md:flex-wrap md:justify-center"
        role="tablist"
        aria-label="Filter artworks by category"
      >
        {allCategories.map((cat, index) => {
          const isActive = activeCategory === cat.value;
          const count = cat.value ? categoryCounts[cat.value] || 0 : totalCount;

          return (
            <React.Fragment key={cat.label}>
              {index > 0 && (
                <span className="text-muted-foreground text-xs select-none hidden md:inline" aria-hidden="true">
                  ·
                </span>
              )}
              <button
                role="tab"
                aria-selected={isActive}
                onClick={() => onCategoryChange(cat.value)}
                className={`relative whitespace-nowrap snap-start px-3 py-2 font-serif text-base md:text-lg tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`ml-1.5 font-sans text-xs tracking-widest transition-colors duration-300 ${
                    isActive ? "text-muted" : "text-muted-foreground"
                  }`}
                >
                  {count}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="category-underline"
                    className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-foreground"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            </React.Fragment>
          );
        })}
      </nav>

      {/* Subtle divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border" />
    </div>
  );
}
