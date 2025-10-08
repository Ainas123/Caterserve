(function ($) {
    "use strict";
     // Spinner

     var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
     };
     spinner(0);

     //Initate the wowjs
     new WOW().init();

    //  Modal Video
    $(document).ready(function () {
       var $videoSrc;
       $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
       });
       console.log($videoSrc);

       $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
       })

       $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
       })
    });

    // Fact Counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Back to top
    $(window).scroll(function () {
        if($(this).scrollTop() > 300){
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);