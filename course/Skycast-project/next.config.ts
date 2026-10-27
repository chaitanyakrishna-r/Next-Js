import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optional: ignores strict typescript errors during builds as well
    ignoreBuildErrors: true,
  },
  images:{

    remotePatterns:[{
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },{
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  }
  
};

export default nextConfig;
