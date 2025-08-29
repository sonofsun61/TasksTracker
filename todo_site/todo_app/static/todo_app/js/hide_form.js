document.addEventListener('DOMContentLoaded', function () {
    const cancel_btn = document.querySelector('.main__form-new-task-container__button-cancel');
    cancel_btn.addEventListener('click', function () {
        document.querySelector('.main__form-new-task-container').style.display = 'none';
    })
})