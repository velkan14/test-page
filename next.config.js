/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/redirect",
        destination: "https://duckduckgo.com",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
