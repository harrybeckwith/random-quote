// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// Every 7 seconds call the printQuote function
window.setInterval(printQuote, 7000);
//  Array of JavaScript objects to hold the data for quotes.
var quotes = [{
    quote: '"Imagination is more important than knowledge."',
    source: 'Albert Estien',
    citation: 'Brainy Quote',
    year: '1920',
    tag: '#Inspiration'
  }, {
    quote: '"The significant problems we have cannot be solved at the same level of thinking with which we created them."',
    source: 'Albert Estien',
    citation: 'Brainy Quote',
    year: '1920',
    tag: '#Science'
  }, {
    quote: '"Two things are infinite: the universe and human stupidity; and Im not sure about the universe."',
    source: 'Albert Estien',
    citation: 'Brainy Quote',
    year: '1920'
  }, {
    quote: '"It is fine to celebrate success but it is more important to heed the lessons of failure."',
    source: 'Bill Gates',
    citation: 'Google',
    year: '1990',
    tag: '#Business'
  }, {
    quote: '"By giving people the power to share, we are making the world more transparent."',
    source: 'Mark Zuckerberg',
    tag: '#Genius'
  },
  {
    quote: '"Music was important. Football was the easy part."',
    source: 'Zinedine Zidane',
    tag: '#Zizou'
  }

];
// Empty viewQuotes, used once quotes has been displayed once.
var viewedQuotes = [];
// getRandomQuote
function getRandomQuote() {
  // Selects a random quote object from the quotes array
  var randomQuote = Math.floor(Math.random() * quotes.length);
  // Splice - remove displayed quote
  var splicedQuote = quotes.splice(randomQuote, 1)[0];
  // Add splicedQuote to end of viewed quotes array
  viewedQuotes.push(splicedQuote);
  // Check whether quotes is empty
  if (quotes.length === 0) {
    // Reset quotes to full
    quotes = viewedQuotes;
    // Reset viewed quotes
    viewedQuotes = [];
  }
// Return spliced so it can be used.
  return splicedQuote;

}
// printQuote
function printQuote() {

  // Stores getRandomQuote function in quoteInfo
  var quoteInfo = getRandomQuote();
  // Format HTML for page
  // Quote
  var HTML = '<p class="quote">' + quoteInfo.quote + '</p>';
  // Source
  HTML += '<p class="source">' + quoteInfo.source;
  // If Tag exists display
  if (!quoteInfo.tag) {} else {
    HTML += '<span class="tag">  ' + quoteInfo.tag + '</span></p>';
  }
  // If Citation exists display
  if (!quoteInfo.citation) {} else {
    HTML += '<span class="citation">' + quoteInfo.citation + '</span> ';
  }
  // If year exists display
  if (!quoteInfo.year) {} else {
    HTML += '<span class="year">' + quoteInfo.year + '</span></p>';
  }
  // Display final html
  document.getElementById('quote-box').innerHTML = HTML;
  // Random Bg Color array
  var bg = ['#BEED80', '#59D999', '#31ADA1', '#51647A', '#453C5C'];
  // Change document body random background color each time a new quote is displayed.
  document.body.style.backgroundColor = bg[Math.floor(Math.random() * bg.length)];

}