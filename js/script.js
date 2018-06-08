"use strict";
// get a random number between 0 and the length of the quotes
// return a random quote
const getRandomQuote = () => {
    let max = quotes.length;
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let randomNum = getRandomInt(max);
    return quotes[randomNum];
};

const randomColor = () => {
    let color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return color;
};

// new quote is generated
// create the html with the new quote data
// change the html of the page by modifying the innerHtml of the quote-box
const printQuote = () => {
    const newQuote = getRandomQuote();
    let quoteHtml = `<p class="quote">${newQuote.quote}</p>`;
    quoteHtml += `<p class="source">${newQuote.source}`;
    if(newQuote.citation) {
        quoteHtml += `<span class="citation">${newQuote.citation}</span>`;
    }
    if(newQuote.year){
        quoteHtml += `<span class="citation">${newQuote.year}</span>`;
    }
    if(newQuote.tags){
        let tags = newQuote.tags;
        tags.forEach(function(tag) {
            quoteHtml += `<p class="tags">${tag}</p>`;
        });

    }
    quoteHtml += `</p>`;
    document.getElementById('quote-box').innerHTML = quoteHtml;
    document.body.style.backgroundColor = randomColor();


};
setInterval(printQuote, 3000);

let printQuoteClearInterval = () => {
    printQuote();
    clearInterval(printQuote);
};

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuoteClearInterval, false);



