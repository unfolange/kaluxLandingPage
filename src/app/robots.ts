import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

// No restringimos ningún user-agent: queremos que tanto los buscadores
// tradicionales como los crawlers de IA (GPTBot, ClaudeBot, PerplexityBot,
// Google-Extended, etc.) puedan leer e indexar el sitio.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
