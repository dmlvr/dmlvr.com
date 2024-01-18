/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/promo/bp',
        destination: '/promo/bp/index.html', // Путь к вашим React-страницам
      },
    ];
  },
}