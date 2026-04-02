// function findDuplicates(nums) {     // without builtin method
//     let duplicates = [];

//     for (let i = 0; i < nums.length; i++) {
//         let count = 0;

//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 count++;
//             }
//         }

//         // add only once
//         if (count > 1) {
//             let alreadyAdded = false;

//             for (let k = 0; k < duplicates.length; k++) {
//                 if (duplicates[k] === nums[i]) {
//                     alreadyAdded = true;
//                     break;
//                 }
//             }

//             if (!alreadyAdded) {
//                 duplicates.push(nums[i]);
//             }
//         }
//     }

//     return duplicates;
// }

// console.log(findDuplicates([1,2,3,4,4,5,5,6,7,8,4]));



function findDuplicates(nums){             //with includes
    
    
    let duplicates = [];
    
    for( i = 0; i < nums.length-1; i++){
        for(j =i + 1; j < nums.length; j++){
            if(nums[i] == nums[j]){
                if (!duplicates.includes(nums[i])) {
                    duplicates.push(nums[i]);
                }
        }
    }
    
}

return duplicates;

}


let nums = [1,2,3,4,4,5,5,6,7,8,4]


console.log(findDuplicates(nums))



// function findDuplicates(nums) {
//     let seen = new Set();
//     let duplicates = new Set();

//     for (let i = 0; i < nums.length; i++) {
//         if (seen.has(nums[i])) {
//             duplicates.add(nums[i]);
//         } else {
//             seen.add(nums[i]);
//         }
//     }

//     return Array.from(duplicates);
// }

// console.log(findDuplicates([1,2,3,4,4,5,5,6,7,8,4]));

