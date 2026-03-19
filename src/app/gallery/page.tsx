import CategoryGallery from "@/components/gallery/CategoryGallery";
import { galleryData } from "@/data/gallery";
import { galleryDescription } from "@/data/content";
import JsonLd from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery | Sonali Mohanty Art",
    description: "Explore the curated collection of Sonali Mohanty's vibrant, textured artworks.",
    alternates: { canonical: '/gallery/' },
};

const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Gallery - Sonali Mohanty Art",
    "url": "https://sonalimohantyart.com/gallery/",
    "description": "Explore the curated collection of Sonali Mohanty's vibrant, textured artworks spanning mythology, animals, flowers, and women.",
};

export default function GalleryPage() {
    return (
        <div className="pt-32 pb-12 md:pt-40 md:pb-24">
            <JsonLd data={collectionSchema} />
            <div className="max-w-3xl mb-8 px-6 md:px-12">
                <h1 className="font-serif text-5xl md:text-6xl mb-6">Explore by Category</h1>
                <p className="text-lg text-muted font-light leading-relaxed">
                    {galleryDescription.trim()}
                </p>
            </div>
            <CategoryGallery allArtworks={galleryData} />
        </div>
    );
}
