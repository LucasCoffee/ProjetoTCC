import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [new URL("https://media.wired.com/"), new URL(" https://gizmodo.com/")]
  }
}

export default nextConfig;
