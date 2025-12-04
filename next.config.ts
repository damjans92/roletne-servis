// import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: isProd ? "export" : undefined,

  images: {
    unoptimized: isProd,
  },

  trailingSlash: isProd ? true : undefined,
  skipTrailingSlashRedirect: isProd ? true : undefined,
};

module.exports = nextConfig;
