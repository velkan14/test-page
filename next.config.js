/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/permanentsamedomain301",
        destination: "/about",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/permanentdiffdomain301",
        destination: "https://duckduckgo.com",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/tempsamedomain302",
        destination: "/about",
        permanent: false,
        statusCode: 302,
      },
      {
        source: "/tempdiffdomain302",
        destination: "https://duckduckgo.com",
        permanent: false,
        statusCode: 302,
      },
      {
        source: "/permanentsamedomain",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/permanentdiffdomain",
        destination: "https://duckduckgo.com",
        permanent: true,
      },
      {
        source: "/tempsamedomain",
        destination: "/about",
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
