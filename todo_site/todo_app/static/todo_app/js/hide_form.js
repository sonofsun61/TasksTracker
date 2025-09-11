function hideForms() {
    // Для формы новой задачи
    const cancelBtnNew = document.querySelector('.main__form-new-task-container__button-cancel');
    if (cancelBtnNew) {
        cancelBtnNew.addEventListener('click', function () {
            const form = document.querySelector('.main__form-new-task-container');
            if (form) form.style.display = 'none';
        });
    }

    // Для формы редактирования
    const cancelBtnEdit = document.querySelector('.main__form-edit-task-container__button-cancel');
    if (cancelBtnEdit) {
        cancelBtnEdit.addEventListener('click', function () {
            const form = document.querySelector('.main__form-edit-task-container');
            if (form) form.style.display = 'none';
        });
    }
}

hideForms();
document.addEventListener('DOMContentLoaded', hideForms);