/* // Берём кнопку вперёд
 const btnRight = document.querySelector('.control-slider');
// Берём слайды
const slides = document.querySelectorAll('.which-slide');
// Объявляем переменную i
let i = 0;

// Объявляем событие нажатия на кнопку вперёд
btnRight.addEventListener('click', function () {
    // Увеличиваем переменную i
    ++i
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= slides.length) {
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove('visually-hidden');
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        slides[i].classList.add('visually-hidden');
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove('visually-hidden');
        // Добавляем класс block следующему слайду
        slides[i].classList.add('slider-buttons-current');
    }
    console.log(slides)
    console.log(btnRight)
})
 */
function sliderSelect() {
  let control = document.querySelectorAll('.slider-buttons');
  let slides = document.querySelectorAll('.which-slide');

  for (let i = 0; i < control.length; i++) {
    control[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      for (let j = 0; j < control.length; j++) {
        control[j].classList.remove('slider-buttons-current');
        evt.currentTarget.classList.add('slider-buttons-current');
        slides[j].classList.remove('slider-group-current');
        if (evt.currentTarget === control[j]) {
          slides[j].classList.add('slider-group-current');
        }
      }
    });
  }
  console.log(control)
  console.log(slides)
};
sliderSelect();
