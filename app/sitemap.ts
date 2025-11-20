import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://betterhalfproperty.co.uk";

  // Static routes
  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/contact",
  ];

  // SEO landing pages
  const seoRoutes = [
    "/seo/landlord-alternative-letting-agents-brighton",
    "/seo/property-maintenance-self-managing-landlords-brighton",
  ];

  const routes = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })),
    ...seoRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return routes;
}

