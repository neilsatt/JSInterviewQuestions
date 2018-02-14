/*

  The global and function scope only exists when using the var keyword
  The var keyword is function scoped

  const and let are block scoped (whenever there is a block of code .. loops, if statements, etc.)
    they are both still aware of global and function scope,
  The variable declaration in a block scope, is only hoisted to the top of that block.

   var variables are initially undefined
   let and const are not initialized, so they can't be accessed until they are declared

*/

function getTotal() {
  console.log(multiplier); // undefined
  console.log(total); // error, total not defined


  let total = 0; // block scoped, hoisted to top of getTotal function

  for(var i =0; i<10; i++){
    let valueToAdd = i; // block scoped, hoisted to top of for loop
    var multiplier = 2; // function scoped, hoisted to top of getTotal function
    total += valueToAdd * multiplier;
  }
  return total;
}

getTotal();

// Hoisting definition = Variables and functions are hoisted to the top of the
// scope that they are declared in (block, function, or global)
