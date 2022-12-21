"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(leftBorderWidth + number);

// const obj = {
//     a: 50
// };
// obj.a = 10;
// console.log(obj);

// const big = 'big';
// console.log(big);

// const genre = {
//   def: 'feed',
//   subGenre: {
//     horror: {
//         draccula: [1930, 'macron', 6.9]
//     },
//     drama: {
//         Godfather: [1972, 'Mussolini', 10.0]
//     }
//   }
// };

// console.log(genre.subGenre.horror['draccula']);

// const result = +prompt("Are you older 18 y.o?", "");
// console.log(result);
// console.log(typeof(result));

// const answers = [];
// answers[0] = prompt("What's your name?", "");
// answers[1] = prompt("What's your lastname?", "");
// answers[2] = +prompt("What's your age?", "");
// alert(`Hello, ${answers[0]} ${answers[1]}! Your age is ${answers[2]}`); Косые ковычки позволяют подставлять 
// значения переменных в вывод.
// console.log(typeof(answers[0]));
// console.log(typeof(answers[1]));
// console.log(typeof(answers[2]));

// const user = prompt("Как вас зовут?", "");

// const number = '10';
// console.log(5 + + number); //Унарный плюс, плюс который старится перед переменной
//  для использования ее в качестве int.

// Инкремент и дикремент
// let incr = 10,
//     decr = 10;

// Постфиксная модель записи, когда операторы инкремента/дикремента ствятся после переменной.
// При их выводе сначала выаодится старое значение, после чего выводится новое значение.
// console.log(incr++);  //Инкремент, двойной плюс, прибавляет единицу к значению.
// console.log(decr--);  //Дикремент , двойной минус, уменьшение на единицу.
//Вывод будет 10 и 10.
// Префиксная модель записи, когда операторы инкремента/дикремента ствятся перед переменной.
// При их выводе сразу выводится новое значение переменной.
// console.log(++incr);
// console.log(--decr);
//Вывод будет 11 и 9.

// == Оператор сравнения. (2 + 4 == '6') - true
// === Оператор строгого сравнения. (2 + 4 === '6') - false, (2 + 4 === 6) - true
// && Оператор AND
// || Оператор OR
// let isChecked = true,
//       isClosed = true;
// console.log(isChecked && isClosed);  //true

// isClosed = false;
// console.log(isChecked && isClosed);  //false
// console.log(isChecked || isClosed);  //true

// // ! Оператор отрицания, переворачивает значение переменной на противоположное.
// console.log(isChecked && !isClosed);  //true
// console.log(!isChecked || isClosed);  //false

// Условия
// let a = 4;

// if (a > 3) {
//       console.log("ok!");
// } else {
//       console.log('Not ok');
// } Операторы if и else

// const num = 50;

// if (num < 49) {
//       console.log("Error");
// } else if (num > 100) {           Оператор else if (elif)
//       console.log('Too much');
// } else {
//       console.log('OK');
// }

// Тернарные операторы
// Пример
// const num = 50;
// (num === 50) ? console.log('OK') : console.log('Error');  

// Оператор if заменяется на знак "?", оператор else на ":"
// Унарный аргумент (+4)
// Бинарный аргумент (4 + 4)
// Тернарный аргумент (num === 50)

// Альтернативный способ сокращения кода
// const num = 101;

// switch (num) {                               // switch() Какой элемент будет проверяться
//       case 49:                               //case Задает строгое сравнение равно или нет, если равно,
//             console.log("No");
//             break;                            // срабатывает break чтобы не выполнять следующие условия
//       case 100:
//             console.log("Too much");
//             break;
//       case 50:
//             console.log("Got it!");
//             break;
//       default:               // Если ни одно условие на верно, выполняется какое-то стандартное условие
//             console.log("Not today");
//             break;
// }
// Условия которые всегда равны false:
// 0
// null
// ""
// undefined
// NaN

// const burger = 5,
//       fries = 1;

// if (burger && fries) {
//       console.log("I'm full");
// } else {
//       console.log("I'm still hungry");
// }
// Ответ будет I'm full т.к fries = 1 и это значит fries == true

// const burger = 5,
// fries = 0;

// if (burger && fries) {
//       console.log("I'm full");
// } else {
//       console.log("I'm still hungry");
// }
// Ответ будет I'm still hungry т.к fries =  и это значит fries == false

// console.log( 5 === 5 && 3 > 1 || 5); ------- true

// let num = 50;

//  while (num <= 55) {
//       console.log(num),
//       num++;
//  }

//  do {
//       console.log(num);
//       num+=2;
//  }
//  while(num < 60);

// for (let i = 10; i < 20; i++) {
//       if (i % 2 == 0) {
//             continue;
//       }
//       console.log(i);
// }
// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//       for (let j = 0; j < i; j++) {
//             result+="*";
//       }
//       result+='\n';
// }

// console.log(result);

// ____*____
// ___***___
// __*****__
// _*******_
// *********

// Метки
// Используются чтобы передать из вложенного цикла действие для родительского цикла, break или continue 
// first: for (let i = 0; i < 3; i++) {
//       console.log(`First level: ${i}`);
//       for (let j = 0; j < 3; j++) {
//             console.log(`Second level: ${j}`);
//             for (let k = 0; k < 3; k++) {
//                   if (k === 2) continue first;
//                   console.log(`Third level: ${k}`);
//             }
//       }
// }

