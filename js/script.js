/*$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.loader');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});*/

$(document).ready(function() {
    var heightWin = $(window).height(),
		countdown = $('.countdown'),
		timer;

	function startCountdown() {
	    var startFrom = 3;

	    countdown.text(startFrom + "...");
	    timer = setInterval(function() {
	        countdown.text(--startFrom + "...");
	        if (startFrom <= 1) {
	            clearInterval(timer);
	        }
	    }, 1000);
	}

	/*if (Modernizr.touchevents) {
		$('.slide').each(function() {
			$(this).offset({top: 0});
			$(this).css('min-height', heightWin);
		});
	}*/

	$('.slide').each(function() {
    	if ($(this).outerHeight() > heightWin) {
    		$(this).offset({top: 10});
    	} else {
    		$(this).offset({top: (heightWin - $(this).outerHeight())/2});
    	}
    });

    //$('.slide-1').fadeIn(2000);

    setTimeout(function() {
	    $('.slide-start').fadeOut(500, function() {
	    	setTimeout(function() {
			    $('.slide-1').fadeIn(2000);
			}, 500);
	    });
	}, 500);

    $('.btn-start').on('click', function() {
    	$('.slide-1').fadeOut(800, function() {
    		setTimeout(function() {
			    $('.slide-2').fadeIn(1500, function() {
			    	setTimeout(startCountdown, 100);
			    	setTimeout(function () {
					    $('.slide-2__content').fadeOut(1500);
					}, 3000);
			    });
			}, 150);
    	});

    	setTimeout(function() {
		    $('.slide-2').fadeOut(1500, function() {
		    	setTimeout(function() {
				    $('.slide-4').fadeIn(1500);
				}, 1000);
		    });
		}, 9000);

    	setTimeout(function() {
		    $('.slide-3').fadeIn(1500, function() {
		    	document.getElementById('video').play();
		    });
		}, 4000);
		
    });
});

$(window).resize(function() {
	var heightWin = $(window).height();

	$('.slide').each(function() {
    	if ($(this).outerHeight() > heightWin) {
    		$(this).offset({top: 10});
    	} else {
    		$(this).offset({top: (heightWin - $(this).outerHeight())/2});
    	}
    });
});
