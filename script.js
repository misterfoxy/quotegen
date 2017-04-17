$(document).ready(function(){

  // array of random quotes
  var quotes = ["Don't cry because it's over, smile because it happened. - Dr. Seuss",
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Always forgive your enemies; nothing annoys them so much. - Oscar Wilde",
  "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
  "The fool doth think he is wise, but the wise man knows himself to be a fool. - William Shakespeare",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "Glory is fleeting, but obscurity is forever.  - Napolean Bonaparte",
  "Everybody pities the weak; jealousy you have to earn. - Arnold Schwarzenegger",
  "The greatest weapon against stress is our ability to choose one thought over another. - William James",
  "Small opportunities are often the beginning of great enterprises. - Demosthenes",
  "There is no greater agony than bearing an untold story inside you. - Maya Angelou",
  "Only those who dare to fail greatly can ever achieve greatly. -Robert Kennedy",
  "The greatest accomplishment is not in never falling, but in rising again after you fall. - Vince Lombardi",
  "Life is either a great adventure or nothing. - Helen Keller",
  "Great thoughts speak only to the thoughtful mind, but great actions speak to all mankind. - Theodore Roosevelt",
  "Great spirits have always encountered violent opposition from mediocre minds. - Albert Einstein",
  "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it. - Maurice Switzer",
  "For success, attitude is equally as important as ability. - anonymous",
  "Either you run the day, or the day runs you. - Jim Rohn",
  "To avoid criticism, say nothing, do nothing, be nothing. - Fred Shero",
  "Everything in moderation, including moderation. -Oscar Wilde",
  "Worry is like a rocking chair, it will give you something to do, but it won’t get you anywhere. - Vance Havner",
  "The trouble with eating Italian food is that five or six days later, you’re hungry again. - George Miller",
  "Always borrow money from a pessimist. He won’t expect it back. - Oscar Wilde",
  "Courage is contagious. When a brave man takes a stand, the spines of others are stiffened. - Billy Graham"];

    // array of various background colors
    var backgroundColors = ['#6495ED', '#FF7F50', '#00CED1', '#00BFFF',
    '#FFD700', '#CD5C5C', '#F0E68C', '#ADD8E6', '#E0FFFF', '#90EE90',
    '#20B2AA', '#87CEFA', '#B0C4DE','#FFA500','#BC8F8F','#2E8B57',
    '#FFF5EE','#C0C0C0'];

    // sets variable rand to random quote from array
    var rand = quotes[Math.floor(Math.random() * quotes.length)];
    var index;

    //upon load, sets blockquote to random quote
    $("blockquote").text(rand);

    //upon button click this function will execute
    $("#textchange").on("click", function (){
      //set index variable to random background color
      index = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

      //change body background color to random color with index variable
      $("body").css("background-color", index);

      //change blockquote to random quote
      $("blockquote").text(quotes[Math.floor(Math.random() * quotes.length)]);
  });

  $(".tweet").on("click",function(){
    $(".tweet a").attr("href", "https://twitter.com/intent/tweet?text="+encodeURIComponent(rand));
  });
});
