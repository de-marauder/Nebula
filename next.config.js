/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withFonts = require("next-fonts");
// const withTM = require("next-transpile-modules")(["react"]);

const nextConfig = {
  images: {
    // formats: ['image/webp'],
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4|mp3)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/.next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        stream: require.resolve('stream-browserify'),
        crypto: require.resolve('crypto-browserify'),
      };

      config.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
        new webpack.NormalModuleReplacementPlugin(
          /node:crypto/,
          (resource) => {
            resource.request = resource.request.replace(/^node:/, '');
          }
        )
      );
    }
    return config;
  },
}

// module.exports = withImages(nextConfig);
// module.exports = nextConfig
module.exports = withPlugins(
  [withImages, withFonts],
  nextConfig
);