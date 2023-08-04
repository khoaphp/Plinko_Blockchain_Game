$(document).ready(function(){
    $("#tabs-1").css("background-color", "#333231");
    $("#tabs-2-content").fadeOut(0);
    $("#tabs-1").click(function(){
        $("#tabs-2-content").fadeOut(0);
        $("#tabs-1-content").fadeIn(0);
        $("#tabs-1").css("background-color", "#333231");
        $("#tabs-2").css("background-color", "black");
    });
    $("#tabs-2").click(function(){
        $("#tabs-1-content").fadeOut(0);
        $("#tabs-2-content").fadeIn(0);
        $("#tabs-2").css("background-color", "#333231");
        $("#tabs-1").css("background-color", "black");
    });

});