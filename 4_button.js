/*
When you run this code and click on the buttons,
they all say 'This is button 6'
Why, and how do you fix it to show the correct
button number?

*/

// Version One 
/*
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}

createButtons();
*/
// Version Two 
/* 
  The for loop adds a new button on each iteration,
  with the correct number. 
  By the time you click the buttons, the for loop has
  already gone up to 5, stops, then i become 6.
  
  You can use and IIFE to solve this issue. It will preserve the value of i on each iteration in the scope of our IIFE. 
*/

/*
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;

     // IIFE
     (function(num) {
        button.onclick = function() {
        alert('This is button ' + num);
     };
     })(i);
     body.appendChild(button);
   }
}

// The value of i is being stored as our num parameter
// and is encapsulated within the scope of our IIFE 

createButtons();

*/

// Version Three 
/*
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     addClickFunctionality(button, i)
     body.appendChild(button);
   }
}

createButtons();

// move click functionality into another function
// add parameters
function addClickFunctionality(button, num){
    button.onclick = function() {
        alert('This is my button ' + num);
     };
}
*/

// Version Four - ES6 
// Use the let keyword 
function createButtons() {
   for (let i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}
    
createButtons();

/* 
    The let keyword is block scoped instead of 
    function scoped, like var. 
*/






