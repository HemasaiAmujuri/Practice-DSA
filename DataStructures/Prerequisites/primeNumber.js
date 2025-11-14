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

let num = 11;
let count = 0;


for(i =2; i< num; i++){
    if(num % i === 0){
        count++;
    }
}


if(count == 0){
    console.log(`${num} is a prime number`)
}else{
    console.log(`${num} is not a prime number`)
}
