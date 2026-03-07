import Hero from "@/components/home/Hero";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { galleryData } from "@/data/gallery";
import JsonLd from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sonali Mohanty Art | Heritage Meets Contemporary Expression",
  description: "The digital portfolio of artist Sonali Mohanty. A curated journey through color, texture, and myth. Explore a decade of material experimentation.",
  alternates: { canonical: '/' },
};

const artGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ArtGallery",
  "name": "Sonali Mohanty Art",
  "url": "https://sonalimohantyart.com",
  "description": "Digital portfolio showcasing mixed media and acrylic artworks by Sonali Mohanty.",
  "image": "https://sonalimohantyart.com/images/The-Magnificient-Duo_36X30_SonaliMohanty_2025-1.webp",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={artGallerySchema} />
      <Hero />
      <section className="container mx-auto px-6 md:px-12 py-20">
        <h2 className="font-serif text-3xl md:text-5xl mb-12 text-center">Featured Artworks</h2>
        <MasonryGrid items={galleryData.slice(0, 12)} />
      </section>
    </div>
  );
}
