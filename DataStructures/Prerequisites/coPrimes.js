let a = 8;
let b = 15;

let hcf = 1;

for(let i =1; i<=a && i<=b; i++){
    if(a % i === 0 && b%i === 0){
        hcf = i;
    }
}

if(hcf === 1){
    console.log(`${a} and ${b} are co-primes`)
}else{
    console.log(`${a} and ${b} are not co-primes`);
}