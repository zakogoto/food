'use strict';

// ?? оператор схожий с || но реагирует только на null и undefined

const box = document.querySelector('.box');

const newHeight = 0,
      newWidth = 500;

function changeParam(item, h, w) {
    item.style.heigth = `${h ?? 200}px`; // 0 будет подставляться, не вызывая false, тк ?? принимает его и NaN
    item.style.width = `${w ?? 300}px`;
}
box.addEventListener('click', (e)=> {
    e.preventDefault();
    changeParam(box, newHeight, newWidth);
});

// Оператор опциональной цепочки ?

const block = document.querySelector('block');

// console.log(block); // Консоль выведет null, тк элемент отсутствует в DOM.

// console.log(block.textContent); // Вызовет ошибку и загрузка скрипта дальше остановится

// console.log(1 + 2); // Эта команда не будет выполнена.
// Чтобы этого избежать, можно поступить так

if (block) {
    console.log(block.textContent);
}

// Но так же существует Оператор опциональной цепочки ?

console.log(block?.textContent); // Если этого элемента не будет, в консоль выведет undefined
console.log(1 + 2);
// и скрипт будет продолжать работать дальше.

// Более реальный пример

const userData = {
    name: 'Nikita',
    age: null,
    hello: function() {
        console.log('Hello');
    }
};

// console.log(userData.skills.js); // Приведет к ошибке, тк нет таких данных. Можно избежать ошибки структурой:

if (userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
}
// Но она громоздкая и в реальности может разростись еще сильнее.
// Поэтому удобнее применить ?

console.log(userData.skills?.js);

// Для проверки существования метода, необходимо ставить полное написание оператора ?.
userData.hello();
userData.hey?.();