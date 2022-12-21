'use strict';

const now = new Date(); //Если функция пустая, возвращает текущее время и дату по гринвичу


// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth()); //Месяцы начинаются с (0) январь
// console.log(now.getDate()); //Возвращает день месяца с 1 по 31
// console.log(now.getDay()); //Возвращает день недели начиная с воскресенья (0) заканчивая суботтой (6)
// console.log(now.getHours()); //Местное время
// console.log(now.getUTCHours()); // Время по Гринвичу

// Для определенной установки даты get заменяется на set

// console.log(now.setHours(18, 40));
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} милисекунд.`);