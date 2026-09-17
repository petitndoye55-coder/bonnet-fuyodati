import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://bonnets-fuyodati-senegal.petitndoye55.chatgpt.site/sitemap.xml", host: "https://bonnets-fuyodati-senegal.petitndoye55.chatgpt.site" };
}
