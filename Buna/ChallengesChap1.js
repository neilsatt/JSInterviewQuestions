/*
  Write a function that takes 3 arguments and multiplies them together
*/

function multiply(num1, num2, num3){
  value = num1 * num2 * num3;
  return value;
}

console.log(multiply(3,2,5));

/*
  Write a function that will calculate the area of a triangle given base and height measurements
  Parameter should be an object
  formula
    obj.base * obj.height/2;
*/

function calcArea(obj){
    return obj.base * obj.height/2;
}

calcArea({base:10, height: 20});
