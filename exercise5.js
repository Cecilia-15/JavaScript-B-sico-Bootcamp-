//Ejercicios 25 al 30

//Ejercicio 25 
//Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

//I am a "double quoted" string inside "double quotes".

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Ejercicio 26
//Change the provided string to a string with single quotes at the beginning and end and no escape characters.
//Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.

//const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';


//Ejercicio 27
//Assign the following three lines of text into the single variable myStr using escape sequences.

const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";


//Ejercicio 28
//Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.

const myStr4 = "This is the start." + " This is the end.";

//Ejercicio 29
//Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.

let myStr5 = "This is the first sentence.";
myStr5 += " This is the second sentence.";


//Ejercicio 30
//Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!

const myName = "Cecilia";
const myStr6 = "My name is " + myName + " and I am well!";