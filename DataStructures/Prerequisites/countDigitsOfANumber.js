function countDigitsOfANumber(num){
    let count = 0;
    while(num > 0){
        let digit = num % 10;
        count += 1;
        num = Math.floor(num / 10);
    }
    return count;

}

let num = 123456
console.log(countDigitsOfANumber(num))