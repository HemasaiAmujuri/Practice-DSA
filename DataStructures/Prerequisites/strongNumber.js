//A Strong Number is a number such that the sum of the factorials of its digits is equal to the number itself.
function strongNumber(num){

    let original = num;
    let sum = 0;
    while(num > 0){
        let temp = 1;
        let  digit = num % 10;
        for(i=1; i<=digit;i++){
            temp *= i
        }
        sum+=temp
        num = Math.floor(num/10)
    }
    if(original === sum){
        return 'Its a Strong number'
    }else{
        return 'its not a Strong number'
    }
   
}


let num = 145;
console.log(strongNumber(num))