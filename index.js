/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// GLOBAL VARIABLES
let btn = document.getElementById("calculate");
let inputEl = document.getElementById("number");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");
const meter = 3.281; // feet
const liter = 0.264; // gallon
const kilogram = 2.204; // pound

function length() {
    // when the user enters the value take that value and put text in
    // text will be: ${number value} meters = meter * feet 
    // text will be: ${number value} feet = number value / meter
    // place the text in textContent
    let number = inputEl.value;
    lengthEl.textContent = `${number} meters = ${ (number * meter).toFixed(3) } feet | ${number} feet = ${ (number / meter).toFixed(3) } meters`
}

function volume() {
    let number = inputEl.value;
    volumeEl.textContent = `${number} liters = ${ (number * liter).toFixed(3) } gallons | ${number} gallons = ${ (number / liter).toFixed(3) } liters`
}

function mass() {
    let number = inputEl.value;
    massEl.textContent = `${number} kilos = ${ (number * liter).toFixed(3) } pounds | ${number} pounds = ${ (number / liter).toFixed(3) } kilos`   
}

btn.addEventListener("click", conversion);

function conversion() {
    // call meter to foot and foot to meter function
    // call liters to gallons and gallons to liters function
    // call kilos to pounds function && pounds to kilos function
    length();
    volume();
    mass();
}
