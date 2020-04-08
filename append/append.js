function newLink() {
$('body').append('<a id="link" href="#"');
$('#link').attr("href", "https://w3schools.com");
}

console.log(newLink());