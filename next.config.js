/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Portfolio",
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://boramyy.github.io/invitation"
      : "",
};

module.exports = nextConfig;
