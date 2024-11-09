const initCarousel = (limitation) => {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length - 1; // Учитываем клон

  function showNextSlide() {
    currentIndex++;
    document.querySelector('.carousel').style.transition = 'transform 0.5s ease';
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}vw)`;

    // Проверяем, если это последний (клонированный) слайд
    if (currentIndex === totalSlides) {
      setTimeout(() => {
        document.querySelector('.carousel').style.transition = 'none';
        document.querySelector('.carousel').style.transform = 'translateX(0)';
        currentIndex = 0; // Возвращаемся к началу
      }, 500); // Время перехода должно совпадать с transition
    }
  }

  // Смена слайда каждые 3 секунды
  setInterval(showNextSlide, 3000);

};

export {initCarousel};
