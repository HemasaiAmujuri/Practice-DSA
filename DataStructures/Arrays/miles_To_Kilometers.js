// You are given an array of distances in miles. Your task is to:

// Convert each distance from miles to kilometers (1 mile = 1.609 km).
// Store the converted distances in a variable called totalDistanceInKilometers.
// Return the sum of all distances in kilometers.


function totalDistance(nums){
     const convertedNums = nums.map((value) => value * 1.609 )
     
     const totalDistanceInKilometers = convertedNums.reduce((acc,val) => acc + val, 0)
     
     return totalDistanceInKilometers;
}


const nums = [1,2,3,4,5]

console.log(totalDistance(nums))