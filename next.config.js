/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Portfolio",
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "imgix",
    path: "/",
  },
};

module.exports = nextConfig;
