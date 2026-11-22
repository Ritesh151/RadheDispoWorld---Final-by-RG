import { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";
import { faqSchema } from "@/lib/seo-schemas";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Paper Cups Manufacturer & Forming Machines Ahmedabad",
  description:
    "Leading manufacturer & bulk wholesaler of disposable paper tea cups, coffee cups, ice cream cups & paper cup making machines in Ahmedabad, Gujarat. ISO certified plant.",
  alternates: {
    canonical: "https://radhedispoworld.com",
  },
  openGraph: {
    title: "Radhe Dispoworld | Paper Cups Manufacturer Ahmedabad",
    description:
      "Leading manufacturer & bulk wholesaler of disposable paper tea cups, coffee cups, ice cream cups & paper cup making machines in Ahmedabad, Gujarat.",
    url: "https://radhedispoworld.com",
    siteName: "Radhe Dispoworld",
    images: [
      {
        url: "https://radhedispoworld.com/images/gallery/Outside.jpg",
        width: 1200,
        height: 630,
        alt: "Radhe Dispoworld Manufacturing Plant Ahmedabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radhe Dispoworld | Paper Cups Manufacturer Ahmedabad",
    description:
      "Leading manufacturer & bulk wholesaler of disposable paper tea cups, coffee cups & forming machines in Ahmedabad.",
    images: ["https://radhedispoworld.com/images/gallery/Outside.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <HomeClient />
    </>
  );
}
