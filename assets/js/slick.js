$(document).ready(function(){
    //Используй для slick js лучше id
    $('#slider-partners').slick({
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dotsClass: 'slick-dots',
      arrow: false,
      prevArrow: $('.slider-partners-prev'),
      nextArrow: $('.slider-partners-next'),
      responsive: [
        {
          breakpoint: 1370,
          settings: {
            slidesToShow: 5,
            dots: true,
          }
        },
        
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 4,
              dots: true,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              dots: true,
            }
          },
          {
            breakpoint: 573,
            settings: {
              slidesToShow: 2,
              dotsClass: 'slick-dots',
              dots: true,
            }
          }
      ]
    });
    $("#slider-partners").on('afterChange', function(event, slick, currentSlide){
      $("#cp").text(currentSlide + 1);
    });

    $('.slider-partners-prev').click(function(){
      $('#slider-partners').slick('slickPrev');
    });
    $('.slider-partners-next').click(function(){
      $('#slider-partners').slick('slickNext');
    });

    //Вот смотри, это я скопировал код с прошлого проекта, в котором требовалось указывать номер слайдера. Здесь все просто.
    //#homescreen__carousel - это инициализированная карусель, как код выше .slick(). Далее, мы ловим момент beforeChange, когда какой-то
    //сладер перелистывается, и запускаем функцию ниже.
    $('#homescreen__carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){  
      //В эту функцию передаются параметры карусели. nextSlide - это следующая страница по счету, но так как отчет идет от Нуля, то
      //получается, чтобы получить нужный номер, мы должны прибавить +1 nextSlide+1. 

      //#homescreen__carousel--current - это какой-то элемент, в котором отображается та самая нужная цифра. С помощью .text мы вписываем туда
      //нужное значение, а именно nextSlide+1.

      $('#homescreen__carousel--current').text(Number(nextSlide+1));

    });

});