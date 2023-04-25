/* while loops with repeating example:

const chorus = "Lets dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Untill the sun comes up!"); */

/* changed above example to show going back into code to change halfway through*/

const chorus = "Lets dance";
let repeat = 0;
while (repeat <10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++; /* this repeat is to show that the repeats start at 0 and will 
go up by 1 untill it meets if(repeat === 5). then it will "*change key*" 
(the console.log under it) and stop at that */
} 
console.log("Untill the sun comes up");