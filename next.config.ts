import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: false },
      // Do NOT add a host redirect here. Vercel already redirects the apex domain
      // to www at the edge, so a www-to-apex rule in the app produces an infinite
      // redirect loop and takes the whole site down. Host canonicalisation belongs
      // in the Vercel domain settings; the app just needs SITE_URL in
      // src/lib/site.ts to match whichever host Vercel serves.
    ];
  },
};

export default nextConfig;
