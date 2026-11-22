import { MetadataRoute } from "next";
import { PRODUCTS_DATA, getProductSlug } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://radhedispoworld.com";
  const currentDate = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const productPages: MetadataRoute.Sitemap = PRODUCTS_DATA.map((product) => {
    const slug = getProductSlug(product);
    return {
      url: `${baseUrl}/products/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: product.category === "Machines" ? 0.9 : 0.8,
      images: [
        product.image.startsWith("http")
          ? product.image
          : `${baseUrl}${product.image}`,
      ],
    };
  });

  return [...staticPages, ...productPages];
}
