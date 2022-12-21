'use strict';

// Array - Массив

// const arr = [1, 2, 3, 4, 6, 8];

// arr.pop(); // Метод удаления последнего элемента массива.
// arr.push(10); // Метод добавления в конец массива элемента.

// console.log(arr);

// Подсчет количетсва элементов массива.

// console.log(arr.length); // Берется индекс последнего элемента массива и придавляется 1.

// Как не следует добавлять элементы в массив.

// arr[99] = 20;
// // Между последним существующим элементои и новым будет создано 93 незаполненых ячейки.
// console.log(arr);
// console.log(arr.length);


// Перечисление всех элементов массива.

// for (let value of arr) {
//     console.log(value);
// }

// for(let i = 0; i <arr.length; i++) {
//     console.log(arr[i]);
// }

// Метод forEach() итеррирование по массиву.

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// Еще методы для массивов.
// sort(). Сортировка массива.

const arr = [1, 2, 3, 14, 6, 28];
arr.sort();
console.log(arr);
// Консоль выведет [ 1, 14, 2, 28, 3, 6 ], т.к изначально sort() сортирует массив как строки.
// Для того чтобы отсортировать массив по возрастанию числами, необходимо добавить функцию.
function compareNum(a, b) {
    return a-b;
}
arr.sort(compareNum);
console.log(arr);

// Так же существуют псевдо-массивы, которые имеют точно такую же структуру как у масива, но не обладают методами.