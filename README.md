# Webpack Sandbox

Репозиторий содержит итоги самообучения по курсу LECTRUM, посвящённому Вебпаку.
Сборка производилась на примере модулей с расширением JS+React.
Репозиторий заполнялся по веткам формата lesson-0<NUMBER>, где NUMBER – номер урока.
Самый последний урок содержит наиболее актуальные модули.

## Список тем курса

### Тема 1

- Введение в webpack
- Что такое bunder и task runner, и разница между ними
- Концепты entry, output, dependency graph, loader, plugin
- Подключение webpack-cli к webpack
- Создание первой конфигурации webpack
- Подключение первого плагина — html-webpack-plugin

### Тема 2

- Выделение констант из конфига
- Перевод скриптов вебпака на Node API
- Тема лоадеров
- Тема плагинов
- Обработка вебпаком css
- Настройка сервера разработки
- Настройка hot module replacement

### Тема 3

- Разделение конфига на common, dev, prod
- Разбор механизмов babel
- Подключение PostCSS - CSS Modules

### Тема 4

- Перевод конфига webpack на esm
- Включение source maps
- Разделение конфига webpack на модули
- Добавление поддержки png, jpeg, svg

### Тема 5

- Прокачка загрузки CSS для production
- Оптимизация изображений
- Переменные окружения

### Тема 6

- Анализ сборки
- Разбор webpack runtime
- Разбор свойств оптимизации webpack

### Тема 7

- Tree shaking
- Хеширование ассетов
- Кеширование
- Code splitting

### Тема 8

- Проблемы, связанные с code splitting и их решение
- Code splitting React-приложений
- Shimming
- Глобальное управление сборкой
- Материалы для дальнейшего изучения webpack

## Установка Вебпака и базовых зависимостей

Введите в терминале команду: `yarn add webpack webpack-cli --dev`

## Запуск сборки Вебпака

Введите в терминале команду: `npx webpack --mode=development`

## Улучшение читабельности сборки (за счёт линтера Prettier)

Введите в терминале команду: `yarn prettier --write .`.
После ввода команды результат читабельности появится в /dist/main.js.

## Описание зависимостей

| Зависимость             | Тип    | Описание                                                                                    |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------- |
| webpack                 | Основа | Базовый функционал Вебпака                                                                  |
| html-webpack-plugin     | Плагин | Генератор корневого файла HTML на основе шаблона                                            |
| mini-css-extract-plugin | Плагин | Плагин для обработки Вебпаком модулей с расширением CSS (для прода)                         |
| css-loader              | Лоадер | Лоадер для обработки Вебпаком модулей стилей (для дева)                                     |
| style-loader            | Лоадер | Лоадер для обработки Вебпаком модулей стилей (для дева)                                     |
| babel-loader            | Лоадер | Лоадер для транспиляции ES6/ES2015 в более ранние версии синтаксиса JS                      |
| webpack-cli             | –      | Интерфейс командной строки для управления настройками Вебпака, если не используется Node.js |
| webpack-dev-server      | –      | Прослайка между фреймворком express.js и Вебпаком для ссоздания дев-сервера                 |
| webpack-hot-middleware  | –      | Библиотека для отслеживания изменений в бандле                                              |
| serve                   | –      | Локальный запуск и проверка изенений бандла Вебпака                                         |
| prettier                | –      | Преобразование минифицированного кода в читабельный код                                     |
| chalk                   | –      | Цветовая обработка логов в консоли                                                          |
| @babel/core             | –      | Транспиляция ES6/ES2015 в более ранние версии синтаксиса JS                                 |
| @babel/core             | –      | Подстраивает окружение транспайлера Babel под нужное нам                                    |
