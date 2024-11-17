/*
===========================================================================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2018 - Farzin Ghanbari :)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
===========================================================================
*/

$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.top-scroller').fadeIn();
    } else {
        $('.top-scroller').fadeOut();
    }
});

//Click event to scroll to top
$('.top-scroller').click(function () {
    $('html, body').animate({scrollTop: 0}, 1000);
    return false;
});
