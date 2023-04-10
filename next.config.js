/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "cdn.sanity.io", "tailwindui.com", "www.themoviedb.org"],
  },
};

module.exports = nextConfig;