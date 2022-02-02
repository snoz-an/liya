$(document).ready(function(){
    //Используй для slick js лучше id
    $('#slider-reviews').slick({
      infinite: true,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dotsClass: 'slick-dots',
      arrow: false,
      prevArrow: $('.slider-partners-prev-reviews'),
      nextArrow: $('.slider-partners-next-reviews'),
      responsive: [
       
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1.05,
              dots: true,
            }
          },
      ]
    });
    

    $('.slider-partners-prev-reviews').click(function(){
      $('#slider-reviews').slick('slickPrev');
    });
    $('.slider-partners-next-reviews').click(function(){
      $('#slider-reviews').slick('slickNext');
    });

    
    $('#homescreen__carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){  
  
      $('#homescreen__carousel--current').text(Number(nextSlide+1));

    });

});