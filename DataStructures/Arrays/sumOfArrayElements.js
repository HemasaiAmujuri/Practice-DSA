function sumOfArrayElements(nums){
    let sum = 0;
     for(i = 0; i < nums.length; i++){
         sum += nums[i]
     }
     return sum;
}


const nums = [1,2,3,4,5,6,7,8,9,0]
console.log(sumOfArrayElements(nums));