/* Navigation Scroll Animation */
$(document).ready(function() {
    $('.nav-container a').click(function(e) {

        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top
        }, 850);

        e.preventDefault();
    });

});