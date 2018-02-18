// Problem - triple add(10)(20)(30) // returns 60
// return a function, that returns another function, that returns the answer
// Use a nested function
function tripleAdd(num1){
  return function(num2) {
    return function(num3){
      return num1 + num2 + num3;
    }
  }
}

 tripleAdd(10)(20)(30) //

/*
 This is known as a curried function
 Translating one function that takes multiple arguments
 into a sequence of functions
 */

 // Same as:
 newTripleAdd(num1, num2, num3) {
   num1 + num2 + num3;
 }
