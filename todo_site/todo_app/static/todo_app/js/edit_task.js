document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('EditIcon').addEventListener('click', function () {
        document.querySelector('editForm').style.display = 'block';
        document.querySelector('.main__task-list').style.display = 'none';
    })
})