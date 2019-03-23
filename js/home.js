$(document).ready(function() {
  
  //--- BRANDS BOTTOM: animation on start  ---//    
      
    if ((!sessionStorage.getItem('hasVisited')) && ($("body").hasClass("home"))) {
      $(window).on("load", function() {
        setTimeout(function() {
          $(".full-open").each(function(i) {
            var el = $(this);
            setTimeout(function() {
              el.addClass('is-animating');
              $('.brands').addClass('pointer-events-off')
              el.animate({
                bottom: 0
              }, 400);
            }, i * 200);
          });

          setTimeout(function() {
            $(".full-open.is-animating").animate({
              bottom: -375
            }, 1000, 'swing', function() {
              $(".full-open").removeClass('is-animating');
              $('.brands').removeClass('pointer-events-off');
            });
          }, 5000);
        }, 1000)
      });
      sessionStorage.setItem('hasVisited', true);
    }

//--- BRANDS - start animation ---//

  $(".brands-wrapper").addClass("animate");

//--- BRANDS show/hide ---//

  $('.partially-open').on('mouseenter', function() {
    var $_this = $(this);
    var $full_open = $_this.next('.full-open');
    $full_open.addClass('open');
    $(this).find('.wrapper-partially').addClass('hide');

    $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
      function(event) {
        $(this).parent().addClass('pointer-events-off');
      });
  });
  
    $('.brands-wrapper li').on('mouseleave', function() {
    var $_this = $(this);
    var $full_open = $_this.find('.full-open');
    var $wrapper_partially = $_this.find('.wrapper-partially');
    $full_open.removeClass('open');
    $wrapper_partially.removeClass('hide');

    $wrapper_partially.parent().one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
      function(event) {
        $wrapper_partially.parents('li').removeClass('pointer-events-off');
      });
  });
  

//---   ---//
      $(".brands-mobile__close").on('click', function() {
        $(".brands-mobile__open").removeClass('active').addClass('active');
      })
      $(".arrow-down").on('click', function() {
        $(".brands-mobile__open").removeClass('active');
      })
      

})