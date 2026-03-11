function MaximumNumberInArray(arr) {
    if (arr.length === 0) {
        return null; 
    }
    let max = arr[0];
    for( let i = 0; i < arr.length; i++) {
        if( arr[i] > max){
            max = arr[i];
    }
}
    return max;
}

const arr = [3, 5, 7, 2, 8];
console.log(MaximumNumberInArray(arr));


                 //method-2
const nums = [3, 7, 2, 10, 4];
const maxNum = Math.max(...nums);
console.log(maxNum); // 10


                //method-3
function findMax(arr) {
    const sortedArray = arr.sort((a, b) => b - a);
    return sortedArray[0];
}

const numbers = [3, 7, 2, 10, 4];
console.log(findMax(numbers)); // 10