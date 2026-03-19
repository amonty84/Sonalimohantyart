"use client";

import React, { useState, useMemo } from "react";
import { Artwork, ArtworkCategory, CATEGORIES } from "@/data/gallery";
import HorizontalScrollRow from "./HorizontalScrollRow";
import Lightbox from "./Lightbox";

interface CategoryGalleryProps {
  allArtworks: Artwork[];
}

const categoryDescriptions: Record<ArtworkCategory, string> = {
  "Animals & Birds": "Creatures rendered in color, texture, and movement",
  "Flowers": "Botanical beauty in bold, layered compositions",
  "Women": "The feminine form reimagined through pattern and color",
  "Mythology": "Sacred narratives from Hindu tradition and beyond",
};

export default function CategoryGallery({ allArtworks }: CategoryGalleryProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | ArtworkCategory>("all");

  const categorizedArtworks = useMemo(() => {
    const result: Record<string, Artwork[]> = {
      all: [...allArtworks],
    };

    for (const cat of CATEGORIES) {
      result[cat] = allArtworks.filter((a) => a.category === cat);
    }

    return result;
  }, [allArtworks]);

  const handleNext = () => {
    if (!selectedArtwork) return;
    const items = categorizedArtworks[activeCategory];
    const currentIndex = items.findIndex((a) => a.id === selectedArtwork.id);
    const nextIndex = (currentIndex + 1) % items.length;
    setSelectedArtwork(items[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedArtwork) return;
    const items = categorizedArtworks[activeCategory];
    const currentIndex = items.findIndex((a) => a.id === selectedArtwork.id);
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setSelectedArtwork(items[prevIndex]);
  };

  return (
    <>
      {/* All Works row */}
      <HorizontalScrollRow
        title="All Works"
        description="The complete collection, newest first"
        items={categorizedArtworks.all}
        onArtworkClick={(artwork) => {
          setSelectedArtwork(artwork);
          setActiveCategory("all");
        }}
      />

      {/* Category rows */}
      {CATEGORIES.map((cat) => (
        <HorizontalScrollRow
          key={cat}
          title={cat}
          description={categoryDescriptions[cat]}
          items={categorizedArtworks[cat]}
          onArtworkClick={(artwork) => {
            setSelectedArtwork(artwork);
            setActiveCategory(cat);
          }}
        />
      ))}

      <Lightbox
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}
