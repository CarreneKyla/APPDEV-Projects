const hex1 = ["Existence precedes essence.", 
"Hell is other people.", 
"Freedom is what you do with what's been done to you.", 
"Life has no meaning the moment you lose the illusion of being eternal", 
"We are our choices."]

const btn = document.getElementById("btn")

const quote = document.querySelector(".quote")

btn.addEventListener("click", () => {
    let hexQuote = hex1[getRandomNumber()]

    quote.textContent =hexQuote

    document.body.style.backgroundColor = hexQuote
})
getRandomNumber = () => {
    return Math.floor(Math.random () * hex1.length)
}