//Calculate squares of each element in array and arrange squares in ascending order
function sortArrayAfterSquare(arr){
     const squaredArray = arr.map((a) => a*a);  
     console.log(squaredArray, "squaredArray");

     const sortedSquaredArray = squaredArray.sort((a,b) => a - b);

     return sortedSquaredArray;
}


const arr = [0, -3, 5, -1, 2, 0, -7, 8, 0, 4];

console.log(sortArrayAfterSquare(arr));