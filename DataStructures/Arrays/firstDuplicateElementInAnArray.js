function firstDuplicateElement(nums){
    for(let i=0; i< nums.length; i++){
        var char = nums[i];
        for(let j=i+1; j< nums.length; j++){
             if(char == nums[j]){
                 return char;
             }
        }
    }
}


const nums =  [2,1,3,5,3,2];

console.log(firstDuplicateElement(nums));


//Time complexity : Object(n^2)