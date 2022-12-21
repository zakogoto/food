'use strict';

// // const num = new Number(3); //Создает num как объект

// // console.log(num);

// function User(name, id) { //3) Принцип создания функции конструктора.
//     this.name = name; //контекст вызова -this означает что у каждого user будут свои уникальные свойства
//     this.id = id;
//     this.human = true;
//     this.hello = () => {
//         console.log(`Hello ${this.name}`);
//     };
// }

// const Nikita = new User('Nikita', 27); //переменная примет вид объекта благодаря функции конструктору
// const Ivan = new User('Ivan', 30);

// Nikita.hello();
// Ivan.hello();

// console.log(Nikita); // User { name: 'Nikita', id: 27, human: true }
// console.log(Ivan);   // User { name: 'Ivan', id: 30, human: true }
// // Такой принцип используется для конструирования объектов и создания множества копий 

// User.prototype.exit = function() { //С помощью prototype можно дабавлять новые свойства или методы в конструктор.
//     console.log(`User ${this.name} leave the chat`);
// };

// Nikita.exit();


// // function showThis(a, b) { //1)
//     //     console.log(this); //undefined
//     //     function sum() {
// //         console.log(this); //undefined
// //         return this.a + this.b; // Error. Функция не может взять 'a' из 'undefined'
// //     }
// // }

// // решение этой проблемы в удалении this у 'a' и 'b'

// // function showThis(a, b) {
// //     console.log(this); //undefined
// //     function sum() {
// //         console.log(this); //undefined
// //         return a + b; // 9. Функция не может найти 'a' и 'b' внутри себя, поэтому обращается к глобальным переменным.
// //     }
// // }
// // showThis(4, 9);

// const obj = { //2)
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// // КОманды ниже устанавливают контекст для функции без вызова новой функции.
// sayName.call(user, 'Smith'); //для передачи доп аргументов, перечисляем их через запятую.
// sayName.apply(user, ['Smith']);//для передачи доп аргументов, перечисляем их в массиве через запятую.

// //Команда bind() создает новую функцию и после этого передает ей контекст.

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2); // double принимает все свойства count, заменяя контекст на собственное значение 2.

// console.log(double(3)); 

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.name);
        };

        say();
    }
};

obj.sayNumber();

// // 1) Обычная функция: this = window, но если use strict: this = undefined.
// // 2) this у методов объекта -сам объект.
// // 3) this в конструкторах и классах - новый экземпляр объекта.
// // 4) ручная привязка контекста: call(), apply(), bind().
// // 5) Стрелочные функции не имеют своего контекста и обращаются к родительскому объекту
const btn = document.querySelector('.scroll_btn');

// btn.addEventListener('click', function() {
//     this.style.background = 'red';
// });
// btn.addEventListener('click', () => {
//     this.style.background = 'red';
// }); //Вернет ошибку. Т.к у стрелочной фун-ии нет контекста вызова. Чтобы избежать ошибки, обращаемся через e.target.

btn.addEventListener('click', (e) => {
    e.target.style.background = 'purple';
});

//P.S Если стрелочная функция умещается в одну строчку, ее можно упростить
const double = (num) => {
    return num * 2;
};

const cacl = num => num * 2;

const urlObj = {
    protocol: 'https',
    domain: 'mysite.com'
};
 
function showCurrentURL() {
    const extractCurrDomain = () => {
        return this.domain;
    };
    const extractCurrProtocol = () => {
        return this.protocol;
    };
 
    console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`);
}
 
const url = showCurrentURL.bind(urlObj);
 
console.log(url);