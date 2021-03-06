
$('.image-slider__slides').slick({
    dots: true,
    infinite: false,
    prevArrow: '#prev',
    nextArrow: '#next',
});
$('.image-slider__slides').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    
    if (nextSlide == 1) {
        $('.image-slider__arrow--prev').removeClass('image-slider__arrow--hidden');
    }
    if (nextSlide == 0) {
        $('.image-slider__arrow--prev').addClass('image-slider__arrow--hidden');
    }
    if (nextSlide == (slick.slideCount - 1)) {
        $('.image-slider__arrow--next').addClass('image-slider__arrow--hidden');
    }
    if (nextSlide == (slick.slideCount - 2)) {
        $('.image-slider__arrow--next').removeClass('image-slider__arrow--hidden');
    }
}); 

$('#showMap').click(function(event) {
    event.preventDefault();

    $sliderSection = $('.slider-section');
    $mapSection = $('.map-section');
    console.log($sliderSection.hasClass('slider-section--active'));
    if ($($sliderSection).hasClass('slider-section--active')) {
        $sliderSection.removeClass('slider-section--active');
        $mapSection.addClass('map-section--active');
        $('#showMap a').text('Show Store');
        $('#showMap .arrow-icon').addClass('rotate90deg');
        $('.address__direction').addClass('address__direction--active');
        $('.address').addClass('address--map-active');
    } else {
        $sliderSection.addClass('slider-section--active');
        $mapSection.removeClass('map-section--active');
        $('#showMap a').text('View on Map');
        $('#showMap .arrow-icon').removeClass('rotate90deg');
        $('.address__direction').removeClass('address__direction--active');
        $('.address').removeClass('address--map-active');
    }
});