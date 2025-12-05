function powerOfNumber(base,exponent){
     let powerOfNumber = Math.pow(base,exponent)
     return powerOfNumber;
}

let base = 2;
let exponent = 5;

let value = powerOfNumber(base,exponent);
console.log(value);


// function powerOfNumber(base,exponent){
//     let value = 1;
      
//      for(let i=1; i <= exponent; i++){
//         value *= base
//      }
//      return value;
// }

// let base = 2;
// let exponent = 5;

// let value = powerOfNumber(base,exponent);
// console.log(value);