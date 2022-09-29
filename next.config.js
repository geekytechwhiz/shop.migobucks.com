/** @type {import('next').NextConfig} */
 
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  register: true,
  skipWaiting: true,
})
module.exports = withPWA({ 
  distDir: 'build',
  compiler: {
    removeConsole: {
      exclude: ['log'],
    },
  },
  swcMinify: true,
  devIndicators: {
    autoPrerender: false,
  },
  publicRuntimeConfig: {
    theme: 'DEFAULT',
  },
  reactStrictMode: true,
  images: {
    domains: ['mibuploaddev.s3.ap-south-1.amazonaws.com'],
  },
  // experimental: {
  //   modularizeImports: {
  //     '@mui/material': {
  //       transform: '@mui/material/{{member}}',
  //     },
  //     '@mui/icons-material/?(((\\w*)?/?)*)': {
  //       transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}',
  //     },
  //   }
  // },
});
