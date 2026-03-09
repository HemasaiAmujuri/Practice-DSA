function peakElement(nums){
    for(i = 1; i< nums.length-1; i++){
            if(nums[i-1] != nums[i+1]){
            if(nums[i-1] < nums[i] && nums[i] > nums[i+1]){
               return true
            }
    }
    } 
       return false;
}


const nums = [10, 20, 15, 2, 23, 90, 80]
console.log(peakElement(nums));