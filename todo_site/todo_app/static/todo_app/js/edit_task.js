document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('EditIcon').addEventListener('click', function () {
        document.querySelector('.main__form-edit-task-container').style.display = 'block'
    });
    document.getElementById('.main__form-edit-task-container__button-add').addEventListener('click', function () {
        document.querySelector('.main__form-edit-task-container').style.display = 'none'
    });
})