let num1 = 10;
let num2 = 5;
let hcf = 1;
for(i = 0; i<=num1 && i<=num2; i++){
    if(num1%i === 0 && num2 %i === 0){
        hcf = i
    }
}


console.log(hcf)