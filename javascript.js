$(document).ready(function() {
  if (document.cookie.indexOf("PopupHome=true") == -1) {
    document.cookie = "PopupHome=true; max-age=3600"; // 3600: 1 hour
    $('#popup-home').modal('show');
  }
});

$(document).ready(function() {
    var url_video = $('[nh-video="start"]').data('src');
	$('[nh-video="start"]').on( "click", function() {
		$('[nh-video="video"]').addClass('wrp-video-banner');
	    $('[nh-video="video"]').html('<video id="entire-video" autoplay loop muted><source src="'+ url_video +'" type="video/mp4"></video>');
		$(this).remove();
	});

	$('[nh-video="video"]').on( "click", function(e) {
	    $(this).toggleClass('active');
	    if($(this).hasClass('active')){   
	        $('#entire-video').trigger('pause');
	    } else {
	        $('#entire-video').trigger('play');
	    }
	});
});


// Fix header
$(function() {
    var header = $("header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 20) {
            header.addClass("stick");
            $('.sticky-top').addClass("fixed");
        } else {
            header.removeClass("stick");
            $('.sticky-top').removeClass("fixed");
        }
    });
});

// Popup Home
// $(window).on('load', function() {
//     setTimeout( function() {
//         $('#popup-home').modal('show');
//     }, 1000);
// });

// Fix menu products related
$(".menu-item__custom").hover(
    function() {
        $(".cp-related").addClass("show");
        $(".header-main").addClass("header-custom");
    }, function() {
        $(".cp-related").removeClass("show");
        $(".header-main").removeClass("header-custom");
    }
);

$(".cp-related").hover(
    function() {
        $(".cp-related").addClass("show");
        $(".header-main").addClass("header-custom");
    }, function() {
        $(".cp-related").removeClass("show");
        $(".header-main").removeClass("header-custom");
    }
);

$(window).on('load', function() {
    $('.cp-related__item:first-child').addClass('show');
});

$(".cp-related__item").hover(
    function() {
        $('.cp-related__item:first-child').removeClass('show');
        $(this).addClass("show");
    }, function() {
        $('.cp-related__item:first-child').addClass('show');
        $(this).removeClass("show");
    }
);
