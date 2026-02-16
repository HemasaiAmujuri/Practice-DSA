function evenOrOdd(num){
    if( (num & 1) == 0){
        return "Even"
    }else{
        return "Odd"
    }
}

const num = 10;


console.log(evenOrOdd(num));