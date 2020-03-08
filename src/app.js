
$('.image-slider__slides').slick({
    dots: true,
    prevArrow: '#prev',
    nextArrow: '#next'
});

$('#showMap').click(function(event) {
    event.preventDefault();

    $sliderSection = $('.slider-section');
    $mapSection = $('.map-section');
    console.log($sliderSection.hasClass('slider-section--active'));
    if ($($sliderSection).hasClass('slider-section--active')) {
        $sliderSection.removeClass('slider-section--active');
        $mapSection.addClass('map-section--active');
        $('#showMap a').text('Show Store')
    } else {
        $sliderSection.addClass('slider-section--active');
        $mapSection.removeClass('map-section--active');
        $('#showMap a').text('View on Map')
    }
});