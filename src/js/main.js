'use strict';
window.addEventListener('DOMContentLoaded', ()=> {
    
    // Tabs
    const tabContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items'),
          tabs = tabsParent.querySelectorAll('.tabheader__item');


    function hideTabsContent () {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabsContents (i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabsContents();

    tabsParent.addEventListener('click', (e)=> {
        const target = e.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i)=> {
                if(target == item) {
                    hideTabsContent();
                    showTabsContents(i);
                }
            });
        }
    });

    // Timer

    const deadline = '2022-12-31';

    function getTimerRemaining(endTime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endTime) - Date.parse(new Date());
        if(t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else{
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((t / (1000 * 60)) % 60);
            seconds = Math.floor((t / 1000) % 60);
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
            if(num >= 0 && num < 10) {
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

            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
            
        }
    }
    setClock('.timer', deadline);

    // Modal

    const modalBtns = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');

    modalBtns.forEach((btn) => {
        btn.addEventListener('click', openModal);
    });

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
        window.removeEventListener('scroll', showModalByScroll);
    }

    function CloseModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    modal.addEventListener('click', (e)=> {
        if(e.target === modal || e.target.getAttribute('data-close') == "") {
            CloseModal();
        }
    });

    document.addEventListener('keydown', (e)=> {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            CloseModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 20000);

    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            openModal();
            // window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    //ItemCards

    class MenuCards {
        constructor(src, alt, title, descr, price, parentSelector,...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else{
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML += `
                <img src='${this.src}' alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCards(
        'img/tabs/vegy.jpg',
        "vegy",
        '"Меню "Фитнес"', 
        '"Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        // 'menu__item'
    ).render();
    
    new MenuCards(
        'img/tabs/elite.jpg',
        "premium",
        '"Меню "Премиум"', 
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        20,
        '.menu .container',
        'menu__item'
        ).render();

    new MenuCards(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        15,
        '.menu .container',
        'menu__item'
        ).render();

    // Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: "img/modal/spinner.svg",
        success: "Спасибо, мы вам перезвоним",
        failure: 'Что-то пошло не так'
    };

    forms.forEach(item => {
        postData(item);
    });

    function ShowThanksModal(message) {
        const oldModalForm = document.querySelector('.modal__dialog');
        oldModalForm.classList.add('hide');
        openModal();

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
            CloseModal();
        }, 4000);
    }

    function postData(form) {
        form.addEventListener('submit', (e)=> {
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
            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });

            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'aplication/json'
                },
                body: JSON.stringify(object)
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                ShowThanksModal(message.success);
            })
            .catch(()=> {
                ShowThanksModal(message.failure);
            })
            .finally(()=>{
                clearForm();
            });

            function clearForm () {
                form.reset();
                setTimeout(() => {
                    statusMessage.remove();
                }, 2000);
            }
        });
    }
    fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => console.log(res));
});