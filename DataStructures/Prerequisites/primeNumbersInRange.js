let num1 = 10;
let num2 = 50;

for(i=num1; i<=num2; i++){
    let isPrime = true;
    for(j=2; j<i; j++){
        if(i % j == 0){
            isPrime = false;
        }
    }
    if(isPrime){
        console.log(`${i} is a prime number`)
    }
}

