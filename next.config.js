/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/permanentsamedomain",
        destination: "/samedomain",
        permanent: true,
      },
      {
        source: "/permanentdiffdomain",
        destination: "https://duckduckgo.com",
        permanent: true,
      },
      {
        source: "/tempsamedomain",
        destination: "/samedomain",
        permanent: false,
      },
      {
        source: "/tempdiffdomain",
        destination: "https://duckduckgo.com",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
