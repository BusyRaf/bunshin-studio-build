import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

const nextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
}

export default withMDX(nextConfig)
