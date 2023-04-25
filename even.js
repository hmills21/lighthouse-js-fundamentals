const isEven = function (num) {
  return num % 2 === 0
}
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven); 

// to simplify above example by not having to set our function return value
//to new variables before doing it. we can use them directly where we need them.

const isEven = function (num) {
  return num % 2 === 0;
}
console.log(isEven(10));
console.log(isEven(11));