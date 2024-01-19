/** @type {import('next').NextConfig} */

const {
  EXTERNAL_REDIRECT = "https://duckduckgo.com",
  EXTERNAL_REDIRECT_2 = "https://google.com",
} = process.env;

console.log(EXTERNAL_REDIRECT, EXTERNAL_REDIRECT_2);
const getMultipleRedirects = ({
  numberOfRedirects,
  lastPage,
  redirectName,
}) => {
  const array = [];
  for (let i = 0; i < numberOfRedirects; i++) {
    if (i !== numberOfRedirects - 1) {
      array.push({
        source: i === 0 ? `/${redirectName}` : `/${redirectName}${i}`,
        destination: `/${redirectName}${i + 1}`,
        permanent: false,
      });
    } else {
      array.push({
        source: `/${redirectName}${i}`,
        destination: lastPage,
        permanent: false,
      });
    }
  }
  return array;
};

const threeRedirects = getMultipleRedirects({
  numberOfRedirects: 3,
  lastPage: "/about",
  redirectName: "three",
});

const tooManyRedirects = getMultipleRedirects({
  numberOfRedirects: 22,
  lastPage: "/about",
  redirectName: "toomany",
});

const nextConfig = {
  async redirects() {
    return [
      ...threeRedirects,
      ...tooManyRedirects,
      {
        source: "/permanentsamedomain301",
        destination: "/about",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/permanentdiffdomain301",
        destination: EXTERNAL_REDIRECT,
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
        destination: EXTERNAL_REDIRECT,
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
        destination: EXTERNAL_REDIRECT,
        permanent: true,
      },
      {
        source: "/tempsamedomain",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/tempdiffdomain",
        destination: EXTERNAL_REDIRECT,
        permanent: false,
      },
      {
        source: "/r1",
        destination: `${EXTERNAL_REDIRECT_2}/r2`,
        permanent: false,
        statusCode: 302,
      },
      {
        source: "/r2",
        destination: `${EXTERNAL_REDIRECT_2}/about`,
        permanent: false,
        statusCode: 302,
      },
    ];
  },
};

module.exports = nextConfig;
