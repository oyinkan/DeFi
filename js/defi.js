/* code for anchor links scrolling */

$(".nav-link").on('click', function(event) {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function(){
           
    	window.location.hash = hash;
	});
});


$("#seemore").click(function() {
    var elem = $("#seemore").text();
    if (elem == "SEE MORE") {
        $("#seemore").text("SEE LESS");
        $(".another-summit-timetable").slideDown();
    } else {
        $("#seemore").text("SEE MORE");
        $(".another-summit-timetable").slideUp();
    }
});

$("footer .d-flex a").on('click', function(event) {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function(){
           
    	window.location.hash = hash;
	});
});
