$(document).ready(function() {
    $("#flip1").focus(function() {
        $("#box").removeClass().toggleClass("show-front");
    });
    $("#flip2").focus(function() {
        $("#box").removeClass().toggleClass("show-back");
    });
    $("#flip3").focus(function() {
        $("#box").removeClass().toggleClass("show-left");
    });
    $("#flip4").focus(function() {
        $("#box").removeClass().toggleClass("show-right");
    });
    $("#flip5").focus(function() {
        $("#box").removeClass().toggleClass("show-top");
    });
    $("#flip6").focus(function() {
        $("#box").removeClass().toggleClass("show-bottom");
    });

});
