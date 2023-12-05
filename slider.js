const slider = $('.slider').bxSlider({
    pager:false,
    controls:false
});


$(".arrow__link-left").click(e => {
    e.preventDefault();

    slider.goToPrevSlide();
})


$(".arrow__link-right").click(e => {
    e.preventDefault();
    slider.goToNextSlide();
})

adaptiveHeight= true;
// responsive = true;


// действие выпадашки

const parametersBtn = document.querySelector(".menu__btn");
const parametersMenu = document.querySelector(".dropdownlist");

parametersBtn.addEventListener('click', () => {
    if(parametersMenu.classList.contains('disp') == true){
        parametersMenu.classList.remove('disp');
    } else {
        parametersMenu.classList.add('disp')
    }
})
