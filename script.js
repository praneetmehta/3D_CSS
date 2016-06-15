$(document).ready(function() {
    $("#flip1").focus(function() {
        $("#cube").removeClass().toggleClass("show-front");
    });
    $("#flip2").focus(function() {
        $("#cube").removeClass().toggleClass("show-back");
    });
    $("#flip3").focus(function() {
        $("#cube").removeClass().toggleClass("show-left");
    });
    $("#flip4").focus(function() {
        $("#cube").removeClass().toggleClass("show-right");
    });
    $("#flip5").focus(function() {
        $("#cube").removeClass().toggleClass("show-top");
    });
    $("#flip6").focus(function() {
        $("#cube").removeClass().toggleClass("show-bottom");
    });

});
