/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure Turbopack to use the project root as the workspace root
    turbopack: {
        root: process.cwd(),
    },
};

export default nextConfig;
