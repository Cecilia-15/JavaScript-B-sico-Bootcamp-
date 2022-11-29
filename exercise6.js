//Ejercicio 31 
//Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.

const someAdjective = " Hello world";
let myStr = "Learning to code is ";

myStr += someAdjective;

//Ejercicio 32
//Use the .length property to set lastNameLength to the number of characters in lastName.

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;


//Ejercicio 33
//Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.

// Setup
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";

firstLetterOfLastName = lastName1[0]; 


//Ejercicio 34
// Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.

// Setup
let myStr1 = "Jello World";

myStr1 = "Hello World";


//Ejercicio 35
//Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

// Setup
const lastName2 = "Lovelace";

const thirdLetterOfLastName = lastName2[2];

//Ejercicio 36
//Use bracket notation to find the last character in the lastName variable.

// Setup
const lastName3 = "Lovelace";

const lastLetterOfLastName = lastName3[lastName3.length - 1];


//Ejercicio 37
//Use bracket notation to find the second-to-last character in the lastName string.

// Setup
const lastName4 = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName4[lastName4.length - 2];


//Ejercicio 38
//You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The " + myNoun + " is a " + myAdjective + " and he " + myVerb + " very " +  myAdverb;


//Ejercicio 39
//Modify the new array myArray so that it contains both a string and a number (in that order).

const myArray = ["hola", 10];


//Ejercicio 40
//Create a nested array called myArray.

const myArray1 = [["Hello", 10], ["World", 20]];