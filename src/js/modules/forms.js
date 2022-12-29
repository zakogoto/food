import {openModal} from "./modal.js";
import { CloseModal } from "./modal.js";
import {postData} from "./services/services.js";

function forms(timerSelector) {

    const forms = document.querySelectorAll('form');

    const message = {
        loading: "img/modal/spinner.svg",
        success: "Спасибо, мы вам перезвоним",
        failure: 'Что-то пошло не так'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
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
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
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

    function ShowThanksModal(message) {
        const oldModalForm = document.querySelector('.modal__dialog');
        oldModalForm.classList.add('hide');
        openModal('.modal', timerSelector);

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
            CloseModal('.modal');
        }, 4000);
    }
}

export default forms;