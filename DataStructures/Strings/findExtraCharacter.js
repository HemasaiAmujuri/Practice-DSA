function findExtraCharacter(str, str1){
    const freqOccuranceOfStr = {};
    const freqOccuranceOfStr1 = {};


    for( i = 0; i< str.length; i++){
        let char = str[i]
        if(freqOccuranceOfStr[char]){
            freqOccuranceOfStr[char] += 1
        }else{
            freqOccuranceOfStr[char] = 1
        }
    }


        for( i = 0; i< str1.length; i++){
        let char = str1[i]
        if(freqOccuranceOfStr1[char]){
            freqOccuranceOfStr1[char] += 1
        }else{
            freqOccuranceOfStr1[char] = 1
        }
    }

      if(str.length > str1.length){
          for(key in freqOccuranceOfStr){
             if(freqOccuranceOfStr[key] != freqOccuranceOfStr1[key]){
                return key
             }
          }
      }else{
           for(key in freqOccuranceOfStr1){
             if(freqOccuranceOfStr1[key] != freqOccuranceOfStr[key]){
                return key
             }
          }
      }

      return "No extra character between strings"
}


const str = "abcde";
const str1 = "abcde"

console.log(findExtraCharacter(str, str1))