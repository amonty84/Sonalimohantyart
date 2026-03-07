import { contentData } from "@/data/content";
import JsonLd from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume & Exhibitions | Sonali Mohanty Art",
    description: "View Sonali Mohanty's history of exhibitions, milestones, and artistic career.",
    alternates: { canonical: '/resume/' },
};

const resumeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Resume & Exhibitions - Sonali Mohanty",
    "url": "https://sonalimohantyart.com/resume/",
    "description": "Exhibition history and milestones of visual artist Sonali Mohanty.",
};

export default function ResumePage() {
    return (
        <div className="container mx-auto px-6 md:px-12 py-32 max-w-4xl">
            <JsonLd data={resumeSchema} />
            <h1 className="font-serif text-5xl md:text-7xl mb-24 text-center tracking-tight">Exhibitions & Milestones</h1>

            <div className="space-y-24">
                {contentData.resume.map((section, idx) => (
                    <div key={idx} className="relative">
                        <h2 className="text-sm tracking-[0.3em] uppercase font-semibold text-muted mb-12 border-b border-border pb-4">{section.group}</h2>
                        <div className="space-y-12 pl-4 md:pl-12 border-l border-border">
                            {section.items.map((item, i) => (
                                <div key={i} className="relative group cursor-default">
                                    <span className="absolute -left-[21px] md:-left-[53px] top-2 w-2.5 h-2.5 bg-border rounded-full group-hover:bg-foreground group-hover:scale-150 transition-all duration-500" />
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                                        <span className="text-sm font-semibold tracking-[0.2em] uppercase text-muted group-hover:text-foreground transition-colors duration-500 w-24 shrink-0">
                                            {item.year}
                                        </span>
                                        <div>
                                            <h3 className={`text-xl transition-colors duration-500 group-hover:text-foreground ${'featured' in item && item.featured ? 'font-serif text-3xl' : 'font-light text-muted'}`}>
                                                {item.show}
                                            </h3>
                                            <p className="text-muted mt-2 font-light text-lg">{item.gallery}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
