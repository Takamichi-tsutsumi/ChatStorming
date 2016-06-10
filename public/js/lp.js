$(function () {
    hsize = $(window).height();
    wsize = $(window).width();
    $("#contents").css("height", hsize + "px");
    $("#start").css("top", hsize /2 - 125 +"px");
    $("#start").css("left", wsize /2 - 300 +"px");
    $(".bar").hide();
    $(window).scroll(function () {
        var s = $(this).scrollTop();
        var m = hsize /2;
        if(s > m) {
            $(".bar").fadeIn('slow');
        } else if(s < m) {
            $(".bar").fadeOut('slow');
        }
    });
});
