document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addTaskBtn').addEventListener('click', function () {
        document.querySelector('.main__form-new-task-container').style.display = 'block'
    });
    document.getElementById('.main__form-new-task-container__button-add').addEventListener('click', function () {
        document.querySelector('.main__form-new-task-container').style.display = 'none'
    });
})