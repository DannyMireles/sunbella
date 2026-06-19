export function GET() {
  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "Disallow: *?lightbox=",
      "",
      "Sitemap: https://www.sunbellamusic.com/sitemap.xml",
      ""
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    }
  );
}
