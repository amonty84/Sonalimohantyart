"use client";

import Link from "next/link";

interface ArtworkInquiryButtonProps {
    artworkTitle: string;
    artworkSlug: string;
}

export default function ArtworkInquiryButton({ artworkTitle, artworkSlug }: ArtworkInquiryButtonProps) {
    return (
        <Link
            href={`/contact?artwork=${encodeURIComponent(artworkSlug)}&title=${encodeURIComponent(artworkTitle)}`}
            className="inline-block w-full text-center px-12 py-4 border border-foreground hover:bg-foreground hover:text-background transition-colors duration-500 uppercase tracking-widest text-sm"
        >
            Inquire About This Artwork
        </Link>
    );
}
