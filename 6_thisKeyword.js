// What is the 'this' keyword and how is it used? 
// This refers to whatever object it is directly inside of

var house = {
  price: 100000,
  squareFeet: 2000,
  owner: 'Taylor',
  getPricePerSquareFoot: function() {
    return house.price / house.squareFeet;
  }
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());

// You can update the house properties and use 'this' instead
// Since we are inside of the house object, this refers to the house object
this.price / this.squareFeet