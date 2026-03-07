import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Sonali Mohanty Art",
    description: "Privacy Policy for Sonali Mohanty Art portfolio website.",
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-6 md:px-12 py-32 max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl mb-12 tracking-tight">Privacy Policy</h1>
            <div className="prose prose-lg font-light text-muted leading-relaxed space-y-8">
                <p className="text-sm text-muted-foreground">Last updated: March 2026</p>

                <section>
                    <h2 className="font-serif text-2xl text-foreground mb-4">Information We Collect</h2>
                    <p>When you use our contact form, we collect the information you provide, including your name, email address, and message content. This information is processed through Formspree, a third-party form handling service.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl text-foreground mb-4">How We Use Your Information</h2>
                    <p>We use the information you provide solely to respond to your inquiries about artwork, exhibitions, or commissions. We do not sell, trade, or share your personal information with third parties for marketing purposes.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl text-foreground mb-4">Analytics</h2>
                    <p>We use Google Analytics to understand how visitors interact with our website. This service may collect information such as your IP address, browser type, and pages visited. This data is used in aggregate to improve our website experience.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl text-foreground mb-4">Cookies</h2>
                    <p>This website uses minimal cookies for essential functionality such as theme preferences (light/dark mode). Analytics cookies may also be used to understand site usage patterns.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl text-foreground mb-4">Third-Party Services</h2>
                    <p>We use the following third-party services:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-foreground">Formspree</strong> — for processing contact form submissions</li>
                        <li><strong className="text-foreground">Google Analytics</strong> — for website usage analytics</li>
                        <li><strong className="text-foreground">Google Fonts</strong> — for typography</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-serif text-2xl text-foreground mb-4">Contact</h2>
                    <p>If you have questions about this privacy policy, please contact us at <a href="mailto:sonalimohantyart@gmail.com" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">sonalimohantyart@gmail.com</a>.</p>
                </section>
            </div>
        </div>
    );
}
