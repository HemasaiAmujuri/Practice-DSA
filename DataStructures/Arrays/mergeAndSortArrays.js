function mergeAndSortedArrays(num1,num2){

    let num3 = [...num1, ...num2]

    num3.sort((a,b) => a - b)
    return num3
}


let num1 = [1,3,5]
let num2 = [2,4,6]


console.log(mergeAndSortedArrays(num1,num2));


