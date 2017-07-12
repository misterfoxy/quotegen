// array of various background colors
var backgroundColors = ['#6495ED', '#FF7F50', '#00CED1', '#00BFFF',
'#FFD700', '#CD5C5C', '#F0E68C', '#ADD8E6', '#E0FFFF', '#90EE90',
'#20B2AA', '#87CEFA', '#B0C4DE','#FFA500','#BC8F8F','#2E8B57',
'#FFF5EE','#C0C0C0'];
var index;
var quoteAuthor;
var quoteText;

$(document).ready(function(){


  
    $.getJSON("https://thesimpsonsquoteapi.glitch.me/quotes", function(a){
      console.log(a[0]);
      quoteText = a[0].quote;
      quoteAuthor = a[0].character;

      $('#quoteAuthor').text(quoteAuthor);
      $('#quoteText').text(quoteText);
    });



    //upon button click this function will execute
    $("#textchange").on("click", function (){
      //set index variable to random background color
      index = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

      //change body background color to random color with index variable
      $("body").css("background-color", index);

      //change blockquote to random quote
      $.getJSON("https://thesimpsonsquoteapi.glitch.me/quotes", function(a){
        quoteText = a[0].quote;
        quoteAuthor = a[0].character;

        $('#quoteAuthor').text(quoteAuthor);
        $('#quoteText').text(quoteText);
      });
  });

  $(".tweet").on("click",function(){
    $(".tweet a").attr("href", "https://twitter.com/intent/tweet?text="+encodeURIComponent(rand));
  });
});
