function countDistinctElements(nums){
  const uniqueElements = [...new Set(nums)]
  return uniqueElements.length;
}


const nums = [10,20,10,20,10,30]

console.log(countDistinctElements(nums))