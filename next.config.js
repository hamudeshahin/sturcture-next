const withPlugins = require("next-compose-plugins");

const nextTranslate = require("next-translate");

module.exports = withPlugins([[nextTranslate, {}]], {
  reactStrictMode: false,
  reactDevOverlay: false,
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: process.env.BACKEND_URL,
  },
  images: {
    // domains: ["encrypted-tbn0.gstatic.com"],
  },
  webpack(config) {
    // config.module.rules.push({
    //   test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
    //   loader: "file-loader",
    // });
    return config;
  },
});
