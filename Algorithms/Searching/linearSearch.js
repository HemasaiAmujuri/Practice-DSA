function linearSearch(nums, target){
   for(let i = 0; i < nums.length; i++){
      if(nums[i] === target){
        return i;
      }
   }
}

const nums = [1, 2, 3, 4, 5];
const target = 3;

console.log(linearSearch(nums, target));  