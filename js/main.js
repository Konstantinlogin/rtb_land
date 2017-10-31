$(document).ready(function(){
    $('#funnel').find('[data-logos-section]').each(function(){
        var section_id = $(this).attr('data-logos-section');
        var parsed_block =  $('#logos').find('[data-logos-section =' + section_id + ']').html();
        $(this).html(parsed_block);
    });


    var sliderLogos = new Swiper('.funnel__slider', {
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true,
      loop: true,
      wrapperClass: 'funnel__slider-wrapper',
      slideClass: 'logos__item'
    });


});