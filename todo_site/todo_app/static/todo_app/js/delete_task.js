document.addEventListener('DOMContentLoaded', function () {
    const trashIcons = document.querySelectorAll('.main__task-list__trash-icon-container');

    function getCSRFToken() {
        return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    }

    trashIcons.forEach(function (trashIcon) {
        trashIcon.addEventListener('click', function () {
            const taskElement = this.closest('.main__task-list');

            if (taskElement) {
                const taskId = taskElement.dataset.taskId;

                fetch(`/delete-task/${taskId}/`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': getCSRFToken(),
                    },
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            taskElement.style.transition = 'opacity 0.5s ease';
                            taskElement.style.opacity = '0';

                            setTimeout(() => {
                                taskElement.remove();
                            }, 500);
                        } else {
                            console.error('Ошибка удаления:', data.message);
                            taskElement.style.opacity = '1';
                        }
                    })
            }
        });
    });
});