import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['www.wpbeginner.com','cdn.prod.website-files.com','images.prismic.io','www.classcentral.com'], // <-- add the domain causing the error
  },
};

export default nextConfig;
