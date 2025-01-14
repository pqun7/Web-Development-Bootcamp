$('h1').addClass("big-title")
$('h1').text("Hi");
$('a').attr("href", "https://www.youtube.com/")
console.log($('h1').attr("class"))

$(document).keypress((event) => {
    $('h1').text(event.key);
})