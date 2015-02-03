// Initialize bootstrap carousel
$(document).ready(function(){
	$('.carousel').carousel();
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.nav-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutCirc');
        event.preventDefault();
    });
});