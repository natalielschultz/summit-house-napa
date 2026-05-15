import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/rates-availability", destination: "/availability", permanent: true },
      { source: "/aframehome", destination: "/", permanent: true },
      {
        source: "/SummitHouse_Gary_Interactive.html",
        destination: "https://proposals.summithousenapa.com/SummitHouse_Gary_Interactive.html",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
