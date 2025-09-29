const num1 = 10;
const num2 = 20;
const num3 = 30;

if (num1 === num2 && num2 === num3) {
    console.log("Three numbers are equal");
} else if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is the greatest of the three`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is the greatest of the three`);
} else {
    console.log(`${num3} is the greatest of the three`);
}
