function frequenceCounter(str){
     const characterFrequency = {};

     for( i = 0 ; i < str.length; i++){
         if(characterFrequency[str[i]]){
            characterFrequency[str[i]] += 1
         } else{
            characterFrequency[str[i]] = 1
         }
     }
     return characterFrequency;
}


const str = "aabbca";
console.log(frequenceCounter(str));