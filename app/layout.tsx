import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  howToOrderSchema,
  SITE_URL,
} from "@/lib/seo-schemas";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Paper Cups Manufacturer & Wholesale Supplier in Ahmedabad | Radhe Dispoworld",
    template: "%s | Radhe Dispoworld",
  },
  description:
    "Looking for high quality Paper Cups? Radhe Dispoworld (Founded by Purv Patel in Ahmedabad, Gujarat) is India's premier manufacturer of 100% food-grade, leak-proof disposable paper cups (40ml to 350ml), custom logo printed cups, and automatic paper cup machines at direct wholesale prices.",
  keywords: [
    "Paper Cups Manufacturer in Ahmedabad",
    "Paper Cups Wholesale Ahmedabad",
    "Disposable Paper Cups Gujarat",
    "Paper Cup Supplier India",
    "Custom Logo Printed Paper Cups",
    "Tea Paper Cups 40ml 50ml 65ml 75ml",
    "Coffee Paper Cups 100ml 150ml 200ml 250ml",
    "Ice Cream Wati Paper Cups",
    "Ripple Wall Paper Cups",
    "Double Wall Insulated Paper Cups",
    "Paper Cup Making Machine Supplier Ahmedabad",
    "Food Grade Virgin Paper Cups",
    "Leak Proof Paper Cups Gujarat 382430",
    "Radhe Dispoworld",
    "Purv Patel",
  ],
  authors: [{ name: "Purv Patel", url: SITE_URL }, { name: "Radhe Dispoworld" }],
  creator: "Purv Patel",
  publisher: "Radhe Dispoworld",
  category: "Paper Cups Manufacturing & Disposable Packaging",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": `${SITE_URL}`,
      "hi-IN": `${SITE_URL}`,
      "gu-IN": `${SITE_URL}`,
      "x-default": `${SITE_URL}`,
    },
  },
  openGraph: {
    title: "Radhe Dispoworld | Premier Paper Cup Manufacturer & Machinery Supplier",
    description:
      "Direct factory wholesale pricing on 100% food-grade, leak-proof single wall, double wall, ripple, and customized logo printed paper cups. Ahmedabad, Gujarat.",
    url: SITE_URL,
    siteName: "Radhe Dispoworld",
    images: [
      {
        url: "/images/gallery/Cup_Family.jpg",
        width: 1200,
        height: 630,
        alt: "Radhe Dispoworld Paper Cup Complete Suite - Ahmedabad",
      },
      {
        url: "/purv-patel.jpg",
        width: 800,
        height: 800,
        alt: "Purv Patel - Founder & Managing Director of Radhe Dispoworld",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radhe Dispoworld | Eco Paper Cup Manufacturer Ahmedabad",
    description:
      "Founded by Purv Patel. High-speed manufacturing of 100% leak-proof, food-grade paper cups for cafes, tea stalls, and caterers across India.",
    images: ["/images/gallery/Cup_Family.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "geo.position": "22.990157;72.745048",
    ICBM: "22.990157, 72.745048",
    "revisit-after": "1 days",
    distribution: "global",
    rating: "general",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        
        {/* Schema.org Organization & Manufacturer */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Schema.org LocalBusiness & Factory */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* Schema.org WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* Schema.org HowTo Order Guide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(howToOrderSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col justify-between font-sans bg-[#FAFAF9] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
