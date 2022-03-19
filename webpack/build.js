/**
 * Для запуска Вебпака через Node.js нужны:
 * Вебпак
 * Конфигурация
 * Компайлер Вебпака
 * Запуск скрипта
 */

// Вебпак
const webpack = require("webpack");
const chalk = require("chalk");

// Конфигурация
const getProdConfig = require("./configs/webpack.prod");

// Компайлер Вебпака
const compiler = webpack(getProdConfig());

// Логгирование промежуточных стадий компиляции
compiler.hooks.beforeRun.tap({ name: "start" }, () => {
  console.log("Compilation started...");
});
compiler.hooks.done.tap({ name: "done" }, () => {
  console.log("Compilation finished!");
});

compiler.run((error, stats) => {
  // Проверка ошибки конфигурации
  if (error) {
    console.error(error.stack || error);
    error.message && console.error(error.message);
    return null;
  }

  const info = stats.toString({
    hash: true,
    colors: true,
    version: true,
    env: true,
    modules: false,
    entrypoints: true,
  });

  // Вывод детализации по сборке
  console.log(chalk.greenBright("Build completed!"));
  console.log(info);

  // Проверка ошибки компиляции (битый импорт, ошибка синтаксиса и др.)
  if (stats.hasErrors()) {
    console.log(chalk.redBright("Error!"));
    console.error(info);
  }

  // Проверка предупреждения компиляции
  if (stats.hasWarnings()) {
    console.log(chalk.redBright("Warning!"));
    console.warn(info);
  }
});
