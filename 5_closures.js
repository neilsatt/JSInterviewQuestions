/* 
  What is a Closure?
  
  An inner function that has access to the scope of an
  outer/enclosing function.
  
  A closure has access to variables in 3 separate scopes:
    - Variables in its own scope (inner function)
    - Variables in the scope of the outer function
    - Variables in the global scope 
    
  The closure also has access to:
    - Its own parameters
    - Parameters of the outer function(s)

*/


const globalVariable = 'global var';

function outerFunc(param1){
    const variable1 = 'var one';
    
    function innerFunc(param2){
        
        console.log('globalVariable: ', globalVariable);
        console.log('variable1: ', variable1);
        console.log('variable2: ', variable2);
        console.log('param1: ', param1);
        console.log('param2: ', param2);
    }
    
    innerFunc('param one');
    
}

outerFunc('param two');

// Closures are like IIFEs in that they protect 
// variables from being on the global scope 


