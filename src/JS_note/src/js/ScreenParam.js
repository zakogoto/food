'use strict';

const wrap = document.querySelector('.wrap'),
      btn = document.querySelector('.scroll_btn');

// const width = wrap.clientWidth;    //Позволяет увидеть видимую часть высоты экрана пользователя.
// const height = wrap.clientHeight;  //Позволяет увидеть видимую часть ширины экрана пользователя.
// const widthOff = wrap.offsetWidth;    //Позволяет увидеть видимую часть высоты установленной в css.
// const heightOff = wrap.offsetHeight;  //Позволяет увидеть видимую часть ширины установленной в css.
// const widthScroll = wrap.scrollWidth;    //Позволяет увидеть всю ширину объекта. 
// const heightScroll = wrap.scrollHeight;  //Позволяет увидеть всю высоту объекта.

// console.log(width, height, widthOff, heightOff, widthScroll, heightScroll);

btn.addEventListener('click', ()=> {
    wrap.style.height = wrap.scrollHeight + 'px';
    console.log(Math.floor(wrap.scrollTop)); //Сколько сверху скрыто скроллом.
});

console.log(wrap.getBoundingClientRect()); //Получение координат элемента.
// const style = window.getComputedStyle(wrap);
function getStyle(elem) {
    return window.getComputedStyle(elem);
}

console.log(getStyle(wrap).display);

window.scrollBy(0, 400); //Скролл на определенное количество пикселей по Х и У координатам
window.scrollTo(0, 400); //Скролл к текущим координатам от текущей позиции.