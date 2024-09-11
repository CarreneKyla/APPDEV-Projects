const hex = [0, 1, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
//#f15025 #AA01234 #ADF000 sample outputs
const btn = document.getElementById("btn")
//controls the contents of span class = color
const color = document.querySelector(".color")
//control the button events using event listener
btn.addEventListener("click", () => {
    let hexColor ='#'
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }
    //controls and changes the text of span class color
    color.textContent =hexColor
    //changes the background color to the hexColor value
    document.body.style.backgroundColor = hexColor
})
getRandomNumber = () => {
    return Math.floor(Math.random () * hex.length)
}