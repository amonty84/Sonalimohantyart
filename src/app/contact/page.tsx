"use client";

import { useState, FormEvent } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import JsonLd from "@/components/seo/JsonLd";

const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Sonali Mohanty",
    "url": "https://sonalimohantyart.com/contact/",
    "description": "Get in touch with Sonali Mohanty for artwork inquiries, exhibitions, or commissions.",
};

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormState("submitting");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL || "https://formspree.io/f/sonalimohantyart@gmail.com", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setFormState("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setFormState("error");
                setErrorMessage("Something went wrong. Please try emailing directly.");
            }
        } catch {
            setFormState("error");
            setErrorMessage("Network error. Please try emailing directly.");
        }
    }

    return (
        <div className="container mx-auto px-6 md:px-12 py-32 max-w-5xl">
            <JsonLd data={contactSchema} />
            <div className="text-center mb-24">
                <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-tight">Get in Touch</h1>
                <p className="text-lg md:text-xl text-muted font-light max-w-2xl mx-auto leading-relaxed">
                    For inquiries about purchasing artwork, exhibition opportunities, or commissions, please reach out via the form below.
                </p>
            </div>

            <div className="grid md:grid-cols-5 gap-16 lg:gap-24">
                <form onSubmit={handleSubmit} className="md:col-span-3 space-y-10">
                    <div className="group">
                        <label htmlFor="contact-name" className="block text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-3 group-focus-within:text-foreground transition-colors">Name</label>
                        <input
                            id="contact-name"
                            type="text"
                            name="name"
                            required
                            className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors font-light text-lg"
                            placeholder="Jane Doe"
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="contact-email" className="block text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-3 group-focus-within:text-foreground transition-colors">Email</label>
                        <input
                            id="contact-email"
                            type="email"
                            name="email"
                            required
                            className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors font-light text-lg"
                            placeholder="jane@example.com"
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="contact-message" className="block text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-3 group-focus-within:text-foreground transition-colors">Message</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            required
                            minLength={10}
                            rows={5}
                            className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors font-light text-lg resize-none"
                            placeholder="Your inquiry..."
                        />
                    </div>

                    {formState === "success" && (
                        <p className="text-green-700 dark:text-green-400 font-light">Thank you for your message. We will get back to you soon.</p>
                    )}
                    {formState === "error" && (
                        <p className="text-red-700 dark:text-red-400 font-light">{errorMessage}</p>
                    )}

                    <div className="pt-4">
                        <MagneticButton className="inline-block px-12 py-4 border border-foreground hover:bg-foreground hover:text-background transition-colors duration-500 uppercase tracking-widest text-sm w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed">
                            {formState === "submitting" ? "Sending..." : "Send Message"}
                        </MagneticButton>
                    </div>
                </form>

                <div className="md:col-span-2 flex flex-col justify-start gap-12 border-t md:border-t-0 md:border-l border-border pt-16 md:pt-0 md:pl-12 lg:pl-16">
                    <div>
                        <h3 className="font-serif text-2xl mb-4">Studio</h3>
                        <p className="text-muted font-light leading-relaxed text-lg">New Jersey, USA<br />Tel: +1 (856) 900 2684</p>
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl mb-4">Direct Contact</h3>
                        <a href="mailto:sonalimohantyart@gmail.com" className="text-muted font-light text-lg hover:text-foreground transition-colors underline-offset-4 hover:underline">sonalimohantyart@gmail.com</a>
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl mb-4">Socials</h3>
                        <div className="flex flex-col gap-3 text-muted font-light text-lg">
                            <a href="https://instagram.com/sonalimohantyart" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2 group">
                                <span className="w-4 h-[1px] bg-border group-hover:bg-foreground transition-colors"></span> Instagram
                            </a>
                            <a href="https://www.facebook.com/SonaliMohantyArt" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2 group">
                                <span className="w-4 h-[1px] bg-border group-hover:bg-foreground transition-colors"></span> Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
