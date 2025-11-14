                     //for numbers


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


                 //for strings
let str = "madam"

let revStr = ""
 let n = str.length;

for(i=n-1; i >= 0; i--){
    revStr += str[i]
}

console.log(revStr)

if(revStr === str ){
    console.log(`${str} is a palindrone string`)
}else{
    console.log(`${str} is not a palindrone string`)
}