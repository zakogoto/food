'use strict';
import tabs from './modules/tabs.js';
import calc from './modules/calc.js';
import cards from './modules/cards.js';
import forms from './modules/forms.js';
import modal from './modules/modal.js';
import timer from './modules/timer.js';
import slider from './modules/slider.js';
import { openModal } from './modules/modal.js';

window.addEventListener('DOMContentLoaded', ()=> {

    const modalTimerId = setTimeout(()=> openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__items', '.tabheader__item', '.tabcontent', 'tabheader__item_active');
    calc();
    cards('.menu .container');
    forms(modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2023-01-01');
    slider({
        wrapper: '.offer__slider-wrapper',
        sliderBody: '.offer__slider',
        prevBtn: '.offer__slider-prev',
        nextBtn: '.offer__slider-next',
        field: '.offer__slider-inner',
        slide: '.offer__slide',
        currentCounter: '#current',
        totalCounter: '#total'
    });
});