'use strict';

const person = {
    name: "Ivan",
    tel: '+74444438339',
    parents: {
        mom: "Elena",
        dad: "Alex"
    }
};

// console.log(JSON.stringify(person)); //stringify - преобразует объект в JSON формат ключ/значение.
// console.log(JSON.parse(JSON.stringify(person))); // parse - преобразует возвращаемые с сервера объекты в  js формат.

// Глубокое клонирование

const clone = JSON.parse(JSON.stringify(person));
clone.name = "Nikita";
clone.parents.mom = "Zhanna";

console.log(person);
console.log(clone);
