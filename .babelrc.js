module.exports = (api) => {
  api.cache.never();

  return {
    presets: [
      "@babel/preset-react",
      [
        "@babel/preset-env",
        {
          debug: true,
          /**
           * Опция spec гарантирует, что код полностью соотвествует спецификации JS,
           * однако эта настройка замедляет скорость работы
           */
          spec: true,
          loose: false,
          /**
           * Вебпак хорошо работает только с модулями ES2015/ES6,
           * при включённой опции modules теряется множество полезных оптимизаций
           */
          modules: false,
        },
      ],
    ],
  };
};
