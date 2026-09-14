import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

// No restringimos ningún user-agent: queremos que tanto los buscadores
// tradicionales como los crawlers de IA (GPTBot, ClaudeBot, PerplexityBot,
// Google-Extended, etc.) puedan leer e indexar el sitio.
//
// Content-Signal (propuesta de Cloudflare/IAB para robots.txt, ver
// https://www.contentsignals.org): declara explícitamente el uso permitido
// del contenido, en vez de dejarlo ambiguo.
// - search=yes:    aparecer en índices de búsqueda (Google, Bing, etc.)
// - ai-input=yes:  que agentes de IA con navegación/RAG (ChatGPT, Perplexity,
//                  Claude) puedan leer el contenido en vivo para responder
//                  y citarlo — esto es justamente lo que buscamos.
// - ai-train=no:   no autorizamos usar el contenido para entrenar modelos
//                  (postura por defecto; cámbiala si prefieren lo contrario).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      other: {
        "Content-Signal": "search=yes, ai-input=yes, ai-train=no",
      },
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
