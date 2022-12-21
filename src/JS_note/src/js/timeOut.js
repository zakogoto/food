
// setTimeout устанавливает задержку до срабатывания какой-либо функции, на указанное в мс время.
// По истечению заданного времени функция запустится.

// const timerId = setTimeout(function(text) {
//     console.log(text);
// },2000, 'hello'); //2000 количество милисекунд до срабатывания функции.



// const newTimerId = setTimeout(logger ,2000); // Альтернатичвный способ задания таймера.

// Для сброса таймера используется clearInterval();

// clearInterval(newTimerId); 
const startBtn = document.querySelector('.start');

function myAnimation () {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if(pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

startBtn.addEventListener('click', myAnimation);

// let timerId,
//       i  = 0;

// box.addEventListener('click', ()=> {
//     timerId = setInterval(logger, 2000);
// });

// function logger() {
//     if(i === 3){
//         clearInterval(timerId);
//         i = 0;
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);


