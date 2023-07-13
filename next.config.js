/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Portfolio",
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "imgix",
    path: "https://alreadynyeong.github.io/Portfolio/",
  },
};

module.exports = nextConfig;
