import type { NextConfig } from "next";

// GitHub Pages serves static files under /<repo-name>; the workflow sets BASE_PATH.
const config: NextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH ?? "",
  images: { unoptimized: true },
};
export default config;
