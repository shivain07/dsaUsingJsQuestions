

/**
 * @functions are block of code that can be reused
 * 
 * @funcVSmethod Functions that are part of objects are called methods
 * 
 * function myFunction() {
  alert('hello');
    }
   myFunction();
// calls the function once
@Note : This form of creating a function is also known as function declaration. It is always hoisted, so you can call function above function definition and it will work fine.



function() {
  alert('hello');
//   This is called an anonymous function,
}
 or
 const funcByECMAway=()=>{
    // this is arrow function
 }
This is called an anonymous function, because it has no name. You'll often see anonymous functions when a function expects to receive another function as a parameter. In this case the function parameter is often passed as an anonymous function.

@Note This form of creating a function is also known as function expression. Unlike function declaration, function expressions are not hoisted.


@closures can contain multiple scopes; they recursively contain the scope of the functions containing it. This is called @scope_chaining


@EX -->

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)
Copy to Clipboard
In this example, C accesses B's y and A's x.

This can be done because:

B forms a closure including A (i.e., B can access A's arguments and variables).
C forms a closure including B.
Because C's closure includes B and B's closure includes A, then C's closure also includes A. This means C can access both B and A's arguments and variables. In other words, C chains the scopes of B and A, in that order.
The reverse, however, is not true. A cannot access C, because A cannot access any argument or variable of B, which C is a variable of. Thus, C remains private to only B.


@arguments arrayLike thing in js to get all the arguments passed on to a function 
function myConcat(separator) {
  let result = ''; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

console.log(myConcat("+","jack","mary"))


@rest operater --> ...args
function multiply(multiplier, ...theArgs) {
    console.log("m->",multiplier ,theArgs)
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]


 */