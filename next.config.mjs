/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/geoserver/:path*',
            destination: 'http://localhost:8080/geoserver/:path*',
          },
        ];
      },
};



export default nextConfig;
