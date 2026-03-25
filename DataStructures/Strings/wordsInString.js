const str = "My name is Sai, Iam looking for Full Stack Developer role in Software"


function wordsCount(str){
   const words = str.split(" ");
   console.log(words, "words")
   return words.length;
}


console.log(wordsCount(str));