// Single line comment

/* Multiple 
lines
of 
comments */

const myFirstVariable = 'Secret Message';
const firstNumber = 3;
const secondNumber = 9;

/* if you want to change the numbers in future, use LET */

console.log(myFirstVariable);
alert('Hello World!');
document.write('<p>' + myFirstVariable + '</p>');

/* <p> + needed only when you have a variable. if you had <p>myFirstVariable</p>
it would show as myFirstVariable as text, rather than 'Secret Message'. */

document.write('<p>Negation: ' + (-firstNumber) + '</p>');
document.write('<p>Addition: ' + (firstNumber + secondNumber) + '</p>');

/* you can have the variable in brackets or not! */


const firstName = 'Paco';
const lastName = 'Rabanne';
const fullName = firstName + ' ' + lastName;

document.write('<p>' + (firstName + ' ' + lastName) + '</p>');
document.write('<p>' + fullName + '</p>');

/* there are multiple ways to write this */


const bill = 350.00;
const tip = ((bill * 20) / 100);
const total = (bill + tip).toFixed(2);

/* toFixed will fix it to the number of decimal places in the brackets */

document.write('<p>Your total bill (£' + bill + '), with tip (£' + tip + '), is £' + total + '</p>');