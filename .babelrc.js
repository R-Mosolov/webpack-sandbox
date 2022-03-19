module.exports = (api) => {
  api.cache.never();

  return {
    presets: ["@babel/env"],
  };
};
