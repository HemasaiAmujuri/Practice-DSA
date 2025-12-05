function harshadNumber(num){
    let sum = 0
    let original = num
    while( num > 0){
        let digit = num % 10;
        sum += digit
        num = Math.floor(num/10)
    }
     if( original % sum === 0){
        return 'It is Harshad Number'
     }else{
        return 'It is not a Harshad Number'
     }
}

let num = 27
console.log(harshadNumber(num));