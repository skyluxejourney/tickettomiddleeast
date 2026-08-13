/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Add this line
  },
  // ... other config
}

module.exports = nextConfig