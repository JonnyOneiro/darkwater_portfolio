//====================================================================================
  
//    Template Name: Runaway - Personal Portfolio HTML Template
//    Version: 1.0.1
//    Author: themetrading
//    Email: themetrading@gmail.com
//    Developed By: themetrading
//    First Release: 08 February 2019
//    Author URL: www.themetrading.com

//=====================================================================================
 
// 01.   Typed Text
// 02.   Water Effect
// 03.   Navbar scrolling logo change
// 04.   Smoothscroll js
// 05.   Testimonial Slider
// 06.   Fact Counter For Achivement Counting
// 07.   Elements Animation
// 08.   When document is Scrollig
// 09.   LightBox / Fancybox
// 10.   Gallery With Filters List
// 11.   Youtube and Vimeo video popup control
// 12.   Preloader For Hide loader
// 13.   Scroll Top
// 14.   Contact Form Validation

//=====================================================================================

(function ($) {
    "use strict";

  var $body = $("body"),
      $window = $(window),
      $contact = $('#contact-form')
      
      $body.scrollspy({
        target: ".navbar-collapse",
        offset: 20

  });


//==================================================================================
  // 01.   Typed Text
//==================================================================================

$(".element").each(function() {
        var $this = $(this);
        $this.typed({
            strings: $this.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000
        });
    });

//==================================================================================
// 02.  Water Effect
//==================================================================================

$('.banner_water_effect').ripples({
      resolution: 256,
      dropRadius: 20,
      perturbance: 0.03,
      interactive:true,
    });

//====================================================================================
// 03.    Navbar scrolling logo change
//====================================================================================


  $window.on("scroll",function () {

    var bodyScroll = $window.scrollTop(),
      navbar = $(".main_nav"),
      logo = $(".main_nav .navbar-brand> img");

    if(bodyScroll > 100){

      navbar.addClass("nav-scroll");
    }else{

      navbar.removeClass("nav-scroll");
    }
  });

//=======================================================================================
// 04.    Smoothscroll js
//=======================================================================================

  $("a").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();
      
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top 
        }, 1000, function(){
     
          window.location.hash = hash;
        });
      }
    });
    
//=====================================================================================
//  05.   Testimonial Slider
//=====================================================================================

    $('.testimonial_item').owlCarousel({
     loop: true,
     autoplay: true,
     autoplayTimeout: 5000,
     margin: 0,
     nav: true,
     dots: false,
     navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
     responsive:{

        0:{
          items:1
        },
        600:{
          items:1
        },
        1024:{
          items:2
        },
        1200:{
          items:2
        }
      }
      
     });

//=====================================================================================
// 06.    Fact Counter For Achivement Counting
//=====================================================================================

  function factCounter() {
    if($('.fact-counter').length){
      $('.fact-counter .count.animated').each(function() {
    
        var $t = $(this),
          n = $t.find(".count-num").attr("data-stop"),
          r = parseInt($t.find(".count-num").attr("data-speed"), 10);
          
        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate({
            countNum: n
          }, {
            duration: r,
            easing: "linear",
            step: function() {
              $t.find(".count-num").text(Math.floor(this.countNum));
            },
            complete: function() {
              $t.find(".count-num").text(this.countNum);
            }
          });
        }
        
        //set skill building height

          var size = $(this).children('.progress-bar').attr('aria-valuenow');
          $(this).children('.progress-bar').css('width', size+'%');

        
      });
    }
  }
  
//=====================================================================================
// 07.    Elements Animation
//=====================================================================================

  if($('.wow').length){
    var wow = new WOW(
      {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true       // act on asynchronously loaded content (default is true)
      });
    wow.init();
  }
  

//=====================================================================================
// 08.    When document is Scrollig
//=====================================================================================

  $window.on('scroll', function() {
    factCounter();
  });

//=====================================================================================
//  09.   LightBox / Fancybox
//=====================================================================================

    $('[data-fancybox="gallery"]').fancybox({
       animationEffect: "zoom-in-out",
       transitionEffect: "slide",
       transitionEffect: "slide",
    });

//=====================================================================================
//  10.   Gallery With Filters List
//=====================================================================================

    if($('.filter-list').length){
      $('.filter-list').mixItUp({});
    }

//=====================================================================================
//  11.   Youtube and Vimeo video popup control
//=====================================================================================

     jQuery(function(){
      jQuery("a.video-popup").YouTubePopUp();
      //jQuery("a.video-popup").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
     });

//=====================================================================================
//  12.   Preloader For Hide loader
//=====================================================================================

function handlePreloader() {
  if($('.preloader').length){
    $('.preloader').delay(500).fadeOut(500);
    $('body').removeClass('page-load');
  }
} 

$window.on('load', function() {
  handlePreloader();
});


//=====================================================================================
// 13.  Scroll Top
//======================================================================================

$(window).scroll(function(){ 
  if ($(this).scrollTop() > 500) { 
    $('#scroll').fadeIn(); 
  } else { 
    $('#scroll').fadeOut(); 
  } 
}); 
$('#scroll').click(function(){ 
  $("html, body").animate({ scrollTop: 0 }, 1000); 
  return false; 
});

//=======================================================================================
//  14.   Contact Form Validation
//=========================================================================================
if($contact.length){
    $contact.validate({  //#contact-form contact form id
      rules: {
        name: {
          required: true    // Field name here
        },
        email: {
          required: true, // Field name here
          email: true
        },
        subject: {
          required: true
        },
        message: {
          required: true
        }
      },
      
      messages: {
                name: "Please enter your First Name", //Write here your error message that you want to show in contact form
                email: "Please enter valid Email", //Write here your error message that you want to show in contact form
                subject: "Please enter your Subject", //Write here your error message that you want to show in contact form
                message: "Please write your Message" //Write here your error message that you want to show in contact form
            },

            submitHandler: function (form) {
                $('#send').attr({'disabled' : 'true', 'value' : 'Sending...' });
                $.ajax({
                    type: "POST",
                    url: "email.php",
                    data: $(form).serialize(),
                    success: function () {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $( "#success").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#success").slideUp( "slow" );
                        }, 5000);
                        form.reset();
                    },
                    error: function() {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $( "#error").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#error").slideUp( "slow" );
                        }, 5000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }

    });
  }

})(jQuery);

