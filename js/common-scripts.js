
(function($){
	$(function(){



        // Phone nav click function
        $('#phone-nav').click(function () {
            $("body").toggleClass("navShown");
        });


        //  venue-carousel function 
        if($('.slider-card-item-wrap').length){
            $('.slider-card-item-wrap').slick({
                dots: true,
                arrows:false,
                autoplay:false,
                autoplaySpeed:5000,
                infinite: true,
                navigation:false,
                speed: 300,
                slidesToShow:1,
                slidesToScroll: 1,
            });
        }
        // Header Customization 
        if($('.header-white').length){
            $('.main-header-section').addClass('main-header-white')
        }
        
        $('.scroll-section').click(function (e) {
            e.preventDefault();
            var target = $($(this).attr('href'));
            if (target.length) {
                var scrollTo = target.offset().top;
                $('body, html').animate({
                    scrollTop: scrollTo + 'px'
                }, 800);
            }
        });
        
        
        

	})// End ready function.

})(jQuery)

