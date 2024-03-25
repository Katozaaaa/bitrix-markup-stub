function embedSprite(pathToSprite, where) {

  // Создаем новый объект XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Указываем путь к SVG спрайту
  xhr.open('GET', pathToSprite, true);

  xhr.onreadystatechange = function () {
    // Проверяем, что запрос завершен и статус ответа успешный
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Вставляем полученный SVG спрайт в контейнер на странице
      document.querySelector(where).insertAdjacentHTML('afterbegin', xhr.responseText);
    }
  };

  // Отправляем запрос
  xhr.send();
}