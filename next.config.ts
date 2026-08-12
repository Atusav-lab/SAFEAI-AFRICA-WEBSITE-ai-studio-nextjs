import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: false },
      // Everything in the app (canonical tags, sitemap, OG URLs, JSON-LD) uses the
      // non-www host, and that is the version Google has indexed. Without this
      // redirect the www host serves the same pages on a second address, which
      // splits crawling and ranking signals between two copies of the site.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.safeaiafrica.com' }],
        destination: 'https://safeaiafrica.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
