const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your number: ", function(input) {
  const num = Number(input);


if(num === 0) {
   console.log("It is a Zero");

} else if (num > 0) {

  console.log("It is a positive number");

} else if (num < 0) {
   console.log("It is a Negative number");

} else {
   console.log("Invalid input");

}
});
