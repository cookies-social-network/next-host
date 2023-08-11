const path = require('path')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, './assets/styles')],
    prependData:
      // eslint-disable-next-line max-len
      '@use "@@/assets/styles/additionals/mixins/index.scss" as *; @use "@@/assets/styles/additionals/variables/index.scss" as *;',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
    })

    config.plugins.push(new SpriteLoaderPlugin())

    return config
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${process.env.BASE_URL}/api/v1/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
