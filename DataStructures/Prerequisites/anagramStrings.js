function anagramStrings(str1, str2){
    
    const characterOccuranceOfStr1 = {}
    const characterOccuranceOfStr2 = {}

    for( i = 0; i< str1.length; i++){
        let char = str1[i]

        if(characterOccuranceOfStr1[char]){
            characterOccuranceOfStr1[char] += 1
        }else{
            characterOccuranceOfStr1[char] = 1
        }
    }


    for( i = 0; i < str2.length; i++){
        let character = str2[i]

        if(characterOccuranceOfStr2[character]){
            characterOccuranceOfStr2[character] += 1
        }else{
            characterOccuranceOfStr2[character] = 1;
        }
    }


    console.log(characterOccuranceOfStr1, "1");
    console.log(characterOccuranceOfStr2, "2");


     for(key in characterOccuranceOfStr1){
       if(characterOccuranceOfStr1[key] !== characterOccuranceOfStr2[key]){
         return "Not a anagram strings"
       }
   }

   for( let key in characterOccuranceOfStr2){
      if(!(key in characterOccuranceOfStr1)){
        return "Not a Anagram Strings"
      }
   }

   return "Anagram Strings"
} 

  


const str1 = "listen"
const str2 = "silent"

//rat , cat
//anagram, nagaram
//save, vase

console.log(anagramStrings(str1, str2));