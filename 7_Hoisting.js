/*
  Variable and function hoisting
  Variables and functions are hoisted to the top of the function scope
  in which they are declared (function or global scope).
  * JS Interpretor moves them to the top of the file
*/
// Variable hoisting
var color = 'blue';


//The interpretor moves the declaration to the top:
var color;

// Then it sets it to the correct value later in the file
color = 'blue'

// Function hoisting
var getProduct = function(num1, num2){
  return num1 * num2;
};

/* the function can't be called before it is declared, because only the
   function declaration is hoisted.

   When you declare a function with the var keyword, it is a function EXPRESSION

   When you declare a function WITHOUT the var keyword, it is a function declaration
*/
// FUNCTION EXPRESSION
function getProduct(num1, num2){
  return num1 * num2;
}

/* Hoisting differences for function expressions and declarations
Function declaration - the whole function and definition are hoisted to the top of the file
If you console log a function declaration above where it is defined, it works

This is an advantage to using function declarations

*/
