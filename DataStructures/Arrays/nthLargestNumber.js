function nthLargest(nums, n){
    const removeDuplicates = [ ...new Set(nums)]
    const sortedArray = removeDuplicates.sort((a,b) => a-b)
    return sortedArray[n-1];
}


const nums = [10, 5, 100, 30, 100, 20];
const n = 3

const result = nthLargest(nums,n)
console.log(result);