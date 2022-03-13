const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  // Здесь можно дебажить, доставая разные значения из консоли

  return {
    mode: 'none', // Устанавливает режим сборки. None удаляет все оптимизации
    devtool: false, // Делает код более читабельным, удаляя eval
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ]
  };
};