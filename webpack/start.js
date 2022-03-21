/**
 * Для запуска Вебпака через Node.js нужны:
 * webpack
 * webpack-dev-server (express.js + webpack-dev-middleware + хелперы)
 * webpack-hot-middleware
 * Конфигурация
 * Компайлер Вебпака
 * Запуск скрипта
 */

// Core
const webpack = require("webpack");
const DevServer = require("webpack-dev-server");
const chalk = require("chalk");

// Config
const getDevConfig = require("./configs/webpack.dev");

// Constants
const { HOST, PORT } = require("./constants");

// Webpack Compiler
const compiler = webpack(getDevConfig());

const server = new DevServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true,
});

server.start(HOST, PORT, () => {
  console.log(
    `${chalk.greenBright("Server listening on")} ${chalk.blueBright(
      `http://${HOST}:${PORT}`
    )}`
  );
});
