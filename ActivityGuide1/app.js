//This is the component for the first item
btn1 = document.getElementById("btn1")

//for displaying the information
btn1.addEventListener("click", () => {

//create and initialize our variables
let name = document.getElementById("name").value
let address = document.getElementById("address").value
let telephone = document.getElementById("telephone").value
let major = document.getElementById("major").value

//display message in a template string
let x = `Hello! ${name}, 
I see that you are from ${address}, 
and you are also pursuing ${major}, 
and you can be contacted using ${telephone}.`

document.getElementById("output1").innerHTML = x
})

btn2 = document.getElementById("btn2")

//for displaying the information
btn2.addEventListener("click", () => {

//create and initialize our variables
let sales = document.getElementById("sales").value
let typeCast = parseFloat(sales)
let compute = typeCast * 0.23

let x = `The profit that will be
made from the amount ${sales}% is ${compute}.`

document.getElementById("output2").innerHTML = x
})
let speed = 60;
let hour5 = 5 * speed;
let hour8 = 8 * speed;
let hour12 = 12 * speed;


let x = `• The distance the car will travel in 5 hours is ${hour5}. <br>
• The distance the car will travel in 8 hours is ${hour8}. <br>
• The distance the car will travel in 12 hours is ${hour12}.`

document.getElementById("output3").innerHTML = x
{
btn4 = document.getElementById("btn4")

btn4.addEventListener("click", () => {

let miles = document.getElementById("miles").value
let gas = document.getElementById("gas").value

let typeCast1 = parseFloat(miles)
let typeCast2= parseFloat(gas)
let MPG = typeCast1 / typeCast2


let x = `The number of miles driven is ${miles}  and the gallons of gas is ${gas}.The car’s miles per gallon is ${MPG} `

document.getElementById("output4").innerHTML = x
})
}
