/*
What is an IIFE
  Immediately Invoked Function Expression
  A function that is executed right after it is created
  Wrap it in parentheses, then add parentheses after


  The reason for using an IIFE:
    To preserve a private scope within your function
    Keeps you from overwriting a global variable
*/

(function doubleNumber(num){
  return num * 2;
})(10);
