(function() {
    const sliderControls = document.querySelector(".slider-control");
    let slider = Array.from(document.querySelectorAll(".which-slider"));
    let sliderButtons = Array.from(document.querySelectorAll(".slider-buttons"));



    if (slider && sliderButtons && sliderControls) {
        sliderControls.addEventListener("click", changeSlide);

    }

    function findCurrentButton(element) {
        return element.classList.contains("slider-buttons-current");
    }

    function findCurrentSlide(element) {
        return element.classList.contains("slider-group-current");
    }

    function changeSlide(event) {
        let element = event.target;

        if (element.classList.contains("slider-buttons")) {
            event.preventDefault();
            let indexNextButton = sliderButtons.indexOf(
                sliderButtons.find(findCurrentButton));
            console.log(indexNextButton);

            /*  sliderButtons[indexCurrentButtons].classList.remove("slider-buttons"); */
            sliderButtons[indexNextButton].classList.add("slider-buttons");

            let indexCurrentSlide = slider.indexOf(slider.find(findCurrentSlide));
            console.log(indexCurrentSlide);
            slider[indexCurrentSlide].classList.remove("slide--visible");
            slider[indexCurrentSlide].classList.add("slide-group-hidden");
            slider[indexNextButton].classList.add("slide--visible");
            slider[indexNextButton].classList.remove("slide-group-hidden");

        }
    }
})();
