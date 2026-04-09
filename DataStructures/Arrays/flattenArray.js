function flattenArray(arr){              //using built in method flat
    const flattenArray = arr.flat(Infinity);   //Infinity tells JavaScript: “Flatten the array completely, no matter how deeply nested it is.
    return flattenArray;
}

const arr = [1, [2, [3, 4]], 5]
console.log(flattenArray(arr));



function flattenArrayWithoutBuiltInMethod(arr1){
    let result = []
    for(let item of arr1){
        if(Array.isArray(item)){
         result = result.concat(flattenArrayWithoutBuiltInMethod(item));
        }else{
              result.push(item);
        }
      
    }
    return result;
}


const arr1 = [1, [2, [3, 4]], 5]

console.log(flattenArrayWithoutBuiltInMethod(arr1))


//Explanation : 
// Input:
// [1, [2, [3, 4]], 5]
// 🟢 Step 1: First loop
// item = 1 → not array → push
// 👉 result = [1]
// 🟡 Step 2: Next item [2, [3, 4]]
// It is an array
// 👉 Call function again (recursion)
// 🔁 Recursive call

// Now working on:

// [2, [3, 4]]
// 2 → push → [2]
// [3,4] → recursive call again
// 🔁 Next recursive call
// [3,4]
// 3 → push
// 4 → push
// 👉 returns [3,4]
// 🔙 Back to previous call
// [2].concat([3,4]) → [2,3,4]
// 🔙 Back to main function
// [1].concat([2,3,4]) → [1,2,3,4]
// 🟢 Step 3: Last item 5

// 👉 push → [1,2,3,4,5]

// ✅ Final Output
// [1,2,3,4,5]


//concat()
// Merges arrays
// Returns a new array
// Does NOT modify original array


// push()
// Adds element(s) to existing array
// Modifies original array