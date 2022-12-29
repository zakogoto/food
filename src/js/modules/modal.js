function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if(modalTimerId){
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

    modalBtns.forEach((btn) => {
        btn.addEventListener('click', ()=> openModal(modalSelector, modalTimerId));
    });

    modal.addEventListener('click', (e)=> {
        if(e.target === modal || e.target.getAttribute('data-close') == "") {
            CloseModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e)=> {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            CloseModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}


export default modal;
export {openModal};
export {CloseModal};
