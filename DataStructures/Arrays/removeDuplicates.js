// function removeDuplicates(nums){
//   const uniqueElements = [];
//   for(i=0; i<=nums.length-1; i++){
//     if(!uniqueElements.includes(nums[i])){
//         console.log(nums[i], "values");
//         uniqueElements.push(nums[i])
//     }
//   }
//    return uniqueElements;
// }

// const nums = [1,1,2,3,4,4,4,5,6,6,6,6,5,8,9,0,5,4,3,3,5,7,5]
// console.log(removeDuplicates(nums));



function removeDuplicates(nums){
    const uniqueElements = [...new Set(nums)];
    return uniqueElements
}
const nums = [1,1,2,3,4,4,4,5,6,6,6,6,5,8,9,0,5,4,3,3,5,7,5]
console.log(removeDuplicates(nums));