let year = 300;

if( year % 4 == 0 && year % 100 != 0){
    console.log(`${year} is a Leap year`)
}else if(year % 400 == 0){
    console.log(`${year} is a Leap year`)
}
console.log(`${year} is not a leap year`)