(function() {
    'use strict';

    // Функция для изменения type у всех элементов input с type="hidden" на type="text"
    function changeHiddenInputsToTextInputs() {
        document.querySelectorAll('input[type="hidden"]').forEach(function(input) {
            input.setAttribute('type', 'text');
        });
    }

    // Вызываем функцию при загрузке страницы
    changeHiddenInputsToTextInputs();

    // Перехватываем AJAX-запросы с помощью MutationObserver
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                changeHiddenInputsToTextInputs();
            }
        });
    });

    // Наблюдаем за изменениями в документе
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();