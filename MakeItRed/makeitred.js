$("p").click(function() {
    $(this).css("color", "red");
    $(this).prev().css("color", "black");
    $(this).next().css("color", "black");
})