/*

  Terminology

  variable = represent a storage unit/place in the computer memory

  expression = a set of literals, variables, operators, and/or expressions that evaluates to a single value

  operator = assign values, compare values, perform arithmetic operations, etc.

  unary = single operation such as !

  binary = common operators such as, +, -, *, /, etc.

  ternary = operates on 3 values

  Object = a special variable in memory that represents a list of key-value pairs

  function = a set of statements that perform a task or calculate a value
*/

let car = {
  wheels: 4,
  windows: 4,
  wipers: 2
};

/*  Object
   you can use dot or bracket notation to access or changes values, but dot notation is preferred.
*/
car.wheels;
car['wheels'];

// Function definition
function add (num1, num2){
  let result = num1 + num2;
  return result;
}
