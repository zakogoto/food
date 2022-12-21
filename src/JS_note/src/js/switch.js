// ИЗменение типа данных
// To string

// 1) Не используется почти
console.log(typeof(String(123))); 

// 2)
console.log(typeof(123 + "")); 

// To Number

// 1)
console.log(typeof(Number('6')));

// 2)
console.log(typeof(+'6'));

// 3)
const num = +prompt("Введите число", '');

// To boolean

// 1)
let something = 1;

if(something) {
    console.log('hello');
}

// 2)
console.log(typeof(Boolean('6')));

// 3)
console.log(typeof(!!'6'));

