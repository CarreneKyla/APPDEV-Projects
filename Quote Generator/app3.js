const quotes = [
    "To dwell is to garden the earth.",
    "Every man is born as many men and dies as a single one.",
    "We do not say that time is, but that it temporalizes itself.",
    "Being is the most self-evident and yet the most obscure concept.", 
    "The most thought-provoking thing in our thought-provoking time is that we are still not thinking.",
];

const btn = document.getElementById("btn");
const quote = document.querySelector(".quote");
let currentNumber = 0;

btn.addEventListener("click", () => {
   console.log(document.body)
   quote.textContent = quotes [currentNumber];
   currentNumber = (currentNumber + 1) % quotes.length
})
