function perfectNumber(num){
    if(num === 1){
        return `${num} is not a perfect number`
    }
    let sum = 1;
    for(i=2; i<num; i++){
        if(num % i === 0){
           sum += i;
        }
    }
         console.log(sum,"sum");
        if(sum === num){
            console.log(sum,"sum");
            return `${num} is a perfect number`
        }
        return num + " " +  'is not a perfect number'
    }

let num = 6
const result = perfectNumber(num)
console.log(result,"result")