function twoSum(nums){
   for(let i =0; i< nums.length-1; i++){
      for(let j=i+1; j< nums.length; j++){
        if(nums[i] + nums[j] === 9){
                return [i,j];
        }
      }
   }
}



let nums = [2,7,11,15];
console.log(twoSum(nums));