// Global Variable used to store the quotes  
// fetched from the API 
var data = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { text: "Money and success don’t change people; they merely amplify what is already there.", author: "Will Smith" },
    { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" }
];
let front = true;

// Getting the front and the back author boxes 
const authors = document.querySelectorAll(".author");

// Getting the front and the back texts 
const texts = document.querySelectorAll(".text");

// Getting the body 
const body = document.getElementById("body");

// Getting the buttons 
const button = document.querySelectorAll(".new-quote");

const blockFront = document.querySelector(".block__front");
const blockBack = document.querySelector(".block__back");

const authorFront = authors[0];
const authorBack = authors[1];

const textFront = texts[0];
const textBack = texts[1];

const buttonFront = button[0];
const buttonBack = button[1];

// An arrow function used to get a quote randomly 
const displayQuote = (quoteData) => { 
    let quote, author;

    if (quoteData) {
        quote = quoteData.text; 
        author = quoteData.author; 
    } else {
        // Generates a random number between 0  
        // and the length of the dataset 
        let index = Math.floor(Math.random() * data.length); 
        // Stores the quote present at the randomly generated index 
        quote = data[index].text; 
        // Stores the author of the respective quote 
        author = data[index].author; 
    }

    // Making the author anonymous if no author is present 
    if (!author) { 
        author = "Anonymous"
    } 

    // Replacing the current quote and the author with a new one 
    if (front) { 
        // Changing the front if back-side is displayed 
        textFront.innerHTML = quote; 
        authorFront.innerHTML = author; 
    } else { 
        // Changing the back if front-side is displayed 
        textBack.innerHTML = quote; 
        authorBack.innerHTML = author; 
    } 

    front = !front; 
} 

// Displaying the quote When the Webpage loads 
displayQuote();  

// Adding an onclick listener for the button 
function newQuote() { 
    // Rotating the Quote Box 
    blockBack.classList.toggle('rotateB'); 
    blockFront.classList.toggle('rotateF'); 

    // Displaying a new quote when the button is clicked 
    displayQuote(); 
}

// Function to search quote by author
function searchQuote() {
    const authorName = document.getElementById('searchInput').value.toLowerCase();
    const filteredQuotes = data.filter(quote => quote.author && quote.author.toLowerCase().includes(authorName));
    
    if (filteredQuotes.length > 0) {
        // Display the first matched quote
        displayQuote(filteredQuotes[0]);
    } else {
        alert('No quotes found for the given author.');
    }
}
