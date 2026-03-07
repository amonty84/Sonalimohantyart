import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import ThemeProvider from "@/components/ui/ThemeProvider";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sonalimohantyart.com'),
  title: "Sonali Mohanty | Artist Portfolio",
  description: "Digital portfolio for artist Sonali Mohanty. Where Heritage Meets Contemporary Expression.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sonali Mohanty | Artist Portfolio",
    description: "Digital portfolio for artist Sonali Mohanty. Where Heritage Meets Contemporary Expression.",
    url: "https://sonalimohantyart.com",
    siteName: "Sonali Mohanty Art",
    images: [
      {
        url: "/images/The-Magnificient-Duo_36X30_SonaliMohanty_2025-1.webp",
        width: 1200,
        height: 630,
        alt: "Sonali Mohanty Artwork",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonali Mohanty | Artist Portfolio",
    description: "Digital portfolio for artist Sonali Mohanty. Where Heritage Meets Contemporary Expression.",
    images: ["/images/The-Magnificient-Duo_36X30_SonaliMohanty_2025-1.webp"],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sonali Mohanty Art",
  "url": "https://sonalimohantyart.com",
  "description": "Digital portfolio for artist Sonali Mohanty. Where Heritage Meets Contemporary Expression.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sonali Mohanty",
  "url": "https://sonalimohantyart.com",
  "image": "https://sonalimohantyart.com/images/Bio-Pic-_-Display-Pic.webp",
  "jobTitle": "Visual Artist",
  "knowsAbout": ["Mixed Media Art", "Acrylic Painting", "Contemporary Art", "Indian Mythology", "Watercolor"],
  "sameAs": [
    "https://instagram.com/sonalimohantyart",
    "https://facebook.com/sonalimohantyart"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "New Jersey",
    "addressCountry": "US"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <JsonLd data={websiteSchema} />
        <JsonLd data={personSchema} />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.theme==='dark'||(!localStorage.theme&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className="antialiased font-sans bg-background text-foreground selection:bg-foreground selection:text-background noise-bg relative min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:rounded"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <CustomCursor />
          <Preloader />
          <SmoothScroll>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main id="main-content" className="flex-grow z-10 relative">{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
