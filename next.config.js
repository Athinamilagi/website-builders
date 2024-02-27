/** @type {import('next').NextConfig} */
const path = require('path');
const { dirname } = path;

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(dirname("styles"))],
    output: "export",
  },
};

module.exports = {
  ...nextConfig
};
