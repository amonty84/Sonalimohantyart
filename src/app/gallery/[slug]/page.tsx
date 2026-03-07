import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { galleryData, getArtworkSlug, getArtworkBySlug, getRelatedArtworks } from "@/data/gallery";
import JsonLd from "@/components/seo/JsonLd";
import ArtworkInquiryButton from "@/components/gallery/ArtworkInquiryButton";

export function generateStaticParams() {
    return galleryData.map((artwork) => ({
        slug: getArtworkSlug(artwork),
    }));
}

interface ArtworkPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArtworkPageProps): Promise<Metadata> {
    const { slug } = await params;
    const artwork = getArtworkBySlug(slug);
    if (!artwork) return { title: "Artwork Not Found" };

    const description = `${artwork.title} — ${artwork.medium}, ${artwork.dimensions}${artwork.year ? `, ${artwork.year}` : ''}. By Sonali Mohanty.`;
    return {
        title: `${artwork.title} | Sonali Mohanty Art`,
        description,
        alternates: { canonical: `/gallery/${slug}/` },
        openGraph: {
            title: `${artwork.title} | Sonali Mohanty Art`,
            description,
            images: [{ url: artwork.src, width: 1200, height: 630, alt: artwork.title }],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: artwork.title,
            description,
            images: [artwork.src],
        },
    };
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
    const { slug } = await params;
    const artwork = getArtworkBySlug(slug);

    if (!artwork) {
        notFound();
    }

    const related = getRelatedArtworks(artwork);

    const artworkSchema = {
        "@context": "https://schema.org",
        "@type": "VisualArtwork",
        "name": artwork.title,
        "image": `https://sonalimohantyart.com${artwork.src}`,
        "artMedium": artwork.medium,
        "width": artwork.dimensions,
        "artform": "Painting",
        ...(artwork.year && { "dateCreated": artwork.year }),
        "creator": {
            "@type": "Person",
            "name": "Sonali Mohanty",
            "url": "https://sonalimohantyart.com",
        },
    };

    // Find prev/next for navigation
    const currentIndex = galleryData.findIndex((a) => a.id === artwork.id);
    const prevArtwork = currentIndex > 0 ? galleryData[currentIndex - 1] : null;
    const nextArtwork = currentIndex < galleryData.length - 1 ? galleryData[currentIndex + 1] : null;

    return (
        <div className="min-h-screen">
            <JsonLd data={artworkSchema} />

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="container mx-auto px-6 md:px-12 pt-28 md:pt-36">
                <ol className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted">
                    <li><Link href="/gallery" className="hover:text-foreground transition-colors">Gallery</Link></li>
                    <li aria-hidden="true" className="text-border">/</li>
                    <li className="text-foreground truncate max-w-[200px]">{artwork.title}</li>
                </ol>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Image */}
                    <div className="relative w-full aspect-square lg:aspect-auto lg:min-h-[60vh] bg-card rounded-md border border-border overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                        <Image
                            src={artwork.src}
                            alt={`${artwork.title} — ${artwork.medium}, ${artwork.dimensions}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-8 lg:sticky lg:top-32">
                        <div>
                            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">{artwork.category}</p>
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">{artwork.title}</h1>
                            {artwork.year && (
                                <p className="text-lg text-muted font-light">{artwork.year}</p>
                            )}
                        </div>

                        <div className="border-t border-border pt-8 space-y-6">
                            <div className="flex justify-between items-center">
                                <span className="text-xs tracking-[0.2em] uppercase text-muted font-semibold">Medium</span>
                                <span className="font-light text-lg">{artwork.medium}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs tracking-[0.2em] uppercase text-muted font-semibold">Dimensions</span>
                                <span className="font-light text-lg">{artwork.dimensions}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs tracking-[0.2em] uppercase text-muted font-semibold">Category</span>
                                <Link href={`/gallery?category=${encodeURIComponent(artwork.category)}`} className="font-light text-lg hover:text-muted transition-colors underline-offset-4 hover:underline">
                                    {artwork.category}
                                </Link>
                            </div>
                        </div>

                        {/* Inquiry Button */}
                        <div className="border-t border-border pt-8">
                            <ArtworkInquiryButton artworkTitle={artwork.title} artworkSlug={slug} />
                            <p className="text-xs text-muted mt-4 font-light">
                                For pricing and availability, please reach out via the inquiry form or contact us directly.
                            </p>
                        </div>

                        {/* Prev / Next Navigation */}
                        <div className="border-t border-border pt-8 flex justify-between items-center">
                            {prevArtwork ? (
                                <Link
                                    href={`/gallery/${getArtworkSlug(prevArtwork)}`}
                                    className="group flex items-center gap-3 text-muted hover:text-foreground transition-colors"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                                    <div className="text-right">
                                        <span className="text-[10px] tracking-[0.2em] uppercase block">Previous</span>
                                        <span className="text-sm font-serif truncate max-w-[120px] block">{prevArtwork.title}</span>
                                    </div>
                                </Link>
                            ) : <div />}
                            {nextArtwork ? (
                                <Link
                                    href={`/gallery/${getArtworkSlug(nextArtwork)}`}
                                    className="group flex items-center gap-3 text-muted hover:text-foreground transition-colors"
                                >
                                    <div>
                                        <span className="text-[10px] tracking-[0.2em] uppercase block">Next</span>
                                        <span className="text-sm font-serif truncate max-w-[120px] block">{nextArtwork.title}</span>
                                    </div>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                                </Link>
                            ) : <div />}
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Artworks */}
            {related.length > 0 && (
                <section className="container mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-border mt-12">
                    <h2 className="font-serif text-3xl md:text-4xl mb-12">More in {artwork.category}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {related.map((item) => (
                            <Link
                                key={item.id}
                                href={`/gallery/${getArtworkSlug(item)}`}
                                className="group relative overflow-hidden rounded-md border border-border bg-card"
                            >
                                <div className="relative aspect-square">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <h3 className="font-serif text-white text-sm">{item.title}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
