function swappingOfTwoNumbers(a,b){

    let temp = a;
    a = b;
    b = temp
   return [a, b]; 
}

let a = 5;
let b = 10;
console.log(swappingOfTwoNumbers(a,b))