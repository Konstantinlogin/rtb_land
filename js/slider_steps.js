        // Slider Steps

        var sliderSteps = {
            id: '#slider_steps',
            slideClass: 'slider-steps__slide'
        }

        var countOfSlides = $(sliderSteps.id).find('.' + sliderSteps.slideClass).length;
        var indexCountOfSlides = countOfSlides - 1;

        var sliderSteps = new Swiper(sliderSteps.id, {
            wrapperClass: 'slider-steps__wrapper',
            slideClass: 'slider-steps__slide',
            spaceBetween: 50,
            loop: true,
            centeredSlides: true,
            loopedSlides: countOfSlides,
            slidesPerView: 3,
            buttonDisabledClass: 'is-disabled',
            initialSlide: 0,
            speed: 100
 
        });

        sliderSteps.allowSlidePrev = false;

        sliderSteps.on('slideChange', function () {
         
            if (sliderSteps.realIndex != 0 || sliderSteps.activeIndex == indexCountOfSlides){
                    sliderSteps.allowSlidePrev = true; 
                    $('.js-steps-slider-left').removeClass('is-disabled');
            }

            else {
                sliderSteps.allowSlidePrev = false;
                $('.js-steps-slider-left').addClass('is-disabled');
            }




        });
