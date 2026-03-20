function countPositiveNegativeAndZeros(arr){
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    for( i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positiveCount += 1;
        }else if(arr[i] < 0){
            negativeCount += 1;
        }else{
            zeroCount += 1
        }
    }

    return { positiveCount, negativeCount, zeroCount }
   
}


const arr = [4, -1, 0, 7, -5, 0, 3, -2]
console.log(countPositiveNegativeAndZeros(arr))