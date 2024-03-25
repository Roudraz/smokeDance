$(document).ready(function () {

    // menu accardion
    $('.menu__accardion-head').click(function (event) {
        $(this).next('.menu__accardion-content').slideToggle(200);
    });

    $('.menu__accardion-head').click(function (event) {
        $(this).toggleClass('open')
    });


    // sale slider
    $('.sale__slider').slick({
        infinite: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });


    
    $('a[href^="#"]').click(function(){
        let valHref = $(this).attr("href");
        $("html, body").animate({scrollTop: $(valHref).offset().top + 150 + "px"})
    });


    // burger
    $('.burger').click(function (event) {
        $('.header__list--mobile').toggleClass('active');
    });
    $('.burger').click(function (event) {
        $('.burger__item').toggleClass('active');
    });
    $('.header__link--mobile').click(function (event) {
        $('.burger__item').removeClass('active');
    });
    $('.header__link--mobile').click(function (event) {
        $('.header__list--mobile').removeClass('active');
    });
});
