// Мобильные события
// touchstart Палец касается элемента
// touchmove Палец передвигается по элементу
// touchend Палец отпускает элемент
// touchenter Палец входит в поле элемента
// touchleave Палец выходит из поля элемента
// touchcancel

//touches Получение списка всех пальцев, которые сейчас находятся на экране
// target.Touches Получение списка пальцев, которые взаимодействуют с элементом
// changedTouches Список пальцев, которые участвуют в текущем событии

window.addEventListener('DOMContentLoaded', ()=> {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e)=> {
        e.preventDefault();
        console.log('touch');
        console.log(e.touches);
    });
    box.addEventListener('touchmove', (e)=> {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
    box.addEventListener('touchend', (e)=> {
        e.preventDefault();
        console.log('end');
    });
});