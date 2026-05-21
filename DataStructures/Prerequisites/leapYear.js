let year = 300;

if( year % 4 == 0 && year % 100 != 0){
    console.log(`${year} is a Leap year`)
}else if(year % 400 == 0){
    console.log(`${year} is a Leap year`)
}
console.log(`${year} is not a leap year`)


// A year is a leap year if:
// 1. divisible by 4
// AND
// 2. not divisible by 100
// OR
// 3. divisible by 400