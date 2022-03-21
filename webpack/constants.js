const { resolve } = require("path");
const { path: PROJECT_ROOT } = require("app-root-path");

// Пути
exports.PROJECT_ROOT = PROJECT_ROOT;
exports.SOURCE_DIRECTORY = resolve("./src");
exports.BUILD_DIRECTORY = resolve("./build");

// Хосты и порты
exports.HOST = "localhost";
exports.PORT = 3000;
