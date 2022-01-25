/*console.log("Supercalifragilisticexpialidocious".length);
console.log(20);
console.log(typeof 20);
console.log(100n);
console.log(typeof 100n);*/
//day 1
/*let name = "Fedlu";

console.log(name)
let favouriteFood = "Thie";
console.log(favouriteFood)

//day 2
//Assign STRING VALUES ONLY to all of the following variables.
// Assign an adjective
/*let adj1 = "little";
console.log(adj1)
// Assign an adjective
let adj2 = "more";
console.log(adj2)
// Assign an adjective
let adj3 = "much";
console.log(adj3)
// Assign an adjective
let adj4 = "better";
console.log(adj4)
// Assign an adjective
let adj5 = "small";
console.log(adj5)
// Assign an adjective
let adj6 = "very";
console.log(adj6)
// Assign an adverb
let adverb = "slowly";
console.log(adverb)
// Assign a color
let color = "red";
console.log(color)
// Assign a noun
let noun1 = " Dog" ;
console.log(noun1)
// Assign a noun
let noun2 ="house";
console.log(noun2)
// Assign a noun
let noun3 = "Plant";
console.log(noun3)
// Assign a noun
let noun4 = "Earth";
console.log(noun4)
// Assign a noun
let noun5 ="Road";
console.log(noun5)
// Assign a noun
let noun6 = "Ocean";
console.org(noun6)
// Assign a number
let num = "23" ;
console.log(num)
// Assign a plural noun
let pnoun1 = "me";
console.log(pnoun1)

// Open your console to see the results!
// SPOILER ALERT: KEEP SCROLLING TO VIEW THE REST OF THE CODE

//day 3 daily challenge 

// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable*/

/*const userFirstName = prompt("Please enter your first name");
// Reverse your user’s name
// Convert to an array
const nameArray = userFirstName.split('');
// reverse the array
const reversedArray = nameArray.reverse();
// Join array
const reversedUserName = reversedArray.join('');
// alert the reversed string
alert(reversedUserName);

// Challenge 2
// Prompt for a number value (provide a default of 10)
const num1 = prompt("Enter a number", 10); // second value 10 adds a default for the input
// Prompt for a second number value (provide a default of 10)
const num2 = prompt("Enter another number", 10);
// Convert the prompted values into integers using parseInt()
const addedValues = parseInt(num1) + parseInt(num2);
// Add the numbers together and alert the user with the result
alert(addedValues);*/

//Take home day 3

// Store their input to a variable
 /*const userFirstName = prompt("what is  your first name ?")
 const userLastName = prompt("what is  your last name ? ")
 console.log(userFirstName)
 alert(userLastName)*/



// bonnus 
/*const userBday = prompt("what is your birthday ?" )
window.confirm(userBday)  

/*const userFirstName = prompt("Please enter your first name")
// Reverse your user’s name
// Convert to an array
const nameArray = userFirstName.split('');
// reverse the array
const reversedArray = nameArray.reverse();
// Join array
const reversedUserName = reversedArray.join('');
// alert the reversed string
alert(reversedUserName);*/
/*function switchStatements() {
    const num1 = prompt("Please enter a number between 1 and 10");
switch (num1) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
        alert(parseInt(num1));
        break;
    default:
        alert("You didn't enter a number between 1 and 10");
        
}
}
*/
//alert("This is an alert message box.");  // display a string  message

		//alert('This is a numer: ' + 100); // display result of a concatenation

		//alert(100); // display number

		//alert(Date()); // display current date*/



 // ------------ DAILY CHALLENGE ------------
// day 4 daily challenge 
// Prompt the user for two different numbers  
let number1 = prompt("give me a number between 1 to 10");
let number2 = prompt("give me a number between 1 to 10")
console.log(typeof number1, typeof number2);
let number1Parse = parseInt(number1);
let number2Parse = parseInt(number2);
console.log(typeof number1Parse, typeof number2Parse)
 if (number1Parse > number2Parse){
     console.log(number1Parse);
    } else if (number1Parse === number2Parse){
console.log("checked ") 
}else {
    console.log(nummber2Parse );
}  
 alert(number1Parse + number2Parse);
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number
