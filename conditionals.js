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

const temperature = 12;
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves wont cut it!");
} else {
  console.log("Now you're ready to go outside!");
}