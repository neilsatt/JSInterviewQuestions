// Expression = a section in code that produces a value
let total = 5 + 2;

/*
 False values in JavaScript:
  undefined, null, 0, "", NaN, false
*/

// null and undefined both mean an abscence of a value
// undefined = a variable has been declared but has not yet been assigned a value
 let x; // x is undefined at this point
 x = 50;

 // you can set it back to not being defined
 let x = undefined;

 // null = an assignment value. It can be assigned to a variable as a representation of no value

// Maps = another way to represent a list of key-value pairs
// creates a new array with the results of calling a provided function on every element in the calling array
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2); // 2, 8, 18, 32

// Sets = an object that lets you store unique values of any type, whether primitive values or object references.
const set1 = new Set([1, 2, 3, 4, 5]);
set1.add(6);
console.log(set1);
console.log(set1.has(1)); // true

// Classes = blueprints to generate objects that share same behavior and characteristics
class Account {
  constructor(id){
    this.id = id;
    this.balance = 0;
  }

  deposit = (amount) => {
    this.balance = this.balance + amount;
  }

  printBalance = () => {
    console.log("Balance is: " + this.balance);
  }

}

const firstAccount = new Account('My Account');
firstAccount.deposit(100);
firstAccount.printBalance();
