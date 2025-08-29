document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.main__old-checkbox__checkbox');

    // Функция для получения CSRF токена из meta тега
    function getCSRFToken() {
        return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    }

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                const taskElement = this.closest('.main__task-list');
                const taskId = taskElement.dataset.taskId;

                if (taskElement) {
                    taskElement.style.transition = 'opacity 0.5s ease';
                    taskElement.style.opacity = '0';

                    setTimeout(() => {
                        taskElement.remove();
                    }, 500);
                }

                fetch(`/complete-task/${taskId}/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': getCSRFToken(),
                    },
                    body: JSON.stringify({
                        'done': true
                    })
                })
                    .catch(error => {
                        console.error('Ошибка:', error);
                        this.checked = false;
                        if (taskElement) {
                            taskElement.style.opacity = '1';
                        }
                    });
            }
        });
    });
});