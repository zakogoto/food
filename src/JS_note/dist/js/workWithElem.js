'use strict';
// Работа с элементами на странице
// Обращения к элементам
const cyrcle = document.getElementsByClassName('cyrcle'), //По классу
      blocks = document.getElementById('blocks'), //По ID
      text = document.getElementsByTagName('input'),  // По тэгу
      heart = document.querySelector('.heart'),  // Универсальное обращение по разным типам
      squares = document.querySelectorAll('.square'),
      some = document.querySelectorAll('#blocks, .heart, input');
      
// blocks.style.backgroundColor = 'red';
// // Перебор элементов и обращение к определенному
// // text.forEach(item => {
// //     item.style.bordeRadius = '3px';
// // });
// cyrcle.style.cssText = 'border: 4px; color: red';
// const square = document.querySelectorAll('.square');

// for(let i = 1; i < square.length; i++) {
//     square[i].style.backgroundColor = "green";
// }

// const div = document.createElement('div');

// div.classList.add('hello');

// blocks.append(div); //Добавление элемента в конце какого-то блока
// // document.body.prepend(div); //Добавление элемента в начало какого-то блока
// // heart.before(div); //Добавление элемента перед каким-то элементом
// // heart.after(div); //Добавление элемента после какого-то элемента
// // blocks.insertBefore(heart, cyrcle[0]); // Устаревший способ добавления элемента

// // cyrcle[0].remove(); // Удаление элемента со страницы
// // blocks.removeChild(cyrcle[0]); // Устаревший способ удаления

// // heart[0].replaceWith(cyrcle[1]); //Замена элемента на другой
// // blocks.replaceChild(cyrcle[0], heart[0]); // Замена элемента уаревший способ

// div.innerHTML = '<h1>ZDAROVA</h1>'; // Добавление HTML на страницу, поддлерживает и структуры и просто строки
// // div.textContent = 'HELLO'; // Добавление текста на страницу, при попытке ввести структуру HTML выведет ее строкой.
// div.insertAdjacentHTML('afterbegin', '<h2>zaebal</h2>'); // Дабавление структуры в начало выбранного элемента
// div.insertAdjacentHTML('afterend', '<h2>zaeball</h2>'); // Дабавление структуры после выбранного элемента
// div.insertAdjacentHTML('beforebegin', '<h2>zaeballl</h2>'); // Дабавление структуры перед выбранным элементов
// div.insertAdjacentHTML('beforeend', '<h2>zaeballll</h2>'); // Дабавление структуры в конце выбранного элемента

//События и их обработчики

// Современный способ указания на какое-то событие это использование EventListener
// square.addEventListener('click', (e) => {
//     e.target.style.backgroundColor = 'red';
// });
// После его вызова если необходимо перестать отслеживать элемент, необходимо выполнить removeEventListener

let i = 0;
const turnRed = (e) => {
    e.target.style.backgroundColor = 'red';
    
    if (e.target.style.backgroundColor == 'red') {
        e.target.style.backgroundColor = 'white';
    }
};
squares.forEach(square => {
    square.addEventListener('click', turnRed);
});

const link = document.querySelector('a');

link.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log('А вот и нет, иди на Рутуб');
});