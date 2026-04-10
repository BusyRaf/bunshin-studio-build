const nextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
