/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },

  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://be.contentful.com/login/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
