const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const {
  cleanOptions,
  SOURCE_DIRECTORY,
  BUILD_DIRECTORY,
  PROJECT_ROOT,
} = require("./constants");

exports.cleanOptions = {
  verbose: true,
  root: PROJECT_ROOT,
};

/**
 * Типы конфигов:
 * Function
 * Object
 * Promise
 */

module.exports = () => {
  // Здесь можно дебажить, доставая разные значения из консоли

  return {
    entry: SOURCE_DIRECTORY,
    output: {
      path: BUILD_DIRECTORY,
      filename: "bundle.js",
    },
    mode: "none", // Устанавливает режим сборки. None удаляет все оптимизации
    devtool: false, // Делает код более читабельным, удаляя eval
    plugins: [
      // Каждый плагин – это конструктор
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new CleanWebpackPlugin({
        pathsToClean: [BUILD_DIRECTORY],
        cleanOptions,
      }),
    ],
  };
};
