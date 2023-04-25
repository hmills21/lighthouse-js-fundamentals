const sayHello = function () {
  console.log("Hello, world");
}
sayHello();

const sayHello = function (name) {
  console.log("Hello," name);
}
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

/* console.log vs return:

1. console.log :
const sayHelloToConsole = function (name) {
  console.log("Hello " + name);
}
sayHelloToConsole('John');

2. return:
const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');

the first function immediately outputs "Hello,John" to the console. the second
returns the string "Hello, John" to a variable (greeting) and nothing will get
output to the console.
 
   a console.log statement will result in some content being displayed in the console.
   a return statement will not output anything to the console. however, when a 
   function returns a value, we can still console.log it later::

   const returnSayHello = function (name) {
    return "Hello, " + name;
   }
   const greeting = returnSayHello('John');
   console.log(greeting);
   