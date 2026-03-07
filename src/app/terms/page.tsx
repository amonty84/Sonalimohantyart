import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Sonali Mohanty Art",
    description: "Terms of Service for Sonali Mohanty Art portfolio website.",
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-6 md:px-12 py-32 max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl mb-12 tracking-tight">Terms of Service</h1>
            <div className="prose prose-lg font-light text-muted leading-relaxed space-y-8">
                <p className="text-sm text-muted-foreground">Last updated: March 2026</p>

                <section>
                    <h2 className="font-serif text-2xl text-foreground mb-4">Copyright & Intellectual Property</h2>
                    <p>All artwork images, text content, and creative materials displayed on this website are the intellectual property of Sonali Mohanty. Unauthorized reproduction, distribution, or use of any content without prior written consent is strictly prohibited.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl text-foreground mb-4">Use of Website</h2>
                    <p>This website is provided for personal, non-commercial viewing and inquiry purposes. You may browse the portfolio, view artwork, and contact the artist through the provided contact form.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl text-foreground mb-4">Artwork Purchases</h2>
                    <p>All artwork sales and commissions are handled directly through personal communication with the artist. Pricing, availability, and shipping arrangements are discussed on a case-by-case basis. Contact the artist via the contact form or email for inquiries.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl text-foreground mb-4">Disclaimer</h2>
                    <p>While we strive to display artwork as accurately as possible, colors and details may appear differently on various screens and devices. The website is provided &quot;as is&quot; without warranties of any kind.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl text-foreground mb-4">Contact</h2>
                    <p>For questions about these terms, please contact us at <a href="mailto:sonalimohantyart@gmail.com" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">sonalimohantyart@gmail.com</a>.</p>
                </section>
            </div>
        </div>
    );
}
