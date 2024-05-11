/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.rawpixel.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.jedacademy.az",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
