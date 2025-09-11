document.addEventListener('DOMContentLoaded', function () {
    const sortSelect = document.getElementById('sortSelect');

    if (sortSelect) {
        // Устанавливаем текущее значение сортировки
        const urlParams = new URLSearchParams(window.location.search);
        const currentSort = urlParams.get('sort') || 'priority';
        sortSelect.value = currentSort;

        // Обработчик изменения выбора
        sortSelect.addEventListener('change', function () {
            const selectedValue = this.value;
            const currentUrl = new URL(window.location);
            currentUrl.searchParams.set('sort', selectedValue);
            window.location.href = currentUrl.toString();
        });
    }
});