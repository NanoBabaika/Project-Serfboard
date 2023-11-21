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