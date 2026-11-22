import type { Metadata } from "next";
import { SITE_URL, generateBreadcrumbsSchema } from "@/lib/seo-schemas";

export const metadata: Metadata = {
  title: "Contact Us & Factory Wholesale Inquiries",
  description:
    "Contact Radhe Dispoworld in Ahmedabad, Gujarat. Reach founder Purv Patel directly at +91 89800 05230 for custom bulk paper cup quotes, distributorships, and machine inquiries.",
  keywords: [
    "Contact Radhe Dispoworld",
    "Purv Patel Phone Number",
    "Paper Cup Manufacturer Ahmedabad Contact",
    "Radhe Dispoworld Address Ahmedabad 382430",
    "Paper Cup Wholesale Price Inquiry",
    "Bulk Disposable Cups Gujarat",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Radhe Dispoworld | Wholesale Paper Cup Manufacturer Ahmedabad",
    description:
      "Get in touch with founder Purv Patel at +91 89800 05230 or visit our manufacturing plant in Ahmedabad, Gujarat.",
    url: `${SITE_URL}/contact`,
    images: [{ url: "/purv-patel.jpg", width: 800, height: 800, alt: "Contact Radhe Dispoworld" }],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbsSchema = generateBreadcrumbsSchema([
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact" },
  ]);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Radhe Dispoworld",
    url: `${SITE_URL}/contact`,
    description: "Wholesale paper cup procurement desk and factory contact in Ahmedabad, Gujarat.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Radhe Dispoworld",
      telephone: "+91-89800-05230",
      email: "radhedispoworld@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "382430",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      {children}
    </>
  );
}
