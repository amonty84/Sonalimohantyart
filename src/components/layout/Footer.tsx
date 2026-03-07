import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-background border-t border-border py-12 md:py-20 mt-auto">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

                {/* Brand & Concept */}
                <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-left">
                    <h3 className="font-serif text-2xl tracking-[0.4em] uppercase font-light">Sonali Mohanty</h3>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <h4 className="uppercase tracking-widest text-xs font-semibold text-foreground mb-2">Explore</h4>
                    <Link href="/" className="text-muted hover:text-foreground transition-colors text-sm hover:underline underline-offset-4">Home</Link>
                    <Link href="/gallery" className="text-muted hover:text-foreground transition-colors text-sm hover:underline underline-offset-4">Gallery</Link>
                    <Link href="/about" className="text-muted hover:text-foreground transition-colors text-sm hover:underline underline-offset-4">About</Link>
                    <Link href="/resume" className="text-muted hover:text-foreground transition-colors text-sm hover:underline underline-offset-4">Exhibitions</Link>
                </div>

                {/* Newsletter Subscription */}
                <div className="flex flex-col items-center md:items-start gap-4 w-full max-w-sm">
                    <h4 className="uppercase tracking-widest text-xs font-semibold text-foreground">Join the Studio List</h4>
                    <p className="text-muted text-sm font-light leading-relaxed">
                        Subscribe for updates on upcoming releases, exhibitions, and exclusive insights.
                    </p>
                    <form className="w-full relative mt-2">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-transparent border-b border-border py-2 pr-10 text-sm focus:outline-none focus:border-foreground transition-colors"
                        />
                        <button type="button" className="absolute right-0 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </form>
                </div>

                {/* Social & Contact */}
                <div className="flex flex-col items-center md:items-end gap-6">
                    <div className="flex gap-6">
                        <a href="https://instagram.com/sonalimohantyart" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors" aria-label="Instagram">
                            <Instagram className="h-5 w-5" strokeWidth={1.5} />
                        </a>
                        <a href="https://facebook.com/sonalimohantyart" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors" aria-label="Facebook">
                            <Facebook className="h-5 w-5" strokeWidth={1.5} />
                        </a>
                        <Link href="/contact" className="text-muted hover:text-foreground transition-colors" aria-label="Email Contact">
                            <Mail className="h-5 w-5" strokeWidth={1.5} />
                        </Link>
                    </div>
                    <Link href="/contact" className="text-sm font-medium border-b border-foreground pb-1 hover:text-muted hover:border-muted transition-colors">
                        Inquire about purchasing
                    </Link>
                </div>
            </div>

            {/* Copyright Line */}
            <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
                <p>&copy; {currentYear} Sonali Mohanty Art. All rights reserved.</p>
                <div className="flex gap-6">
                    <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}
