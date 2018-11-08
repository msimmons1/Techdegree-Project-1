/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/
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
    source : "Unknown"
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
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/
function getRandomQuote (array) {
  let randNum = Math.floor(Math.random () * 7);
  return quotes[randNum];
};

/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
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


// Remember to delete the comments that came with this file, and replace them with your own code comments.
