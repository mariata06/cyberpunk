const initMyForm = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('uploadForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const fileInput = document.getElementById('screenshot');
    const fileNameDisplay = document.getElementById('fileName');
    const consentCheckbox = document.getElementById('consent');
    const submitButton = form.querySelector('button[type="submit"]');

    // Изначально блокируем кнопку отправки
    submitButton.disabled = true;

    // Следим за изменением чекбокса
    consentCheckbox.addEventListener('change', () => {
      submitButton.disabled = !consentCheckbox.checked;
    });

    // Показываем имя выбранного файла
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      fileNameDisplay.textContent = file ? `Выбран файл: ${file.name}` : 'Файл не выбран';
    });

    // Валидация формы
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Отмена стандартной отправки формы

      let isValid = true;
      const errors = [];

      // Проверка имени
      if (!nameInput.value.trim()) {
        isValid = false;
        errors.push('Введите имя.');
      }

      // Проверка email
      if (!validateEmail(emailInput.value)) {
        isValid = false;
        errors.push('Введите корректный email.');
      }

      // Проверка файла
      if (!fileInput.files.length) {
        isValid = false;
        errors.push('Прикрепите файл.');
      }

      // Проверка согласия
      if (!consentCheckbox.checked) {
        isValid = false;
        errors.push('Вы должны согласиться на обработку персональных данных.');
      }

      // Если все проверки пройдены, отправляем форму
      if (isValid) {
        alert('Форма успешно отправлена!');
        form.reset();
        fileNameDisplay.textContent = '';
        submitButton.disabled = true; // Блокируем кнопку снова после отправки
      } else {
        alert('Ошибки:\n' + errors.join('\n'));
      }
    });

    // Функция для проверки email
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

  });

};
export {initMyForm};
