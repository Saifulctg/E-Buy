$(function () {
  "use strict";
  // Scroll Smooth Code Start
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
  // Scroll Smooth Code End

  // Menu Code Start
  $('#mainMenu .nav-item').on('click', function () {
    $('#mainMenu .nav-item').removeClass('active')
    $(this).addClass('active')
  })

  var headerOffset = $('#header').offset().top

  $(window).on('scroll',function(){
    var scrollSize = $(window).scrollTop()
    if(headerOffset < scrollSize){
      $('#header').addClass('headerFixed')
      $('body').css('margin-top','80px');
    }else{
      $('#header').removeClass('headerFixed')
      $('body').css('margin-top','0');
    }
    
  })
  // Menu Code Start

  // Banner Code Start
  $('#banner').slick({
    prevArrow: '<i class="fas fa-chevron-left slick_arrow banner_arrow_left"></i>',
    nextArrow: '<i class="fas fa-chevron-right slick_arrow banner_arrow_right"></i>',
    fade: true,
    speed: 1000,
  });
  // Banner Code End

  // Latest Code Start
  $('.latestSlide').slick({
    prevArrow: '<i class="fas fa-chevron-left slick_arrow latest_arrow_left"></i>',
    nextArrow: '<i class="fas fa-chevron-right slick_arrow latest_arrow_right"></i>',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]


  });
  // Latest Code End

  // Testimonial Code Start
  $('.testimonialSlide').slick({
    prevArrow: '<i class="fas fa-chevron-left slick_arrow testimonial_arrow_left"></i>',
    nextArrow: '<i class="fas fa-chevron-right slick_arrow testimonial_arrow_right"></i>',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  // Testimonial Code End

  // Filterizer Code Start

  $('.featuredContent').filterizr();

  // Filterizer Code End

  // Countdown Code Start
  $('.countdown').countdown('2020/11/02', function (event) {
    var $this = $(this);
    $this.find('#day').html(event.strftime('<span>%D</span>'));
    $this.find('#hour').html(event.strftime('<span>%H</span>'));
    $this.find('#month').html(event.strftime('<span>%M</span>'));
    $this.find('#second').html(event.strftime('<span>%S</span>'));
  });
  $('countdown').countdown('2012/20/20 12:34:56');
  // Countdown Code End

  // Back To Top Button Code Start
  $(window).on('scroll', function(){
    var scrollSize = $(window).scrollTop()
       
      if( scrollSize > 800){
          $('.backToTop').fadeIn(500)
      } else{
          $('.backToTop').fadeOut(500)
      }
   })
   $('.backToTop').on('click', function(){
      $('html,body').animate({
          scrollTop:0
      },'1000');
   })
  // Back To Top Button Code End


})