//Problem 1 and 2
let number1 = 3;
let number2 = 5;

alert(`Sum of ${number1} and ${number2} is ${number1+number2}`)
alert(`Subtraction of ${number1} and ${number2} is ${number1-number2}`)
alert(`Multiplication of ${number1} and ${number2} is ${number1*number2}`)
alert(`Division of ${number1} and ${number2} is ${number1/number2}`)
alert(`Modulus of ${number1} and ${number2} is ${number1%number2}`)

//Problem 3
let num;
console.log(`Value after variable declaration: ${num}`);

num = 5 ;
console.log(`Inital Value ${num}`);
console.log(`Value After Increment ${++num}`);
let add = num +  7
console.log(`Value After Addition  ${add}`);
console.log(`Value After Decrement ${--add}`);
// console.log(`The remainder is : ${add%3}`);

//Problem 4
let movieTicket = parseInt(600);
let buyTickets = parseInt(prompt("Enter Number Of Ticket "));
console.log(`Total cost to buy ${buyTickets} tickets to a movie is ${movieTicket * buyTickets} PKR`)

//Problem 5 
let table = prompt(`Enter Table Which you want`);
console.log(`Table Of ${table}`)
console.log(` ${table} x 1 = ${table*1}`)
console.log(` ${table} x 2 = ${table*2}`)
console.log(` ${table} x 3 = ${table*3}`)
console.log(` ${table} x 4 = ${table*4}`)
console.log(` ${table} x 5 = ${table*5}`)
console.log(` ${table} x 6 = ${table*6}`)
console.log(` ${table} x 7 = ${table*7}`)
console.log(` ${table} x 8 = ${table*8}`)
console.log(` ${table} x 9 = ${table*9}`)
console.log(` ${table} x 10 =${table*10}`)

//Problem 6
let celsius = parseFloat(prompt('Enter Temperature in °C'))
let celsiusIntoFahrenheit = (celsius* 9/5) + 32;
console.log(`${celsius}°C is ${celsiusIntoFahrenheit}°F`)
let fahrenheit = parseFloat(prompt("Enter Temperature in °F"))
let fahrenheitIntoCelsius = (fahrenheit-32) *5/9;
console.log(`${fahrenheit}°F is ${fahrenheitIntoCelsius}°C`)

//Problem 7
let priceOfItem1 = 650;
let quantityOfItem1 = 3;
let priceOfItem2 = 100;
let quantityOfItem2 = 7;
let shippingCharges = 100;
let totalCost = (priceOfItem1*quantityOfItem1) + (priceOfItem2*quantityOfItem2) +shippingCharges ;

console.log(`Price of item 1 is ${priceOfItem1}`);
console.log(`Quantity of item 1 is ${quantityOfItem1}`);
console.log(`Price of item 2 is ${priceOfItem2}`);
console.log(`Quantity of item 2 is ${quantityOfItem2}`);
console.log(`Shipping Charges ${shippingCharges}`);
console.log(`Total Cost Of Your Order is ${totalCost}`);

//Problem 8
let totalMarks = prompt("Enter Total Marks");
let marksObtained = prompt("Enter Obtained Marks");
let percentage = (marksObtained/totalMarks)*100;
console.log(`
Total Marks: ${totalMarks}
Marks Obtained: ${marksObtained}
Percentage: ${percentage}`);

//Problem 9
let usd = prompt("Enter Us Dollar")
let ryl = prompt("Enter Saudi Riyals")
let usdToPkr = usd * 278 ;
let ryltoPkr = ryl * 78;
console.log(`Exchange Rates: ${usd} US Dollar = ${usdToPkr} Pakistani Rupees & ${ryl} Saudi Riyal = ${ryltoPkr} Pakistani Rupees`);

//Problem 10
// Requirments are not clear 

//Problem 11
let currentYear = ('Enter Current Year');
let yearOfBirth = ('Enter Year Of Birth');
let age = currentYear - yearOfBirth;
console.log(`Current Year ${currentYear}`);
console.log(`Birth Year ${yearOfBirth}`);
console.log(`Age ${age}`);

//Problem 12
const pi = 3.142;
let radius = (`Enter Radius:`)
console.log(`Radius Of a Circle ${radius}`)
let circumferenceOfACircle = 2*pi*radius; 
console.log(`Circumference Of Circle ${circumferenceOfACircle}`);
let area = pi*(radius**2);
console.log(`Area Of Circle ${area}`);

//Problem 13

let favouriteSnack = 'Chips';
let currentAge = 20 ;
let maxAge = 80;
let snackPerDay = 5;
// formula required