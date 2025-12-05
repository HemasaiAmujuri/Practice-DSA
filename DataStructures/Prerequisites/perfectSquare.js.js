function perfectSquare(num){
    for(i=1; i*i <= num; i++){
        if(i*i === num){
            return `${num} is a perfect square`;
        }
    }
    return `${num} is not a perfect square`
}

let num = 256
console.log(perfectSquare(num));


// function perfectSquare(num){
//     let value = Math.sqrt(num);
//     console.log(value,"value");
//     if(Number.isInteger(value)){
//         return `${num} is a perfect square`;
//     }else{
//         return `${num} is not a perfect square`;
//     }
// }

// let num = 77
// console.log(perfectSquare(num));