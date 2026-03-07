"use client";

import React from "react";
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

  console.log("CategoryFilter rendering with:", { activeCategory, totalCount });

  return (
    <div className="relative mb-12 border-b border-border pb-4">
      <nav
        className="flex items-center gap-x-6 overflow-x-auto scrollbar-hide px-2 md:justify-center"
        role="tablist"
        aria-label="Filter artworks by category"
      >
        {allCategories.map((cat, index) => {
          const isActive = activeCategory === cat.value;
          const count = cat.value ? categoryCounts[cat.value] || 0 : totalCount;

          return (
            <button
              key={cat.label}
              role="tab"
              aria-selected={isActive}
              onClick={() => onCategoryChange(cat.value)}
              className={`relative whitespace-nowrap px-1 py-2 font-serif text-base md:text-lg tracking-wide transition-all duration-300 ${isActive
                  ? "text-foreground font-medium"
                  : "text-muted hover:text-foreground"
                }`}
            >
              <span className="flex items-center gap-2">
                {cat.label}
                <span className="text-[10px] tracking-tighter opacity-60 font-sans">
                  ({count})
                </span>
              </span>

              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground transition-all duration-300" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
