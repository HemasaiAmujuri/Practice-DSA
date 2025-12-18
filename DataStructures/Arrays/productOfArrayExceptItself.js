function productOfArrayExceptItself(nums){
    let value = 1;
    for(i = 0; i<= nums.length-1; i++){
        value *= nums[i]
    }

    console.log(value)

    for(j=0; j<=nums.length-1; j++){
        let element = nums[j];
        let productExceptItself = Math.round(value / element )
        nums[j] = productExceptItself;
    }
    return nums;

}


// const nums = [1,2,3,4,5,6,7,8,9];

const nums = [-1,1,0,-3,3]

console.log(productOfArrayExceptItself(nums));

[0,0,9,0,0]


