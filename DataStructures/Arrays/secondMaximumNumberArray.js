                             //Method-1
function secondMaximumNumber(nums){
   let max = nums[0]
   let secondMax = -Infinity;        //-Infinity < any number
   for( i = 1; i < nums.length; i++){
      if(nums[i] > max){
        secondMax = max
          max = nums[i]
      }else if( nums[i] > secondMax){
        secondMax = nums[i]
      }         
   }
   console.log(max);
   console.log(secondMax);
   return secondMax;
}

// const nums = [3, 7, 9, 10, 8];
const nums = [-5, -2, -9]
console.log(secondMaximumNumber(nums));



             //Method-2
//    function secondMaximumNumber(nums){
//       const sortedArray = nums.sort((a, b) => a - b);
//       console.log(sortedArray);
//       const lengthOfSortedArray = sortedArray.length
//       console.log(sortedArray[lengthOfSortedArray-2]);
//       return sortedArray[lengthOfSortedArray-2];
// }

// const nums = [3, 7, 9, 10, 8];
// // const nums = [-5, -2, -9]
// console.log(secondMaximumNumber(nums));