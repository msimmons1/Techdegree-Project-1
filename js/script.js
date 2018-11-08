/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//  Array of 7 quote objects that contain the following properties: quote, source, and citation.
let quotes = [
  {
    quote : "Do. Or do not. There is no try.",
    source : "Yoda",
    citation : "Star Wars: The Empire Strikes Back",
  },
  {
    quote : "\"That would never work in the real world.\" You hear it all the time when you tell people about a fresh idea...The real world isn't a place, it's an excuse. It's a justification for not trying. It has nothing to do with you.",
    source : "Jason Fried & David Heinemeir Hansson",
    citation : "Rework"
  },
  {
    quote : "'Love the Lord your God with all your heart and with all your soul and with all your mind.' This is the first and greatest commandment. And the second is like it: 'Love your neighbor as yourself.'",
    source : "Jesus",
    citation : "Matthew 22:37-39"
  },
  {
    quote : "Use it or lose it.",
    source : "Unknown author"
  },
  {
    quote : "Our greatest fear should not be of failure but of succeeding at things in life that don't really matter.",
    source : "Francis Chan",
    citation : "Crazy Love: Overwhelmed by a Relentless God"
  },
  {
    quote : "There are two wolves who are always fighting. One is darkness and despair. The other is light and hope. Which wolf wins? The one you feed.",
    source : "Casey Newton",
    citation : "Tomorrowland"
  },
  {
    quote : "I guess it comes down to a simple choice really. Get busy living, or get busy dying.",
    source : "Andy Dufresne",
    citation : "Shawshank Redemption"
  },
];

/***
  Function to create a random number and then use that random number to return an object from a specified array.
  Will be used to return random quotes from the array above.
***/
function getRandomQuote (array) {
  let randNum = Math.floor(Math.random () * 7);
  return array[randNum];
};

/***
 This function calls the getRandomQuote function above to return a random quote object with it's properties.
 Then, a conditional statement is used to determine which properties to print to the html file since not every quote has a citation.
 The function then prints a message to the html file that contains the quote and other properites.
***/
function printQuote () {
  let randQuote = getRandomQuote (quotes);
  let stringOfQuoteProperties = "";
  if (randQuote.citation != undefined) {
    stringOfQuoteProperties += '<p class="quote">' + randQuote.quote + '</p><p class="source">' + randQuote.source + '<span class="citation">' + randQuote.citation + '</span> </p>';
    } else {
    stringOfQuoteProperties += '<p class="quote">' + randQuote.quote + '</p> <p class="source">' + randQuote.source + '</p>';
  }
  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
};

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
