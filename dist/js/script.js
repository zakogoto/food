/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
  const result = document.querySelector('.calculating__result span');
  let sex, height, weight, age, ratio;
  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    sex = 'female';
    localStorage.setItem('sex', sex);
  }
  if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
  } else {
    ratio = 1.375;
    localStorage.setItem('ratio', ratio);
  }
  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => {
      elem.classList.remove(activeClass);
      if (elem.getAttribute('id') === localStorage.getItem('sex')) {
        elem.classList.add(activeClass);
      }
      if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        elem.classList.add(activeClass);
      }
    });
  }
  initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
  initLocalSettings('#gender div', 'calculating__choose-item_active');
  function getCalcResult() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '____';
      return;
    }
    if (sex === 'female') {
      result.textContent = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio);
    } else {
      result.textContent = Math.round((88.6 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
    }
  }
  getCalcResult();
  function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.addEventListener('click', e => {
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio');
          localStorage.setItem('ratio', ratio);
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', sex);
        }
        elements.forEach(element => {
          element.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);
        getCalcResult();
      });
    });
  }
  getStaticInformation('#gender div', 'calculating__choose-item_active');
  getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
  function getDinamicInmormation(selector) {
    const input = document.querySelector(selector);
    input.addEventListener('input', () => {
      if (input.value.match(/\D/g)) {
        input.style.boxShadow = '0px 4px 15px red';
      } else {
        input.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.2)';
      }
      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;
        case 'weight':
          weight = +input.value;
          break;
        case 'age':
          age = +input.value;
          break;
      }
      getCalcResult();
    });
  }
  getDinamicInmormation('#height');
  getDinamicInmormation('#weight');
  getDinamicInmormation('#age');
  getCalcResult();
}
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/services */ "./src/js/modules/services/services.js");

function cards(container) {
  // class MenuCards {
  //     constructor(src, alt, title, descr, price, parentSelector,...classes) {
  //         this.src = src;
  //         this.alt = alt;
  //         this.title = title;
  //         this.descr = descr;
  //         this.price = price;
  //         this.classes = classes;
  //         this.parent = document.querySelector(parentSelector);
  //         this.transfer = 27;
  //         this.changeToUAH();
  //     }
  //     changeToUAH() {
  //         this.price = this.price * this.transfer;
  //     }

  //     render() {
  //         const element = document.createElement('div');

  //         if (this.classes.length === 0) {
  //             this.element = 'menu__item';
  //             element.classList.add(this.element);
  //         } else{
  //             this.classes.forEach(className => element.classList.add(className));
  //         }
  //         element.innerHTML += `
  //             <img src='${this.src}' alt="${this.alt}">
  //             <h3 class="menu__item-subtitle">${this.title}</h3>
  //             <div class="menu__item-descr">${this.descr}</div>
  //             <div class="menu__item-divider"></div>
  //             <div class="menu__item-price">
  //                 <div class="menu__item-cost">????????:</div>
  //                 <div class="menu__item-total"><span>${this.price}</span> ??????/????????</div>
  //             </div>
  //         `;
  //         this.parent.append(element);
  //     }
  // }
  // getResource('http://localhost:3000/menu')
  //     .then(data => {
  //         data.forEach(({img, altimg, title, descr, price}) => {
  //             new MenuCards(img, altimg, title,descr, price, '.menu .container', 'menu__item').render();
  //         });
  //     });

  //???????????? ???????????? ?????????????? ???????????????? ?????? ?????????????????????????? ??????????????

  Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/menu').then(data => createCard(data));
  function createCard(data) {
    data.forEach(_ref => {
      let {
        img,
        altimg,
        title,
        descr,
        price
      } = _ref;
      const element = document.createElement('div');
      price = price * 27;
      element.classList.add('menu__item');
      element.innerHTML += `
            <img src='${img}' alt="${altimg}">
            <h3 class="menu__item-subtitle">${title}</h3>
            <div class="menu__item-descr">${descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">????????:</div>
                <div class="menu__item-total"><span>${price}</span> ??????/????????</div>
            </div>
        `;
      document.querySelector(container).append(element);
    });
  }
}
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ "./src/js/modules/modal.js");
/* harmony import */ var _services_services_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/services.js */ "./src/js/modules/services/services.js");



