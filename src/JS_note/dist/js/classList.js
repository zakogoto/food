'use strict';

const btns = document.querySelectorAll('.wrapper button'),
      wrapper = document.querySelector('.wrapper');
const classes = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

console.log(btns[0].classList.length); //Получение количества классов у элемента

// console.log(button[0].classList.add('red')); //Добавление класса
// // console.log(button[0].classList.remove('blue')); //Удаление класса
// console.log(button[0].classList.toggle('blue')); //Включение класса если его нет и выключение если есть.

btns.forEach((item, i) => {
    item.addEventListener('mouseenter', (e)=> {
        e.target.classList.toggle(classes[i]);
    });
});
// btns.forEach((item, i) => {
//     item.addEventListener('mouseover', (e)=> {
//         e.target.classList.toggle(classes[i]);
//     });
// });

// btns[0].addEventListener('mouseenter', ()=> {
//     btns[0].classList.toggle('red');
// });
// btns[1].addEventListener('mouseenter', ()=> {
//     btns[1].classList.toggle('orange');
// });
// btns[2].addEventListener('mouseenter', ()=> {
//     btns[2].classList.toggle('yellow');
// });
// btns[3].addEventListener('mouseenter', ()=> {
//     btns[3].classList.toggle('green');
// });
// btns[4].addEventListener('mouseenter', ()=> {
//     btns[4].classList.toggle('blue');
// });
// btns[5].addEventListener('mouseenter', ()=> {
//     btns[5].classList.toggle('purple');
// });

// Иногда метод toggle может не подходить и необходимо проверять наличие или отсутсвие класса вручную

// btns[0].addEventListener('click', ()=> { // toggle содержит как раз такую проверку
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == 'BUTTON') {  // проверка, является ли элемент взаимодействия кнопкой
    // if (e.target && e.target.matches('button.red')) {  // является ли элемент взаимодействия кнопкой с классом red
        console.log('Hello');
    }
});

const btn = document.createElement('button');

wrapper.append(btn);
