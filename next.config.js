const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'techwhizabdul.com'],
  },
  secret: process.env.NEXTAUTH_SECRET,
};

module.exports = nextConfig;
