// JavaScript Document
jQuery('#testimonial-carousel').owlCarousel({
    loop:true,
    margin: 10,
    nav:true,
    navText : ["<i class='las la-arrow-left'></i>","<i class='las la-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
jQuery('#category-carousel').owlCarousel({
    loop:true,
    margin:44,
    nav:true,
    navText : ["<i class='las la-arrow-left'></i>","<i class='las la-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        575: {
            items:2
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
jQuery('#about-right-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText : ["<i class='las la-angle-left'></i>","<i class='las la-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

jQuery(document).ready(function(){
    jQuery(window).scroll(function() {
       if(jQuery(this).scrollTop() > 200 ) {
       jQuery(".custom-header").addClass("fixed-top");
       jQuery(".header-top").slideUp();
      } else {
       jQuery(".custom-header").removeClass("fixed-top");
       jQuery(".header-top").slideDown();
      }
    });
});

