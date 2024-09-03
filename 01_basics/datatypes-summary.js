//  ****** Primitive datatypes ********

// 7 types of datatypes : String , Number, Boolearn , null , undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId =  Symbol('123')

console.log(id === anotherId);
  
const bigNumber = 12345678999


// Reference (Non Primitive)

// Array , Objects , Function

const  heros = ["shaktion", "naagraj", "doga"];
let myObj = {
    name: "mansi",
    age: 22, 
}
  
function myFunction = function(){
    console.log("Hello world");
    
}
 console.log(typeof );
 


//  ********* The typeof Operator ********
   
   /*
The production UnaryExpressino : typeof UnaryExpression is evaluated as follows:

1. Let val be the  result of evaluationg UnaryExpression.
2. If Type(val) is Reference, then
   a. If IsUnresolvableReference(val) is true, return  "undefined".
   b. Let val be GetValue(val).
3. Return a String determined by Type(val) according to Table 20.

 Type of val                   Result
 Undefined         "undefined"
 Null              "object"
 Boolean           "boolean"
 Number            "number"
 String            "number"
 Object (native and does not implement [[Call]])         "object"
 Object (native or host and does implement [[Call]])     "function"
 Object (host and does not implement [[Call]])           "Implementation-defined except may not be " undefined ", "boolean ", "number", or "string".  
   */




