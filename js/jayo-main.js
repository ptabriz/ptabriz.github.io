/*****************
*** USE STRICT ***
*****************/

"use strict";

/****************
*** Preloader ***
****************/

jQuery(window).load(function() {
    jQuery( '.animation' ).delay(1000).fadeOut(300, function() {
        jQuery('.jayo-preloader').fadeOut(600);
    });
})

/**********************
*** Main Navigation ***
**********************/

jQuery(document).ready(function($) {
    $('.jayo-nav-icon').on('click', function(){
        $(this).toggleClass('open');
        $('.jayo-menu-wrapper .jayo-menu').toggleClass('open');
        $('.jayo-menu-wrapper .jayo-menu').fadeToggle(300);
    });
});


/*************************
*** Page Header Slider ***
*************************/

jQuery(document).ready(function() {
    // Load slider if multiple images is added to post
    jQuery('.jayo-page-header.slider').owlCarousel({
        nav : false,
        loop : true,
        dots : true,
        autoplay : true,
        autoplayTimeout: 6000,
        margin : 0,
        stagePadding:0,
        items : 1,
        autoHeight : true,
        animateOut: 'fadeOut'
    })
});


/*************************
*** Portfolio Template ***
*************************/

jQuery(document).ready(function($) {


    // The Filter
    $('.jayo-filter-icon').on('click', function(){
        $('.jayo-filter-icon .icon').toggleClass('active');
        $('.jayo-portfolio-template .filter').toggleClass('active');
    });

    $('.jayo-portfolio-template .filter').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });
    $('.jayo-portfolio-template .filter li').on('click', function() {
        $('.jayo-portfolio-template .filter li.active').removeClass('active');
        $(this).addClass('active');
    });

    // Load Items
    var $container = $('.jayo-portfolio-template .items').imagesLoaded( function() {
        $container.isotope({
            itemSelector: '.jayo-portfolio-template .item',
            transitionDuration: '.5s',
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            }
        });
    });

    // Mobile Navigation (borrowed_payam)
    if ($('#nav-menu-container').length) {
      var $mobile_nav = $('#nav-menu-container').clone().prop({
        id: 'mobile-nav'
      });
      $mobile_nav.find('> ul').attr({
        'class': '',
        'id': ''
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
      $('body').append('<div id="mobile-body-overly"></div>');
      $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

      $(document).on('click', '.menu-has-children i', function(e) {
        $(this).next().toggleClass('menu-item-active');
        $(this).nextAll('ul').eq(0).slideToggle();
        $(this).toggleClass("fa-chevron-up fa-chevron-down");
      });

      $(document).on('click', '#mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
        $('#mobile-body-overly').toggle();
      });

      $(document).click(function(e) {
        var container = $("#mobile-nav, #mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').fadeOut();
          }
        }
      });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
      $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    // Smooth scroll for the menu and links with .scrollto classes
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          var top_space = 0;

          if ($('#header').length) {
            top_space = $('#header').outerHeight();

            if( ! $('#header').hasClass('header-fixed') ) {
              top_space = top_space - 20;
            }
          }

          $('html, body').animate({
            scrollTop: target.offset().top - top_space
          }, 1500, 'easeInOutExpo');

          if ($(this).parents('.nav-menu').length) {
            $('.nav-menu .menu-active').removeClass('menu-active');
            $(this).closest('li').addClass('menu-active');
          }

          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').fadeOut();
          }
          return false;
        }
      }


    // Infinite Scroll Function
    $container.infinitescroll({
        navSelector  : '.jayo-portfolio-template .navigation',
        nextSelector : '.jayo-portfolio-template .navigation .next a',
        itemSelector : '.jayo-portfolio-template .items .item',
        animate : false,
    },

    // call Isotope as a callback
    function(newElements) {
        var $newElems = $(newElements).css('opacity', 0);
        $newElems.imagesLoaded(function(){
            $newElems.animate({opacity: 1});
            $container.isotope('appended', $newElems );
        });
    });

});

/*****************
*** Posts Page ***
*****************/

jQuery(document).ready(function($) {

    // Load Items
    var $container = $('.jayo-posts-page .blog-items').imagesLoaded( function() {
        $container.isotope({
            itemSelector: '.jayo-posts-page .blog-items .item',
            transitionDuration: '.5s',
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            }
        });
    });

    // Infinite Scroll Function
    $container.infinitescroll({
        navSelector  : '.jayo-posts-page .navigation',
        nextSelector : '.jayo-posts-page .navigation .next a',
        itemSelector : '.jayo-posts-page .blog-items .item',
        animate : false,
    },

    // call Isotope as a callback
    function(newElements) {
        var $newElems = $(newElements).css('opacity', 0);
        $newElems.imagesLoaded(function(){
            $newElems.animate({opacity: 1});
            $container.isotope('appended', $newElems );
        });
    });
});

/*************************
*** Single Post Slider ***
*************************/

jQuery(document).ready(function() {
    // Load slider if multiple images is added to post
    jQuery('.post-single-slideshow').owlCarousel({
        nav : false,
        loop : true,
        dots : true,
        autoplay : true,
        autoplayTimeout: 9000,
        margin : 0,
        stagePadding:0,
        items : 2,
        autoHeight : true,
        animateOut: 'fadeOut'
    })
});

/**********************************
*** About Template / Skill Bars ***
**********************************/

jQuery(document).ready(function($) {
    jQuery('.jayo-about-me-template .bars figure').each(function() {
        jQuery(this).appear(function() {
            jQuery(this).find('.skill-bar').animate({
                width:jQuery(this).attr('data-percent')
            },1500);
        });
    });
})

/****************************************
*** About Template / Clients Carousel ***
****************************************/

jQuery(document).ready(function() {
    // Load slider if multiple images is added to post
    jQuery('.jayo-about-us-template .clients .logos.carousel').owlCarousel({
        lazyLoad : false,
        dots : false,
        nav : false,
        items : 6,
        loop : true,
        margin : 20,
        autoplay : true,
        autoplayTimeout:3000,
        responsive : {
            0 : {
                items : 2,
            },

            480 : {
                items : 4,
            },

            768 : {
                items : 6,
            }
        }
    })
});
