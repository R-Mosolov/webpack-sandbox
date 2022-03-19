const HtmlWebpackPlugin = require("html-webpack-plugin");

const { SOURCE_DIRECTORY, BUILD_DIRECTORY } = require("../constants");

/**
 * Типы конфигов:
 * Function
 * Object
 * Promise
 */

module.exports = () => {
  // Здесь можно дебажить, доставая разные значения из консоли

  return {
    mode: "none", // Устанавливает режим сборки. None удаляет все оптимизации
    devtool: false, // Делает код более читабельным, удаляя eval
    entry: SOURCE_DIRECTORY,
    output: {
      path: BUILD_DIRECTORY,
      filename: "bundle.js",
    },
    module: {
      rules: [
        // Лоадеры должны перечисляться справа (от иерархически младшего)
        // налево (от иерархически старшему), если значение ключа use – это массив
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [
      // Каждый плагин – это конструктор
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
};
