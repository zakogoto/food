"use strict";

// Тема урока callback

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}.`);
    callback();
}

function done() {
    console.log("Я прошел этот урок");
}

learnJS('Javascript', done);
// Задаем строгую последовательность выполнения функций. 
// Сначала выполняется певое действие,  только после него выполняется функция done.