function forms(timerSelector) {
  const forms = document.querySelectorAll('form');
  const message = {
    loading: "img/modal/spinner.svg",
    success: "??????????????, ???? ?????? ????????????????????",
    failure: '??????-???? ?????????? ???? ??????'
  };
  forms.forEach(item => {
    bindPostData(item);
  });
  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const statusMessage = document.createElement('img');
      statusMessage.classList.add('status');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement('afterend', statusMessage);
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      Object(_services_services_js__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json).then(data => {
        console.log(data);
        ShowThanksModal(message.success);
      }).catch(() => {
        ShowThanksModal(message.failure);
      }).finally(() => {
        clearForm();
      });
      function clearForm() {
        form.reset();
        setTimeout(() => {
          statusMessage.remove();
        }, 2000);
      }
    });
  }
  function ShowThanksModal(message) {
    const oldModalForm = document.querySelector('.modal__dialog');
    oldModalForm.classList.add('hide');
    Object(_modal_js__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal', timerSelector);
    const newModalMessage = document.createElement('div');
    newModalMessage.classList.add('modal__dialog');
    newModalMessage.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector('.modal').append(newModalMessage);
    setTimeout(() => {
      newModalMessage.remove();
      oldModalForm.classList.remove('hide');
      oldModalForm.classList.add('show');
      Object(_modal_js__WEBPACK_IMPORTED_MODULE_0__["CloseModal"])('.modal');
    }, 4000);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, openModal, CloseModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseModal", function() { return CloseModal; });
function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}
function CloseModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.remove('show');
  modal.classList.add('hide');
  document.body.style.overflow = '';
}
function modal(triggerSelector, modalSelector, modalTimerId) {
  const modalBtns = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);
  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
  });
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
      CloseModal(modalSelector);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      CloseModal(modalSelector);
    }
  });
  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);
}
/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./src/js/modules/services/services.js":
/*!*********************************************!*\
  !*** ./src/js/modules/services/services.js ***!
  \*********************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });


const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  return await res.json();
};
const getResource = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }
  return await res.json();
};



/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider(_ref) {
  let {
    wrapper,
    sliderBody,
    prevBtn,
    nextBtn,
    field,
    slide,
    totalCounter,
    currentCounter
  } = _ref;
  const sliderWrapper = document.querySelector(wrapper),
    slider = document.querySelector(sliderBody),
    prev = document.querySelector(prevBtn),
    next = document.querySelector(nextBtn),
    sliderField = sliderWrapper.querySelector(field),
    slides = sliderWrapper.querySelectorAll(slide),
    currSlide = document.querySelector(currentCounter),
    totalSlide = document.querySelector(totalCounter),
    width = window.getComputedStyle(sliderWrapper).width;
  let slideIndex = 1,
    offset = 0;
  if (slides.length < 10) {
    totalSlide.textContent = `/0${slides.length}`;
  } else {
    totalSlide.textContent = `/${slides.length}`;
  }
  sliderField.style.width = 100 * slides.length + '%';
  sliderField.style.display = 'flex';
  sliderField.style.transition = '0.6s all';
  sliderWrapper.style.overflow = 'hidden';
  slides.forEach(slide => slide.style.width = width);
  slider.style.position = 'relative';
  function deleteNotDigits(str) {
    return +str.replace(/\D/gi, '');
  }
  const indicator = document.createElement('ol'),
    dots = [];
  indicator.classList.add('carousel-indicators');
  slider.append(indicator);
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement('li');
    dot.classList.add('dot');
    dot.setAttribute('data-slide-to', i + 1);
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicator.append(dot);
    dots.push(dot);
  }
  function slideSwitch(target) {
    sliderField.style.transform = `translateX(-${offset}px)`;
    if (target === prev) {
      if (slideIndex == 1) {
        slideIndex = slides.length;
      } else {
        slideIndex--;
      }
    }
    if (target === next) {
      if (slideIndex == slides.length) {
        slideIndex = 1;
      } else {
        slideIndex++;
      }
    }
    if (slides.length < 10) {
      currSlide.textContent = `0${slideIndex}`;
    } else {
      currSlide.textContent = slideIndex;
    }
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
  }
  next.addEventListener('click', () => {
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(width);
    }
    slideSwitch(next);
  });
  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }
    slideSwitch(prev);
  });
  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = deleteNotDigits(width) * (slideTo - 1);
      slideSwitch();
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(parentSelector, tabSelector, contentSelector, activeClass) {
  const tabContent = document.querySelectorAll(contentSelector),
    tabsParent = document.querySelector(parentSelector),
    tabs = tabsParent.querySelectorAll(tabSelector);
  function hideTabsContent() {
    tabContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove(activeClass);
    });
  }
  function showTabsContents() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
  }
  hideTabsContent();
  showTabsContents();
  tabsParent.addEventListener('click', e => {
    const target = e.target;
    if (target && target.classList.contains(tabSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabsContent();
          showTabsContents(i);
        }
      });
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(selector, deadline) {
  function getTimerRemaining(endTime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endTime) - Date.parse(new Date());
    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor(t / (1000 * 60 * 60) % 24);
      minutes = Math.floor(t / (1000 * 60) % 60);
      seconds = Math.floor(t / 1000 % 60);
    }
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function onZero(num) {
      if (num >= 0 && num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    }
    function updateClock() {
      const t = getTimerRemaining(endTime);
      days.innerHTML = onZero(t.days);
      hours.innerHTML = onZero(t.hours);
      minutes.innerHTML = onZero(t.minutes);
      seconds.innerHTML = onZero(t.seconds);
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(selector, deadline);
}
/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs.js */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calc.js */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_cards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards.js */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms.js */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer.js */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider.js */ "./src/js/modules/slider.js");










window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(() => Object(_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__["openModal"])('.modal', modalTimerId), 300000);
  Object(_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__items', '.tabheader__item', '.tabcontent', 'tabheader__item_active');
  Object(_modules_calc_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_cards_js__WEBPACK_IMPORTED_MODULE_2__["default"])('.menu .container');
  Object(_modules_forms_js__WEBPACK_IMPORTED_MODULE_3__["default"])(modalTimerId);
  Object(_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])('[data-modal]', '.modal', modalTimerId);
  Object(_modules_timer_js__WEBPACK_IMPORTED_MODULE_5__["default"])('.timer', '2023-01-01');
  Object(_modules_slider_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map