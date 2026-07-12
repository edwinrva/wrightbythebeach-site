import type { MetadataRoute } from "next";
import { attractions } from "@/content/attractions";

const BASE_URL = "https://www.wrightbythebeach.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/gallery", "/amenities", "/area", "/faq", "/book"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const areaRoutes = attractions.map((a) => ({
    url: `${BASE_URL}/area/${a.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...areaRoutes];
}
