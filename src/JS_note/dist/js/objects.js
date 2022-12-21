'use strict';

// Тема объекты.
// У объектов всегда есть ключ и значение. В прмере ниже key и key1 - ключи, а 'test' и 'test2' - значения.
// Свойство объекта - это пара "ключ + значение".
// const obj = {
//     key: 'test',
//     key1: 'test2',
// };
const options = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    color: {
        border: 'black',
        bg: 'red'
    }
};

// console.log(options.color);

// Удаление свойства объекта.

// delete options.name;

// console.log(options);

// Перебор свойств объекта.

// for (let key in options) {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`); 
// }
// Свойство color будет выведено как [object Object]
// Чтобы этого избежать, необходимо добавить дополнительную проверку свойств объекта на типы.
// Тогда код выше приобретет такой вид

for (let key in options) {
    if(typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`); 
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`); 
    }
}

// Подсчет количества свойств в объекте с помощью for in и с помощью метода Object.keys()

// const example = {
//     name: 'test',
//     width: 100,
//     heigth: 200,
//     color: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(Object.keys(example)); // Метод позволяет преобразовать все свойства объекта в массив и перечислит их.
// console.log(Object.keys(example).length); //  Добавление .lehgth позволяет посчитать количество свойств.

// let counter = 0;
// for (let key in example) {
//     counter++;
// }
// console.log(counter); // Более громоздкий вариант подсчета.

// Ручное создание метода!!!!!!!!

const firstMethod = {
    makeTest() {
        console.log('TEST');
    }
};

firstMethod.makeTest();

// Деструктуризация объекта.

const example = {
    name: 'test',
    width: 100,
    heigth: 200,
    color: {
        border: 'black',
        bg: 'red'
    }
};

const {border, bg} = example.color;

console.log(bg);