// for (let i = 5; i < 11; i++) {
//     console.log(i);
// }

// for (let i = 20; i > 10; i--) {
//       if (i === 13) {break;}
//       console.log(i);
// }

// // for (let i = 2; i < 11; i+=2) {
// //       console.log(i);
// // }

// for (let i = 2; i <= 16; i++) {
//       if (i % 2 === 0) {
//           continue;
//       } else {
//           console.log(i);
//       }
// }

// let num = 2;

// while (num < 16) {
//       num++;
//       if (num % 2 === 0) {
//             continue;
//       } else {
//             console.log(num);
//       }
// }

// const arr = [];

// for (let i = 0; i < 6; i++) {
//       for (let j = 5; j < 6; j++) {
//             arr[i] = i + j;
//       }
// }
// console.log(arr);

// function firstTask() {
//       // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//       const arr = [3, 5, 8, 16, 20, 23, 50];
//       const result = [];
  
//       // Пишем решение вот тут
//       for (let i = 0; i < arr.length; i++) {
//             result[i] = arr[i];
//       }
//       console.log(result);
      
//       // Не трогаем
//       return result;
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//       if (typeof(data[i]) == 'number') {
//             data[i] *= 2;
//       } else if (typeof(data[i]) == 'string') {
//             data[i] += " - done";
//       }
// }
// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'],
//       result = [];

// for (let i = 0; i < data.length; i++) {
//       result[i] = data[data.length-1-i];
// }
// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i < lines + 1; i++) {
//       for (let j = 0; j < lines - i; j++) {
//             result+=" ";
//       }
//       for (let k = 0; k < 2 * i + 1; k++) {
//             result+="*";
//       }
//       result+='\n';
// }
//  console.log(result);

// Функции
// function showFirstMessage(text) {
//       console.log(text);
// }

// showFirstMessage("Hello");
// function declaration - Функция, которая может быть вызвана до ее объявления.

// returnText("Car");

// function returnText(text) {
//       let string = "Blabla" + text;
//       return console.log(string);
// }

// returnText("Vehicle");
// Function Expression - Функция, созданная как переменная, может быть вызвана только после ее объявления.

// const calc = function (a, b) {
//       return a + b;
// }; // Обязательно точка  с запятой, после ее объявления.

// console.log(calc(2, 5));

// // Стрелочные функции, сокращеный способ создания функции, которая не имеет своего контекста.
//  const calcu = (a, b) => a + b;

//  const calcul = (a, b, c) => {
//       console.log(a, b, c);
//       return (a + b) / c;
//  };

//  console.log(calcu(2, 4));
//  console.log(calcul(2, 4, 3));

// function sayHello(name) {
//       console.log(`Привет, ${name}`);
// }

// sayHello("АНтон");

// const num = 4;

// function returnNeighboringNumbers(num) {
//       console.log([num - 1, num, num + 1]);
// }
// returnNeighboringNumbers(num);

// //Функция выводит сначала первое число, после этого проверяет, является ли вторая переменная числом больше 0, 
// //если является, проставляется --- после чего идет увеличение второго числа на 2, после на 3 и тд.
// function getMathResult(base, count) {  
//       let result = base;
//       if (typeof(count) != 'string' && count > 0) {
//             for (let i = 2; i < count + 1; i++) {
//                   result+= '---';
//                   result+= base * i;
//             }
//             return result;
//       } else {
//             return result;
//       }
// }
// console.log(getMathResult(1, 10));

// Методы и свойства строк и чисел

// Свойства запысываются без скобок в конце, пример: str.length;

// Методы обязаттельно прописываются со скобками, в которых указываются параметры для этого метода.
// Пример: str.slice(3, 8);

// Три способа вырезать значение части строки

// // 1 способ: slice()
// const logg = "Hello world!";

// console.log(logg.slice(6, 11));
// Первое число задает индекс начала среза, второе число задает где закончить срез, второе число не включается в срез.
// Поддерживает отрицательные индексы

// 2 способ: substring()
// const logg = "Hello world!";

// Метод похож на slice, отличие в том, чо не поддерживает отрицательные индексы
// console.log(logg.substring(6, 11));

// 3 способ: substr()
// Главное отличие в том, что второе число указывает не индекс, где заканчивать срез, а количество вырезаемых символов. 
// const logg = "Hello world!";

// console.log(logg.substr(6, 5));

// function calculateVolumeAndArea(edge) {
//     if ( isFinite(edge) && edge % 1 === 0) {
//         console.log(`Объем куба: ${Math.pow(edge, 3)}, площадь всей поверхности: ${6 * Math.pow(edge, 2)}`);
//     } else {
//         console.log("При вычеслени произошла ошибка");
//     }
// }

function createCounter() {
    let counter = 0;
    const myFunction = function() {
        counter = counter + 1;
        return counter;
    };

    return myFunction;
}

const increment = createCounter();

const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

// let x = [] + false - null + true;
// console.log(null || 2 && 3 || 4);
// let a = 2, b = 2;
// console.log(!!(a && b));
// console.log(a && b);
// let y = 1,
//     x = y = 2;
//     console.log(x);
// console.log(2 && 1 && null && 0 && undefined);
