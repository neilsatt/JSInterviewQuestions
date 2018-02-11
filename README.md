# JavaScript InterviewQuestions

### Convert a string containing numbers, into numbers. Then print them out in the console.
```
s = "1,2,3,4,5,6";
var myArray = s.split(","); // remove the commas and add to an array

for(var i=0;i<=myArray.length-1;i++) {
  console.log(myArray[i]); // loop out the individual numbers
}

```


// s = "1,2,3,4,5,6";
// var myArray = s.split(","); // remove commas
// parseInt(myArray[0])
// console.log(typeof(myArray[0]));

s= "1";
console.log(typeof(s))
s2 = parseInt(s);
console.log(typeof(s2))

// for(var i=0;i<=myArray.length-1;i++) {
//   parseInt(myArray[i])
//   console.log(myArray[i]);
//   console.log(typeof(myArray[i]));
// }


https://stackoverflow.com/questions/4291447/convert-string-into-array-of-integers