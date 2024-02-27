/** @type {import('next').NextConfig} */
import path from 'path'
import { dirname } from 'path';

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join( dirname('styles'))],
    },
};

export default nextConfig;
