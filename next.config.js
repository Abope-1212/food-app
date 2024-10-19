// @type {import('next').NextConfig}
const nextConfig = {
  webpack(config) {
    // Remove the alias for 'url' to prevent the overwrite of the node 'url' module
    delete config.resolve.alias.url;

    return config;
  },
};

module.exports = nextConfig;
