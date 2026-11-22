import React from "react";
import type { Metadata } from "next";
import GalleryExplorer from "@/components/gallery/GalleryExplorer";
import { generateBreadcrumbsSchema, SITE_URL } from "@/lib/seo-schemas";
import { GALLERY_ITEMS } from "@/lib/data";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Factory & Machinery Photo Gallery",
  description:
    "Browse 33+ high-resolution photos of Radhe Dispoworld's automated manufacturing cleanroom in Ahmedabad, high-speed forming machinery, ripple cups, and finished goods.",
  keywords: [
    "Paper Cup Factory Photos",
    "Paper Cup Machine Photos Ahmedabad",
    "Radhe Dispoworld Plant Pictures",
    "Paper Cup Cleanroom Gujarat",
    "Automated Cup Forming Facility",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Factory & Machinery Photo Gallery | Radhe Dispoworld Ahmedabad",
    description:
      "Visual tour inside our automated paper cup plant in Ahmedabad. 33+ high-definition photos of machines, cleanrooms, and products.",
    url: `${SITE_URL}/gallery`,
    images: [{ url: "/images/gallery/Cup_Family.jpg", width: 1200, height: 630, alt: "Radhe Dispoworld Gallery" }],
  },
};

export default function GalleryPage() {
  const breadcrumbsSchema = generateBreadcrumbsSchema([
    { name: "Home", url: "/" },
    { name: "Photo Gallery", url: "/gallery" },
  ]);

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Radhe Dispoworld Manufacturing Plant & Product Gallery",
    description: "High-resolution photo collection of paper cup manufacturing machines, factory bays, and product range in Ahmedabad.",
    url: `${SITE_URL}/gallery`,
    image: GALLERY_ITEMS.slice(0, 15).map((item) => `${SITE_URL}${item.image}`),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Schema.org ImageGallery & Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(imageGallerySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      {/* Visual Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: "Photo Gallery" }]} className="mb-6" />

      <GalleryExplorer />
    </div>
  );
}
