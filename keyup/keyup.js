$('input').keyup(function() {
    alert($('input').val());
    text = $('input').val();
    $('div').append(text);
});