/*---------------------------------------
       SCROLL TOP MENU           
  -----------------------------------------*/


var scrollWindow = function() {
	$(window).scroll(function(){
		var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.h-sticky'),
				navbar2 = $('.h-second');

//--------------------------------------------------------------
		// SCREEN < 767
		if($(window).width() <= 767){
			if (st > 150) {
				if ( !navbar.hasClass('scrolling') ) {
					navbar.addClass('scrolling');	
				}
			}

			if (st < 150) {
				if ( navbar.hasClass('scrolling') ) {
					navbar.removeClass('scrolling sleep');
				}
			}

			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}	
			}

			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
			}
		}		
		
//--------------------------------------------------------------
			// SCREEN > 768
			if($(window).width() >= 768){
				if ( st > 150 ) {
					if ( !navbar2.hasClass('scrolling') ) {
						navbar2.addClass('scrolling');	
					}
				}

				if (st < 150) {
					if ( navbar2.hasClass('scrolling') ) {
						navbar2.removeClass('scrolling sleep');
					}
				}

				if ( st > 350 ) {
					if ( !navbar2.hasClass('awake') ) {
						navbar2.addClass('awake');	
					}
				}
				
				if ( st < 350 ) {
					if ( navbar2.hasClass('awake') ) {
						navbar2.removeClass('awake');
						navbar2.addClass('sleep');
					}
				}	
			}
		
	});

};
scrollWindow();

// kondisi refresh, otomatis add class
//--------------------------------------------------------------
	// SCREEN < 767
	if($(window).width() <= 767){
		if($(this).scrollTop() > 350) {
			$(".h-sticky").addClass(' scrolling');
		}

		if ( $(this).scrollTop() > 350 ) {
			if ( !$(".h-sticky").hasClass('awake') ) {
				$(".h-sticky").addClass('awake');	
			}	
		}
	}

	// SCREEN > 768
	if($(window).width() >= 768){
		if($(this).scrollTop() > 350) {
			$(".h-second").addClass('scrolling');
		}

		if ( $(this).scrollTop() > 350 ) {
			if ( !$(".h-second").hasClass('awake') ) {
				$(".h-second").addClass('awake');	
			}	
		}
	}



// NAVIGATION MENU BAR
// $(document).ready(function(){
// 	$("a[href^='#']").on("click", function(e){
// 		e.preventDefault();

// 		var target = this.hash;
// 		var $target = $(target);

// 		$("html, body").stop().animate({
// 			"scrollTop": $target.offset().top
// 		}, 900, "swing", function(){
// 			window.location.hash = target;
// 		});
// 	});
// });




$('.trans-slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText:['<div class="owlnav-left"><span><i class="fa fa-angle-left"></i></span></div>','<div class="owlnav-right"><span><i class="fa fa-angle-right"></i></span></div>'],
    navBtn: false,
    margin: 20,
    autoWidth: false,
    responsiveClass: true,
    // autoplay: true,
    // autoplayTimeout: 1000,
    // autoplayHoverPause: true,
    responsive:{
        0: {
            items:1,
            loop:true,
            nav:true,
            dots: false
        },
        768: {
            items:2,
            loop:true,
            nav:true,
            dots: false
        },
        992: { // size display "lebih dari" atau ">"
            items: 3, // item display on screen
            loop: true,
            
            // navigation 
            nav: true, // display owl navigation
            dots: false // display owl dots navigation
        }
    }
});


$('.testi-slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText:['<div class="owlnav-left"><span><i class="fa fa-angle-left"></i></span></div>','<div class="owlnav-right"><span><i class="fa fa-angle-right"></i></span></div>'],
    navBtn: false,
    margin: 20,
    autoWidth: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0: {
            items:1,
            loop:true,
            nav:false,
            dots: true
        },
        768: {
            items:1,
            loop:true,
            nav:false,
            dots: true
        },
        992: { // size display "lebih dari" atau ">"
            items: 1, // item display on screen
            loop: true,
            
            // navigation 
            nav: false, // display owl navigation
            dots: true // display owl dots navigation
        }
    }
});

// counter 
// $('.jumlah-client').counterUp({
	// onUpdate: null,
	// onComplete: null,
 //    delay: 10,
 //    time: 1000
// });



$('.search-icon').click(function() {
	$('.form-nav').animate({
		    width: 'toggle'
	});
});



// $('.jumlah-client').countTo({
    // from: 50,
    // to: 2500,
    // speed: 1000,
    // refreshInterval: 50
    // onComplete: function(value) {
    //     console.debug(this);
    // }
// });





























