const { merge } = require("webpack-merge");
const common = require("./webpack/webpack.common.js");
const dev = require("./webpack/webpack.dev.js");
const prod = require("./webpack/webpack.prod.js");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  const config = isProd ? prod : dev;

  return merge(common, config);
};
