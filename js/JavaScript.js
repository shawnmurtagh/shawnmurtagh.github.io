
<<<<<<< HEAD
$(document).ready(function(){
    

    //Set the title attribute of each .altTitle to equal the alt attribute (title = bootstrap tooltip)
    $(".altTitle").each(function (index) {
        var thisAltText = $(this).attr('alt');
        $(this).attr('title', thisAltText);
        $(this).attr('data-toggle', 'tooltip')
    });



    $('[data-toggle="tooltip"]').tooltip(); //enable tooltips

    prettyPrint(); //load prettyPrint for code display
});


=======
>>>>>>> 18d7fb968bf8716237a607a5cbff8c1d4cca5dd2
/*Change navbar transparency on scroll down*/
function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}