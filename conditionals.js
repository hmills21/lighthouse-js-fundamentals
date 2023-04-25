/* example 1
const raining = true;
const cold = false;
if (raining) {
  console.log("Dont forget your umbrella!");
}
if (cold) {
  console.log("Make sure you pick out a scarf!");
}
console.log("Now you're ready to go outside!");
*/

/* const temperature = 12;
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves wont cut it!");
} else {
  console.log("Now you're ready to go outside!");
} */

const whichSchool = function (age) {
 if (age < 13) {
  console.log("Elementary School");
} else if (age >= 13 && age <= 18) {
  console.log("Secondary school");
} else {
  console.log("Lighthouse Labs");
} 
}

whichSchool(18);
