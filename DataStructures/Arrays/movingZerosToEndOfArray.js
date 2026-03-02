// function movingZeroesToEndOfArray(nums){
//     for(i = 0 ; i<= nums.length-1; i++){
//          if(nums[i] == 0){
//             nums.splice(i,1);
//             nums.push(0);
//             i--;
//          }
//     }
//     return nums;
// }


// const nums = [5, 0, 12, 7, 0, 3, 0, 9];

// console.log(movingZeroesToEndOfArray(nums))


function movingZeroesToEndOfArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
        }
    }
    return nums;
}

const nums = [5, 0, 12, 7, 0, 3, 0, 9];
console.log(movingZeroesToEndOfArray(nums)); // This must be here