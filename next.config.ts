import type { NextConfig } from 'next';

const product = process.env.NEXT_PUBLIC_REPO_NAME || '';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: product,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
