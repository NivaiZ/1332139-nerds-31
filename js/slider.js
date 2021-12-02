function sliderSelect() {
  let controlButtonSlides = document.querySelectorAll('.slider-buttons');
  let slidesArray = document.querySelectorAll('.which-slide');

  for (let i = 0; i < controlButtonSlides.length; i++) {
    controlButtonSlides[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      for (let j = 0; j < controlButtonSlides.length; j++) {
        controlButtonSlides[j].classList.remove('wrapper-buttons');
        evt.currentTarget.classList.add('wrapper-buttons');
        slidesArray[j].classList.remove('slider-group-current');

        if (evt.currentTarget === controlButtonSlides[j]) {
          slidesArray[j].classList.add('slider-group-current');
        }
      }
    });
  }
};
sliderSelect();
