//An Armstrong number (also called a narcissistic number) is a number that is equal to the sum of its own digits, each raised to the power of the number of digits

function armStrongNumber(num){
     let temp = num
     let count = 0
     while(temp > 0){
        count++;
        temp = Math.floor(temp/10)
   }

    let result = 0;
    temp = num;
    while(temp > 0){
        let digit = temp % 10;
        let value = Math.pow(digit,count);
        result += value
        temp = Math.floor(temp/10);
    }
     if( result == num){
        return true
     }else{
        return false
     }
}

const num = 153;

console.log(armStrongNumber(num));

