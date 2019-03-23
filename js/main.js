$(document).ready(function() {

    $('.news-col header').on('click', function(e) {
        $(this).parent().find('.more-text').slideToggle(100, function() { $.scrollify.update(); });
        return false;
    });
    
    
// BRANDS SINGLE PAGE, slider on mobile

    if (screen.width <= 1024) {

        $('.single-brands-page .info-box__container').slick({
            slidesToShow: 1,
            arrows: false,
            adaptiveHeight: true,
            dots: true,
            slide: '.info-box__row'
        })
    }

//anchor links slide animation
    $(document).on('click', 'a[href^="#"]', function(event) {
        if( $(this).attr('href') !== '#' ) {
        
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);

        }
    });

  $('.side-nav-wrap a').click(function(e) {
    e.preventDefault();
    var slideIndex = $(this).parent('li').index();
    $('.timeline-list').slick('slickGoTo', slideIndex);
    return false;
  });
  

});
  function twitter_share(url, text) {
    text = text=="undefined" ? '' : text
    url = encodeURIComponent(url);
    text = encodeURIComponent(text);
    var left_padding = Math.ceil($('body').width()/2 - 250);
    window.open('https://twitter.com/share?text='+text+'&url='+url, 'Share_this_link', 'width=500,height=300,location=no,left='+left_padding);
    return false;
}

  function facebook_share(url, content) {
    var left_padding = Math.ceil($('body').width() / 2 - 250);
    if (content === undefined) {
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'Share_this_link', 'width=500,height=200,location=no,left=' + left_padding);
    }
    else {
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + url + '?&description=' + content, 'Share_this_link', 'width=500,height=200,location=no,left=' + left_padding);
    }
    return false;
  }

// ---------- FACTSHEET: charts ---------- //
    
function drawChart(data, wrapperId) {
    AmCharts.makeChart(wrapperId, {
        "type": "serial",
        "hideCredits":true,
        "pathToImages": "http://cdn.amcharts.com/lib/3/images/",
        "categoryField": "category",
        "columnSpacing": 10,
        "columnWidth": 0.86,
        "startDuration": 0.75,
        "fontSize": 12,
        "handDrawScatter": 0,
        "handDrawThickness": 0,
        "categoryAxis": {
            "gridPosition": "start",
            "color": "#000000",
            "fontSize": 12,
            "gridAlpha": 0,
            "gridColor": "#E7E7E7",
            "gridCount": 0,
            "gridThickness": 0,
            "minHorizontalGap": 69,
            "minorGridAlpha": 0,
            "minVerticalGap": 19,
            "titleFontSize": 0
        },
        "trendLines": [],
        "graphs": [{
            "colorField": "color",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineColorField": "color",
            "title": "graph 1",
            "type": "column",
            "valueField": "column-1"
        }],
        "guides": [],
        "valueAxes": [{
            "gridType": "circles",
            "id": "ValueAxis-1",
            "axisThickness": 0,
            "fontSize": 3,
            "gridThickness": 0,
            "labelRotation": -7.2,
            "labelsEnabled": false,
            "tickLength": 0,
            "title": "",
            "titleFontSize": 0
        }],
        "allLabels": [],
        "balloon": {
            "borderColor": "#000000",
            "borderThickness": 0,
            "color": "#fff",
            "fillAlpha": 1,
            "fillColor": "#000000",
            "fontSize": 14,
            "offsetX": 0,
            "offsetY": 10
        },
        "titles": [{
            "id": "Title-1",
            "size": 15,
            "text": ""
        }],
        "dataProvider": data
    });
}

function drawLineGraph(data, wrapperId) {
    AmCharts.makeChart(wrapperId, {
        "type": "serial",
        "hideCredits":true,
        "pathToImages": "http://cdn.amcharts.com/lib/3/images/",
        "categoryField": "category",
        "columnSpacing": 15,
        "columnWidth": 1,
        "autoMarginOffset": 12,
        "marginBottom": 13,
        "plotAreaBorderColor": "#FF0000",
        "plotAreaFillColors": "#FF0000",
        "startDuration": 1,
        "fontSize": 12,
        "handDrawScatter": 0,
        "handDrawThickness": 0,
        "theme": "light",
        "categoryAxis": {
            "axisAlpha": 1,
            "axisThickness": 2,
            "gridAlpha": 1,
            "gridColor": "#fff",
            "gridThickness": 2,
            "minorGridAlpha": 1,
            "tickLength": 0
        },
        "trendLines": [],
        "graphs": [{
            "balloonColor": "#A2B0C0",
            "balloonText": "",
            "bullet": "round",
            "bulletBorderThickness": 0,
            "bulletSize": 1,
            "color": "A2B0C0",
            "connect": false,
            "fontSize": 20,
            "gapPeriod": 5,
            "id": "AmGraph-1",
            "lineColor": "#A2B0C0",
            "lineThickness": 2,
            "precision": 0,
            "title": "graph 1",
            "type": "smoothedLine",
            "valueField": "column-1"
        }],
        "guides": [],
        "valueAxes": [{
            "id": "ValueAxis-1",
            "minMaxMultiplier": 0,
            "radarCategoriesEnabled": false,
            "synchronizeWith": "ValueAxis-1",
            "axisAlpha": 0,
            "axisThickness": 0,
            "fontSize": 0,
            "gridAlpha": 1,
            "gridColor": "#fff",
            "gridCount": 1,
            "gridThickness": 2,
            "minorGridAlpha": 0,
            "tickLength": 0,
            "title": "",
            "titleBold": false
        }],
        "allLabels": [],
        "balloon": {
            "borderColor": "#FF0000",
            "borderThickness": 0,
            "color": "#FFFFFF",
            "fillAlpha": 0,
            "fillColor": "#FF0000",
            "fontSize": 0,
            "horizontalPadding": 12,
            "pointerWidth": 4,
            "shadowAlpha": 0,
            "verticalPadding": 12
        },
        "titles": [],
        "dataProvider": data
    });
}

