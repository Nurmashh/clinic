document.addEventListener('DOMContentLoaded', function () {
  // Выбираем все элементы с тегом button
  const buttons = document.querySelectorAll('button');

  // Загружаем звуковой файл
  const playSound = new Audio("audio/click-button-140881.mp3");

  // Добавляем обработчик события для каждой кнопки
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Воспроизводим звук при нажатии на кнопку
      playSound("audio/click-button-140881.mp3");
    });
  });

  // Функция для воспроизведения звука
  function playSound(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.currentTime = 0;
    audio.play();
  }
});
