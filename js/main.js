//js function to use slick slider
function header_slider(params) {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<span class="priv_arrow"><i class="fas fa-arrow-right"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-arrow-left"></i></span>'
    });
}
header_slider();