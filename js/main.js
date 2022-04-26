(function() {

    $(document).ready(function() {

        //background parallax code start
        var query = Modernizr.mq('(min-width: 992px)');
        if (!Modernizr.touchevents & query) {
            if($('.section-parallax').length) {
                $('.section-parallax').parallax("0%", 0.2, true);
            }
        }
        //background parallax code end

        //main menu scrolling code start
        var $body = $('body');
        var $navTop = $('#navbar-main');
        var offset = Math.floor($navTop.outerHeight());
        $('#navbar-main .navbar-nav a').not('.external-link, .dropdown-toggle').click(function(e){
            e.preventDefault();
            var href = $(this).attr('href');
            var target = Math.floor($(href).offset().top + 1);
            $('html, body').animate({
                scrollTop: target - offset
            }, 500);
        });
        //main menu scrolling code end

        //scrolling to the specific hash code start
        var hash = window.location.hash;
        if (hash) {
            if ($(hash).length > 0) {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - offset
                }, 500);
            }
        }
        //scrolling to the specific hash code end

    });
})();