import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const routes = [
    "",
    "/product",
    "/how-it-works",
    "/use-cases",
    "/integrations",
    "/security",
    "/about",
    "/contact",
    "/request-demo",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/request-demo" ? 0.9 : 0.8,
  }));
}

