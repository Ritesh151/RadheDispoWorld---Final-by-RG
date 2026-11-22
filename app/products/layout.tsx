import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo-schemas";

export const metadata: Metadata = {
  title: "Wholesale Paper Cups & Machinery Catalog",
  description:
    "Explore 53+ food-grade disposable paper cup varieties (40ml, 50ml, 65ml, 75ml, 100ml, 150ml, 200ml, 250ml, Ice cream wati) and high-speed forming machines at factory direct wholesale rates.",
  keywords: [
    "Paper Cup Catalog Ahmedabad",
    "Wholesale Paper Cups Price List",
    "40ml Paper Cups Bharati 35",
    "50ml Paper Cups Bharati 50",
    "65ml Paper Cups Cutting Chai",
    "75ml Paper Cups Gujarat",
    "100ml Ice Cream Wati",
    "200ml Paper Cups",
    "250ml Ripple Cold Drink Cups",
    "Paper Cup Making Machine Price",
    "Radhe Dispoworld Products",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "53+ Paper Cup Products & Machinery Catalog | Radhe Dispoworld",
    description:
      "Direct factory wholesale prices with complete Bharati, packet count, GSM, and carton capacity details. Ahmedabad, Gujarat.",
    url: `${SITE_URL}/products`,
    images: [{ url: "/images/gallery/Cup_Family.jpg", width: 1200, height: 630, alt: "Radhe Dispoworld Products" }],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
