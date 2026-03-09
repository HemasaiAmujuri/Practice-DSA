                //METHOD-1

// let num = 5;                                      
// let count = 0;

// for(i = 1; i<=num; i++){
//     if(num % i === 0){
//         count++;
//     }
// }

// if(count == 2){
//     console.log(`${num} is a prime number`)
// }else{
//     console.log(`${num} is not a prime number`)
// }



                 //Method-2(efficient from method1)

// let num = 11;
// let count = 0;


// for(i =2; i< num; i++){
//     if(num % i === 0){
//         count++;
//     }
// }


// if(count == 0){
//     console.log(`${num} is a prime number`)
// }else{
//     console.log(`${num} is not a prime number`)
// }


                                       //Method-3(efficient from method2)


function isPrime(num){
  if( num <= 1){
    return false
  }

  for(i = 2; i * i <= num; i++){
    if (num % i === 0){
        return false;
    }
    return true;
  }
}

const num = 34523;
// const num = 34519;

console.log(isPrime(num));

//NOTE:Every factor larger than √n has a matching factor smaller than √n
//EXPLAMNATION: “I check divisibility only up to the square root of the number because any factor larger than √n would have a corresponding smaller factor.
// If no divisors are found up to √n, the number must be prime.
// This reduces the time complexity from O(n) to O(√n), which is much more efficient for large numbers.
