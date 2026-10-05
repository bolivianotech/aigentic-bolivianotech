import type { NextConfig } from "next";

// Con dominio propio (public/CNAME) el sitio vive en la raíz; solo definir NEXT_PUBLIC_BASE_PATH si se sirve bajo /<repo>.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
