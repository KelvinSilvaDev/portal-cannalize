/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: [
      "secure.gravatar.com",
      "3.209.73.98",
      "i0.wp.com",
      "kellek.com.br",
      "cannalize.com.br",
      "www.cannalize.com.br",
    ],
  },
};
