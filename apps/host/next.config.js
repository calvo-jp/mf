//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  swcMinify: false,
  webpack(config, { isServer }) {
    const subpath = isServer ? 'ssr' : 'chunks';

    config.cache = true;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          '@remotes/jokes': `jokes@http://localhost:3001/_next/static/${subpath}/remoteEntry.js`,
          '@remotes/bored': `bored@http://localhost:3002/_next/static/${subpath}/remoteEntry.js`,
        },
        shared: {
          '@chakra-ui/react': {
            singleton: true,
            requiredVersion: false,
          },
          '@emotion/react': {
            singleton: true,
            requiredVersion: false,
          },
          '@emotion/styled': {
            singleton: true,
            requiredVersion: false,
          },
          'framer-motion': {
            singleton: true,
            requiredVersion: false,
          },
          zustand: {
            singleton: true,
            requiredVersion: false,
          },
          '@mf/common': {
            singleton: true,
            requiredVersion: false,
          },
        },
        extraOptions: {
          enableImageLoaderFix: true,
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = withNx(nextConfig);
