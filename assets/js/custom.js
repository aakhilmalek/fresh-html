


function openNav2() {
    $("#mySidenav2").addClass("width-menu");
    $("#cd-shadow-layer").css("display", "flex");
    $("body").css("position", "relative");
    $("body").css("overflow", "hidden");
    $("body").css("height", "100vh");
    // $(".position-fixed-overlay").addClass("position-show");
    $(".closebtn2").css("position", "fixed");
   
  
  }
  
  function closeNav2() {
    $("#mySidenav2").removeClass("width-menu");
    $("#cd-shadow-layer").css("display", "none");
    $("body").css("position", "relative");
    $("body").css("overflow", "");
    $("body").css("height", "");
    $(".closebtn2").css("position", "relative");
  
  }


var headertopoption = $(window);
var headTop = $('.navbar-dark');

headertopoption.on('scroll', function () {
    if (headertopoption.scrollTop() > 100) {
        headTop.addClass('fixed-top slideInDown animated');
    } else {
        headTop.removeClass('fixed-top slideInDown animated');
    }
});

  

// wow
$(document).ready(function(){

new WOW(
    {  
        mobile:  false,
    }
).init();
    
   

// nav slide




/// smooth scroll

$('a.smoth-scroll').on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 70
    }, 1500);
    e.preventDefault();
});

// header sticky

// var headertopoption = $(window);
// var headTop = $('.navbar-dark');

// headertopoption.on('scroll', function () {
//     if (headertopoption.scrollTop() > 0) {
//         headTop.addClass('fixed-top');
//     } else {
//         headTop.removeClass('fixed-top');
//     }
// });

// menu click

$(".nav-link").click(function(){
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
});


$(".nav-link").click(function(){
    $(".navbar-collapse").removeClass("show");

    $("#mySidenav2").removeClass("width-menu");
    $("#cd-shadow-layer").css("display", "none");
    $("body").css("position", "relative");
    $("body").css("overflow", "");
    $("body").css("height", "");
    $(".closebtn2").css("position", "relative");
});


// home

$(".url").click(function(){
    $(".url").removeClass("active");
    $(this).addClass("active");
});




// timeline js

$(".StepProgress li a").click(function(){
    $(".StepProgress li").removeClass("active fadeInUp");
    $(this).parent().addClass("active fadeInUp");
});


// readmore


$("#toggle-read").click(function() {
    var elem = $("#toggle-read").text();
    if (elem == "Read More...") {
      $("#toggle-read").text("Read Less");
      $("#text_hide_show").show();
    } else {
      $("#toggle-read").text("Read More...");
      $("#text_hide_show").hide();
    }
  });




// favorite

$('.faverouite-btn').click(function(){
    $(this).toggleClass('active');
      $(this).children().toggleClass('fa-heart-o');
      $(this).children().toggleClass('fa-heart');
    });
      




// our client


// logo-client


// our service

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    smartSpeed:2000,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    dots: false,
    responsiveClass:true,
    navText: ['<span class="span-roundcircle left-roundcircle"><img src="assets/images/icon/left-arrow.svg" class="left_arrow_icon" alt="arrow" /></span>','<span class="span-roundcircle right-roundcircle"><img src="assets/images/icon/right-arrow.svg" class="right_arrow_icon" alt="arrow" /></span>'],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        768:{
            items:3,
            nav:false
        },

        1000:{
            items:3,
            nav:true
        },
        1025:{
            items:4,
            nav:true,
            loop:true
        }
    }
});

$(".nav-toggle").click(function(){
    $(".nav-toggle").removeClass("active");
    $(".nav-toggle").parent().removeClass("active");
    $(this).addClass("active");
    $(this).parent().addClass("active");
});



});