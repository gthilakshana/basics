// Se-03 - JavaScript Scopes

var isConditional = true;


//Global Scope




{
    //Block Scopes
    let a = 10;
    const b =20;
    var c = 30;
    // console.log("1::",a,b,c);
}
// console.log("2::",a,b,c);
// console.log("2::",c);



//Function Scopes
function myFunction(){
   let myVariable = 5000;
   return myVariable;
//    console.log("2::",myVariable);
}
// console.log("1::", myFunction());


//Conditional Scopes
if(isConditional === true){
  let message1 = "I'm block scope message";
  var message2 = "I'm redeclared var message";

//   console.log("1::",message1);
//   console.log("2::",message2);
}
// console.log("3::",message2);



let iF = 100;
//Automatic decleration
x = 200;
// console.log(typeof x);



// JavaScript Keywords
/*
break: Terminates the current loop or switch statement.
case: Specifies a block of code in a switch statement.
catch: Handles errors in try...catch blocks.
class: Declares a class (introduced in ES6).
const: Declares a read-only variable.
continue: Skips the current iteration in loops.
debugger: Invokes any available debugging functionality.
default: Specifies the default block in a switch statement.
delete: Removes a property from an object.
do: Used with while for do...while loops.
else: Specifies an alternative block of code in if...else statements.
export: Exports functions, objects, or primitives from a module.
extends: Creates a class that is a child of another class.
finally: Executes code after try...catch regardless of the outcome.
if: Executes a block of code based on a condition.
import: Imports functions, objects, or primitives from another module.
in: Checks if a property exists in an object.
instanceof: Tests whether an object is an instance of a specific constructor.
new: Creates an instance of an object.
return: Exits a function and optionally returns a value.
super: Refers to the parent class in class declarations.
switch: Executes different blocks of code based on conditions.
this: Refers to the current context object.
throw: Throws a custom error.
try: Defines a block of code to test for errors.
typeof: Returns a string indicating the type of a variable.
var: Declares a variable.
void: Discards the return value of an expression.
while: Creates a loop that runs as long as a condition is true.
with: Extends the scope chain for a statement (usage is discouraged).
yield: Pauses and resumes a generator function.
*/




function addNumbers(a,b){
    a = Number(a);
    b = Number(b);  
    return a+b;
}
// console.log("1::",addNumbers(10,20));
// console.log("2::",addNumbers("10","20"));

let bigNumber = 234353536378768594484746453434364646n;
let uniqueId = Symbol("123");

console.log("1::", typeof bigNumber);
console.log("2::", typeof uniqueId);

