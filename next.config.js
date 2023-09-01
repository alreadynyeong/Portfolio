/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Portfolio",
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "default",
    path: "https://alreadynyeong.github.io/Portfolio/",
    unoptimized: true,
  },
};

module.exports = nextConfig;
