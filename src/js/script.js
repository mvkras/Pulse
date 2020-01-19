$(document).ready(function(){  /* функция, которая запускает слайдер, скачали с сайта Slick */
    $('.carousel__inner').slick({
        speed: 1200, /* Как быстро будет переключаться 1 слайд на другой в милисекундах. 1500 ms - это 1,5 секунды */
        slidesToShow: 1,
        /* adaptiveHeight: true, */    /* Самостоятельно будет подстраиваться под высоту */  
        autoplay: true,  /* Автопереключение слайдера */
        prevArrow:'<button type="button" class="slick-prev"><img src="../img/pictures/arrow_right.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../img/pictures/arrow_left.png"></button>',
        responsive: [
            {
                breakpoint: 768, /* на какой промежутке будем устанавливать эти правила работают вниз эти правила будут работать от 0 до 1024px */
                settings: {                
                  dots: true, 
                  arrows: false  /* для мобильной версии стрелки убираем */
            }
         }] /* адаптация под мобилки, разное разрешение слайдов */  
      }); /* Слайдер загружается тогда, когда слайдер полностью готов */ 
      autoplaySpeed: 2000
  });  /* Этот метод позволит нам запустить slick слайдер */

  