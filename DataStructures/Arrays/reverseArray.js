function reverseArray(nums){
    const numReverse = []
   for(i=nums.length-1; i>=0; i--){
       numReverse.push(nums[i])
   }
   return numReverse;
}

const nums = [1,2,3,4,5,6,7,8,9];
console.log(reverseArray(nums))