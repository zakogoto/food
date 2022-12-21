//Скрипты можно подключать как в конце body, так и в любом месте, даже в head
// Для этого необходимо добавить тэгу script атрибут defer, после чего скрпт будет загружаться
// параллельно DOM структуре и запустится косле ее загрузки.
// Так же есть атрбут async, который говорит скрипту загружаться не завися ни от какого другого скрипта.
// Так же можно в самом скрипте прописать запуст другого файла со скриптами.

// const script = document.createElement('script');

// script.src = 'js/tasks.js';
// script.async = false; //Отключение атрибута async у этого скрипта установленного по-умолчанию.

// document.body.append(); // Добавление скрпта tasks в конец body.

// // Создание функции по вызову другого скрипта

// const loadScript = function(src) {
//     script.src = src;
//     script.async = false;
//     document.body.append();
// };

// loadScript('js/object.js');