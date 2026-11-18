import type { NextConfig } from "next";

// No GitHub Pages o site é gerado como arquivos estáticos (pasta out/)
// e servido em https://<usuario>.github.io/keep-clin-landing
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  compiler: { styledComponents: true },
  ...(isPages
    ? { output: "export", basePath, trailingSlash: true, images: { unoptimized: true } }
    : { images: { formats: ["image/avif", "image/webp"] } }),
};

export default nextConfig;
