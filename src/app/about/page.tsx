import { contentData, artisticPhilosophy } from "@/data/content";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Sonali Mohanty Art",
    description: "Discover the artistic philosophy and background of Sonali Mohanty.",
    alternates: { canonical: '/about/' },
};

const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "About Sonali Mohanty",
    "url": "https://sonalimohantyart.com/about/",
    "mainEntity": {
        "@type": "Person",
        "name": "Sonali Mohanty",
        "jobTitle": "Visual Artist",
        "description": "Mixed media and acrylic artist based in New Jersey, USA, exploring the intersection of heritage, texture, and light.",
        "image": "https://sonalimohantyart.com/images/Bio-Pic-_-Display-Pic.webp",
    },
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 md:px-12 pt-32 pb-20 flex flex-col md:flex-row gap-16 items-start">
            <JsonLd data={aboutSchema} />
            <div className="flex-1 space-y-8">
                <h1 className="font-serif text-6xl">About Me</h1>
                <div className="text-lg text-card-foreground font-light leading-relaxed space-y-6">
                    {contentData.aboutMe.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <h2 className="font-serif text-4xl pt-8">Artistic Philosophy</h2>
                <div className="text-lg text-card-foreground font-light leading-relaxed space-y-6">
                    {artisticPhilosophy.trim().split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <h2 className="font-serif text-4xl pt-8">Artist Statement</h2>
                <div className="text-lg text-card-foreground font-light leading-relaxed space-y-6">
                    {contentData.statement.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                </div>
            </div>
            <div className="flex-1 w-full aspect-square relative sticky top-32 overflow-hidden rounded-sm shadow-xl">
                <Image
                    src="/images/Bio-Pic-_-Display-Pic.webp"
                    alt="Sonali Mohanty Portrait"
                    fill
                    className="object-cover object-center grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
                    priority
                />
            </div>
        </div>
    );
}
