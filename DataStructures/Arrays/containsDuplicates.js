function containDuplicates(nums){
   const uniqueElements = [...new Set(nums)];
   if(uniqueElements.length === nums.length){
       return false
   }
   return true;
}

const nums = [1,2,3,1]
console.log(containDuplicates(nums));



// function containDuplicates(nums){
//    for(i =0; i<nums.length-1; i++){
//       for(j=i+1; j<nums.length; j++){
//         if(nums[i] == nums[j]){
//             return true
//         }
//       }
//    }
//    return false
// }

// const nums = [1,2,3,1]
// console.log(containDuplicates(nums));