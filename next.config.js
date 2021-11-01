/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    // temporary fix for next@12 https://github.com/shadowwalker/next-pwa/issues/288
    buildExcludes: [/middleware-manifest\.json$/],
  },
});
