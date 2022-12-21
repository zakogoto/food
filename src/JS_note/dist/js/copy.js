// 'use strict';

// // Копирование по ссылке и по значению.
// // В небольших переменных копирование просходит по значению, то есть b копирует значение а.
// // И при изменениии b, значение а не изменяется.
// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// // Если такую операцию провернуть с объектами, то произойдет так, что при внесении изменений в новую переменную
// // Изменения будут применены к копируемому объекту, т.к в данном случае копирование идет по ссылке.
// //  То есть copyObj как бы создает ссылку на jbj.

// // const obj = {
// //     a: 5,
// //     b: 2
// // };

// // const copyObj = obj;

// // copyObj.a = 10;

// // console.log(copyObj);
// // console.log(obj);

// // Чтобы этого избежать необходимо применять другой способ, а именно перебор свойств оригинального объекта
// //  и поставление их в копируемый объект. То есть происходит клонирование объекта.
// const obj = {
//     a: 5,
//     b: 2,
//     с: {
//         x: 10,
//         y: 20
//     }
// };

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
// let copyObj = copy(obj);

// copyObj.a = 10;

// console.log(copyObj);
// console.log(obj);

// // Вроде бы все скопировалось и получается вносить зменения в свойства и не изменять оригинальный объект,
// // Но если попробовать изменить свойства вложенного объекта C, то все равно будут изменения в оригинале.
// // Т.к произошло только поверхностное клонирование. Для более глубоких клонирований используются другие способы.

// // Object.assign()

// const number = {
//     a: 10,
//     b: 20,
//     c: {
//         x: 30,
//         y: 35
//     }
// };

// const add = {
//     d: 40,
//     e: 50
// };

// console.log(Object.assign(number, add)); //Если в первый аргумент поместить пустой объект, а во второй копируемый.
// // bigNum.c.y = 39;                      //Произойдет клонирование объекта на поверхностном уровне.
// console.log(number);                     //А чтобы вставить один объект в другой, необходимо в первый аргумент
// console.log(add);                        //поставить название объекта, в который будет происходить добавление.

// const bigNum = Object.assign({}, add);                  
// bigNum.d = 45;
// console.log(bigNum);
// console.log(add);

// // Клонирование массивов. Метод slice();

// const oldArr = ['a', 'b', 'c'],
//       newArr = oldArr.slice();

// newArr[1] = 'bababa';

// console.log(newArr);
// console.log(oldArr);

const video = ['youtube', 'vimeo', 'rutube'],
      blog = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blog, 'vk', 'facebook'];

console.log(internet);

const num = [2, 3, 5];

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
log(...num);

const obj = {
    one: 1,
    two: 2,
    three: 3
};

const newObj = {...obj};
newObj.one = 111;
console.log(newObj);
console.log(obj);
