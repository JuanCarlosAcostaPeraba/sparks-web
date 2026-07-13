import type { APIRoute } from "astro";
import { siteMetadata } from "../config/seo";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${siteMetadata.url}/sitemap-index.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
