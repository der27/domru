$(document).ready(function() {
    var heightWin = $(window).height(),
		countdown = $('.countdown'),
		timer;

	function startCountdown() {
	    var startFrom = 2;

	    countdown.text(startFrom + "...");
	    timer = setInterval(function() {
	        countdown.text(--startFrom + "...");
	        if (startFrom <= 1) {
	            clearInterval(timer);
	        }
	    }, 1000);
	}

	function setHeight(elem) {
		elem.outerHeight(heightWin);
	}

	setHeight($('.container, .parallax-rose'));

	$('#parallax-rose').parallax();

	setTimeout(function() {
    	$('.nature-bg').height($('.mask').height());
	    $('.nature-bg').fadeIn(2000);
	}, 500);

	$('.slide').each(function() {
    	if ($(this).outerHeight() > heightWin) {
    		$(this).offset({top: 10});
    	} else {
    		$(this).offset({top: (heightWin - $(this).outerHeight())/2});
    	}
    });

    setTimeout(function() {
    	$('.slide-1').fadeIn(1500, function() {
    		setTimeout(function () {
			    $('.slide-1 .rotate-wrap').addClass('rotate');
			}, 100);
    	});
	}, 300);

    $('.btn-start').on('click', function() {
		$('.slide-1').fadeOut(800, function() {
			setTimeout(function() {
			    $('.container').animate({left: '-32%'}, 1000);
			    setTimeout(function () {
				    $('.slide-2, .loader').fadeIn(800, function() {
				    	setTimeout(startCountdown, 100);
				    	setTimeout(function () {
						    $('.container, .slide-2, .loader').fadeOut(1500);
						}, 1000);
				    });
				}, 800);
			}, 500);
		});

		setTimeout(function() {
		    $('.slide-3').fadeIn(1500, function() {
		    	document.getElementById('video').play();
		    	setTimeout(function() {
				    $('.slide-4').fadeIn(1500, function() {
			    		setTimeout(function () {
						    $('.slide-4 .rotate-wrap').addClass('rotate');
						}, 100);
				    });
				}, 2000);
		    });
		}, 2500);
    });

});

$(window).resize(function() {
	var heightWin = $(window).height();

	function setHeight(elem) {
		elem.outerHeight(heightWin);
	}

	setHeight($('.container, .parallax-rose'));

	$('.slide').each(function() {
    	if ($(this).outerHeight() > heightWin) {
    		$(this).offset({top: 10});
    	} else {
    		$(this).offset({top: (heightWin - $(this).outerHeight())/2});
    	}
    });

    setTimeout(function() {
    	$('.nature-bg').height($('.mask').height());
	    $('.nature-bg').fadeIn(2000);
	}, 500);
});
