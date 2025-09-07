document.addEventListener('DOMContentLoaded', function () {
    const arrowIcons = document.querySelectorAll('.main__tasks-area__task-container__arrow-icon');

    function getCSRFToken() {
        return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    }

    arrowIcons.forEach(function (arrowIcon) {
        arrowIcon.addEventListener('click', function () {
            const taskElement = this.closest('.main__tasks-area__task-container');

            if (taskElement) {
                const taskId = taskElement.dataset.taskId;

                if (!taskId) {
                    console.error('ID задачи не найден');
                    return;
                }

                // Визуальная обратная связь
                taskElement.style.opacity = '0.5';

                fetch(`/undo-task/${taskId}/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': getCSRFToken(),
                    },
                    body: JSON.stringify({
                        'done': false
                    })
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (data.status === 'success') {
                            // Плавное удаление элемента
                            taskElement.style.transition = 'opacity 0.5s ease';
                            taskElement.style.opacity = '0';

                            setTimeout(() => {
                                taskElement.remove();
                            }, 500);
                        } else {
                            console.error('Ошибка:', data.message);
                            taskElement.style.opacity = '1';
                            alert('Ошибка: ' + data.message);
                        }
                    })
                    .catch(error => {
                        console.error('Ошибка:', error);
                        taskElement.style.opacity = '1';
                        alert('Ошибка сети: ' + error.message);
                    });
            } else {
                console.error('Элемент задачи не найден');
            }
        });
    });
});