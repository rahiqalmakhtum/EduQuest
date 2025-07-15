/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [{
        loader: '@dhiwise/component-tagger/nextLoader',
      }],
    });
    return config;
  },

  async headers() {
    return [
      {
        // Matches *.pack
        source: '/:path*.pack',
        headers: [
          { key: 'Content-Disposition', value: 'inline' },
        ],
      },
      {
        // Matches *.pack.gz
        source: '/:path*.pack.gz',
        headers: [
          { key: 'Content-Disposition', value: 'inline' },
        ],
      },
    ];
  },
};

export default nextConfig;