function unescapeArray(arr) {
    $(arr).each(function(idx, item) {
        var d = document.createElement("div");
        d.innerHTML = "'" + item.category ;
        item.category = $(d).text();
    });
    return arr;

}

// ---------- HISTORY page ---------- //

if (screen.width > 1024) {
  var slick = $('.timeline-list').slick({
    slidesToShow: 1,
    vertical: true,
    arrows: true,
    prevArrow: '<i class="fa fa-angle-up timeline-arrow" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-down timeline-arrow" aria-hidden="true"></i>',
    verticalSwiping: true,
    infinite: false,
    adaptiveHeight: true
  });
  
    slick.on('afterChange', function(event, slick, currentSlide) {
      var slides_num = $('.slick-slide').length;
      if(currentSlide == (slides_num-1)) {
        $('.slick-arrow.fa-angle-down').css('opacity', '0')
        $('.slick-arrow.fa-angle-up').css('opacity', '1')
      } else if(currentSlide == 0) {
        $('.slick-arrow.fa-angle-down').css('opacity', '1')
        $('.slick-arrow.fa-angle-up').css('opacity', '0')
      } else {
        $('.slick-arrow.fa-angle-down').css('opacity', '1')
        $('.slick-arrow.fa-angle-up').css('opacity', '1')
      }
    
  });
  

} else {
  
  if ($('.page-history').length > 0) {
  
    var slick = $('.timeline-list').slick({
      slidesToShow: 1,
      arrows: false,
      infinite: false,
      adaptiveHeight: true,
      asNavFor: '.side-nav-list'
    });
  
    var slick = $('.side-nav-list').slick({
      slidesToShow: 5,
      arrows: true,
      prevArrow: '<i class="side-nav-left side-nav-arrow"></i>',
      nextArrow: '<i class="side-nav-right side-nav-arrow"></i>',
      infinite: false,
      asNavFor: '.timeline-list'
    });
  }
}
if ($('.page-history').length > 0) {
  $('.history__more-btn a').click(function(e) {
    $('.timeline-list').slick('slickGoTo', 1);

  });

  slick.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var navItem = $($('.side-nav-wrap li')[nextSlide]).find('a');
    navItem.trigger('itemActivated');
    
    $('.side-nav-list a').on('itemActivated', function() {
      var offTop = $('.slick-current ').position().left;
      $('.side-nav-wrap .bar').css({ marginLeft: offTop});
    });
    
  });
}

$(function(){
    initFloatingSidebars()
    $(document).on('click', '.load-more-articles a',  function(){
        var loadA = $(this);
        $.post( {
            url: '/wp-admin/admin-ajax.php?action=fetch_posts_page',
            type: 'POST',
            data: loadA.data('load'),
            success:  function(response) {
                $(loadA).closest('div').replaceWith(response);
            },
            beforeSend:function(){
                loadA.closest('.load-more-articles').addClass('loading');
            },
            complete: function(){
                loadA.closest('.load-more-articles').removeClass('loading');
                $.scrollify.update();
            }
        });
        return false;
    });

// ----- floating sidebars ---- //

    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.side-nav-wrap a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll", onScroll);

        $('.side-nav-wrap a').each(function () {
            $(this).removeClass('active');
        })
        $(this).trigger('itemActivated');

        if ($('.page-history').length == 0) {
          var target = this.hash,
            menu = target;
          $target = $(target);
          $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
          }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          });
        }
    });

    $('.side-nav-wrap a').on('itemActivated', function(){
        $('.side-nav-wrap a').removeClass('active');
        $(this).addClass('active');
        var offTop =  $(this).closest('li').position().top;
        $('.side-nav-wrap .bar').css({marginTop: offTop});
    });
    

});


function initFloatingSidebars() {

    if ($('.side-nav-wrap').length <= 0) return;
    var offset = $('.side-nav-wrap').offset();
    var topPadding = 30;
}

if ($('.page-history').length == 0) {
  function onScroll(event) {
      var scrollPos = $(document).scrollTop();
      $('.side-nav-wrap a').each(function() {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
              $('.side-nav-wrap ul li a').removeClass("active");
              currLink.trigger('itemActivated');
          }
      });
  }
}

// scrollify init

if (screen.width > 1024) {

    if ($('.page-scroll').length > 0) {
      var sidebar = $('.side-nav-wrap');
    
      $.scrollify({
        section: ".scroll-section",
        setHeights: false,
        scrollSpeed: 1000,
        interstitialSection: '.page-head--fullsize, .footer, .page-head',
        updateHash: false,
        easing: "easeOutExpo",
        after: function(index) {
          if (index == $('.scroll-section').length && $('.page-history').length == 0) {
            sidebar.addClass('fixed').css('top', '80px');
          }
          
          //sidebar added
          if ((index == 1) && ($('.page-history').length == 0)) {
            sidebar.addClass('fixed');
          }
    
        },
        before: function(index, sections) {
          if (index > $('.scroll-section').length && $('.page-history').length == 0) {
            var last = $(sections[index - 1]);
            var top = last.position().top;
            sidebar.removeClass('fixed').css('top', top + 80);
          } else if (index != $('.scroll-section').length && $('.page-history').length == 0) {
            sidebar.addClass('fixed').css('top', '80px');
          }
          if ((index == 0) && ($('.page-history').length == 0)) {
            sidebar.removeClass('fixed');
          }
        }
      });
    }

}
