let mother = prompt("What is your mothers first name?")
let street = prompt("What street did you grow up on?")
let colour = prompt("What was your favourite colour as a child?")
let age = prompt("How old are you")
let number = prompt("Pick a number between 1 and 10")
let married = Math.round (age / number)
let children = (age % number)
let hair = ( age - number)
// learned math.round from https://pawelgrzybek.com/rounding-and-truncating-numbers-in-javascript/
// learned % remainder from https://www.w3schools.com/js/js_arithmetic.asp
alert (`In ${number} years you will meet your best friend named ${mother} ${street}.
You will get married in ${married} Years and have ${children} children.
In ${hair} years you will dye your hair ${colour}.`)