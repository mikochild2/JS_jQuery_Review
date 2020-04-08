$('#content').css({"background-color": "#f7f7f7", "width": "500px", "height": "300px", "border": "2px solid #000", "padding": "20px 10px 20px 0px"});

//mouseover
$('#content').mouseover(function() {
    $('#m-over').append("<p>OVER</p>");
    $('p').prev().remove();
})

//mouseout
$('#content').mouseout(function() {
    $('#m-over').append("<p>OUT</p>");
    $('p').prev().remove();
})


//Over/Out CSS
$('#m-over').css({"font-size": "60pt", "font-weight": "700", "text-align": "center"});