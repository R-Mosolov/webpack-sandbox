const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const getCommonConfig = require("./webpack.common");

const { cleanOptions, BUILD_DIRECTORY, PROJECT_ROOT } = require("../constants");

exports.cleanOptions = {
  verbose: true,
  root: PROJECT_ROOT,
};

module.exports = () => {
  return merge(getCommonConfig(), {
    plugins: [
      new CleanWebpackPlugin({
        pathsToClean: [BUILD_DIRECTORY],
        cleanOptions,
      }),
    ],
  });
};
