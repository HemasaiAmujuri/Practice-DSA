let a = 10;
let b = 5;

function hcfOfTwoNumbers(a, b){
    let hcf = 1;
    for(let i = 1; i <= a && i <= b; i++){
        if(a % i === 0 && b % i === 0) {
            hcf = i;
        }
    }
    return hcf;
}

const hcf = hcfOfTwoNumbers(a, b);
const lcm = (a * b) / hcf;

console.log(lcm, "lcm");
console.log(hcf, "hcf");
