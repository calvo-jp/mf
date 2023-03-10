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
        name: 'jokes',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          '@remotes/news': `news@http://localhost:3003/_next/static/${subpath}/remoteEntry.js`,
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
        exposes: {
          './Jokes': './pages/index.tsx',
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
  images: {
    domains: ['dynaimage.cdn.cnn.com'],
  },
};

module.exports = withNx(nextConfig);
