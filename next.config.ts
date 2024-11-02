import type { NextConfig } from 'next';

const product = process.env.REPO_NAME;

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  assetPrefix: product,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
