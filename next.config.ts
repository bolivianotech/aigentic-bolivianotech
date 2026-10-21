import type { NextConfig } from "next";

// Se sirve bajo /<repo> (GitHub Pages de proyecto); el workflow define NEXT_PUBLIC_BASE_PATH. En local queda vacío.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
