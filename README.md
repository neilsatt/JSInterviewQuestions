# JavaScript InterviewQuestions

## Convert a string containing numbers, into numbers. Then print them out in the console.
```
s = "1,2,3,4,5,6";
var myArray = s.split(",");

for(var i=0;i<=myArray.length-1;i++) {
  console.log(myArray[i]);
}

```