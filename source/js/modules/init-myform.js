const initMyForm = () => {
  // Отображение имени загруженного файла
  document.getElementById('screenshot').addEventListener('change', function () {
    const fileName = this.files[0] ? this.files[0].name : '';
    document.getElementById('fileName').textContent = fileName;
  });

  // Валидация формы при отправке
  document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const screenshot = document.getElementById('screenshot').files[0];
    const consent = document.getElementById('consent').checked;

    if (!name || !email || !screenshot || !consent) {
      alert("Пожалуйста, заполните все поля и подтвердите согласие на обработку данных.");
      return;
    }

    // Здесь можно добавить код для отправки формы на сервер
    alert("Форма успешно отправлена!");
  });
};

export {initMyForm};
