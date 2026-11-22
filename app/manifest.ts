import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Radhe Dispoworld | Eco Paper Cup Manufacturer",
    short_name: "Radhe Dispoworld",
    description:
      "Ahmedabad's leading manufacturer of food-grade, leak-proof paper cups and cup forming machinery. Founded by Purv Patel.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF9",
    theme_color: "#EA580C",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
