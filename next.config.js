/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/activity',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
