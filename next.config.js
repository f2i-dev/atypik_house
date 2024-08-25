/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        // appDir: true,
    },
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    rewrites: async () => {
        return [
            {
                source: "/api/:path*",
                destination: "http://localhost:3000/api/:path*",
            },
        ];
    },
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "res.cloudinary.com",
        ],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                path: false,
                os: false,
                crypto: false,
                ...config.resolve.fallback,
            };
        }

        return config;
    },
     eslint: {
        ignoreDuringBuilds: true,
    },
};
export default nextConfig;
