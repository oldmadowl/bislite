$(function(){

  $('.slider__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.works__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="works__arrow works__arrow-prev"><img src="images/icons/slide-left.svg" alt=""></button>',
    nextArrow: '<button class="works__arrow works__arrow-next"><img src="images/icons/slide-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 965,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  $('.dropdown').on('click', function(){
    $(this).children('.dropdown__list').toggleClass('active');
    $(this).toggleClass('active');
  });

});