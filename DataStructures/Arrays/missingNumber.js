                      //Method-1
// function missingNumber(nums){
//    const length = nums.length;
//    for(let i = 0; i <= length; i++){
//     if(!nums.includes(i)){
//         return i;
//     }
// }
// }
// const nums = [9,6,4,2,3,5,7,0,1];

// console.log(missingNumber(nums));

                       //Method-2
function missingNumber(nums) {
    const length = nums.length;
    const expectedSum = (length * (length + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

const nums = [9,6,4,2,3,5,7,0,1];

console.log(missingNumber(nums));