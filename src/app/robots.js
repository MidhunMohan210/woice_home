export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/dashboard", "/app", "/widget", "/private/"],
      },
    ],
    sitemap: "https://www.woice.it.com/sitemap.xml",
    host: "https://www.woice.it.com",
  };
}
