const colors =  ["green", "red", "rgba(133, 122, 200)",
"#f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
//Functions for changing the colors of the HTML fiule
btn.addEventListener("click", () =>{
    //Targetting the document body
    console.log(document.body) //not required
    //Getting a random number from getRandomNumber()
    const randomNumber = getRandomNumber()
    //Referncing the background color of the document body
    document.body.style.backgroundColor = colors
    [randomNumber]
    //Change the text for our span tag
    color.textContent = colors[randomNumber]
})
getRandomNumber = () => {
    return Math.floor(Math.random () * colors.length)
}