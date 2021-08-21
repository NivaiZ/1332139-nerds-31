(function () {
    // Контейнер с переключателями слайдов
    const sliderButtonsContainer = document.querySelector(".slider-control");

    // Переключатели слайдов
    let sliderButtons = Array.from(document.querySelectorAll(".slider-buttons"));

    // Массив с самимим слайдами
    let slides = Array.from(document.querySelectorAll(".which-slide"));

    /* Переменные */
    // const и let (а также var в прошлом) — способы создания переменных
    // let number = 5 (можно поменять через number = 6)
    // const number = 5 (нельзя поменять, будет ошибка)

    /* Массивы */
    // const a = [1, 2, 3]
    // a[0] // выдаст 1
    // a[1] // выдаст 2
    // a[2] // выдаст 3
    // a[12] // выдаст undefined

    // const a = new Array(1, 2, 3)

    // const b = 'russia'
    // console.log(b) // выводи 'russia'

    // const b
    // console.log(b) // выводи undefined

    /* Array и NodeList */
    // const someArray = ['Один', 'Два', 'Три'] — стандартный массив. Имеет тип Array
    // someArray.map(…)
    // someArray.reduce(…)
    // someArray.slice(…)
    // …

    // let sliderButtons = document.querySelectorAll(".slider-buttons"); — похожа на массив, но технически не является стандартным массивом. Имеет тип NodeList

    // Array.from(…) — конвертирует NodeList в стандартный массив

    if (slides && sliderButtons && sliderButtonsContainer) {
        // Пробегаемся по списку кнопок, индекс каждой кнопки отправляем в переменную i
        for (let i in sliderButtons) {
            /* Обращаемся к каждой кнопки в списке и добавляем событие */
            sliderButtons[i].addEventListener("click", changeSlide)
        }
    }











    function findCurrentButton(element) {
        return element.classList.contains("slider-buttons-current");
    }

    function findCurrentSlide(element) {
        return element.classList.contains("slider-group-current");
    }

    // Меняет слайд при нажатии на кнопку. Получает на вход объект события от браузера
    function changeSlide(event) {
        // Вытаскиваем из события кнопку на которую жмакнули
        let element = event.target;

        //Проверяем есть ли у кнопки класс slider-buttons
        if (element.classList.contains("slider-buttons")) {
            // Отменяем действия при нажатии на кнопку
            event.preventDefault();

            let indexNextButton = sliderButtons.indexOf(
                sliderButtons.find(findCurrentButton));
            console.log(indexNextButton);

            /*  sliderButtons[indexCurrentButtons].classList.remove("slider-buttons"); */
            sliderButtons[indexNextButton].classList.add("slider-buttons");

            let indexCurrentSlide = slides.indexOf(slides.find(findCurrentSlide));
            console.log(indexCurrentSlide);
            slides[indexCurrentSlide].classList.remove("slide--visible");
            slides[indexCurrentSlide].classList.add("slide-group-hidden");
            slides[indexNextButton].classList.add("slide--visible");
            slides[indexNextButton].classList.remove("slide-group-hidden");

        }
    }
})();
