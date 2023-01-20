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

jQuery(document).ready(function()   {
    jQuery(".product-listing-main .col-view-thumbnails a").click(function() {
        jQuery(".product-listing-main .col-view-thumbnails a").removeClass("active")
        jQuery(this).addClass("active")
    })
})

jQuery(document).ready(function() {
  jQuery(".nav-item .nav-link").click(function() {
  
    jQuery(this).siblings(".dropdown-menu").toggleClass("show")
  })
  jQuery(".megamenu-section h6").click(function() {
    // alert()
    jQuery(".megamenu-section .list-unstyled").hide()
    jQuery(this).siblings(".list-unstyled").show()
  })
  // jQuery(window).resize(function() {
  //   var width = jQuery(window).width();
  //   if (width > 991.98){
  //     jQuery(".megamenu-section .list-unstyled").css("display", "block !important")

  //   } 
  // })
})

$(document).ready(function() {
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;
  
    bigimage
      .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: true,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
      ]
    })
      .on("changed.owl.carousel", syncPosition);
  
    thumbs
      .on("initialized.owl.carousel", function() {
      thumbs
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
      .owlCarousel({
      
      items: 4,
      dots: true,
      nav: true,
      navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
      ],
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 4,
      responsiveRefreshRate: 100,
      responsive:{
            0:{
                margin: 10
            },
            768:{
                margin: 15
            },
            1200:{
                margin: 19
            }
        }
    })
      .on("changed.owl.carousel", syncPosition2);
  
    function syncPosition(el) {
      //if loop is set to false, then you have to uncomment the next line
      //var current = el.item.index;
  
      //to disable loop, comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
  
      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }
      //to this
      thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = thumbs.find(".owl-item.active").length - 1;
      var start = thumbs
      .find(".owl-item.active")
      .first()
      .index();
      var end = thumbs
      .find(".owl-item.active")
      .last()
      .index();
  
      if (current > end) {
        thumbs.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        thumbs.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }
  
    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        bigimage.data("owl.carousel").to(number, 100, true);
      }
    }
  
    thumbs.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      bigimage.data("owl.carousel").to(number, 300, true);
    });
  });
  
// ---- ---- Const ---- ---- //
const cookiesBox = document.querySelector('.wrapper'),
  buttons = document.querySelectorAll('.button');

// ---- ---- Show ---- ---- //
const executeCodes = () => {
  if (document.cookie.includes('AlexGolovanov')) return;
  cookiesBox.classList.add('show');

  // ---- ---- Button ---- ---- //
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      cookiesBox.classList.remove('show');

      // ---- ---- Time ---- ---- //
      if (button.id == 'acceptBtn') {
        document.cookie =
          'cookieBy= AlexGolovanov; max-age=' + 60 * 60 * 24 * 30;
      }
    });
  });
};

window.addEventListener('load', executeCodes);

jQuery(function() {
	jQuery('[data-decrease]').click(decrease);
	jQuery('[data-increase]').click(increase);
	jQuery('[data-value]').change(valueChange);
});

function decrease() {
	var value = jQuery(this).parent().find('[data-value]').val();
	if(value > 1) {
		value--;
		jQuery(this).parent().find('[data-value]').val(value);
	}
}

function increase() {
	var value = jQuery(this).parent().find('[data-value]').val();
	if(value < 100) {
		value++;
		jQuery(this).parent().find('[data-value]').val(value);
	}
}

function valueChange() {
	var value = jQuery(this).val();
	if(value == undefined || isNaN(value) == true || value <= 0) {
		jQuery(this).val(1);
	} else if(value >= 101) {
		jQuery(this).val(100);
	}
}

