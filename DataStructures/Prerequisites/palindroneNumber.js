let num  = 14410;
let rev = 0;
let value = num;

while(num > 0){
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
}

console.log(rev)

if(value == rev){
    console.log(`${value} is a palindrone number`)
}else {
    console.log(`${value} is not a palindrone number`)
}