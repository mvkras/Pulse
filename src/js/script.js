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

      /* СКРИПТ ДЛЯ ПЕРЕКЛЮЧЕНИЯ АКТИВНОСТЕЙ ТАБОВ */
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

  

      /* ТОЖЕ САМОЕ, ТОЛЬКО ДЛЯ КНОПКИ НАЗАД */
     
      /* ПРОПИСЫВАЕМ ФУНКЦИЯ ДЛЯ ПЕРЕКЛЮЧЕНИЯ КНОПОК НАЗАД И ПОДРОБНЕЕ, ЧТОБЫ 1 И ТОТ ЖЕ КОД НЕ ПОВТОРЯТЬ */
      function toggleSlide(item){ /* Передаем 1 аргумент - класс */
        $(item).each(function(i){  /* Кадлый элемент - это ссылка подробней, которая есть на странице */
            $(this).on('click', function(e){
                e.preventDefault(); /* для отмены поведения браузера, чтобы не переходили по определенному адрему, а выполняли какие-то другие действия */
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active'); /* Переключение класса при клике */
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
          })
      };
      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');


     /*--------Модальные окна-------- */
      $('[data-modal=consultation]').on('click', function(){
           /* Что будет происходить, когда пользователь кликнет на данные кнопки */
           $('.overlay, #consultation').fadeIn('slow'); /* Будет показывать данную область fadeOut - скрывает */
      });
      /* Скрываем крестик */
      $('.modal__close').on('click', function(){ /* обращаемся к классу модал close, пользователь будет кликать и будет происходить какое-то действие */
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow'); /* Перечисляем, что будет закрываться при клике */
      }); 

      
      /* Кастомизируем кнопки каталога, чтобы показывалась инфа по определенноему товару в корзине */
      $('.button_mini').each(function(i) { /* функция, которая будет перебирать элементы */
       $(this).on('click', function() { /* this - та кнопка, на которую сейчас нажал */
        $('#order .modal__descr').text($('.catalog-catalog-item__subtitle').eq(i).text()); /* Внутри модального окна, есть заголовок  в которую помещается текст eq (i) получить элемент по порядку все, что написано в скобках после text(....) будет попадать внутрь модального окна*/
        $('.overlay, #order').fadeIn('slow'); /* Команда позволяет показывать модальное окно */
       }); 
      });
//------------------------------------------------------------------------------------------------------------------
      /*------------ Валидация форм -----------*/
      
      /* Прописываем функцию в которую будут подставляться нужные формы */
      function validateForms(form){ /* Будет приходить какая-то форма, аргумент */
        $(form).validate({
          rules: {      /* ПОЛЕ С НАСТРОЙКАМИ  */
            name: "required",
            phone: "required",
            email: {
              required: true,
              email: true     /* Плагин будет проверять, действительно ли я ввел в поле email  */
            }
          }, 
          messages: {  /* КАСТОМИЗИРУЕМ СООБЩЕНИЯ ДЛЯ ПОЛЬЗОВАТЕЛЯ НА РУССКОМ */
            name: "Пожалуйста, заполните Ваше имя",
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, заполните почтовый адрес",
              email: "Ваша почта должна быть в формате @ ."
            }
          }
        });
      };
      validateForms('#consultation-form'),
      validateForms('#consultation form'),
      validateForms('#order form')
//----------------------------------------------------------------------------------------------------------------

    /* Маски ввода */
      $('input[name=phone]').mask("+7 (999) 999-99-99");
  });  


  