$(document).ready(function() {
  
//--- Menu items display ---//
  if (screen.width > 1024) {
    $('.navbar-left').hover(
    function() {
      $('.header-bg').animate({height: "380px", opacity: "1"}, 500).clearQueue();
      $('#header').removeClass('hide').addClass('open');
      $('.btn-menu a.btn-menu__link').animate({ opacity: "0"}, 70);
      $('.main-menu').animate({ opacity: "1"}, 100);
    }, function() {});
    
    $('.header-container').mouseleave(function() {
      $('.header-bg').animate({height: "0", opacity: "0"}, 500).clearQueue();;
      $('#header').removeClass('open').addClass('hide');
      $('.main-menu').animate({ opacity: "0"}, 100);
      $('.btn-menu a.btn-menu__link').animate({ opacity: "1"}, 70);
    });
  }
  // menu shrink after 150px
  
  if (screen.width > 1270) {
    $(document).on("scroll", function(){
    		if (($(document).scrollTop() > 150) && $("#header").hasClass('hide')){
    		  $("#header").addClass("header-shrink");
    		}
    		else
    		{
    			$("#header").removeClass("header-shrink");
    		}
    	});
  }

  
//--- Nav undelrine is drawing - animation ---//
  $('.navbar-left').hover(
    function() {
      $(".bottom-line").animate({width: "98%"}, 1000);
      $(".bottom-line").clearQueue();
    }, function() {
      $(".bottom-line").animate({width: "0"}, 300);
      $(".bottom-line").clearQueue();
      $(".sliding-underline").animate({width: "0"}, 300);
  })
  
//--- Sliding line under menu items ---//

    var $el, leftPos, newWidth,
        $mainNav = $(".main-menu");
    
    $mainNav.append("<hr class='sliding-underline'>");
    var $slideLine = $(".sliding-underline");

    $(".main-menu > .menu-item > a").hover(function() {
      $el = $(this);
      var position = $el.position();
      leftPos = position.left + parseInt($el.css('padding-left'), 10);
      newWidth = $el.width() + 3;
      $slideLine.stop().animate({
        left: leftPos,
        width: newWidth
      });
    }, function() {
      $slideLine.animate({
        left: $slideLine.data("origLeft"),
        width: $slideLine.data("origWidth")
      });
    });
  
$('.menu-main-menu-container > .main-menu').append('<hr class="bottom-line" />');    

//--- Submenu - each menu item fadeIn ---//

if (screen.width > 1024) {
  $('.menu-item-has-children').hover(
    function() {
      $(this).find('.sub-menu > li.menu-item').each(function(i) {
        $(this).stop();
        $(this).clearQueue();
        $(this).delay((i++) * 40).fadeTo(300, 1);
      })
    },
    function() {
      var $sub_menu = $(this).find('.sub-menu > li.menu-item');
      for (var i = $sub_menu.length; i > 0; i--) {
        $($sub_menu[i - 1]).stop();
        $($sub_menu[i - 1]).clearQueue();
        $($sub_menu[i - 1]).delay(($sub_menu.length - i) * 40).fadeTo(300, 0);
      }
    }
  );
}

// MOBILE
  if (screen.width <= 1024) {

    // burger menu icon animation
    $('.hamburger').on('click', function() {
      $(this).toggleClass("is-active");
      $('#header').toggleClass('open');
      $('body').toggleClass('header-is-open');
    })

    // display dropdown menu when click on menu-item-has-children
    $('li.menu-item-has-children, li.menu-item').on('click', function() {

      if ($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
      }else {
        $('li.menu-item-has-children, li.menu-item').removeClass('is-active');
        $(this).addClass('is-active');
      }
    })
    

//slidng line mobile 
    $('.mobile-menu').prepend('<hr class="sliding-line--left" />');

    var $slidingLine = $('.sliding-line--left');
    var $currentMenuPos = $('.mobile-menu .current-menu-item a');
    $slidingLine.css({
      top: $currentMenuPos.position().top
    });

    $('.mobile-menu > .menu-item > a').on('click hover', function() {
      var $this = $(this);

      $('.mobile-menu .sub-menu').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        function(event) {
          var topPos = $this.position().top;

          $slidingLine.stop().animate({
            top: topPos + 'px',
          });
        });
    });
    
//nav shrink on mobile
    var lastScroll = 0;
    var scrollingTop = false;

    function isScrollingTop() {
      $(window).scroll(function() {
        var st = $('body').scrollTop();
        if (st < lastScroll) {
          scrollingTop = true;
        }
        else {
          scrollingTop = false;
        }

        lastScroll = st;
      });
    }
    $(window).scroll(function() {
      const scroll = $(window).scrollTop();
      if (scroll >= 100 && !scrollingTop) {
        $('.header').addClass('header-shrink');
      }
      else {
        $('.header').removeClass('header-shrink');
      }

    });

  }

  });
  