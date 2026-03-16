function sequenceCounter(str){
    let count = 1;
    for( i = 0; i < str.length; i++){
        if(str[i] == str[i + 1]){
            count++
        }else{
            console.log(`${str[i]} - ${count}`);
            count = 1;
        }
    }

}


const str = "aabbca"
sequenceCounter(str)