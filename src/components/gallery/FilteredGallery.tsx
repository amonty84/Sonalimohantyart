"use client";

import React, { useState, useMemo, useCallback } from "react";
import MasonryGrid from "./MasonryGrid";
import CategoryFilter from "./CategoryFilter";
import { Artwork, ArtworkCategory, CATEGORIES } from "@/data/gallery";
import { Search } from "lucide-react";

const ITEMS_PER_PAGE = 16;

export default function FilteredGallery({ initialItems }: { initialItems: Artwork[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<ArtworkCategory | null>(null);
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = {};
        for (const cat of CATEGORIES) {
            counts[cat] = initialItems.filter((item) => item.category === cat).length;
        }
        return counts;
    }, [initialItems]);

    const filteredItems = useMemo(() => {
        let items = initialItems;
        if (activeCategory) {
            items = items.filter((item) => item.category === activeCategory);
        }
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            items = items.filter(
                (item) =>
                    item.title.toLowerCase().includes(query) ||
                    item.year.toLowerCase().includes(query) ||
                    item.medium.toLowerCase().includes(query)
            );
        }
        return items;
    }, [initialItems, activeCategory, searchQuery]);

    const visibleItems = useMemo(() => filteredItems.slice(0, visibleCount), [filteredItems, visibleCount]);
    const hasMore = visibleCount < filteredItems.length;

    const handleCategoryChange = useCallback((category: ArtworkCategory | null) => {
        setActiveCategory(category);
        setSearchQuery("");
        setVisibleCount(ITEMS_PER_PAGE);
    }, []);

    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setVisibleCount(ITEMS_PER_PAGE);
    }, []);

    const handleLoadMore = useCallback(() => {
        setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
    }, []);

    return (
        <div className="space-y-8">
            {/* Category Filter */}
            <CategoryFilter
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
                categoryCounts={categoryCounts}
                totalCount={initialItems.length}
            />

            {/* Search Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-border pb-8">
                <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" aria-hidden="true" />
                    <input
                        type="text"
                        placeholder="Search by title, year, or medium..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        aria-label="Search artworks"
                        className="w-full pl-12 pr-4 py-4 rounded-full bg-card border border-border focus:outline-none focus:border-foreground transition-colors font-light text-card-foreground shadow-sm"
                    />
                </div>

                <div className="text-sm tracking-widest uppercase text-muted font-semibold" aria-live="polite">
                    {filteredItems.length} {filteredItems.length === 1 ? 'Artwork' : 'Artworks'}
                </div>
            </div>

            {/* Grid */}
            {filteredItems.length > 0 ? (
                <>
                    <MasonryGrid items={visibleItems} />
                    {hasMore && (
                        <div className="flex justify-center pt-12 pb-8">
                            <button
                                onClick={handleLoadMore}
                                className="px-12 py-4 border border-foreground text-xs tracking-[0.3em] uppercase hover:bg-foreground hover:text-background transition-all duration-300"
                            >
                                Load More ({filteredItems.length - visibleCount} remaining)
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="py-32 text-center flex flex-col items-center justify-center">
                    <p className="text-2xl font-serif text-muted mb-4">No artworks found</p>
                    <button
                        onClick={() => {
                            setSearchQuery("");
                            setActiveCategory(null);
                            setVisibleCount(ITEMS_PER_PAGE);
                        }}
                        className="text-sm uppercase tracking-widest text-foreground border-b border-foreground pb-1 hover:text-muted hover:border-muted transition-colors"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
        </div>
    );
}
